# Lesson 6 - Refactoring From Vue 2 to Vue 3 - Validators (Script)

> In our last video, we left off with this syntax error and fixing that reveals that we still have a leftover reference to the Options API, referencing our old data object. Let's fix that. 

## Validators & Putting It All Together
> Ok, almost done. Let's setup our first validator. Let's create a `validators.js` file which is where we will track all of our validations. Let's take the logic in our `validName` method and move it to this validator file. 

```
const nameIsValid = () => {
  console.log("hello");
  return (input) => (!input ? `The name field is invalid` : null);
};
```

> Now let's return to our `InputName` component and hook it up to our validators to bring it all home. 

```
<script>
import useInputValidator from "@/features/useInputValidator.js";
import { nameIsValid } from "@/validators";


export default {
  name: "InputName",
  setup (props, { emit }) {
    // props.value is undefined to start
    // useInputValidator takes three inputs, startVal, an array of validators
    // and an onValidate function 
    const { input, errors } = useInputValidator(
      props.value, [nameIsValid(input)],
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
}
</script>
```

>Fix errors
```
<template>
  <label class="label" for="name">
    Name:
    <input type="text" name="name" class="input-field" v-model="input" />
        <ul v-for="(error, i) in errors" :key="i">
            <li v-if="error">{{ error }}</li>
        </ul>
</label>
</template>
```

> If it all went according to plan we should now have an `InputName` component that is being validated using Vue 3. Nice! 
> Let's review. In our last lesson, we were able to validate if our form contained a name