

    let w = window,
        btnUp = document.createElement('span')
        domElement = document.querySelector('a'),
        topScroll = window.pageYOffset + domElement.getBoundingClientRect().top;
        btnUp.style.width = '50px'
        btnUp.style.height = '50px'
        btnUp.style.background = '#000'
        btnUp.style.display = 'block'
        btnUp.style.position = 'fixed'
        btnUp.style.bottom = '2%'
        btnUp.style.left = '2%'
        w.addEventListener('resize', () => {
            if(w.screen.width <= 480){
                document.querySelector('body').appendChild(btnUp);                
            }else{
                btnUp.remove()
            }
        })
        if(w.screen.width <= 480){
            document.querySelector('body').appendChild(btnUp);            
        }else{
            btnUp.remove()
        }
        btnUp.addEventListener('click',() => {  
            console.log(window.pageYOffset, domElement.getBoundingClientRect().top)
            window.scrollTo({
                top: topScroll,
                behavior: 'smooth'
            })
        })