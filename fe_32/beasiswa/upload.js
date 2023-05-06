
const form1 = document.forms[0];
const form2 = document.forms[1];
const nameInput = document.getElementById('name');
const ktpInput = document.getElementById('ktp');
const phoneInput = document.getElementById('phone');
const genderInput = document.getElementById('gender');
const termsInput = document.getElementById('terms');
const documentInput = document.getElementById('document');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (nameInput.value === '' || ktpInput.value === '' || phoneInput.value === '' || genderInput.value === '' || !termsInput.checked || documentInput.value === '') {
    alert('Harap isi semua bidang formulir.');
  } else {
    alert('Formulir berhasil diisi!');
    form1.reset();
    form2.reset();
  }
});
