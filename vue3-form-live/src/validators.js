const nameIsValid = () => {
    return (input) => (!input ? `The name field is invalid` : null)
} 

export { nameIsValid }