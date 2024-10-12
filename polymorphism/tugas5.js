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

//polimorfisme
const sepedaLipat = new Sepeda("Foldy", "Polygon", 2020, "lipat");
const sepedaGunung1 = new SepedaGunung("MountainPro", "Trek", 2022, "gunung", "depan dan belakang");
const sepedaBalap1 = new SepedaBalap("Speedster", "Specialized", 2021, "balap", 50);

const sepedaList = [sepedaLipat, sepedaGunung1, sepedaBalap1];

// Menampilkan informasi dengan polimorfisme
sepedaList.forEach(sepeda => {
    console.log(sepeda.infoSepeda());
});
