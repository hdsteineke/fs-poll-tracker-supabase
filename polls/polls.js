// import { renderPoll } from '../render-utils.js';
// import { getPolls, createPoll } from '../fetch-utils';

// const currentPollEl = document.querySelector('#current-poll-container');
// const pastPollsEl = document.querySelector('#past-polls-container');

const pollForm = document.querySelector('.poll-form')
/* const questionInput = document.querySelector('#poll-name-input');
const optionOneInput = document.querySelector('#option-one-input');
const optionTwoInput = document.querySelector('#option-two-input');
const makePollButton = document.querySelector('#make-poll-button');
*/

// const questionHeader = document.querySelector('#poll-name');
// const optionOneHeader = document.querySelector('#option-one-name');
// const optionTwoHeader = document.querySelector('#option-two-name');

const oneAddButton = document.querySelector('#option-one-add-button');
const oneSubtractButton = document.querySelector('#option-one-subtract button');
const twoAddButton = document.querySelector('#option-two-add-button');
const twoSubtractButton = document.querySelector('#option-two-subtract-button');

const resetPollButton = document.querySelector('#reset-poll-button');



// let title = '';
// let name1 = '';
// let name2 = '';
let score1 = 0;
let score2 = 0;


pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    title = data.get('poll-name-input');
    name1 = data.get('option-one-input');
    //score1 = data.get('');
    name2 = data.get('option-two-input');
    //score2 = data.get('');

    pollForm.reset();
    console.log('heyy');

    //function to displayCurrentPolls
});

oneAddButton.addEventListener('click', () => {
    score1++;
    //function to displayCurrentPolls
});

oneSubtractButton.addEventListener('click', () => {
    score1--;
    //function to displayCurrentPolls
});

twoAddButton.addEventListener('click', () => {
    score2++;
    //function to displayCurrentPolls
});

twoSubtractButton.addEventListener('click', () => {
    score1--;
    //function to displayCurrentPolls
});

resetPollButton.addEventListener('click', async() => {
    
});