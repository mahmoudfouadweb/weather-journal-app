/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

setTimeout(() => {
    console.log("custom");
}, 1500);

setTimeout(() => {
    console.log('third')
}, 500);

function sync() {
    console.log('first')
}
sync()
console.log('last');

function bla(x) {
    x = console.log('lag')

}
bla()

let promise = new promise(function(resolve, reject) {

    if() {
        resolve('bla');
    }else{
        reject('blabla');
    }
})

// const postdata = async (url = '', data = {} => {

//     const response = await fetch(url, {
//     method: 'post',
//     credentials: 'same-origin',
//     headers: {'content-type': 'application/json',},
//     body: JSON.stringify(data),
//     });




// });

// const postData = async (url = '', data {} => {
//     const response = await fetch(url, {
//         method: 'post',
//         Credentials: 'same-origin',
//         headers: {
//             'content-type': 'application-json',
//         },
//         body: JSON.stringify(data),
//     });
//     try {

//     }
// });


// const postData = async (url = '', data = {} => {
//     const response = await fetch(url, {
//         method: 'post',
//         credentials: 'same-origin',
//         headers: {
//           'content-type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     try {
//         const newData = await response.json();
//         return newData
//     }catch(error) {
//         console.log('error', error);
//     }
// })

const postData = async (url = '', data {} {
    const res = await fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
           ' content-type': 'application/json',
        },
        body: JSON.stringify(data)
        
    })
    try{
        const newData = await res.JSON();
        return newData
    }catch(error){
        console.log((error),'error');
    }
});
// test
const baseUrl = 'http//www.google.com/maps/distance/';
const apiKey = 'fwehkjk93nr3jk32nj32j32k23m';

document.getElementById('weather').addEventListener('click', performaction)

function performaction(e) => {
    const newData = await fetch()
}