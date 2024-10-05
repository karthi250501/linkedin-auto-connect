let isRunning = false;
let clicked = 0;
let timeoutId = null;

function handleMessage(message, sender, sendResponse) {
  try {
    if (message.action === START) {
      startClicking(getButtonsToClick());
    } else if (message.action === STOP) {
      stopClicking();
    }
  } catch (error) {
    console.error("Error occurred in message listener: ", error);
  }
}

function getButtonsToClick() {
  const isConnectButton = (button) => button.innerText === CONNECT_BUTTON;
  return Array.from(document.querySelectorAll("button")).filter(
    isConnectButton
  );
}

function startClicking(connectButtons) {
  clicked = 0;
  sendClickCount(0);
  isRunning = true;
  clickButtons(connectButtons);
}

function stopClicking() {
  clicked = 0;
  isRunning = false;
  clearTimeout(timeoutId);
  timeoutId = null;
  sendClickCount(0);
}

async function clickButtons(connectButtons) {
  for (const btn of connectButtons) {
    if (!isRunning) {
      break;
    }
    await clickButtonWithDelay(btn);
  }
  isRunning = false;
  clicked = 0;
  informClickedAll();
}

function clickButtonWithDelay(button) {
  return new Promise((resolve) => {
    const handleClick = () => {
      try {
        button.click();
        sendClickCount(++clicked);
      } catch (error) {
        console.error("Error occurred while clicking the button: ", error);
      } finally {
        resolve();
      }
    };
    timeoutId = setTimeout(handleClick, getRandomDelay());
  });
}

function sendClickCount(clickCount) {
  chrome.storage.local.set({ [COUNT_VALUE_KEY]: clickCount });
  chrome.runtime.sendMessage({ trigger: true });
}

function informClickedAll() {
  chrome.storage.local.set({ [BTN_TEXT_KEY]: START_CONNECT });
  chrome.runtime.sendMessage({ clickedAll: true });
}

const getRandomDelay = () =>
  (Math.floor(Math.random() * (MAX_DELAY_TIME - MIN_DELAY_TIME + 1)) +
    MIN_DELAY_TIME) *
  1000;

chrome.runtime.onMessage.addListener(handleMessage);
