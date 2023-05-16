import 'src/app/evaluation/evaluation.component.scss'
import './'

const buttons = document.querySelectorAll('waves');

buttons.forEach((button) => {
  createContentWrapper(button);
  const wavesWrapper = createWavesWrapper(button);
  button.addEventListener("click", ($event) => {
    const {offsetX, offsetY} = $event;

    console.log(offsetX,offsetY);
  });
})

function createContentWrapper(button){
  const content = button.innerHTML;
  button.innerHTML ='';
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper');
  contentWrapper.innerHTML = content;
  button.appendChild(contentWrapper);
}

function createWavesWrapper(button){
  const wavesWrapper = document.createElement('div');
  wavesWrapper.classList.add('wave-wrapper');
  button.appendChild(wavesWrapper);
  return wavesWrapper;
}
