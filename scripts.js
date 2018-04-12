const dropdown = document.getElementsByClassName("drop-down")[0];
const centered = document.getElementsByClassName("centered")[0];
const navlink = document.getElementsByClassName("nav-link")[0];
function navdropdown(){
    if (dropdown.style.height === '55px'){
        console.log("hit");
        
        dropdown.style.height = '268px' ;
        centered.style.height = '253px' ;
        navlink.style.display = 'block' ;
        } else {
        dropdown.style.height = '55px';
        centered.style.height = '40px';
        navlink.style.display = 'none';
    }
}