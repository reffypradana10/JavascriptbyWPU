// Function Expression
// const tampilNama = function (nama){
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Refi'));

// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('refi','malam'))

// implisit return
// const tampilNama = nama => `Halom, ${nama}`;
// console.log('Refi Yusuf Pradana')

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ['refi', 'juan', 'aa'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf)

// konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function (){
//     this.nama = 'Refi';
//     this.umur = 20;
//     this.sayhello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const refi = new Mahasiswa();

// Object Literal
// const mhs1 = {
//     nama: 'refi yusuf pradana',
//     umur: 20,
//     sayhello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this);
//     }
// }

// const Mahasiswa = function (){
//     this.nama = 'Refi';
//     this.umur = 20;
//     this.sayhello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++)
//     },500)
// }

// const refi = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click',function(){

    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu]
    }


    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
});