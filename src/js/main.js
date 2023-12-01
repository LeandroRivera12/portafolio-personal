function skills (){
    const skill = document.querySelector('.slider__skills');
    const list = document.querySelectorAll('.slider__skills img');
    const images = Array.from(list).map(element => element.getAttribute('src'))
    console.log(images);
    let count = 0;
    let html = `
    <img src="${images[count]}" alt="hard skill">
    `
    skill.innerHTML = html;
    const prev = document.querySelector('.btn__prev');
    const next = document.querySelector('.btn__next');
    prev.addEventListener('click', () =>{
        clearInterval(interval)
        if (0 < count) {
           count--; 
        } else{
            count = images.length-1
        }
    });
    next.addEventListener('click', () => {
        clearInterval(interval)
        if (count < images.length-1) {
            count++
        } else{
            count = 0;
        }
        html = `
        <img src="${images[count]}" alt="hard skill">`;
        skill.innerHTML = html;

    })
    const interval = setInterval(() => {
        if (count < images.length-1) {
            count++
        } else{
            count = 0;
        }
        html = `
        <img src="${images[count]}" alt="hard skill">
        `
        skill.innerHTML = html
    }, 2000)

}
function mode() {
    const body = document.querySelector('body');
    const btn = document.querySelector('.icon__mode');
    const icon = document.querySelector('.icon__mode ion-icon');
    console.log(icon);
    btn.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (icon.name==='sunny-sharp') {
            icon.name = 'moon-sharp'
        } else{
            icon.name = 'sunny-sharp'
        }
    })
}

function sound(){
    const btn = document.querySelector('.icon__volume');
    const icon = documen.querySelector('.icon__volume ion-icon');
    const audio = document.querySelector('.icon__volume audio');
    btn.addEventListener('click', () => {
        if (icon.name==='volume-mute-sharp') {
            icon.name = 'volume-high-sharp';

        } else{
            icon.name = 'volume-mute-sharp';

        }
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
    
        }
    })
}
function main(){
    skills();
    mode();
    sound();
}
main();