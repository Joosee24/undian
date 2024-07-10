$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault(); // Menghentikan submit form bawaan

    var formData = $(this).serialize(); // Ambil data form dalam bentuk serialized

    $.ajax({
      type: "POST",
      url: "login.php", // Ganti dengan URL atau path ke halaman login
      data: formData,
      success: function (response) {
        console.log("Login berhasil:", response);
        // Redirect ke halaman dashboard jika login berhasil
        window.location.href = "dashboard.php";
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        alert("Login gagal. Silakan coba lagi.");
      },
    });
  });
});
