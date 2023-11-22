const formBil1 =  document.getElementById('bil1')
const formBil2 =  document.getElementById('bil2')
const formBil3 =  document.getElementById('bil3')
const formResult =  document.getElementById('result')
const formSelect =  document.getElementById('select')
const formproses =  document.getElementById('proses')
const formReset =  document.getElementById('reset')
let bil1
let bil2
let bil3
let result
formSelect.addEventListener('change', (e) => {
    e.preventDefault()
    const selectedIndex = formSelect.options[formSelect.selectedIndex].value
    if (selectedIndex == "Panjang"){
        formBil1.setAttribute('placeholder', 'Masukkan Lebar', true)
        formBil2.setAttribute('placeholder', 'Masukkan Tinggi', true)
        formBil3.setAttribute('placeholder', 'Masukkan Volume', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil3/(bil1*bil2) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
            console.log(result)
        })
    }
    else if (selectedIndex == "Lebar"){
        formBil1.setAttribute('placeholder', 'Masukkan Pajang', true)
        formBil2.setAttribute('placeholder', 'Masukkan Tinggi', true)
        formBil3.setAttribute('placeholder', 'Masukkan Volume', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil3/(bil1*bil2) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
            console.log(result)
        })
    }
    else if (selectedIndex == "Tinggi"){
        formBil1.setAttribute('placeholder', 'Masukkan Panjang', true)
        formBil2.setAttribute('placeholder', 'Masukkan Lebar', true)
        formBil3.setAttribute('placeholder', 'Masukkan Volume', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil3/(bil1*bil2) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
            console.log(result)
        })
    }
    else if (selectedIndex == "Volume"){
        formBil1.setAttribute('placeholder', 'Masukkan Panjang', true)
        formBil2.setAttribute('placeholder', 'Masukkan Lebar', true)
        formBil3.setAttribute('placeholder', 'Masukkan Tinggi', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = bil1*bil2*bil3 + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
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
    formBil3.value = null
    formResult.value = null
    result.value = null
    bil1 = ""
    bil2 = ""
    bil3 = ""
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

formBil3.addEventListener('blur', (e) => {
    e.preventDefault()
    const nilaiBil3 = document.querySelector('#bil3').value
    if(isNaN(nilaiBil3)){alert('Nilai harus berupa angka!!!')}
    bil3 = nilaiBil3
    console.log(nilaiBil3)
})



// //hitung Persegi Panjang
// let panjang = ''
// let lebar = ''
// let tinggi = ''

// const ambilInput = () => {
//     const nilaiPanjang = document.querySelector('#panjang').value
//     const nilaiLebar = document.querySelector('#lebar').value
//     const nilaiTinggi = document.querySelector('#tinggi').value
//     if(isNaN(nilaiPanjang) && isNaN(nilaiLebar) && isNaN(nilaiTinggi)){ alert('Nilai harus berupa angka!!!') }
//     panjang = nilaiPanjang
//     lebar = nilaiLebar
//     tinggi = nilaiTinggi
// }

// const proses = () => {
//     const hasil = document.querySelector('#balok')
//     const result = panjang*lebar*tinggi + ' cm³'
//     hasil.value = isNaN(panjang) && isNaN(lebar) &&  isNaN(tinggi) || isNaN(panjang) || isNaN(lebar) || isNaN(tinggi )? 'Besaran harus berupa angka!!' : result
// } 