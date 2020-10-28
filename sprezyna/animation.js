const ball = document.querySelector('.ball'), btn = document.querySelector('.btn-action'), spring = document.querySelector('.spring'), fill = document.querySelector('.fill');


const stretchSpring = () => {
    fill.style.animationName = "fill";
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";
    btn.textContent = "Puść sprężynę";
    btn.removeEventListener('mousedown', stretchSpring);
    btn.removeEventListener('touchstart', stretchSpring);
}

const releaseSpring = () => {
    
    const fillStyle = getComputedStyle(fill);
    const fillWidth = parseInt(fillStyle.width, 10);
    const barWidth = parseInt(getComputedStyle(document.querySelector('.bar')).width, 10);
    const progressPercent = (fillWidth / barWidth).toFixed(2);
    btn.style.clor = 'black';
    btn.textContent = `Moc uderzania to ${(progressPercent * 100).toFixed()}%`;
    fill.style.animationPlayState = 'paused';

    document.documentElement.style.setProperty("--power-x", `${30 + progressPercent * 50}%`);
    ball.style.animation = 'fly-ball-x 1s 1 forwards .15s cubic-bezier(.17,.67,.6,1), fly-ball-y 1s 1 forwards .15s linear';

    document.documentElement.style.setProperty("--spring-left", getComputedStyle(spring).left);
    spring.style.animation = 'realase-spring 0.2s 1 forwards linear';


    btn.removeEventListener('mouseup', releaseSpring);
    btn.removeEventListener('touchend', releaseSpring);

    ball.addEventListener('animationend', resetAnimation);
}

const resetAnimation = () => {
    ball.removeEventListener('animationend', resetAnimation);
    setTimeout(() => {
        btn.addEventListener('mousedown', stretchSpring);
        btn.addEventListener('mouseup', releaseSpring);
        btn.addEventListener('touchstart', stretchSpring);
        btn.addEventListener('touchend', releaseSpring);

        btn.style.color = "white";
        btn.textContent = "Naciągnij sprężynę";
        spring.style.animation = "";
        ball.style.animation = "";
        fill.style.animationName = "none";
    }, 2000)

}


btn.addEventListener('mousedown', stretchSpring);
btn.addEventListener('mouseup', releaseSpring);
btn.addEventListener('touchstart', stretchSpring);
btn.addEventListener('touchend', releaseSpring);
