function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
$('#chooseFile').bind('change', function () {
    var filename = $("#chooseFile").val();
    if (/^\s*$/.test(filename)) {
      $(".file-upload").removeClass('active');
      $("#noFile").text("No file chosen..."); 
    }
    else {
      $(".file-upload").addClass('active');
      $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
    }
  });
var popup = document.getElementsByClassName("popup");
var submit = document.getElementsByClassName("form_input_submit");
var close = document.getElementsByClassName("close");
var radios = document.getElementsByClassName("form_input--radio");

var Name = document.forms["form"]["Name"];
var email = document.forms["form"]["email"];
var day = document.forms["form"]["day"];
var month = document.forms["form"]["month"];
var year = document.forms["form"]["year"];
var Gender = document.forms["form"]["gender"];
var Password = document.forms["form"]["password"];
var formComplete = false;
var radio = false;

function testForm() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radio = true; // checked
    }
  }

  if (
    Name.value != "" &&
    email.value != "" &&
    day.value != "" &&
    month.value != "" &&
    year.value != "" &&
    Password.value != "" &&
    radio
  ) {
    formComplete = true;
    popupShow();
  } else {
    alert("please fill in the form");
  }
}

submit[0].addEventListener("click", testForm);
close[0].addEventListener("click", popupHide);

function popupShow() {
  if (formComplete) {
    popup[0].classList.add("popup--show");
  } else {
    alert("please fill in the form");
  }
}

function popupHide() {
  popup[0].classList.remove("popup--show");
}