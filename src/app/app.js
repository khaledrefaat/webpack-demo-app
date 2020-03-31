const alertService = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
  alertService.hideErrors();


  componentService.onClick(() => {

    hideErrors();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      resultDiv.innerText = numA + numB;
    } else {
      resultDiv.innerText = "";
      handleAdditionError(inputs, parsedInputs);
    }
  });
}
run(alertService, componentService);