const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')
const image = document.getElementById('image')
const container = document.getElementById('container')
const containerButton = document.getElementById('container_button')

image.addEventListener('click', openBiscuit)

let phrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  '1% melhor todo dia',
  'Se você ama alguém se esforce',
  'Honre a sua família'
]

function openBiscuit() {
  container.classList.toggle('second_container')
  title.innerHTML = "Aqui está a sua sorte de hoje:"
  image.src = './img/opened-cookie.png'
  containerButton.classList.remove('none')

  const randomIndex = Math.floor(Math.random() * phrases.length);
  subtitle.innerHTML = phrases[randomIndex]
  subtitle.classList.add('phrase')
}

containerButton.addEventListener('click', resetBiscuit)

function resetBiscuit() {
  title.innerHTML = "Qual é a sua sorte de hoje?";
  subtitle.innerHTML = "Abra o biscoito e descubra!";
  image.src = './img/fortune-cookie.png';
  container.classList.remove('second_container');
  subtitle.classList.remove('phrase');
  containerButton.classList.add('none');
}