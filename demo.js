/*
  Sendbox Free Demo - Collaboration
  Licensed under Apache License 2.0
*/

const sendBtn = document.getElementById('sendBtn');
const fileUpload = document.getElementById('fileUpload');
const sentFiles = document.getElementById('sentFiles');
const voiceBtn = document.getElementById('voiceBtn');

// Free Demo IP check (3 sends max)
const simulatedIP = 'user-ip-' + btoa(navigator.userAgent);
const freeDemoKey = `freeDemo_${simulatedIP}`;
let sendsLeft = parseInt(localStorage.getItem(`demoSends_${simulatedIP}`)) || 3;

function sendFiles() {
  if(sendsLeft <= 0) return alert('Free demo limit reached!');

  const senderName = document.getElementById('senderName').value;
  const senderEmail = document.getElementById('senderEmail').value;
  const recipientName = document.getElementById('recipientName').value;
  const recipientEmail = document.getElementById('recipientEmail').value;
  const message = document.getElementById('message').value;

  if(!senderName || !senderEmail || !recipientName || !recipientEmail) {
    return alert('Please fill all sender and recipient fields!');
  }

  const files = Array.from(fileUpload.files);
  if(files.length === 0) return alert('Please select files to send!');

  files.forEach(file => {
    const div = document.createElement('div');
    div.className = 'sent-file';
    div.innerHTML = `
      <strong>From:</strong> ${senderName} (${senderEmail})<br>
      <strong>To:</strong> ${recipientName} (${recipientEmail})<br>
      <strong>File:</strong> ${file.name}<br>
      <strong>Message:</strong> ${message}
    `;
    sentFiles.prepend(div);
    sendsLeft--;
  });

  localStorage.setItem(`demoSends_${simulatedIP}`, sendsLeft);
  alert(`Files sent! Sends left: ${sendsLeft}`);
  fileUpload.value = '';
}

// Voice commands
voiceBtn.onclick = () => {
  if(!('webkitSpeechRecognition' in window)) return alert('Voice commands not supported!');
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.start();
  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    if(command.includes('upload')) fileUpload.click();
    else if(command.includes('send')) sendFiles();
    else alert('Command not recognized');
  };
};

sendBtn.onclick = sendFiles;
