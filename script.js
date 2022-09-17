var menu = document.querySelector('.menulogoimg');
var mini_nav = document.querySelector('.smallnav');
mini_nav.style.display = 'none';
console.log(2 + 2);

menu.addEventListener('click', function(e){
    e.preventDefault();

    
    if(mini_nav.style.display == 'none'){
        mini_nav.style.display = 'block';
        menu.src = ('img/menu close.png');
    }
    else{
        mini_nav.style.display = 'none';
        menu.src = ('img/menu-button-of-three-horizontal-lines.png');
    }
})