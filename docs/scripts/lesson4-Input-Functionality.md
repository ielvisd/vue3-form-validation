# Lesson 4 - Refactoring From Vue 2 to Vue 3 - Input Functionality (Script)

## Input Functionality 
> Let's create a setup function similar to what we did with the parent BaseForm. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>In this setup function we are going to pass props as well as the destructured context object to get our `emit` method that we will need to alert the parent of any changes. 

```
  setup (props, { emit }) {
    // props.value is undefined to start
  }
```

> We will see how these will be used soon but for now let's declare a state variable `input` that will be bound to the input HTML element we declared in the template as well as a state variable `errors` which will hold any erros we get from our validation. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

```
  setup (props, { emit }) {
    // props.value is undefined to start
    const { input, errors } = ...

    return {
      input,
      errors
    }
  }
```

> The value of this `input` variable will be something we'll return from a to-be-defined composition function `useInputValidator`. This function will handle all the common validation logic in our form.

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

```
import useInputValidator from "@/features/useInputValidator.js";

  setup (props, { emit }) {
    // props.value is undefined to start
    // useInputValidator takes three inputs, startVal, an array of validators
    // and an onValidate function 
    const { input, errors } = useInputValidator(
      props.value, [],
      value => {
        // Emit 
        emit("validationResponse", value, 'name', errors.value);
      },
    );


    return {
      input,
      errors
    }
  }
```

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> We'll pass in the `value` prop to this method (currently undefined), this will be our starting value, and the second argument will an array of validator functions  that we will soon write and the third will be a callback function that returns the validated input value. Let's use this callback to emit the input and any errors as an event. 

