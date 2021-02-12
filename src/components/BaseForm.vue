<template>
  <div class="form-container">
    <p class="form-title">{{ title }}</p>
    <img class="w-24 mx-auto" alt="Vue School logo" src="../assets/logo.png" />
    <section class="mt-8">
      <form
        novalidate
        class="flex flex-col"
        @submit.prevent="submitForm"
        autocomplete="off"
        :disabled="isFormValid"
      >
        <div class="form-group">
          <InputName @validationResponse="checkIfFormValid" v-model="name" />
        </div>

        <button :class="'form-button' + ' ' + buttonClass" type="submit">
          Submit
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import InputName from "@/components/InputName";

export default {
  name: "BaseForm",
  setup() {
    const name = ref("");
    const email = ref("");
    let validForm = ref(false)

    const isFormValid = computed(() => {
          return validForm.value
    });

    const buttonClass = computed(() => {
      if (isFormValid.value) {
        return "";
      } else { 
        return 'opacity-50'
      }
    })   

    function checkIfFormValid(errors) {
      // Check if there are any errors
      if (errors[0] && errors[0].length) {
        console.log("yes");
        validForm.value = false;
        console.log(validForm.value )

      } else {
        validForm.value = true;
        console.log("no");
        console.log(validForm.value )
      }
    }

    function submitForm() {
      // submit to backend or whatever you like
      if (validForm.value === true) {
        console.log("🗒️ Form Submitted", this.form);
      } else {
        console.log("❌ Invalid Form");
      }
    }

    return {
      buttonClass,
      checkIfFormValid,
      email,
      isFormValid,
      name,
      submitForm
    };
  },
  props: {
    title: String
  },
  components: {
    InputName
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
::v-deep .label {
  @apply block text-gray-700 text-sm font-bold mb-2 ml-3;
}
::v-deep .input-field {
  @apply bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3;
}
::v-deep .error-message {
  @apply mt-2 text-red-600;
}
</style>
