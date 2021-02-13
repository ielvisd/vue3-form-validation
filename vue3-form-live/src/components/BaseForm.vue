<template>
  <div class="form-container">
    <p class="form-title">{{ title }}</p>
    <img class="w-24 mx-auto" alt="Vue School logo" src="../assets/logo.png" />
    <section class="mt-8">

      <form
        class="flex flex-col"
        @submit.prevent="submitForm"
        autocomplete="off"
      >
        <InputName @validationResponse="checkIfValidField"/>
        <InputAge @validationResponse="checkIfValidField"/>

        <button :disabled="!isFormValid"  :class="'form-button' + ' ' + buttonClass" type="submit">Submit</button>
      </form>

    </section>
  </div>
</template>

<script>
import InputName from '@/components/InputName'
import InputAge from '@/components/InputAge'

import { ref, computed } from 'vue'

  export default {
    name: "BaseForm",
    setup() {
      const name = ref('')
      const age = ref('')
      let validName = ref(false)
      let validAge = ref(false)

    const buttonClass = computed(() => {
      if (isFormValid.value) {
        return "";
      } else {
        return "opacity-50";
      }
    });
      

    const isFormValid = computed(() => {
      return validName.value === true && validAge.value === true;
    });

      function submitForm() {
      if (isFormValid.value) {
        console.log("🗒️ Form Submitted");
      } else {
        console.log("❌ Invalid Form");
      }
      }

    function checkIfValidField(value, field, errors) {
      console.log(value, field, errors)
      switch (field) {
        case "name":
          if (errors[0] === null) {
            validName.value = true;
          } else {
            validName.value = false;
          }
          break;
        case "age":
          if (errors[0] === null) {
            validAge.value = true;
          } else {
            validAge.value = false;
          }
          break;
      }
    }

      return {
        name,
        age,
        buttonClass,
        submitForm, 
        checkIfValidField, 
        isFormValid
      }
    },
    props: {
      title: String
    },
    components: {
      InputName,
      InputAge
    },
  };
</script>

<style scoped>
  .form-container {
    @apply bg-purple-200 max-w-lg mx-auto p-8 md:p-12 my-6 rounded-lg shadow-2xl;
  }
  .form-title {
    @apply font-bold text-xl md:text-2xl mb-4 text-center;
  }
  .form-group {
    @apply mb-6 pt-3 rounded bg-gray-200;
  }
  .form-button {
    @apply bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200;
  }
  :deep .label {
    @apply block text-gray-700 text-sm font-bold mb-2 ml-3;
  }
  :deep .input-field {
    @apply bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3;
  }
  :deep .error-message {
    @apply mt-2 text-red-600
  }



</style>
