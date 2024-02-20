

function ChangeBGB() {
    localStorage.setItem('theme','dark');
    document.getElementById('header-linebg').style.backgroundColor = '#222222';
    document.getElementById('header-linebg').style.boxShadow = '0px 3px 10px black';
    document.getElementById('mainbg').style.backgroundColor = '#141414';
    document.getElementById('name').style.color = 'white';
    document.getElementById('theme').style.fill = 'white';
    document.getElementById('avatar').style.border = '2px solid white';
    document.getElementById('button-changebg-container').style.border = '2px solid white';
    document.getElementById('black').style.border = '2px solid white';
    document.getElementById('links-btns').style.border = '3px solid white';
    document.getElementById('twitch').style.fill = 'white';
    document.getElementById('tg').style.fill = 'white';
    document.getElementById('youtube').style.fill = 'white';
    document.getElementById('tiktok').style.fill = 'white';
    document.getElementById('instagram').style.fill = 'white';
    document.getElementById('discord').style.fill = 'white';
    document.getElementById('h4').style.color = 'white';
    document.getElementById('ptwitch').style.color = 'white';
    document.getElementById('ptg').style.color = 'white';
    document.getElementById('pyoutube').style.color = 'white';
    document.getElementById('pinst').style.color = 'white';
    document.getElementById('pds').style.color = 'white';
    document.getElementById('ptiktok').style.color = 'white';
}
function ChangeBGW() {
    localStorage.setItem('theme','white');
    document.getElementById('header-linebg').style.backgroundColor = 'white';
    document.getElementById('header-linebg').style.boxShadow = '0px 3px 10px black';
    document.getElementById('mainbg').style.backgroundColor = 'white';
    document.getElementById('name').style.color = 'black';
    document.getElementById('theme').style.fill = 'black';
    document.getElementById('avatar').style.border = '2px solid black';
    document.getElementById('button-changebg-container').style.border = '2px solid black';
    document.getElementById('black').style.border = '2px solid black';
    document.getElementById('links-btns').style.border = '3px solid black';
    document.getElementById('twitch').style.fill = 'black';
    document.getElementById('tg').style.fill = 'black';
    document.getElementById('youtube').style.fill = 'black';
    document.getElementById('tiktok').style.fill = 'black';
    document.getElementById('instagram').style.fill = 'black';
    document.getElementById('discord').style.fill = 'black';
    document.getElementById('h4').style.color = 'black';
    document.getElementById('ptwitch').style.color = 'black';
    document.getElementById('ptg').style.color = 'black';
    document.getElementById('pyoutube').style.color = 'black';
    document.getElementById('pinst').style.color = 'black';
    document.getElementById('pds').style.color = 'black';
    document.getElementById('ptiktok').style.color = 'black';
}



if (localStorage.getItem('theme')==='dark') {
    ChangeBGB();
    
}
else if(localStorage.getItem('theme')==='white') {
    ChangeBGW();
}
