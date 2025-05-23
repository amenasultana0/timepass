document.querySelector('.SwitchOn').onclick = () => {
    document.getElementById('image').src = 'bulb_on.png';
    document.getElementById('msg1').textContent='You are an idiot so just dont try!';
    document.getElementById('msg2').textContent='';
}
document.querySelector('.SwitchOff').onclick = () => {
    document.getElementById('image').src = 'bulb_off.png';
    document.getElementById('msg1').textContent='';
    document.getElementById('msg2').textContent='Trying to feel good by switching it off again? Idiot Sad 🙂';
}
