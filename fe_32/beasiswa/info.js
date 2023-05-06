// Pendaftaran
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const ktp = document.querySelector('#ktp').value;
  const phone = document.querySelector('#phone').value;
  const gender = document.querySelector('#gender').value;
  const terms = document.querySelector('#terms').checked;
  const document = document.querySelector('#document').files[0];

  // do something with the form data
  console.log(name, ktp, phone, gender, terms, document);

  // reset form
  form.reset();
});



