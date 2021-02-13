# Lesson 2 - Refactoring From Vue 2 to Vue 3 - Component Setup (Script)

## Refactor

### Components Setup
> Ok, now that we've reviewed what we are working with. Let's refactor. To start, I'm going to focus on only the name input. So let's comment out this age field and worry about it later when we talk about Code Reusability. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> The first thing I'm going to do is make this an `InputName` component in the components folder. For now we are going to ignore everything but the HTML elements we will need. 

> Let's start with our `template` and copy our existing HTML from our `BaseForm` component. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> One way our component will be different from our Vue 2 example is that the `v-model` will now be bound to the input value rather than the `form.name` data property as we will no longer be using the Options API.   

> We will also be removing our v-if form our error message and fixing this when we add our custom validator functions. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> `BaseInput.vue`
```
<template>
  <div class="form-group">
    <label class="label" for="name">
      Name:
      <input type="text" id="name" class="input-field" v-model="input"/>
      <p class="error-message">The name field is required</p>
    </label>
  </div>
</template>
<script>
export default {
  name: 'InputName'
}
</script>
``` 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> Let's delete our existing input and reference the `InputAge` component we just created in our `BaseForm` parent component. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> `BaseForm.vue`
```
    <form novalidate @submit.prevent="onSubmit">
      <InputName v-model="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import InputName from "@/components/InputName";
export default {
  components: {
    InputName
  }
}
``` 

> Looks like we lost some styling. That's because the classes we used for our input can no longer reach into the child component to be applied. We can fix this by using `:deep`. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>There, we are back. In the next section We will look at the `setup` function and begin to get our form functionality back. 
