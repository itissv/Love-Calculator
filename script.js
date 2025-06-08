function createHearts() {
  const heartContainer = document.getElementById('hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = Math.random() * 30 + 15 + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
    heart.innerHTML = '❤️';
    heartContainer.appendChild(heart);
  }
}

function calculateLove() {
  const girl = document.getElementById('girlName').value.trim();
  const boy = document.getElementById('boyName').value.trim();
  const resultBox = document.getElementById('result');

  if (girl === '' || boy === '') {
    resultBox.innerText = 'Please enter both names!';
    return;
  }

  const isAlpha = str => /^[a-zA-Z\s]+$/.test(str);
  if (!isAlpha(girl) || !isAlpha(boy)) {
    resultBox.innerText = 'Please use letters only!';
    return;
  }

  const lovePercent = Math.floor(Math.random() * 51) + 50; // 50-100%
  let message = '';
  if (lovePercent >= 90) {
    message = "A match made in heaven! ❤️";
  } else if (lovePercent >= 75) {
    message = "Strong bond with great vibes! 💞";
  } else if (lovePercent >= 60) {
    message = "Looks promising! 💘";
  } else {
    message = "Needs a little spark! 💔";
  }

  resultBox.innerText = `💘 ${girl} and ${boy} have ${lovePercent}% love!\n${message}`;
  resultBox.classList.add('pop');
  setTimeout(() => resultBox.classList.remove('pop'), 300);
}

createHearts();
