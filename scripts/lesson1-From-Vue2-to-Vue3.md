# Lesson 1.5 - From Vue 2 to Vue 3 (Script)

## Introduction
>In our last lesson, we learned how to validate forms in Vue 2 without a 3rd party library. Today, we will learn a little bit about Vue 3 as we refactor our project and see how using the Composition API can lead to cleaner, more scalable code. 

## Review
> Let's review. In our last project, we were able to validate if our form contained a name and if our age met one of three criteria (it was a number, it was greater than 12 and it was less than 120). We accomplished this by leveraging Vue's Options API and it's computed/data methods. 

> The I am showing here is exactly the same as lesson 1 with some additional Tailwind styling added below. 

> We were able to successfully validate our data but our solution had a couple of problems. 
    > - 1. Our errors appeared before we had typed anything into the input fields. 
    > - 2. We couldn't display precise error messages to the user. 
    > - 3. Our readability & logic will begin to get messy as our form grows in complexity. 

> Today we will take a look at how Vue 3's Composition API can help us deal with these problems. 

## Refactor

### Components Setup
> Ok, now that we've reviewed what we are working with. Let's refactor. To start, I'm going to focus on only the name input. So let's comment out this age field and worry about it later when we talk about Code Reusability. 

> The first thing I'm going to do is make this an `InputAge` component in the components folder. For now we are going to ignore everything but the HTML elements we will need. 

> And reference it in our parent form component. 
 
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

> We'll pass in the `value` prop to this method (currently undefined), this will be our starting value, and the second argument will be a callback function that returns the validated input value. Let's use this callback to emit this input as an event and fulfill the v-model contract.

## Input Validator


