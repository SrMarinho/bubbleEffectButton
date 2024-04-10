var createBubble = () => {
  var newElement = document.createElement("i");

  newElement.classList.add('bubble')

  newElement.style.setProperty('--x', String(radius * 2 * (Math.random() - 0.5)) + 'px');
  newElement.style.setProperty('--y', String(radius * 2 * (Math.random() - 0.5)) + 'px');
  let size = Math.random() * 8 + 2
  newElement.style.setProperty('width', String(size) + 'px');
  newElement.style.setProperty('height', String(size) + 'px');

  return newElement
}

var bubbleEffect = (e) => {
  bubbleList = e.target

  for (let index = 0; index < particles_number; index++) {
    let bubble = createBubble()
    bubbleList.appendChild(bubble)
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
}

var buttons = document.getElementsByClassName('btnBubbleEffect');

var radius = 100;
var particles_number = 30

Array.from(buttons).map((button) => {
  button.addEventListener('click', bubbleEffect);
})
