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
    if (selectedIndex == "Alas"){
        formBil1.setAttribute('placeholder', 'Masukkan Tinggi', true)
        formBil2.setAttribute('placeholder', 'Masukkan Luas', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = 2*bil2/bil1 + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Tinggi"){
        formBil1.setAttribute('placeholder', 'Masukkan Alas', true)
        formBil2.setAttribute('placeholder', 'Masukkan Luas', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
            result = 2*bil2/bil1 + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Luas"){
        formBil1.setAttribute('placeholder', 'Masukkan Alas', true)
        formBil2.setAttribute('placeholder', 'Masukkan Tinggi', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
            result = bil1 * bil2 / 2 + ' cm'
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
    bil1 = nilaiBil1
    console.log(nilaiBil1)
})

formBil2.addEventListener('blur', (e) => {
    e.preventDefault()
    const nilaiBil2 = document.querySelector('#bil2').value
    if(isNaN(nilaiBil2)){ alert('Nilai harus berupa angka!!!') }
    bil2 = nilaiBil2
    console.log(nilaiBil2)
})

// //hitung Persegi Panjang
// let alas = ''
// let tinggi = ''

// const ambilInput = () => {
//     const nilaiAlas = document.querySelector('#alas').value
//     const nilaiTinggi = document.querySelector('#tinggi').value
//     if(isNaN(nilaiAlas) && isNaN(nilaiTinggi)){ alert('Nilai harus berupa angka!!!') }
//     alas = nilaiAlas
//     tinggi = nilaiTinggi
// }

// const proses = () => {
//     const hasil = document.querySelector('#segitiga')
//     const result = (alas*tinggi)*1/2 + ' cm²'
//     hasil.value = isNaN(alas) && isNaN(tinggi) || isNaN(alas) || isNaN(tinggi) ? 'Besaran harus berupa angka!!' : result
// } 