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
        <InputName/>
        <!-- <div class="form-group">
          <label class="label" for="age">
            Age:
            <input type="text" id="age" class="input-field" v-model="form.age"/>
            <p v-if="!ageIsValid" class="error-message">The age field is invalid</p>
          </label>
        </div> -->
        <button class="form-button" type="submit">Submit</button>
      </form>

    </section>
  </div>
</template>

<script>
import InputName from '@/components/InputName'
import { ref } from 'vue'

  export default {
    name: "BaseForm",
    setup() {
      const name = ref('')

      function submitForm() {

        console.log('submitForm')
        // const formIsvalid = this.nameIsValid && this.ageIsvalid;

        // if (formIsvalid) {
        //   console.log("🗒️ Form Submitted", this.form);
        // } else {
        //   console.log("❌ Invalid Form");
        // }

      }

      return {
        name,
        submitForm
      }
    },
    props: {
      title: String
    },
    data() {
      return {
        form: {
          name: null,
          age: null
        }
      };
    },
    components: {
      InputName
    },
    computed: {
      nameIsValid() {
        return !!this.form.name
      },
      ageIsValid() {
        return (
          typeof parseInt(this.form.age) === 'number' &&
          this.form.age > 12 &&
          this.form.age < 120
        );
      },
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
