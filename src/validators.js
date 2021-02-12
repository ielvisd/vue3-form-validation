const nameIsValid = () => {
    console.log('hello')
  return input => !input 
  ? `The name field is invalid` 
  : null;
};

const ageIsValid = () => {
  return (input) =>
    typeof parseInt(input) === "number" && input > 12 && input < 120
      ? null
      : "The age field is invalid";
}

export { nameIsValid, ageIsValid };