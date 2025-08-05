if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let chatWindow = document.getElementById('chat-window');

function sendMessage() {
  let input = document.getElementById('chat-input');
  let msg = input.value;
  if (msg.trim() === '') return;

  let div = document.createElement('div');
  div.textContent = `You: ${msg}`;
  chatWindow.appendChild(div);

  input.value = '';
  input.focus();
}