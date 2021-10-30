
// (1)
let scrollUpSpan = document.getElementById('scroll-up'); 
////////////////////////////

// (2)
let lastLI = document.querySelector('.navigation .container ul li:last-child');
let megaMenu = document.querySelector(".mega-menu")
/////////////////////////

// (3)
let days = document.querySelector('.clock:nth-child(1) span:first-child')
let hours = document.querySelector('.clock:nth-child(2) span:first-child')
let minuts = document.querySelector('.clock:nth-child(3) span:first-child')
let seconds = document.querySelector('.clock:nth-child(4) span:first-child')
////////////////////////////

// (4)
let htmlSpan = document.querySelector('.skill:nth-child(1) .info span')
let cssSpan = document.querySelector('.skill:nth-child(2) .info span')
let jsSpan = document.querySelector('.skill:nth-child(3) .info span')
let reactSpan = document.querySelector('.skill:nth-child(4) .info span')

let htmlProgress = document.querySelector('.skill:nth-child(1) .progress span')
let cssProgress = document.querySelector('.skill:nth-child(2) .progress span')
let jsProgress = document.querySelector('.skill:nth-child(3) .progress span')
let reactProgress = document.querySelector('.skill:nth-child(4) .progress span')
//////////////////////////////

// (5)
let vedioList = document.querySelectorAll('.video ul li ')
let vedioInfo = document.querySelector('.video .preview .info')
let shuffle = document.querySelector('.video .name i')
let image=document.querySelector('.video .preview img')
//////////////////////////////

//(6)
let burger = document.querySelector('.navigation .container i')
let navmenu = document.querySelector('.navigation .container ul ')
//////////////////////////////

// (7)
let skillSection = document.querySelector('.skills')
/////////////////////////////////

//(8)
let stateSection = document.querySelector('.states')
let stateSpans = document.querySelectorAll('.states .box span:first-of-type');
/////////////////////////////////





// (1)  add scroll top span function
window.addEventListener('scroll',function () {
    if (Math.trunc(window.scrollY) > 400) {
           scrollUpSpan.style.opacity='1'
    }
    else {
        scrollUpSpan.style.opacity="0"
    }
   }
) 
scrollUpSpan.addEventListener('click', () => {
    window.scrollTo(0,0)
})

///////////////////////////////////////////////////////////////////



// (2) add the mega menu in click on the Links in Navigation Section
lastLI.addEventListener('click', function () {
    if (megaMenu.classList.contains('show-mega-menu')) {
        megaMenu.classList.remove("show-mega-menu")
    } else {
        megaMenu.classList.add('show-mega-menu')
    }
}
)
///////////////////////////////////////////////////////////////////




// (3) add the countDown function in Events Section

    let day = 1000 * 60 * 60 * 24,
        hour = 1000 * 60 * 60,
        minut = 1000 * 60,
        second = 1000;
        countDownDate = new Date("December 31 2021 23:59:59").getTime()
     
   
        let counter=setInterval( function() {
            let currentDate = new Date().getTime(),
                deiffranceDate = countDownDate - currentDate;
            
            days.textContent = `${Math.trunc(deiffranceDate / day)<10?'0'+Math.trunc(deiffranceDate / day):Math.trunc(deiffranceDate / day)}`;
            hours.textContent = `${Math.trunc((deiffranceDate % day) / hour)<10?'0'+Math.trunc((deiffranceDate % day) / hour):Math.trunc((deiffranceDate % day) / hour)}`;
            minuts.textContent = `${Math.trunc((deiffranceDate % hour)/ minut) <10?'0'+Math.trunc((deiffranceDate % hour)/ minut):Math.trunc((deiffranceDate % hour)/ minut)  }`;
            seconds.textContent = `${Math.trunc((deiffranceDate % minut)/second) <10?'0'+Math.trunc((deiffranceDate % minut)/second):Math.trunc((deiffranceDate % minut)/second)} `;
            
            if (deiffranceDate <= 0) {
                clearInterval(counter)
                days.textContent=`00`
                hours.textContent = `00`
                minuts.textContent = `00`
                 seconds.textContent=`00`
               
            }
        }, 1000);

      
  

///////////////////////////////////////////////////////////////////



// (4) Making the skills Section Dynamic make the progress bar Sync with the dergree o the skill span
htmlProgress.style.width=`${htmlSpan.textContent}`
cssProgress.style.width = `${cssSpan.textContent}`
jsProgress.style.width = `${jsSpan.textContent}`
reactProgress.style.width = `${reactSpan.textContent}`
///////////////////////////////////////////////////////////////////



// (5) making the vedio Section more dynamic
vedioList.forEach(li => {
    li.addEventListener('click',function () {
        vedioInfo.textContent = li.firstChild.textContent
        
    })
    
    li.addEventListener('click', function () {
        switch (this.dataset.vedio) {
            case 'subdomain': {
                image.setAttribute("src", "images/subdomain1.jpg")
                break;
            }
            case 'maincraft': {
                image.setAttribute("src", "images/minecraft-g428b0ad57_1280.png")
                break;
            }
            case 'hosts': {
                image.setAttribute("src", "images/virtual-host.jpg")
                break;
            }
            case 'CSS': {
                image.setAttribute("src", "images/css.jpg")
                break;
            }
            case 'DNS': {
                image.setAttribute("src", "images/dns.jpg")
                break;
            }
            case 'javascript': {
                image.setAttribute("src", "images/js-librabry.jpg")
                break;
            }
            case 'FarCry': {
                image.setAttribute("src", "images/far cry.jpg")
                break;
            }
        }
        
    })
})

shuffle.addEventListener('click', function () {
    this.classList.toggle('clicked')
    vedioList[Math.floor(Math.random() * vedioList.length)].click()
})


///////////////////////////////////////////////////////////////////

// (6)

burger.onclick = function () {
       if (navmenu.classList.contains('show-nav-menu')) {
           navmenu.classList.remove("show-nav-menu")
          megaMenu.classList.remove('show-mega-menu')
          
    } else {
        navmenu.classList.add('show-nav-menu')
    }
}
//////////////////////////////////////////////////////////////////

//(7)
window.addEventListener('scroll',function () {
    if (window.scrollY >= skillSection.offsetTop -150) {
         htmlProgress.style.width = `${htmlSpan.dataset.skill}`
        cssProgress.style.width = `${cssSpan.dataset.skill}`
        jsProgress.style.width = `${jsSpan.dataset.skill}`
         reactProgress.style.width=`${reactSpan.dataset.skill}`
        htmlSpan.textContent = `${htmlSpan.dataset.skill}`
        cssSpan.textContent = `${cssSpan.dataset.skill}`
        jsSpan.textContent = `${jsSpan.dataset.skill}`
         reactSpan.textContent=`${reactSpan.dataset.skill}`
       
    }
})
//////////////////////////////////////////////////////////////////////

//(8)
window.addEventListener('scroll',function () {
    if (window.scrollY >= stateSection.offsetTop - 300) {
        
        stateSpans.forEach(ele => increaseCount(ele))
           
        
    
    }
    function increaseCount(element) {
        let goal = element.dataset.state;
        let count = setInterval(() => {
        
            if (element.textContent !== goal) {
               element.textContent++;
            } else {
                 clearInterval(count)
            }
        
        }, (2000 / goal))

    }
}) 

///////////////////////////////////////////////////////////////////////////