

/***************************************** */
/****** Proyecto-portafolio-Personal  ******/
/**************************************** */

function changeLogo() {
    const btn = document.querySelector('.contenedor-img');
    const image = document.querySelector('.contenedor-img img');
    btn.addEventListener('click', () => {
        const time = setInterval(() => {
            if (image.getAttribute('src')==='./Assets-portfolio/logo.png') {
                image.src = './Assets-portfolio/logo.gif'
            } else{
                image.src = './Assets-portfolio/logo.png'
                clearInterval(time)
              }
             
        }, 3000);
       
    });
}
function animateText(label) {
    // const text = document.querySelectorAll('b');
    // let i = 0;
    // const print = setInterval(() => {
    //    text[i].classList.toggle('zoom');
    //    i++;
    //    if (i >= text.length) {
    //     clearInterval(print);
    //     i = 0
    //     const clear = setInterval(() => {
    //         text[i].classList.toggle('zoom');
    //         i++;
    //     }, 150)
    //    }
    // }, 200);
}

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
    }, 2000);

}
function mode() {
    const body = document.querySelector('body');
    const btn = document.querySelector('.icon__mode');
    const icon = document.querySelector('.icon__mode lord-icon');
    const iframe = document.querySelector('header iframe')
    const link = iframe.contentDocument.querySelector('link');
    
    btn.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (icon.getAttribute('src')==='https://cdn.lordicon.com/dvvbcxah.json') {
            icon.src = 'https://cdn.lordicon.com/hmygqgiw.json'
         } else{
            icon.src = 'https://cdn.lordicon.com/dvvbcxah.json'
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
        const data = await fetch(URL);
        const res = await data.json();
       
        localStorage.setItem('projects', JSON.stringify(res));

        return res
    } catch (error) {
      console.log(error);
    }  
 
}

function sound(){
    const btn = document.querySelector('.icon__volume');
    const icon = document.querySelector('.icon__volume lord-icon');
    const audio = document.querySelector('.icon__volume audio');

    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
    
        }
    })
}

function printProjects(projects) {
   const list = document.querySelectorAll('.splide__slide');
   const path = location.href.split('/').at(-1).at(0);

   projects.forEach((project, i) => {
        const { descripcion, image, tecnologias, titulo, description, technologies, title} = project;
        let html = '';    
            if (path==='e') {
                html = `<div>
                <h3>${title}</h3>
                <p>${description}</p>
                <p>${technologies}</p>
                        </div>
                        <figure>
                            <img src="${image}" alt="slider item">
                        </figure>`; 
                            list[i].innerHTML = html;
            } else{
                    html = `<div>
                    <h3>${titulo}</h3>
                    <p>${descripcion}</p>
                    <p>${tecnologias}</p>
                            </div>
                            <figure>
                                <img src="${image}" alt="slider item">
                            </figure>`; 
                                list[i].innerHTML = html;

                }
  
    });

}

function social(){
    // const h1 = document.querySelector('h1');
    const nav = document.querySelector('.header__nav');
    const footer = document.querySelector('.footer');
    footer.classList.toggle('active');
    
    // changeText(h1);
    // animateText(h1);
    setTimeout(() => {
        footer.classList.toggle('active');
    }, 2000);
    nav.addEventListener('click', () =>{
        footer.classList.toggle('active');
        animateText(h1);
        setTimeout(() => {
        footer.classList.toggle('active');
    }, 2000);
    });
}

function slider(){ 
        const splide = new Splide( '.splide', {
            type: 'loop',
            autoplay: true,
            seed: 2000,
                breakpoints: {
                      849: {
                        direction: 'ttb',
                        height: '65vh',
                      },
                }
              
        });
        splide.mount();
    
}


async function main(){
    // const data = JSON.parse(localStorage.getItem('projects'))
    const projects = JSON.parse(localStorage.getItem('projects')) || await getApi();
    changeLogo();
    printProjects(projects) 
    skills();
    social();
    mode();
    sound();
    slider();
    
}
main();