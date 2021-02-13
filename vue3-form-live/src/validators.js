const nameIsValid = () => {
    return (input) => (!input ? `The name field is invalid` : null)
} 

const ageIsValid = () => {
  return (input) =>
    (typeof parseInt(input) === "number" && parseInt(input) > 12 && parseInt(input) < 120)
      ? null
      : "The age field is invalid";}; 

export { nameIsValid, ageIsValid };