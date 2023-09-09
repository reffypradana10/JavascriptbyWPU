// for..of
// const mhs = ['Refi', 'Yusuf', 'Pradana'];

// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs){
//     console.log(m);
// }

// String
// const nama = 'Refi';
// for (const n of nama){
//     console.log(n)
// }

// const mhs = ['Refi', 'Yusuf', 'Pradana'];
// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// });

// for(const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// }

// Nodelist
// const linama = document.querySelectorAll('.nama');

// linama.forEach(n => console.log(n.textContent))
// for (n of linama){
//     console.log(n.innerHTML)
// }


// arguments
// function jumlahkanAngka(){
    // return arguments.reduce((a,i) => a + i);
    // arguments.foreach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah +=a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5))

// for..in
const mhs = {
    nama: 'Refi Yusuf Pradana',
    umur: 20,
    email: 're22fi@gmail.com'
}

for (m in mhs){
    console.log(m)
}