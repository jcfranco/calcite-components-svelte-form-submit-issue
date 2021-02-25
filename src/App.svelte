<script>
  const onSubmitHandler = (evt) => {
    console.log("SUBMIT!");
    alert("SUBMIT!");
  };
</script>

Expected: When you submit the form below it should call the form submit handler
JavaScript (show an alert).
<br /><br /><br />

<form
  on:submit|preventDefault={onSubmitHandler}
  style="border: 1px solid gray; padding: 10px;"
>
  <calcite-label status="idle" scale="m">
    First Name
    <calcite-input
      name="firstname"
      type="text"
      status="idle"
      alignment="start"
    />
  </calcite-label>

  this calcite submit submits the form traditionally instead of calling our
  onSubmitHandler created using Svelte:
  <calcite-button
    appearance="solid"
    color="blue"
    scale="m"
    dir="ltr"
    alignment="center"
    width="auto"
    type="submit"
  >
    Submit
  </calcite-button>

  <br /><br />
  this non-calcite one does work:
  <button type="submit" value="Submit">Submit</button>
</form>

<style>
</style>
