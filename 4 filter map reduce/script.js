const angka = [-5, 52,2,90,0,-22]

// mencari angka >= 3
// for
// const newAngka = [8,9]
// for(let i = 0; i< angka.length; i++){
//     if(angka[i] >=3){
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)

// filter
// const newAngka = angka.filter(function(a){
//     return a >= 3;
// });
// 
// const newAngka = angka.filter(a => a >= 3)
// console.log(newAngka)

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a *2);
// console.log(newAngka)

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5)
// console.log(newAngka)

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc,cur) => acc + cur );
console.log(hasil)