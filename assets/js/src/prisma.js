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
        formBil1.setAttribute('placeholder', 'Masukkan Luas Alas Prisma', true)
        formBil2.setAttribute('placeholder', 'Masukkan Volume Prisma', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil2/bil1 + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
            console.log(result)
        })
    }
    else if (selectedIndex == "Luas"){
        formBil1.setAttribute('placeholder', 'Masukkan Tinggi Prisma', true)
        formBil2.setAttribute('placeholder', 'Masukkan Volume Prisma', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil2/bil1 + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Volume"){
        formBil1.setAttribute('placeholder', 'Masukkan Luas Alas Prisma', true)
        formBil2.setAttribute('placeholder', 'Masukkan Tinggi Prisma', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil1*bil2 + ' cm'
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



// let alas = ''
// let tinggisg = ''
// let tinggipr = ''

// const ambilInput = () => {
//     const nilaiAlas = document.querySelector('#alas').value
//     const nilaiTinggiSg = document.querySelector('#tinggisg').value
//     const nilaiTinggiPr = document.querySelector('#tinggipr').value
//     if(isNaN(nilaiAlas) && isNaN(nilaiTinggiSg) && isNaN(nilaiTinggiPr)){ alert('Nilai harus berupa angka!!!') }
//     alas = nilaiAlas
//     tinggisg = nilaiTinggiSg
//     tinggipr = nilaiTinggiPr
// }

// const proses = () => {
//     const hasil = document.querySelector('#prisma')
//     const result = (1/2 * alas * tinggisg) * tinggipr + ' cm³'
//     hasil.value = isNaN(alas) && isNaN(tinggipr) &&  isNaN(tinggisg) || isNaN(alas) || isNaN(tinggipr) || isNaN(tinggisg ) ? 'Besaran harus berupa angka!!' : result
// } 