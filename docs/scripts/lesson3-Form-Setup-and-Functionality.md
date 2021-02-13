# Lesson 3 - Refactoring From Vue 2 to Vue 3 - Form Setup & Functionality (Script)

### Form Setup & Functionality 
> Now let's setup the form and begin to restore functionality to our project. 

> As part of Vue 3 we have access to the `setup` function. This function takes `props` & a `context` object that we'll touch on shortly. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>We don't need them in this `BaseForm` component so we won't pass anything to setup here but we will revisit these concepts soon when we will need to use the `emit` method from the `context` object from our inputs. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> In setup we will declare the state variable `name` using the `ref` method of the Composition API. This will replace our `data` properties from our Vue 2 implementation. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> Note, that this is currently a Vue 3 project which is why all of our Vue 2 syntax still works and how we can refactor so easily. You can also add the composition API directly to Vue 2 project. 

> `ref` will return a reactive and mutable object that serves as a reactive reference to the internal value it is holding - that's where the name comes from. This object contains the only one property named value. We will be referencing all of our `ref` variables using `ref.value`. 

> Let's move our `submitForm` method inside of the `setup` function as it's own function. This is how we will begin to replace all `methods` from the Options API

🎉🎉🎉🎉🎉🎉 DEMO ADD CONSOLE LOG FOR NAME.VALUE AND AGE.VALUE🎉🎉🎉🎉🎉🎉

> We can return `name` and `submitForm` method from the setup function to make them available in the template. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>`BaseForm.vue`
```
  setup() {
    const name = ref("");

    function submitForm() {
      if (name.value) {
        console.log("🗒️ Form Submitted", this.form);
      } else {
        console.log("❌ Invalid Form");
      }
    }

    return {
      name,
      submitForm
    };
  },
  ```

