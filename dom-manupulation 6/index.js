const div1 = document.querySelector('.one');
const div2 = document.querySelector('.two');
const div3 = document.querySelector('.three');
const div4 = document.querySelector('.four');
const div5 = document.querySelector('.five');
const button = document.getElementById('clickBtn');

div1.style.backgroundColor = 'lightblue';
div2.style.backgroundColor = 'lightgreen';
div3.style.backgroundColor = 'lightcoral';
div4.style.backgroundColor = 'lightpink';
div5.style.backgroundColor = 'lightyellow';

button.style.backgroundColor = 'darkblue';
button.style.color = 'white';
button.style.padding = '10px 20px';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';
button.style.fontSize = '16px';

button.addEventListener('click', () => {
    div5.style.backgroundColor = 'black';
    div5.style.color = 'white';

    const newDiv = document.createElement('div');
    newDiv.textContent = 'New Div Created!';
    newDiv.style.backgroundColor = 'orange';
    newDiv.style.color = 'white';
    newDiv.style.padding = '10px';
    newDiv.style.marginTop = '10px';

});
