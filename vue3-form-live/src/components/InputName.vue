<template>
  <div class="form-group">
    <label class="label" for="name">
      Name:
      <input type="text" id="name" class="input-field" v-model="form.name" />
      <p v-if="!nameIsValid" class="error-message">
        The name field is required
      </p>
    </label>
  </div>
</template>

<script>
    export default {
        name: 'InputName',
        setup(props, { emit }) {
            // props.value is undefined
            const { input, errors} = 
                // useInputValidator takes three inputs, startVal, an array of validators, and an onValidate function
                useInputValidator(props.value, [], 
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
