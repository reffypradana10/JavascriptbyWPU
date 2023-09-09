// 1. HTML Fragments
// const mhs = {
//     nama : 'refi',
//     umur : 20,
//     nrp : '088205617',
//     email : 'refy@gmail.cm'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class"nrp">${mhs.nrp}</span>
//     </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: 'refi uy',
//         email: 'refi@gg.com'
//     },
//     {
//         nama: 'ffasfa',
//         email: 'safa@ffff.co'
//     },
//     {
//         nama: 'rerere',
//         email: 'ss@gamai.co'
//     }
// ]

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'refi yusuf pradana',
    semester: 1,
    mataKuliah: [
        'MTK',
        'Data Sains',
        'Sistem Komputer'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
     <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
     </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;