import { renderPoll } from '../render-utils.js';
import { getPolls, createPoll } from '../fetch-utils.js';

const currentPollEl = document.querySelector('#current-poll-container');
const pastPollsEl = document.querySelector('#past-polls-container');

const pollForm = document.querySelector('.poll-form');
const questionInput = document.querySelector('#poll-name-input');
const optionOneInput = document.querySelector('#option-one-input');
const optionTwoInput = document.querySelector('#option-two-input');
const makePollButton = document.querySelector('#make-poll-button');


const questionHeader = document.querySelector('#poll-name');
const optionOneHeader = document.querySelector('#option-one-name');
const optionTwoHeader = document.querySelector('#option-two-name');

const oneAddButton = document.querySelector('#option-one-add-button');
const oneSubtractButton = document.querySelector('#option-one-subtract-button');
const twoAddButton = document.querySelector('#option-two-add-button');
const twoSubtractButton = document.querySelector('#option-two-subtract-button');

const resetPollButton = document.querySelector('#reset-poll-button');



let title = '';
let name1 = '';
let name2 = '';
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

    //function to displayCurrentPolls
    displayCurrentPollEl();

});


oneAddButton.addEventListener('click', () => {
    score1++;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

oneSubtractButton.addEventListener('click', () => {
    score1--;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

twoAddButton.addEventListener('click', () => {
    score2++;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

twoSubtractButton.addEventListener('click', () => {
    score1--;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

resetPollButton.addEventListener('click', async () => {

    
});

function displayCurrentPollEl() {
    currentPollEl.textContent = '';
    
    
    optionOneHeader.textContent = name1;
    optionTwoHeader.textContent = name2;
    
    // const newPoll = {
    //     question: title,
    //     option_1: name1,
    //     score_1: score1,
    //     option_2: name2,
    //     score_2: score2,
    // };
    
        // call the render game function to create a game element
    const pollEl = renderPoll(title, name1, score1, name2, score2);
        
        
        // append the element to the cleared out current game div
    currentPollEl.append(pollEl);
}