const rightCurtain = document.createElement('div');
rightCurtain.className = 'overlay';
rightCurtain.id = 'myNav';
rightCurtain.style.position = 'fixed';
rightCurtain.style.top = '8%';
rightCurtain.style.right = '-2.5px';
rightCurtain.style.color = '#EB7623';
rightCurtain.style.height = '86%';
rightCurtain.style.width = '0%';
rightCurtain.style.zIndex = '9999';
rightCurtain.style.overflowX = 'hidden';
rightCurtain.style.transition = '0.5s';
rightCurtain.style.border = '2px solid #EB7623';
rightCurtain.style.borderRadius = '5px 0 0 5px';
rightCurtain.style.backgroundColor = 'whitesmoke';
document.body.appendChild(rightCurtain);

const rightButton = document.createElement('div');
rightButton.className = 'rightButton';
rightButton.id = 'rightButton';
rightButton.style.position = 'fixed';
rightButton.zIndex = '9998';
rightButton.style.top = '45%';
rightButton.style.right = '-2%';
rightButton.style.transform = 'rotate(-90deg)';
rightButton.style.padding = '2px';
rightButton.style.transition = '0.5s';
rightButton.style.backgroundColor = 'whitesmoke';
document.body.appendChild(rightButton);

const span = document.createElement('span');
span.id = 'rightButtonContent';
span.onclick = openRightCurtain;
document.getElementById('rightButton').appendChild(span);

const spanImg = document.createElement('img');
spanImg.src = 'https://app.fonor.ai/assets/images/core/fonor.webp';
spanImg.alt = 'fonor_logo';
document.getElementById('rightButtonContent').appendChild(spanImg);

const style = document.createElement('style');
style.textContent = `
  #rightButtonContent img {
    width: 100px;
    opacity: 0.5;
  }

  #rightButtonContent img:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
document.head.appendChild(style);


function openRightCurtain() {
  document.getElementById('myNav').style.width = '35%';
}

function closeRightCurtain() {
  document.getElementById('myNav').style.width = '0%';
}

const a = document.createElement('a');
a.textContent = 'Close';
a.href = "javascript:void(0)";
a.className = 'close-button';
a.style.textDecoration = 'none';
a.style.color = 'white';
a.onclick = closeRightCurtain;
document.getElementById('myNav').appendChild(a);


const h1 = document.createElement('h1');
h1.textContent = 'Coming Soon';
h1.style.textAlign = 'center';
document.getElementById('myNav').appendChild(h1);





const xhr = new XMLHttpRequest();
const apiUrl = 'https://app.fonor.ai/api/acentral/emailbot/146-155/28625/get-email-chain';
const authToken = 'eb4a9436-f33d-4cc0-9b23-fb4276ae7f0e';

xhr.open('GET', apiUrl, true);
xhr.setRequestHeader('X-Auth-Token', authToken);
xhr.responseType = 'json';
xhr.mode = 'no-cors';

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = xhr.response;
    // Process the response
    console.log(response);
  }
};

xhr.onerror = function (error) {
  // Handle errors
  console.error(error);
};

xhr.send();