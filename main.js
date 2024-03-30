// for showing menu . when we cink the menu icon it opens the menu folder


const showMenu = (toggleid,navid)=>{

    const toggle =document.getElementById(toggleid),
    nav = document.getElementById(navid)


    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('toggle','nav_menu')


// Active and remove active when we click the button 

const navlink = document.querySelectorAll('.link')
navlink.forEach(n => n.classList.remove('active'))

function method1(){

    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // to open and close the show folder 

    const menu = document.getElementById('nav_menu')

    menu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',method1))