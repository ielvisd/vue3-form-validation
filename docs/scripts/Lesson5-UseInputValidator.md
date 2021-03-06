# Lesson 5 - Refactoring From Vue 2 to Vue 3 - useInputValidator Composition Function (Script)

> Before we jump into building our Composition Function `useInputValidator`, let's go ahead and import it in our `inputName` component, something I forgot to do in the last video: 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

```
import useInputValidator from "@/features/useInputValidator.js";
```
## Input Validator
> The module file, `useInputValidator` exports a function. We just saw it will need three arguments - the `value` prop received from the baseForm, `startVal` here, the validators, and a callback method we'll call `onValidate`.

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉


>`useInputValidator.vue`
import { ref } from "vue";

export default function(startVal, validators, onValidate) {
}

> This function needs to return our `input` so we need to define that using `ref` to a value provided by the prop, this is initialized to `undefined` for our use case. We also need to define the `errors` array that will contain any error messages that are returned from the validator functions. 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>`useInputValidator.vue`
import { ref } from "vue";

export default function(startVal, validators, onValidate) {
  const input = ref(startVal);
  const errors = ref([]);

  return {
    input,
    errors
  };
}

> We will now set up the `watch` API which is the same as the component `watch` property in Vue 2. We will use this to process the validation functions. Let's use the map method of the validators array, passing in the current value of the input to each validator method.

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>`useInputValidator.vue`
import { ref, watch } from "vue";

export default function(startVal, validators, onValidate) {
  const input = ref(startVal);
  const errors = ref([]);

  watch(input, (value) => {
    errors.value = validators.map((validator) => validator(value));
    onValidate(value);
  });

  return {
    input,
    errors
  };
}

> In the next section we will set up these validators but for now know that we are setting an error message if a validator fails and null otherwise. 


