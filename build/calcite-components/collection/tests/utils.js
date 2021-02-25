import dedent from "dedent";
/* based on https://github.com/puppeteer/puppeteer/issues/1366#issuecomment-615887204 */
export async function dragAndDrop(page, dragStartSelector, dragEndSelector) {
    async function getBounds(selector) {
        const elementHandle = typeof selector === "string"
            ? await page.waitForSelector(selector)
            : await page.evaluateHandle(({ element, shadow }) => {
                const target = document.querySelector(element);
                return shadow ? target.shadowRoot.querySelector(shadow) : target;
            }, selector);
        return elementHandle.asElement().boundingBox();
    }
    async function createEventInitializer(selector) {
        const { vertical: verticalPos } = typeof selector === "string" || !selector.pointerPosition ? { vertical: "center" } : selector.pointerPosition;
        const { height, width, x, y } = await getBounds(selector);
        const verticalOffset = verticalPos === "top" ? 0 : verticalPos === "bottom" ? height : height / 2;
        const eventX = x + width / 2;
        const eventY = y + verticalOffset;
        return {
            bubbles: true,
            cancelable: true,
            composed: true,
            screenX: eventX,
            screenY: eventY,
            clientX: eventX,
            clientY: eventY
        };
    }
    async function browserContextFunction(dragStartSelector, dragEndSelector, dragStartInitializer, dragEndInitializer) {
        function getElement(selector) {
            if (typeof selector === "string") {
                return document.querySelector(selector);
            }
            const element = document.querySelector(selector.element);
            return selector.shadow ? element.shadowRoot.querySelector(selector.shadow) : element;
        }
        const dragStart = getElement(dragStartSelector);
        let dragEnd = getElement(dragEndSelector);
        // if has child, put at the end.
        dragEnd = dragEnd.lastElementChild || dragEnd;
        dragStart.dispatchEvent(new PointerEvent("pointerdown", dragStartInitializer));
        dragStart.dispatchEvent(new DragEvent("dragstart", dragStartInitializer));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        dragEnd.dispatchEvent(new MouseEvent("dragenter", dragEndInitializer));
        dragStart.dispatchEvent(new DragEvent("dragend", dragEndInitializer));
    }
    return page.evaluate(browserContextFunction, dragStartSelector, dragEndSelector, await createEventInitializer(dragStartSelector), await createEventInitializer(dragEndSelector));
}
export function html(strings, ...placeholders) {
    return dedent(strings, ...placeholders);
}
