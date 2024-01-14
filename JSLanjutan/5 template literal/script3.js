// Tagged Templates
// const nama = 'Refi Yusuf Pradana';
// const umur = 20;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str,i) =>{
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result

//     return strings.reduce((result,str,i) => `${result}${str}${values[i] || ''}`,'');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Refi Yusuf Pradana';
const umur = 20;
const email = 'reffypradana10@gmail.com'

function coba(strings, ...values){
    // let result = '';
    // strings.forEach((str,i) =>{
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result

    return strings.reduce((result,str,i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun. email saya adalah ${email}`;
document.body.innerHTML = str;