const nama = "sidik maulana";
let usia = 17;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let golongan;

    if (usia > 10 && usia < 18) {
        golongan = "golongan remaja";
    }
    else if (usia > 18 && usia < 30) {
        golongan = "golongan dewasa";
    }
    else if (usia >= 30) {
        golongan = "golongan tua";
    }
    else if (usia > 2 && usia < 10) {
        golongan = "golongan anak anak";
    }
    else {
        golongan = "golongan bayi";
    }
    return biodata.innerHTML = golongan;
}

console.log(nama);
console.log(usia);

generateBiodata();