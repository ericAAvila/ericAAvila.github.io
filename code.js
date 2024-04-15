function check(){
    const input = document.getElementById('code');
    const valid = "07/30/2016"
    if(input.value == valid) {
        window.location.href = 'kenny.html';
    } else {
        alert('Password is incorrect, please enter the correct password.');
    }
    input.value = '07/30/2016';
}

document.getElementById('code').addEventListener('keypress',function(event) {
    if(event.key == 'Enter') {
        checkCode();
    }
});