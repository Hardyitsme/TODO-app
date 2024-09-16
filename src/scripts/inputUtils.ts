export function getInputValue() {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const inputValue = inputField?.value.trim();
  return inputValue;
}

export function clearInput() {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  inputField.value = "";
}
