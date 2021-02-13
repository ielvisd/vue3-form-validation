# Lesson 8 - Did We Solve Our Problem? (Script)

## Introduction
> Now that we have our form built, it's important to step back and ask ourselves if we solved the problem we layed out at the beginning: 

    > - 1. Our errors appeared before we had typed anything into the input fields. 
    > - 2. We couldn't display precise error messages to the user. 
    > - 3. Our readability & logic will begin to get messy as our form grows in complexity. 

## Errors before typing 
> Our form is now validating each input only when we begin typing. That's greagt! But do you see the problem??? We can still submit our form when only one of the two inputs is validated. Looks like we introduced a bug. Let's solve that. 

> This form should know if the name is valid or not. We went through all the work of writing awesome validator functions, let's put it to use here. We will add two new properties `name.isValid` ... 

## Precise error messages
> We can now add more validators for precise error messaging. Let's look back at `InputAge` ... 

## Code Readability and Logic
> Let's compare our two projects. 