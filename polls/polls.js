import { renderPoll } from '../render-utils.js';
import { getPolls, createPoll } from '../fetch-utils';

const currentPollEl = document.querySelector('#current-poll-container');
const pastPollsEl = document.querySelector('#past-polls-container');

const questionInput = document.querySelector('#poll-name-input');
const optionOneInput = document.querySelector('#option-one-input');
const optionTwoInput = document.querySelector('#option-two-input');
const makePollButton = document.querySelector('#make-poll-button');

const questionHeader = document.querySelector('#poll-name');

const optionOneHeader = document.querySelector('#option-one-name');
const oneAddButton = document.querySelector('#option-one-add-button');
const oneSubtractButton = document.querySelector('#option-one-subtract button');

const optionTwoHeader = document.querySelector('#option-two-name');
const twoAddButton = document.querySelector('#option-two-add-button');
const twoSubtractButton = document.querySelector('#option-two-subtract-button');

const resetPollButton = document.querySelector('#reset-poll-button');

let title = '';
let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

