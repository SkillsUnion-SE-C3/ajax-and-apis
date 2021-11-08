const button = document.querySelector('button');

button.addEventListener('click', () => {
  alert('You clicked me!');

  let paragraph = document.createElement('p');
  paragraph.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(paragraph);
});