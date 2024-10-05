const actionButton = document.getElementById("start-stop");
const countElement = document.getElementById("count");
const progressCircle = document.getElementById("progress-circle");

function initialize() {
  updateBtnText();
  updateCount();
}

function handleClick() {
  let action, updatedButtonText;
  if (actionButton.innerText === START_CONNECT) {
    action = START;
    updatedButtonText = STOP_CONNECT;
  } else {
    action = STOP;
    updatedButtonText = START_CONNECT;
  }

  sendAction(action);
  setButtonText(updatedButtonText);
  updateBtnText();
}

function handleMessage(message, sender, sendResponse) {
  if (message.trigger) {
    updateCount();
  }
  if (message.clickedAll) {
    updateBtnText();
  }
}

function sendAction(actionToPerform) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: actionToPerform });
    }
  });
}

async function updateBtnText() {
  const buttonText = await getButtonText();
  actionButton.innerText = buttonText;
}

async function updateCount() {
  const count = await getCount();
  countElement.innerText = count;
  updateProgressBar(count);
}

function updateProgressBar(count) {
  const progress = (count / MAX_CONNECTION_REQUEST) * 100;
  progressCircle.style.background = `conic-gradient(#4caf50 ${progress}%, #ddd ${progress}%)`;
}

function getCount() {
  return new Promise((resolve) => {
    chrome.storage.local.get([COUNT_VALUE_KEY], (data) => {
      resolve(data[COUNT_VALUE_KEY] || 0);
    });
  });
}

function getButtonText() {
  return new Promise((resolve) => {
    chrome.storage.local.get([BTN_TEXT_KEY], (data) => {
      resolve(data[BTN_TEXT_KEY] || START_CONNECT);
    });
  });
}

function setButtonText(btnText) {
  chrome.storage.local.set({ [BTN_TEXT_KEY]: btnText });
}

document.addEventListener("DOMContentLoaded", initialize);
actionButton.addEventListener("click", handleClick);
chrome.runtime.onMessage.addListener(handleMessage);
