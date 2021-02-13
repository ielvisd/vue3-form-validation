<template>
  <div class="form-group">
    <label class="label" for="age">
      Age:
      <input type="text" id="age" class="input-field" v-model="input" />
        <ul v-for="(error, i) in errors" :key="i">
            <li class="error-message" v-if="error">{{ error }}</li>
        </ul>
    </label>
  </div>
</template>

<script>
import useInputValidator from "@/features/useInputValidator.js";
import { ageIsValid } from "@/validators"

    export default {
        name: 'InputName',
        setup(props, { emit }) {
            // props.value is undefined
            const { input, errors} = 
                // useInputValidator takes three inputs, startVal, an array of validators, and an onValidate function
                useInputValidator(props.value, [ageIsValid(input)], 
                value => {
                    emit('validationResponse', value, 'name', errors.value)
                })
            

            return {
                input, 
                errors
            }
        }
    }
</script>
