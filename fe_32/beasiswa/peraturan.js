//Persyaratan to Peraturan
const persyaratanButton = document.querySelector('.persyaratan');
persyaratanButton.addEventListener('click', function() {
  window.location.href = 'peraturan.html';
});

// cari tombol dengan class "daftar"
var daftarButton = document.querySelector(".daftar");

// tambahkan event listener untuk "click"
daftarButton.addEventListener("click", function() {
  // arahkan halaman ke upload.html
  window.location.href = "upload.html";
});
