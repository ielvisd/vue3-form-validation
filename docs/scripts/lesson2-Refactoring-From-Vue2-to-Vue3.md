# Lesson 2 - Refactoring From Vue 2 to Vue 3 (Script)

## Refactor

### Components Setup
> Ok, now that we've reviewed what we are working with. Let's refactor. To start, I'm going to focus on only the name input. So let's comment out this age field and worry about it later when we talk about Code Reusability. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> The first thing I'm going to do is make this an `InputAge` component in the components folder. For now we are going to ignore everything but the HTML elements we will need. 

> `BaseInput.vue`
```
<template>
  <div>
    <label>
      Name
      <input type="text" v-model="input" name="name" />
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
### Form Setup & Functionality 
> Now let's setup the form and import our new component. 

> As part of Vue 3 we have access to the `setup` function. This function takes `props` & a `context` object that we'll touch on shortly. We don't need them in the form so we won't pass anything to setup. 

> In setup we will declare two state variables `name` and `age` using the `ref` method of the Composition API. This will replace our `data` properties from our Vue 2 implementation. 

> Note, that this is currently a Vue 3 project which is why all of our Vue 2 syntax still works and how we can refactor so easily. You can also add the composition API direclty to Vue project. 

> `ref` will return a reactive and mutable object that serves as a reactive reference to the internal value it is holding - that's where the name comes from. This object contains the only one property named value. We will be referencing all of our `ref` variables using `ref.value`. 

> Let's move our `submitForm` method inside of the `setup` function as it's own function. 

> We can return `name`, `age` and `submitForm` method from the setup function to make them available in the template. 

## Input Functionality 
> Let's create a setup function similar to what we did with the parent BaseForm. In this setup function we are going to pass props as well as the destructured context object to get our emit method that we will need to alert the parent of any changes. 

> We will see how these will be used soon but for now let's declare a state variable `input` that will be bound to the input HTML element we declared in the template.

> The value of this `input` variable will be something we'll return from a to-be-defined composition function `useInputValidator`. This function will handle all the common validation logic in our form.

> We'll pass in the `value` prop to this method (currently undefined), this will be our starting value, and the second argument will an array of validator functtions that we will soon write and the third will be a callback function that returns the validated input value. Let's use this callback to emit the input and any errors as an event. 

## Input Validator
> The module file, `useInputValidator` exports a function. We just saw it will need three arguments - the `value` prop received from the baseForm, `startVal` here, the validators, and a callback method we'll call `onValidate`.

> This function needs to return our input so we need to define that using `ref` to a value provided by the prop, this is initialized to `undefined` for our use case. 

> We will now set up the `watch` API which is the same as the component `watch` property in Vue 2. We will use this to process the validaiton functions. Let's use the map method of the validators array, passing in the current value of the input to each validator method.

> In the next section we will set up these validators but for now know that we are setting an error message if a validator fails and null otherwise. 

## Validators
> Ok, almost done. Let's setup our first validator. Let's create a `validators.js` file which is where we will track all of our validations. Let's take the logic in our `validName` method and move it to this validator file. 

> Now let's return to our `InputName` component and hook it up to our validators to bring it all home. 

> If it all went according to plan we should now have an `InputName` component that is being validated using Vue 3. Nice! 
> Let's review. In our last lesson, we were able to validate if our form contained a name
