import { renderPoll } from '../render-utils.js';
import { getPolls, createPoll, checkAuth, logout } from '../fetch-utils.js';

const currentPollEl = document.querySelector('#current-poll-container');
const pastPollsEl = document.querySelector('#past-polls-container');

const pollForm = document.querySelector('.poll-form');

const optionOneHeader = document.querySelector('#option-one-name');
const optionTwoHeader = document.querySelector('#option-two-name');

const oneAddButton = document.querySelector('#option-one-add-button');
const oneSubtractButton = document.querySelector('#option-one-subtract-button');
const twoAddButton = document.querySelector('#option-two-add-button');
const twoSubtractButton = document.querySelector('#option-two-subtract-button');

const resetPollButton = document.querySelector('#reset-poll-button');
const logoutButton = document.getElementById('logout-button');

checkAuth();

let pollState = {
    title : '',
    name1 : '',
    name2 : '',
    score1 : 0,
    score2 : 0,

};


pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    pollState.title = data.get('poll-name-input');
    pollState.name1 = data.get('option-one-input');
    pollState.name2 = data.get('option-two-input');
    

    // questionInput.value = '';
    // optionOneInput.value = '';
    // optionTwoInput.value = '';

    pollForm.reset();

    //function to displayCurrentPolls
    displayCurrentPollEl();

});


oneAddButton.addEventListener('click', () => {
    pollState.score1++;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

oneSubtractButton.addEventListener('click', () => {
    pollState.score1--;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

twoAddButton.addEventListener('click', () => {
    pollState.score2++;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

twoSubtractButton.addEventListener('click', () => {
    pollState.score1--;
    displayCurrentPollEl();
    //function to displayCurrentPolls
});

resetPollButton.addEventListener('click', async () => {
    
    const pastPoll = {
        question: pollState.title,
        option_1: pollState.name1,
        score_1: pollState.score1,
        option_2: pollState.name2,
        score_2: pollState.score2,
    };
    
    await createPoll(pastPoll);

    await displayAllPolls();

    pollState.title = '';
    pollState.name1 = '';
    pollState.name2 = '';
    pollState.score1 = 0;
    pollState.score2 = 0;

    displayCurrentPollEl();
});


logoutButton.addEventListener('click', () => {
    logout();
});



function displayCurrentPollEl() {
    currentPollEl.textContent = '';
    
    optionOneHeader.textContent = pollState.name1;
    optionTwoHeader.textContent = pollState.name2;
    
    const newPoll = {
        question: pollState.title,
        option_1: pollState.name1,
        score_1: pollState.score1,
        option_2: pollState.name2,
        score_2: pollState.score2,
    };
    
        // call the render game function to create a game element
    const pollEl = renderPoll(newPoll);
        
        // append the element to the cleared out current game div
    currentPollEl.append(pollEl);
}

async function displayAllPolls() {
    pastPollsEl.textContent = '';

    const polls = await getPolls();
    
    for (let poll of polls) {
        const pollEl = renderPoll(poll);
        
        pastPollsEl.append(pollEl);
    }

}

displayCurrentPollEl();
displayAllPolls();
