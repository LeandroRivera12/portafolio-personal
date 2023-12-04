function skills (){
    const skill = document.querySelector('.slider__skills');
    const list = document.querySelectorAll('.slider__skills img');
    const images = Array.from(list).map(element => element.getAttribute('src'));
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
        html = `
        <img src="${images[count]}" alt="hard skill">`;
        skill.innerHTML = html;
        
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
    const iframe = document.querySelector('header iframe')
    const link = iframe.contentDocument.querySelector('link');
    
    btn.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (icon.name==='sunny-sharp') {
            icon.name = 'moon-sharp'
        } else{
            icon.name = 'sunny-sharp'
        }
        if (link.getAttribute('href')==='dark.css') {
           link.href = 'bright.css' 
        } else{
            link.href = 'dark.css' 
        }
    })
}

async function getApi() {
    const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'
    try {
        const data = await fetch(URL)
        const res = await data.json() 
        return res
    } catch (error) {
      console.log(error);
    }
    
 
}
function sound(){
    const btn = document.querySelector('.icon__volume');
    const icon = document.querySelector('.icon__volume ion-icon');
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

function printProjects(projects) {
   const list = document.querySelectorAll('.splide__slide');
   projects.forEach((project, i) => {
    console.log(project);
    const { descripcion, image, tecnologias, titulo, description, technologies, title} = project;
    const html = `<div>
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <p>${tecnologias}</p>
</div>
<figure>
    <img src="${image}" alt="slider item">
</figure>`; 
    list[i].innerHTML = html;
   });

}

function slider(){ 
        const splide = new Splide( '.splide', {
            type: 'loop' 
        });
        splide.mount();
    
}
async function main(){
    const projects = await getApi();
    console.log(projects);
    printProjects(projects) 
    skills();
    mode();
    sound();
    slider();
}
main();