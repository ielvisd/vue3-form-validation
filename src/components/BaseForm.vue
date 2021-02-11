<template>
    <div class="form-container">
        <p class="form-title">{{title}}</p>
          <img  class="w-24 mx-auto" alt="Vue School logo" src="../assets/logo.png">

        <section class="mt-8">
            <form class="flex flex-col">
                <div class="form-group">
                    <label class="label" for="name">Name: </label>
                    <input id="name" class="input-field">
                </div>
                <div class="form-group">
                    <label class="label" for="age">Age: </label>
                    <input id="age" class="input-field">
                </div>
                <button class="form-button" type="submit">Submit</button>
            </form>
        </section>
    </div>

</template>

<script>
export default {
  name: "BaseForm",
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
  }
};
</script>

<style scoped>
.form-button {
  @apply bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200
}

.input-field {
  @apply bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3
}

.form-title {
  @apply font-bold text-xl md:text-2xl mb-4 text-center
}

.form-container {
 @apply bg-purple-200 max-w-lg mx-auto p-8 md:p-12 my-6 rounded-lg shadow-2xl
}

.form-group {
@apply mb-6 pt-3 rounded bg-gray-200
}

.label {
  @apply block text-gray-700 text-sm font-bold mb-2 ml-3
}
</style>



