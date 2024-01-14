// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=d20aad1e&s=avengers',
//     success: movies => console.log(movies)
// })

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response))
//         }
//     }else{
//         console.log(xhr.responseText)
//     }
// }
// xhr.open('get','http://www.omdbapi.com/?apikey=d20aad1e&s=avengers')
// xhr.send()

// const movies = fetch('http://www.omdbapi.com/?apikey=d20aad1e&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response))

// Promise
// Object yang merepreesentasikan kebeerhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejcted / pending)
// callback (resolve / reject / finnaly)
// aksi (then / catch)

// contoh 1
// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati!')
//     }else{
//         reject('Ingkar janji..')
//     }
// }
// )

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa wawktu!')
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!')
//         }, 2000);
//     }
// })

// console.log('mulai')
// console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))
// console.log('akhir')

// Promise.all()

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul: `Avengers`,
            sutradara: `Refi`,
            pemeran: `RR`
        }])
    },1000)
})

const cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            kota: `Karawang`,
            temp: 40,
            kondisi: `panas`
        }])
    },500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
    // .then(response => console.log(response)) 
    .then(response => {
        const [film, cuaca] = response;
        console.log(film)
        console.log(cuaca)
    })