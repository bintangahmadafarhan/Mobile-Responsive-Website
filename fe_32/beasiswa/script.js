/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

const time_to_show_login = 400;
const time_to_hidden_login = 200;

function change_to_login() {
document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },time_to_show_login);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},time_to_hidden_login);  
  }

  const time_to_show_sign_up = 100;
  const time_to_hidden_sign_up = 400;

function change_to_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},time_to_show_sign_up);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},time_to_hidden_sign_up);  


}    

const time_to_hidden_all = 500;

function hidden_login_and_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},time_to_hidden_all);  
  
  }

  class FormVerification {
    static inputs = [];
  
    static switchTheme(themeName = `light`) {
      document.body.dataset.theme = themeName;
    }
  
    static handleInput(target) {
      let nextInput = target.nextElementSibling;
      if (nextInput && target.value) {
        nextInput.focus();
        nextInput.value && nextInput.select();
      }
    }
    static handleBackspace(target) {
      return target.value
        ? (target.value = "")
        : target.previousElementSibling.focus();
    }
    static handleArrowLeft(target) {
      const previousInput = target.previousElementSibling;
      return !previousInput ? undefined : previousInput.focus();
    }
    static handleArrowRight(target) {
      const nextInput = target.nextElementSibling;
      return !nextInput ? undefined : nextInput.focus();
    }
    static handlePaste(event, inputs) {
      // NOTE : get last text saved on clipboard
      let pasteText = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
  
      // NOTE : change inputs value with clipboard text
      inputs.forEach((input, index) => {
        input.value = pasteText[index] || ``;
      });
      event.preventDefault();
    }
  }
  
  function shortcut(element, key, handle, params) {
    element.addEventListener(`keydown`, (e) => {
      return e.key.toString().toLowerCase() == key && handle(element);
    });
  }
  
  (function () {
    FormVerification.switchTheme();
    const ThemeSwitcher = document.querySelector(`.theme`);
    ThemeSwitcher.onclick = () => {
      let currentTheme = ThemeSwitcher.innerHTML.toString().toLowerCase();
      let nextTheme =
        currentTheme === ` light `
          ? ` dark `
          : currentTheme === ` dark `
          ? ` dark-2 `
          : ` light `;
  
      FormVerification.switchTheme(nextTheme.trim());
      ThemeSwitcher.innerHTML = nextTheme.toUpperCase();
    };
  
    const verification = document.querySelector(`.verification`);
    const inputs = document.querySelectorAll(`.verification__input`);
    const sendNew = document.querySelector(`.verification__send_new`);
  
    sendNew.onclick = () => {
      verification.classList.remove(`verification--timed-out`);
      timer(10);
      return;
    };
  
    verification.addEventListener("input", ({ target }) =>
      FormVerification.handleInput(target)
    );
    verification.addEventListener("paste", (e) =>
      FormVerification.handlePaste(e, inputs)
    );
  
    inputs[0].onfocus = () => inputs[0].select();
    inputs[1].onfocus = () => inputs[1].select();
    inputs[2].onfocus = () => inputs[2].select();
    inputs[3].onfocus = () => inputs[3].select();
  
    shortcut(inputs[0], `backspace`, FormVerification.handleBackspace);
    shortcut(inputs[1], `backspace`, FormVerification.handleBackspace);
    shortcut(inputs[2], `backspace`, FormVerification.handleBackspace);
    shortcut(inputs[3], `backspace`, FormVerification.handleBackspace);
  
    shortcut(inputs[0], `arrowleft`, FormVerification.handleArrowLeft);
    shortcut(inputs[1], `arrowleft`, FormVerification.handleArrowLeft);
    shortcut(inputs[2], `arrowleft`, FormVerification.handleArrowLeft);
    shortcut(inputs[3], `arrowleft`, FormVerification.handleArrowLeft);
  
    shortcut(inputs[0], `arrowright`, FormVerification.handleArrowRight);
    shortcut(inputs[1], `arrowright`, FormVerification.handleArrowRight);
    shortcut(inputs[2], `arrowright`, FormVerification.handleArrowRight);
    shortcut(inputs[3], `arrowright`, FormVerification.handleArrowRight);
  
    // TODO : give code sending status `'sended' | true` then start below timeout counter
    timer(240);
  })();
  
  function timeFormat(duration = 0) {
    let minutes = ~~((duration % 3600) / 60);
    let seconds = ~~duration % 60;
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    return `${min} : ${sec}`;
  }
  
  function timer(
    seconds = 120,
    target = document.querySelector(`.verification__counter`)
  ) {
    target.innerHTML = timeFormat(seconds);
    if (seconds < 0) {
      target.innerHTML = `00 : 00`;
      document
        .querySelector(`.verification`)
        .classList.add(`verification--timed-out`);
      return;
    }
    return window.setTimeout(() => timer(seconds - 1), 1100);
    // return timer(seconds - 1);
  }  