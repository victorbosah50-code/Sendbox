// -------------------- PRICING TABLE --------------------
const pricingTable = document.getElementById('pricing-table');
if(pricingTable){
const plans = [
  {name:"Free", monthly:0, yearly:0, users:3, features:["3 Sends"]},
  {name:"Basic", monthly:29, yearly:290, users:5, features:["10 Sends","Basic Support"]},
  {name:"Professional", monthly:59, yearly:590, users:10, features:["Unlimited Sends","Priority Support","Advanced Collaboration"]},
  {name:"Enterprise", monthly:"Custom", yearly:"Custom", users:"Custom", features:["Custom Features","Dedicated Support"]},
];
plans.forEach(plan=>{
  const div=document.createElement('div'); div.className='plan';
  div.innerHTML=`
    <h3>${plan.name}</h3>
    <p>Monthly: ${plan.monthly}</p>
    <p>Yearly: ${plan.yearly}</p>
    <p>Users: ${plan.users}</p>
    <ul>${plan.features.map(f=>`<li>${f}</li>`).join('')}</ul>
  `;
  pricingTable.appendChild(div);
});
}

// -------------------- FILE UPLOAD --------------------
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const fileGrid = document.getElementById('file-grid');
const filesUploaded = [];

if(uploadBtn){
uploadBtn.addEventListener('click', ()=>{
  const files = fileInput.files;
  for(let f of files){
    filesUploaded.push(f);
    const div=document.createElement('div');
    div.className='file-item';
    div.innerHTML=`<i class="fas fa-file"></i>${f.name}`;
    fileGrid.appendChild(div);
  }
});
}

// -------------------- SEND FILES --------------------
const sendBtn=document.getElementById('send-btn');
if(sendBtn){
sendBtn.addEventListener('click',()=>{
  const sender=document.getElementById('sender-name').value;
  const fromEmail=document.getElementById('sender-email').value;
  const toEmail=document.getElementById('receiver-email').value;
  const message=document.getElementById('message').value;
  if(!sender || !fromEmail || !toEmail){ alert('Please fill all fields'); return; }
  alert(`Sent ${filesUploaded.length} file(s) from ${sender} (${fromEmail}) to ${toEmail}`);
});
}

// -------------------- VOICE COMMAND --------------------
const voiceBtn = document.getElementById('voice-btn');
if(voiceBtn){
voiceBtn.addEventListener('click',()=>{
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang='en-US';
  recognition.start();
  recognition.onresult=(event)=>{
    const command=event.results[0][0].transcript.toLowerCase();
    if(command.includes('upload')) alert('Voice Upload Triggered! Use the Upload Button.');
    if(command.includes('send')) alert('Voice Send Triggered! Fill the form and press Send.');
  }
});
}

// -------------------- SIMULATED IP-RESTRICTION --------------------
const demoAccessKey='sendbox_demo_ip';
if(!localStorage.getItem(demoAccessKey)){
  localStorage.setItem(demoAccessKey,'true');
}else{
  console.log('Demo already accessed from this browser/IP simulation');
}
