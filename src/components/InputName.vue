<template>
  <label class="label" for="name">
    Name:
    <input type="text" name="name" class="input-field" v-model="input" />
        <ul v-for="(error, i) in errors" :key="i">
            <li v-if="error">{{ error }}</li>
        </ul>
</label>
</template>

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
