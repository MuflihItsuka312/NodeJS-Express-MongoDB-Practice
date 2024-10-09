function cosas(cosasu) {
    return `Halo nama saua ${cosasu}`;
}

const sigma = "bryan";

const budak = {
    nama: "jebon",
    umur: 69,
    printbudak(){
    return `Halo nama saya ${this.nama} dan umur saya ${this.umur}`;
 }
}

module.exports.sigma = sigma;
module.exports.cosas = cosas;
module.exports.budak = budak;