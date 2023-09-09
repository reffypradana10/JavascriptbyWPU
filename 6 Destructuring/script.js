// Destructuring Variable / Assignment

// Destructuring Array
// const Perkenalan = ['Halo','nama','saya','Refi Yusuf Pradana'];

// skipping items
// const [salam, , , nama] = Perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [ b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(b)

// Rest parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values)

// Destructuring Object
// const mhs = {
//     nama: 'Refi Yusuf Pradana',
//     umur: 20
// }

// const {nama, umur} = mhs;
// console.log(nama)

// Assignment tanpa deklarasi object
// ({nama, umur} = {nama: 'Refi Yusuf Pradana',umur: 20});
// console.log(nama)

// Assign ke variabel baru
// const mhs = {
//     nama: 'Refi Yusuf Pradana',
//     umur: 20
// }

// const {nama: n, umur:u} = mhs;
// console.log(u)

// Memberikan Default Value
// const mhs = {
//     nama: 'Refi Yusuf Pradana',
//     umur: 20
// }
// const {nama, umur, email = 'refi@gmail.com'} = mhs;
// console.log(email)

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Refi Yusuf Pradana',
//     umur: 20,
//     email: 're22fi@gmail.com'
// }
// const {nama:n, umur:u, email:e = 'refi@gmail.com'} = mhs;
// console.log(e)

// Rest Parameter
// const mhs = {
//     nama: 'Refi Yusuf Pradana',
//     umur: 20,
//     email: 're22fi@gmail.com'
// }
// const {nama, ...value} = mhs;
// console.log(value)

// Mengambuk field pada object, seteelah dikirim sebagai parameter untu function
const mhs = {
    id: 123,
    nama: 'Refi Yusuf Pradana',
    umur: 20,
    email: 're22fi@gmail.com'
}

function getIdMhs({id,nama}){
    return nama;
}

console.log(getIdMhs(mhs))