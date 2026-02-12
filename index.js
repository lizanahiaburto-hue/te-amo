const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('ahora casemonos y te pico tu anito');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    // Nota el uso de backticks `` y la palabra translate con "n"
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});