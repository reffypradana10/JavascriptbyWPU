// Callback
// Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama)
// }

// tampilkanPesan(nama => alert (`Halo, ${nama}`))

const mhs = [
    {
        "nama" : "Refi Yusuf Pradna",
        "nrp" : "088230536317",
        "email" : "refi@gmail.com",
        "jurusan" : "Sistem Informasi",
        "idDosenWali" : 1
    },
    {
        "nama" : "Bellingham",
        "nrp" : "0882305636317",
        "email" : "bell@gmail.com",
        "jurusan" : "Sistem Informasi",
        "idDosenWali" : 1
    },
    {
        "nama" : "Raul Gonzales",
        "nrp" : "088230536317",
        "email" : "rg@gmail.com",
        "jurusan" : "Sistem Informasi",
        "idDosenWali" : 1
    }
];
// console.log('mulai')
// mhs.forEach(m =>{
//     for(let i=0; i<10000000; i++){
//         let date = new Date();
//     }
// console.log(m.nama)})
// console.log('mulai')

// Asynchronous callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }else if(xhr.status === 4044){
//                 error();
//             }
//         }
//     }

//     xhr.open('get',url);
//     xhr.send();
// }

// console.log('mulai')
// getDataMahasiswa('mahasiswa.json',results => {
//     const mhs = JSON.parse(results)
//     mhs.forEach(m => console.log(m.nama))
// },() => {
    
// })
// console.log('selesai')


// JQUERY
console.log('mulai')
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },
    error: (e) => {
        console.log(e)
    }
})
console.log('selesai')