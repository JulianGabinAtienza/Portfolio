const body = document.querySelector('body');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Get the value property of the input elements
const leftColor = left.value;
const rightColor = right.value;

// Apply linear gradient background to the elements
body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;

left.addEventListener('input', () => {
  body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`;
  left.style.border = `3px solid ${left.value}`;
  if (left.value === '#ffffff') {
    left.style.color = '#000000';
} else if (left.value === '#000000') {
    left.style.color = '#ffffff';
} else {
    left.style.border = `3px solid ${left.value}`;
}
});

right.addEventListener('input', () => {
    body.style.background = `linear-gradient(to right, ${left.value}, ${right.value})`;
    if (right.value === '#ffffff') {
        right.style.color = '#000000';
    } else if (right.value === '#000000') {
        right.style.color = '#ffffff';
    } else {
        right.style.border = `3px solid ${right.value}`;
    }
});
