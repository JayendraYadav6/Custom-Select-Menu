let selectField = document.querySelector('#selectField');

let selectText = document.querySelector('#selectText');

let options = document.querySelectorAll('.options');

let arrowIcon = document.querySelector('.ri-arrow-drop-down-line');

let list = document.querySelector('#list');



selectField.onclick = function(){
 list.classList.toggle('hide');
 arrowIcon.classList.toggle('rotate');
}



for(option of options){
  option.onclick = function(){
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  }
}