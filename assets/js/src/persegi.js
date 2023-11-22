const formBil1 =  document.getElementById('bil1')
const formResult =  document.getElementById('result')
const formSelect =  document.getElementById('select')
const formproses =  document.getElementById('proses')
const formReset =  document.getElementById('reset')
let bil1
let result
formSelect.addEventListener('change', (e) => {
    e.preventDefault()
    const selectedIndex = formSelect.options[formSelect.selectedIndex].value
    if (selectedIndex == "Sisi"){
        formBil1.setAttribute('placeholder', 'Masukkan Luas', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = Math.sqrt(bil1) + ' cm'
            if(isNaN(bil1) || bil1 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Luas"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
            result = bil1*bil1 + ' cm'
            if(isNaN(bil1) || bil1 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
})

formReset.addEventListener('click', (e) => {
    e.preventDefault()
    formBil1.value = null
    formResult.value = null
    bil1 = ""
})

formBil1.addEventListener('blur', (e) => {
    e.preventDefault()
    const nilaiBil1 = document.querySelector('#bil1').value
    if(isNaN(nilaiBil1)){ alert('Nilai harus berupa angka!!!') }
    bil1 = nilaiBil1
    console.log(nilaiBil1)
})

// const Luas = document.querySelector('#persegi')
// const Sisi = document.querySelector('#sisi')
// const Reset = document.getElementById('reset')
// const Proses = document.getElementById('proses')

// const ambilPilihan = () => {
//     const opt = document.getElementById('select')
//     const selectedValue = opt.options[opt.selectedIndex].value;
//     if(selectedValue == 'Sisi'){
//         Sisi.setAttribute('disabled', 'true')
//         if(Luas.hasAttribute('disabled')){
//             Luas.removeAttribute('disabled')
//         }
//         Proses.addEventListener('click', () => {
//             const hasil = document.querySelector('#sisi')
//             const result = luas / 2 + ' cm'
//             hasil.value = isNaN(luas) ? 'Besaran harus berupa angka!!' : result
//         })
//     }else if(selectedValue == 'Luas'){
//         Luas.setAttribute('disabled', 'true')
//         if(Sisi.hasAttribute('disabled')){
//             Sisi.removeAttribute('disabled')
//         }
//         Proses.addEventListener('click', () => {
//         const hasil = document.querySelector('#persegi')
//         const result = sisi*sisi + ' cm²'
//         hasil.value = isNaN(sisi) ? 'Besaran harus berupa angka!!' : result
//         })
//     }
//     Reset.addEventListener('click', () => {
//         Sisi.setAttribute('disabled', true)
//         Luas.setAttribute('disabled', true)
//     })
// }
// let sisi = ''
// let luas = ''

// Sisi.addEventListener('blur', () => {
//     const nilaiSisi = document.querySelector('#sisi').value
//     if(isNaN(nilaiSisi)){ alert('Nilai harus berupa angka!!!') }
//     sisi = nilaiSisi
//     console.log(nilaiSisi)
// })
// Luas.addEventListener('blur', () => {
//     const nilaiLuas = document.querySelector('#persegi').value
//     if(isNaN(nilaiLuas)){ alert('Nilai harus berupa angka!!!') }
//     luas = nilaiLuas
//     console.log(nilaiLuas)
// })