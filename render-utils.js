export function renderPoll(aTitle, anOption1, aScore1, anOption2, aScore2) {
    const pollDiv = document.createElement('div');
    const titleEl = document.createElement('h3');
    const optionOneEl = document.createElement('h4');
    const scoreOneEl = document.createElement('p');
    const optionTwoEl = document.createElement('h4');
    const scoreTwoEl = document.createElement('p');

    titleEl.textContent = aTitle;
    optionOneEl.textContent = anOption1;
    scoreOneEl.textContent = aScore1;
    optionTwoEl.textContent = anOption2;
    scoreTwoEl.textContent = aScore2;

    pollDiv.append(titleEl, optionOneEl, scoreOneEl, optionTwoEl, scoreTwoEl);

    pollDiv.classList.add('.poll');

    return pollDiv;

}