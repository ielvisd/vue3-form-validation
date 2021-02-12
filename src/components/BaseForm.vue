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
      >
        <div class="form-group">
          <InputName @validationResponse="checkIfFormValid2" v-model="name" />
        </div>

        <button :class="'form-button' + ' ' + buttonClass" type="submit">
          Subdfgsemit
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

import InputName from "@/components/InputName";

export default {
  name: "BaseForm",
  setup() {
    const name = ref("");
    const email = ref("");
    // eslint-disable-next-line no-unused-vars
    let validForm2 = ref(false)
    // eslint-disable-next-line no-unused-vars

    // eslint-disable-next-line no-unused-vars
    function checkIfFormValid2(errors) {
      // Check if there are any errors
      if (errors[0] && errors[0].length) {
        console.log("yes");
        validForm2.value = false;
                console.log(validForm2.value )

      } else {
        validForm2.value = true;
        console.log("no");
        console.log(validForm2.value )
      }
      console.log("errors.value", errors._rawValue);
      console.log("enlarging text", errors, errors[0]);
    }



    function onSubmit() {
      // submit to backend or whatever you like
      console.log(name.value, email.value);
    }

    return {
      name,
      email,
      validForm2,
      checkIfFormValid2,
      onSubmit
    };
  },
  data() {
    return { validForm: false };
  },
  computed: {
    isFormValid() {
      return this.validForm;
    },
    buttonClass() {
      if (this.validForm2) {
        return "";
      } else { 
        return 'opacity-50'
      }
    },
  },
  props: {
    title: String
  },
  components: {
    InputName
  },
  methods: {
    submitForm() {
      console.log("submitForm");
      console.log(this.$refs);
      // console.log(this.setup.ref)
      console.log("submitForm", this.name, this.mail);

      // const formIsvalid = this.nameIsValid && this.ageIsvalid;

      // if (formIsvalid) {
      //   console.log("🗒️ Form Submitted", this.form);
      // } else {
      //   console.log("❌ Invalid Form");
      // }
    },
    checkIfFormValid(errors) {
      // Check if there are any errors
      if (errors[0] && errors[0].length) {
        console.log("yes");
        this.validForm = false;
                console.log(this.validForm )

      } else {
        this.validForm = true;
        console.log("no");
        console.log(this.validForm )
      }
      console.log("errors.value", errors._rawValue);
      console.log("enlarging text", errors, errors[0]);
    }
  }
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
