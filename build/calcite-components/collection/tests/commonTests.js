import { newE2EPage } from "@stencil/core/testing";
import { toHaveNoViolations } from "jest-axe";
import { config } from "../../stencil.config";
expect.extend(toHaveNoViolations);
export const HYDRATED_ATTR = config.hydratedFlag.name;
function isHTML(tagOrHTML) {
    return tagOrHTML.trim().startsWith("<");
}
function getTag(tagOrHTML) {
    if (isHTML(tagOrHTML)) {
        const regex = /[>\s]/;
        const trimmedTag = tagOrHTML.trim();
        return trimmedTag.substring(1, trimmedTag.search(regex));
    }
    return tagOrHTML;
}
async function simplePageSetup(componentTagOrHTML) {
    const componentTag = getTag(componentTagOrHTML);
    const page = await newE2EPage({
        html: isHTML(componentTagOrHTML) ? componentTagOrHTML : `<${componentTag}><${componentTag}/>`,
        failOnConsoleError: true
    });
    await page.waitForChanges();
    return page;
}
export async function accessible(componentTagOrHTML, page) {
    if (!page) {
        page = await simplePageSetup(componentTagOrHTML);
    }
    await page.addScriptTag({ path: require.resolve("axe-core") });
    await page.waitForFunction(() => window.axe);
    expect(await page.evaluate(async (componentTag) => window.axe.run(componentTag), getTag(componentTagOrHTML))).toHaveNoViolations();
}
export async function renders(componentTagOrHTML, visible = true) {
    const page = await simplePageSetup(componentTagOrHTML);
    const element = await page.find(getTag(componentTagOrHTML));
    expect(element).toHaveAttribute(HYDRATED_ATTR);
    expect(await element.isVisible()).toBe(visible);
}
export async function reflects(componentTagOrHTML, propsToTest) {
    const page = await simplePageSetup(componentTagOrHTML);
    const componentTag = getTag(componentTagOrHTML);
    const element = await page.find(componentTag);
    for (const propAndValue of propsToTest) {
        const { propertyName, value } = propAndValue;
        const attrName = propToAttr(propertyName);
        const componentAttributeSelector = `${componentTag}[${attrName}]`;
        element.setProperty(propertyName, value);
        await page.waitForChanges();
        expect(await page.find(componentAttributeSelector)).toBeTruthy();
        if (typeof value === "boolean") {
            const getExpectedValue = (propValue) => (propValue ? "" : null);
            const negated = !value;
            element.setProperty(propertyName, negated);
            await page.waitForChanges();
            expect(element.getAttribute(attrName)).toBe(getExpectedValue(negated));
            element.setProperty(propertyName, value);
            await page.waitForChanges();
            expect(element.getAttribute(attrName)).toBe(getExpectedValue(value));
        }
    }
}
function propToAttr(name) {
    return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
export async function defaults(componentTagOrHTML, propsToTest) {
    const page = await simplePageSetup(componentTagOrHTML);
    const element = await page.find(getTag(componentTagOrHTML));
    for (const propAndValue of propsToTest) {
        const { propertyName, defaultValue } = propAndValue;
        const prop = await element.getProperty(propertyName);
        expect(prop).toEqual(defaultValue);
    }
}
export async function hidden(componentTagOrHTML) {
    const page = await simplePageSetup(componentTagOrHTML);
    const element = await page.find(getTag(componentTagOrHTML));
    element.setAttribute("hidden", "");
    await page.waitForChanges();
    expect(await element.isVisible()).toBe(false);
}
export async function focusable(componentTagOrHTML, options) {
    const page = await simplePageSetup(componentTagOrHTML);
    const tag = getTag(componentTagOrHTML);
    const element = await page.find(tag);
    const focusTargetSelector = (options === null || options === void 0 ? void 0 : options.focusTargetSelector) || tag;
    await element.callMethod("setFocus", options === null || options === void 0 ? void 0 : options.focusId); // assumes element is CalciteFocusableElement
    if (options === null || options === void 0 ? void 0 : options.shadowFocusTargetSelector) {
        expect(await page.$eval(tag, (element, selector) => element.shadowRoot.activeElement.matches(selector), options === null || options === void 0 ? void 0 : options.shadowFocusTargetSelector)).toBe(true);
    }
    expect(await page.evaluate((selector) => document.activeElement.matches(selector), focusTargetSelector)).toBe(true);
}
