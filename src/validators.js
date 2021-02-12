const nameIsValid = () => {
    console.log('hello')
  return input => !input 
  ? `The name field is invalid` 
  : null;
};

const ageIsValid = () => {
  return (input) =>
    typeof parseInt(input) === "number"
      ? null
      : "The age field is not a number";
}

const ageMin = () => {
  return (input) =>
    parseInt(input) < 120 ? null : "The age field must be less than 120";
};

const ageMax = () => {
  return (input) =>
    parseInt(input) > 12 ? null : "The age field must be greater than 12";
};

export { nameIsValid, ageIsValid, ageMin, ageMax};