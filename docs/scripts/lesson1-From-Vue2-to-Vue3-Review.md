# Lesson 1 - From Vue 2 to Vue 3 - Review (Script)

## Introduction
>In our last lesson, we learned how to validate forms in Vue 2 without a 3rd party library. Today, we will learn a little bit about Vue 3 as we refactor our project and see how using the Composition API can lead to cleaner, more scalable code. 

## Review
> Let's review. In our last lesson, we were able to validate if our form contained a name

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> and if our age met one of three criteria (it was a number, 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>it was greater than 12 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

>and it was less than 120). 

🎉🎉🎉🎉🎉🎉 DEMO 🎉🎉🎉🎉🎉🎉

> We accomplished this by leveraging Vue's Options API and the corresponding `data` properties (form.name & form.age)

🎉🎉🎉🎉🎉🎉 SCROLL TO SCRIPT BLOCK 🎉🎉🎉🎉🎉🎉

>, `computed` properties (nameIsvalid, ageIsvalid), `methods` (submitForm). 

🎉🎉🎉🎉🎉🎉 SCROLL BACK TO HTML BLOCK 🎉🎉🎉🎉🎉🎉

> I have recreated this form, shown on the right using a little bit of Tailwind CSS for styling. I'm using @apply to clean up the class names, such as `form-group`, 

🎉🎉🎉🎉🎉🎉 HIGHLIGHT 🎉🎉🎉🎉🎉🎉

>but you can find the corresponding styles for each class in the `style` block.  

🎉🎉🎉🎉🎉🎉 SCROLL TO STYLE BLOCK 🎉🎉🎉🎉🎉🎉

> So we were able to successfully validate our data but our solution had a couple of problems. 
    > - 1. Our errors appeared before we had typed anything into the input fields. 
    > - 2. We couldn't display precise error messages to the user. 
    > - 3. Our readability & logic will begin to get messy as our form grows in complexity. 

> Today we will take a look at how Vue 3's Composition API can help us deal with these problems. 
