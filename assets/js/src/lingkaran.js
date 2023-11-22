const formBil1 =  document.getElementById('bil1')
const formResult =  document.getElementById('result')
const formSelect =  document.getElementById('select')
const formproses =  document.getElementById('proses')
const formReset =  document.getElementById('reset')
let bil1
let result
formSelect.addEventListener('change', (e) => {

    const selectedIndex = formSelect.options[formSelect.selectedIndex].value
    if (selectedIndex == "Jari"){
        console.log(formBil1)
        formBil1.setAttribute('placeholder', 'Masukkan Luas', true)
        formproses.addEventListener('click', (e) => {
        
              result = bil1 / (2 * 22/7) + ' cm'
            if(isNaN(bil1) || bil1 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Luas"){
        console.log(formBil1)
        formBil1.setAttribute('placeholder', 'Masukkan Jari-jari', true)
        formproses.addEventListener('click', (e) => {
        
            result = 22/7 * (parseFloat(bil1)*parseFloat(bil1)) + ' cm'
            console.log(result)
            if(isNaN(bil1) || bil1 ==""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
})

formReset.addEventListener('click', (e) => {
    formBil1.value = null
    formResult.value = null
    result.value = null
    bil1 = ""
})

formBil1.addEventListener('blur', (e) => {

    const nilaiBil1 = document.querySelector('#bil1').value
    if(isNaN(nilaiBil1)){ alert('Nilai harus berupa angka!!!') }
    bil1 = nilaiBil1
    console.log(nilaiBil1)
})

// const Luas = document.querySelector('#lingkaran')
// const Jari = document.querySelector('#Jari2')
// const Reset = document.getElementById('reset')
// const Proses = document.getElementById('proses')
// let luas = ''
// let jari = ''

// const ambilPilihan = () => {
//     const opt = document.getElementById('select')
//     // console.log(option.length)
//     const selectedValue = opt.options[opt.selectedIndex].value;
//     if(selectedValue == 'Jari'){
//         Jari.setAttribute('disabled', 'true')
//         if(Luas.hasAttribute('disabled')){
//             Luas.removeAttribute('disabled')
//         }
//         Proses.addEventListener('click', () => {
//             const hasil = document.querySelector('#Jari2')
//             const result = luas / (2 * 3.14) + ' cm'
//             hasil.value = isNaN(luas) ? 'Besaran harus berupa angka!!' : result
//         })
//     }else if(selectedValue == 'Luas'){
//         Luas.setAttribute('disabled', 'true')
//         if(Jari.hasAttribute('disabled')){
//             Jari.removeAttribute('disabled')
//         }
//         Proses.addEventListener('click', () => {
//         const hasil = document.querySelector('#lingkaran')
//         const result = 3.14 * (jari*jari) + ' cm²'
//         hasil.value = isNaN(jari) ? 'Besaran harus berupa angka!!' : result
//         })
//     }
//     Reset.addEventListener('click', () => {
//         Jari.setAttribute('disabled', true)
//         Luas.setAttribute('disabled', true)
//     })
// }

// Jari.addEventListener('blur', () => {
//     const nilaiJari = document.querySelector('#Jari2').value
//     if(isNaN(nilaiJari)){ alert('Nilai harus berupa angka!!!') }
//     jari = nilaiJari
//     console.log(nilaiJari)
// })
// Luas.addEventListener('blur', () => {
//     const nilaiLuas = document.querySelector('#lingkaran').value
//     if(isNaN(nilaiLuas)){ alert('Nilai harus berupa angka!!!') }
//     luas = nilaiLuas
//     console.log(nilaiLuas)
// })

// // const jari = () => {
// //     const nilaiJari = document.querySelector('#Jari2').value
// //     if(isNaN(nilaiJari)){ alert('Nilai harus berupa angka!!!') }
// //     Jari = nilaiJari
// // }

// const proses = () => {
//     const hasil = document.querySelector('#lingkaran')
//     const result = (Jari*Jari) * 3.14 + ' cm²'
//     hasil.value = isNaN(Jari) ? 'Besaran harus berupa angka!!' : result
// } 