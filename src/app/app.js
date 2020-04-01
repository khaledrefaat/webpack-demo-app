import { parsedInputs } from '../utilis/parseInputs';
import { inputsAreValid } from '../utilis/inputsAreValid';


export const run = (alertService, componentService) => {
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