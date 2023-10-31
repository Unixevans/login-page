function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user == 'admin' && password == 'admin') {
        alert("Selamat Anda Berhasil Login!");
        window.location = "https://unixevans.github.io/proyek-web-pkwu/";
    } else {
        alert("User dan Password Salah!");
    }


}   