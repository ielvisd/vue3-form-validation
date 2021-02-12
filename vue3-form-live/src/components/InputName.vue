<template>
  <div class="form-group">
    <label class="label" for="name">
      Name:
      <input type="text" id="name" class="input-field" v-model="input" />
      <p class="error-message">
        The name field is required
      </p>
    </label>
  </div>
</template>

<script>
    export default {
        name: 'InputName'
    }
</script>
