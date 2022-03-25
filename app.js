// import functions and grab DOM elements
import { getUser, checkAuth, redirectToPolls, signUpUser, signInUser, logout } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInInput = document.getElementById('sign-in-email');
const signInPassInput = document.getElementById('sign-in-password');
//const signInButton =document.querySelector('.sign-in-button');

const signUpForm = document.getElementById('sign-up');
const signUpInput = document.getElementById('sign-up-email');
const signUpPassInput = document.getElementById('sign-up-password');
//const signUpButton = document.querySelector('.sign-up-button');


// let state
redirectToPolls();

// set event listeners
signInForm.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const user = await signInUser(signInInput.value, signInPassInput.value);

    if (user) {
        redirectToPolls();
    } else {
        console.error(user);
    }
  
});

signUpForm.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const user = await signUpUser(signUpInput.value, signUpPassInput.value);

    if (user) {
        redirectToPolls();
    } else {
        console.error(user);
    }
})
// get user input

// use user input to update state 

// update DOM to reflect the new state
