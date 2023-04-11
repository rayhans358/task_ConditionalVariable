// Conditional variable
let name = "pitri";
let gender = "wanita";

let identity = (gender === "pria") ? `Hallo pak ${name}` : `Hallo bu ${name}`;

// Menampilkan output
console.log(identity);

// Assign variable
const nama = "Roman";
const nilai = 50;
const absen = 7;

// Kondisional menggunakan ternary operator untuk menentukan kategori nilai
const score = (nilai < 0 || nilai > 100) ? `Nilai Invalid` :
              (nilai >= 80 && nilai <= 100) ? `A` :
              (nilai >= 60 && nilai < 80) ? `B` :
              (nilai >= 40 && nilai < 60) ? `C` :
              (nilai >= 20 && nilai < 40) ? `D` : `E`;

// Kondisional menggunakan ternary operator untuk menentukan keterangan
const output = (absen < 5 && score !== "E") ? `Selamat ${nama} lulus, dengan score: ${score}` : `Mohon maaf ${nama} tidak lulus, dengan score: ${score}`;

// Menampilkan output
console.log(output);
