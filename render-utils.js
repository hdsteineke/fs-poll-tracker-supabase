export function renderPoll(poll) {
    const pollDiv = document.createElement('div');
    const titleEl = document.createElement('h3');
    const optionOneEl = document.createElement('h4');
    const scoreOneEl = document.createElement('p');
    const optionTwoEl = document.createElement('h4');
    const scoreTwoEl = document.createElement('p');

    titleEl.textContent = poll.question;
    optionOneEl.textContent = poll.option_1;
    scoreOneEl.textContent = poll.score_1;
    optionTwoEl.textContent = poll.option_2;
    scoreTwoEl.textContent = poll.score_2;

    console.log(poll, 'yep');
    console.log(titleEl, optionOneEl, scoreOneEl, optionTwoEl, scoreTwoEl, 'nope');
    
    pollDiv.append(titleEl, optionOneEl, scoreOneEl, optionTwoEl, scoreTwoEl);
    
    pollDiv.classList.add('.poll');
    return pollDiv;

}