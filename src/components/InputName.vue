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

  emits: ['input', 'validationResponse'],

  setup (props, { emit }) {
    const { input, errors } = useInputValidator(
      props.value, [nameIsValid(input)],
      value => {
        emit("input", value)
        emit("validationResponse", errors._rawValue);

      },
    );


    return {
      input,
      errors
    }
  }
}
</script>
