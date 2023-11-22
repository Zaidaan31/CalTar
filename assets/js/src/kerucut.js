const formBil1 =  document.getElementById('bil1')
const formBil2 =  document.getElementById('bil2')
const formResult =  document.getElementById('result')
const formSelect =  document.getElementById('select')
const formproses =  document.getElementById('proses')
const formReset =  document.getElementById('reset')
let bil1
let bil2
let result
formSelect.addEventListener('change', (e) => {
    e.preventDefault()
    const selectedIndex = formSelect.options[formSelect.selectedIndex].value
    if (selectedIndex == "Tinggi"){
        formBil1.setAttribute('placeholder', 'Masukkan Luas Lingkaran', true)
        formBil2.setAttribute('placeholder', 'Masukkan Volume Tabung', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = 3*(bil2/bil1) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
            console.log(result)
        })
    } 
    else if (selectedIndex == "Luas"){
        formBil1.setAttribute('placeholder', 'Masukkan Tinggi Kerucut', true)
        formBil2.setAttribute('placeholder', 'Masukkan Volume Kerucut', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result =  3*(bil2/bil1) + ' cm'
              console.log(result)
            formResult.value = result
        })
    }
    else if (selectedIndex == "Volume"){
        formBil1.setAttribute('placeholder', 'Masukkan Luas Lingkaran', true)
        formBil2.setAttribute('placeholder', 'Masukkan Tinggi Tabung', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = 1/3 * (bil1 * bil2) + ' cm³'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
})

formReset.addEventListener('click', (e) => {
    e.preventDefault()
    formBil1.value = null
    formBil2.value = null
    formResult.value = null
    result.value = null
    bil1 = ""
    bil2 = ""
})

formBil1.addEventListener('blur', (e) => {
    e.preventDefault()
    const nilaiBil1 = document.querySelector('#bil1').value
    if(isNaN(nilaiBil1)){ alert('Nilai harus berupa angka!!!') }
    bil1 = parseFloat(nilaiBil1)
    console.log(nilaiBil1)
})

formBil2.addEventListener('blur', (e) => {
    e.preventDefault()
    const nilaiBil2 = document.querySelector('#bil2').value
    if(isNaN(nilaiBil2)){ alert('Nilai harus berupa angka!!!') }
    bil2 = parseFloat(nilaiBil2)    
    console.log(nilaiBil2)
})


// //hitung Kerucut
// let Jari 
// let Tinggi 

// const ambilInput = () => {
//     const nilaijari = document.querySelector('#jari').value
//     const nilaitinggi = document.querySelector('#tinggi').value
//     if(isNaN(nilaijari) && isNaN(nilaitinggi)){ alert('Nilai harus berupa angka!!!') }
//     Jari = nilaijari
//     Tinggi = nilaitinggi
// }

// const proses = () => {
//     const hasil = document.querySelector('#kerucut')
//     const result = (1/3 * 3.14 * Jari * Jari) * Tinggi + ' cm³'
//     hasil.value = isNaN(Jari) && isNaN(Tinggi) || isNaN(Jari) || isNaN(Tinggi) ? 'Besaran harus berupa angka!!' : result
// } 