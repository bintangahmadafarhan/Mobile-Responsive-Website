function checkNominal() {
  const nominalInput = document.getElementById("exampleInputNominal");
  const nominalValue = parseInt(nominalInput.value);
  const errorDiv = document.getElementById("error");
  const myAlert = document.getElementById("myAlert");

  errorDiv.innerHTML ="";
  
  if (isNaN(nominalValue) || nominalValue !== 200000) {
    errorDiv.innerHTML = "Nominal salah";
    nominalInput.value = "";
  } else {
    errorDiv.innerHTML = "";
    myAlert.style.display = "block";
  }
}

document.getElementById("exampleInputNominal").addEventListener("keydown", function(event) {
  event.preventDefault();

  if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
      event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) ||
      (event.keyCode >= 35 && event.keyCode <= 39) ||
      (event.keyCode >= 48 && event.keyCode <= 57 && !event.shiftKey) ||
      (event.keyCode >= 96 && event.keyCode <= 105 && !event.shiftKey)) {
      }
  });

  const inputRekening = document.querySelector("#exampleInputNoRekening");

  function hanyaAngka(evt){
    let charcode = (evt.which) ? evt.which : event.keyCode

    if (charcode > 31 && (charcode < 48 || charcode > 57))
    return false;
    return true;
  }
  inputRekening.addEventListener("keydown", function(event) {
    if (!hanyaAngka(event)) {
      event.preventDefault();
    }
  });