let click=1;
function change(){
    var img=document.getElementById('log');
    
    
    if(click%2==1){
        document.documentElement.style.setProperty('--second-color','#19fc04');
        
        document.documentElement.style.setProperty('--main-color','#ff0000');
        click=click+1;
        img.src='Roshan (5).png'
    }
    else{
        document.documentElement.style.setProperty('--second-color','#ff0000');
        document.documentElement.style.setProperty('--main-color','#19fc04');
        click=click+1;
        img.src='Roshan (4).png'   
    }
        
    
    
}
 function showsidebar(){
    
    let navbar = document.querySelector('.navbar');
    let menuIcon = document.querySelector('#menu-icon');
    let navlinks = document.querySelectorAll('header nav a');
    let sections = document.querySelectorAll('section');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    window.onscroll= () =>{
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height){
                navlinks.forEach(links=>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+id+' ]').classList.add('active');
            })
        }
        
    })
}

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}