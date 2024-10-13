class Sepeda { 
    constructor(nama, merk, tahun, jenis) {
        this.nama = nama;
        this.merk = merk;
        this.tahun = tahun;
        this.jenis = jenis;
    }

    infoSepeda() {
        return `Sepeda ${this.nama} adalah merk ${this.merk}, diproduksi pada tahun ${this.tahun}, dengan jenis ${this.jenis}.`;
    }
}

class SepedaGunung extends Sepeda {
    constructor(nama, merk, tahun, jenis, suspensi) {
        super(nama, merk, tahun, jenis);
        this.suspensi = suspensi; 
    }

    infoSepeda() {
        return `${super.infoSepeda()} Sepeda ini memiliki suspensi ${this.suspensi}.`;
    }
}

class SepedaBalap extends Sepeda {
    constructor(nama, merk, tahun, jenis, kecepatanMaks) {
        super(nama, merk, tahun, jenis);
        this.kecepatanMaks = kecepatanMaks; 
    }

    infoSepeda() {
        return `${super.infoSepeda()} Sepeda ini memiliki kecepatan maksimum ${this.kecepatanMaks} km/jam.`;
    }
}

class SepedaListrik extends Sepeda {
    constructor(nama, merk, tahun, jenis, kapasitasBaterai) {
        super(nama, merk, tahun, jenis);
        this.kapasitasBaterai = kapasitasBaterai; 
    }

    infoSepeda() {
        return `${super.infoSepeda()} Sepeda ini memiliki kapasitas baterai ${this.kapasitasBaterai} mAh.`;
    }
}

class SepedaBMX extends Sepeda {
    constructor(nama, merk, tahun, jenis, ukuranRoda) {
        super(nama, merk, tahun, jenis);
        this.ukuranRoda = ukuranRoda; 
    }

    infoSepeda() {
        return `${super.infoSepeda()} Sepeda ini memiliki ukuran roda ${this.ukuranRoda} inci.`;
    }
}

// Polimorfisme
const sepedaLipat = new Sepeda("Foldy", "Polygon", 2020, "lipat");
const sepedaGunung1 = new SepedaGunung("MountainPro", "Trek", 2022, "gunung", "depan dan belakang");
const sepedaBalap1 = new SepedaBalap("Speedster", "Specialized", 2021, "balap", 50);
const sepedaListrik1 = new SepedaListrik("Electro", "Xiaomi", 2023, "listrik", 10000);
const sepedaBMX1 = new SepedaBMX("StuntPro", "GT", 2019, "BMX", 20);

const sepedaList = [sepedaLipat, sepedaGunung1, sepedaBalap1, sepedaListrik1, sepedaBMX1];

// Menampilkan informasi dengan polimorfisme
sepedaList.forEach(sepeda => {
    console.log(sepeda.infoSepeda());
});



