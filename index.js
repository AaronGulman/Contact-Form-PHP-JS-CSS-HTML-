const wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("wrapper");

const header = document.createElement("header");
header.textContent = "Send us a message";
wrapperDiv.appendChild(header);

const form = document.createElement("form");
form.setAttribute("action", "#");
wrapperDiv.appendChild(form);

const dblFieldDiv1 = document.createElement("div");
dblFieldDiv1.classList.add("dbl-field");
form.appendChild(dblFieldDiv1);

const fieldDiv1 = document.createElement("div");
fieldDiv1.classList.add("field");
dblFieldDiv1.appendChild(fieldDiv1);

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter your name");
fieldDiv1.appendChild(nameInput);

const userIcon1 = document.createElement("i");
userIcon1.classList.add("fas", "fa-user");
fieldDiv1.appendChild(userIcon1);

const fieldDiv2 = document.createElement("div");
fieldDiv2.classList.add("field");
dblFieldDiv1.appendChild(fieldDiv2);

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "Enter your email");
fieldDiv2.appendChild(emailInput);

const envelopeIcon = document.createElement("i");
envelopeIcon.classList.add("fas", "fa-envelope");
fieldDiv2.appendChild(envelopeIcon);

const dblFieldDiv2 = document.createElement("div");
dblFieldDiv2.classList.add("dbl-field");
form.appendChild(dblFieldDiv2);

const fieldDiv3 = document.createElement("div");
fieldDiv3.classList.add("field");
dblFieldDiv2.appendChild(fieldDiv3);

const phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "text");
phoneInput.setAttribute("placeholder", "Enter your phone number");
fieldDiv3.appendChild(phoneInput);

const phoneIcon = document.createElement("i");
phoneIcon.classList.add("fas", "fa-phone-alt");
fieldDiv3.appendChild(phoneIcon);

const fieldDiv4 = document.createElement("div");
fieldDiv4.classList.add("field");
dblFieldDiv2.appendChild(fieldDiv4);

const websiteInput = document.createElement("input");
websiteInput.setAttribute("type", "text");
websiteInput.setAttribute("placeholder", "Enter your website");
fieldDiv4.appendChild(websiteInput);

const globalIcon = document.createElement("i");
globalIcon.classList.add("fas", "fa-global");
fieldDiv4.appendChild(globalIcon);

const msgDiv = document.createElement("div");
msgDiv.classList.add("msg");
form.appendChild(msgDiv);

const messageTextarea = document.createElement("textarea");
messageTextarea.setAttribute("placeholder", "Write your message");
msgDiv.appendChild(messageTextarea);

const messageIcon = document.createElement("i");
messageIcon.classList.add("material-icons");
messageIcon.textContent = "message";
msgDiv.appendChild(messageIcon);

const buttonAreaDiv = document.createElement("div");
buttonAreaDiv.classList.add("button-area");
form.appendChild(buttonAreaDiv);

const sendButton = document.createElement("button");
sendButton.setAttribute("type", "submit");
sendButton.textContent = "Send";
buttonAreaDiv.appendChild(sendButton);

const sendingSpan = document.createElement("span");
sendingSpan.textContent = "Sending your message...";
buttonAreaDiv.appendChild(sendingSpan);

document.body.appendChild(wrapperDiv);
