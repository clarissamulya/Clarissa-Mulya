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

    infoSepedaGunung() {
        return `${this.infoSepeda()} Sepeda ini memiliki suspensi ${this.suspensi}.`;
    }
}

const sepedaLipat = new Sepeda("Foldy", "Polygon", 2020, "lipat");
const sepedaBalap = new Sepeda("Speedster", "Specialized", 2021, "balap");

const sepedaGunung1 = new SepedaGunung("MountainPro", "Trek", 2022, "gunung", "depan dan belakang");

console.log(sepedaLipat.infoSepeda());
console.log(sepedaBalap.infoSepeda());
console.log(sepedaGunung1.infoSepedaGunung());
