function cetak_gambar(panjang){
    if (panjang % 2 === 0) {
        console.log(
            `Parameter harus bilangan ganjil!`
        );
        return;
    }

    let str = "";
    let nilaiTengah = Math.floor(panjang / 2);

    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            if (j === 0 || i === nilaiTengah || j === panjang - 1) {
                str += "* ";
            } else {
                str += "= ";
            }
        }
        str += "\n";
    }
    console.log(str);
};

cetak_gambar(5);
cetak_gambar(6);