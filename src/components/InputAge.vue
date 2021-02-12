<template>
  <label class="label" for="age">
    Age:
    <input type="number" name="age" class="input-field" v-model="input" />
        <ul v-for="(error, i) in errors" :key="i">
            <li v-if="error">{{ error }}</li>
        </ul>
</label>
</template>

<script>
import useInputValidator from "@/features/useInputValidator.js";
import { ageIsValid } from "@/validators";


export default {
  name: "InputName",

  emits: ['input', 'validationResponse'],

  setup (props, { emit }) {
    const { input, errors } = useInputValidator(
      props.value, [ageIsValid(input)],
      value => {
        emit("input", value)
        emit("ageValidationResponse", errors._rawValue);
      },
    );


    return {
      input,
      errors
    }
  }
}
</script>
