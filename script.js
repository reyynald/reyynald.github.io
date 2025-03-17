document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".container3, .container4, .container5");

    function checkScroll() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil saat halaman dimuat
});

function kirimWhatsApp() {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
    }

    let nomorWhatsApp = "6285240118145"; // Ganti dengan nomor WhatsApp tujuan
    let teksPesan = `Halo, saya ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;

    let url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${teksPesan}`;
    window.open(url, "_blank");
}

const text = "Saya adalah seorang mahasiswa Ilmu Komputer yang memiliki minat besar dalam pengembangan perangkat lunak dan teknologi. Saat ini, saya sedang mendalami pemrograman, struktur data, dan kecerdasan buatan untuk mengasah keterampilan saya dalam menciptakan solusi inovatif. Saya memiliki pengalaman dalam menggunakan bahasa pemrograman seperti Python, Java, dan JavaScript, serta memahami konsep dasar pengelolaan basis data.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Kecepatan mengetik (50ms per huruf)
    } else {
        setTimeout(resetText, 2000); // Tunggu 2 detik sebelum mengulang
    }
}

function resetText() {
    document.getElementById("typing-text").innerHTML = "";
    index = 0;
    typeWriter();
}

window.onload = typeWriter;