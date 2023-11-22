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
        formBil1.setAttribute('placeholder', 'Masukkan Keliling', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil1/4 + ' cm'
            if(isNaN(bil1) || bil1 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Keliling"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
            result = bil1*4 + ' cm'
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


// //hitug persegi
// let sisi = ''
// const pjsisi = () => {
//     const nilaiSisi = document.querySelector('#sisi').value
//     if(isNaN(nilaiSisi)){ alert('Nilai harus berupa angka!!!') }
//     sisi = nilaiSisi
//     console.log(nilaiSisi)
// }

// const proses = () => {
//     const hasil = document.querySelector('#persegi')
//     const result = sisi*4 + ' cm'
//     hasil.value =  isNaN(sisi) ? 'Besaran harus berupa angka!!' : result
//     // !isNaN(result) ? hasil.value = result : ''
// } 
// // ------------------ //