//Class1 Mobil
class Mobil {
    constructor(nama) {
        this.nama = nama;
    }

    jenisDanWarna() {
        console.log(`Mobil ${this.nama} memiliki jenis dan warna.`);
    }
}

class Sedan extends Mobil {
    jenisDanWarna() {
        console.log(`Mobil ${this.nama} adalah sedan dan memiliki warna hitam.`);
    }
}

class SUV extends Mobil {
    jenisDanWarna() {
        console.log(`Mobil ${this.nama} adalah SUV dan memiliki warna merah.`);
    }
}

let daftarMobil = [new Sedan('Toyota Camry'), new SUV('Honda CR-V')];
daftarMobil.forEach(mobil => mobil.jenisDanWarna());


//Class2 Ikan
class Ikan {
    constructor(nama) {
        this.nama = nama;
    }

    jenisIkan() {
        console.log(`Ikan ini adalah ${this.nama}.`);
    }
}

class Salmon extends Ikan {
    jenisIkan() {
        console.log(`Ikan ini adalah ${this.nama}, dan termasuk dalam keluarga salmon.`);
    }
}

class Lele extends Ikan {
    jenisIkan() {
        console.log(`Ikan ini adalah ${this.nama}, dan termasuk dalam keluarga lele.`);
    }
}

let daftarIkan = [new Salmon('Salmon'), new Lele('Lele')];
daftarIkan.forEach(ikan => ikan.jenisIkan());


//Class3 Mamalia
class Mamalia {
    constructor(nama) {
        this.nama = nama;
    }

    jenisMamalia() {
        console.log(`Mamalia ini adalah ${this.nama}.`);
    }
}

class Kucing extends Mamalia {
    jenisMamalia() {
        console.log(`Mamalia ini adalah ${this.nama}, dan termasuk dalam keluarga kucing.`);
    }
}

class Anjing extends Mamalia {
    jenisMamalia() {
        console.log(`Mamalia ini adalah ${this.nama}, dan termasuk dalam keluarga anjing.`);
    }
}

let daftarMamalia = [new Kucing('Persia'), new Anjing('Golden Retriever')];
daftarMamalia.forEach(mamalia => mamalia.jenisMamalia());


//class4 musik
class musik {
    constructor (genre) {
        this.genre = genre
    }
    genremsuik(){
        console.log(`Musik ini bergenre ${this.genre}`)
    }
}   

class jazz extends musik {
    genremsuik() {
        console.log(`Musik ini bergenre ${this.genre} dan memiliki durasi 3 menit`)
    }
}

class pop extends musik {
    genremsuik() {
        console.log(`Musik ini bergenre ${this.genre} dan memiliki durasi 4 menit`)
    }
}

let Musik = [new jazz('jazz'), new pop('pop')]
Musik.forEach(musik => musik.genremsuik())