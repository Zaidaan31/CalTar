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
    if (selectedIndex == "sisi1"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi 2', true)
        formBil2.setAttribute('placeholder', 'Masukkan Sisi 3', true)
        formBil3.setAttribute('placeholder', 'Masukkan Keliling', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = parseFloat(bil3)-(parseFloat(bil1)+parseFloat(bil2)) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
            console.log(result)
        })
    }
    else if (selectedIndex == "sisi2"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi 1', true)
        formBil2.setAttribute('placeholder', 'Masukkan Sisi 3', true)
        formBil3.setAttribute('placeholder', 'Masukkan Keliling', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = parseFloat(bil3)-(parseFloat(bil1)+parseFloat(bil2)) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "sisi3"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi 1', true)
        formBil2.setAttribute('placeholder', 'Masukkan Sisi 2', true)
        formBil3.setAttribute('placeholder', 'Masukkan Keliling', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = parseFloat(bil3)-(parseFloat(bil1)+parseFloat(bil2)) + ' cm'
            if(isNaN(bil1) || bil1 == "" || isNaN(bil2) || bil2 == "" || isNaN(bil3) || bil3 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Keliling"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi 1', true)
        formBil2.setAttribute('placeholder', 'Masukkan Sisi 2', true)
        formBil3.setAttribute('placeholder', 'Masukkan Sisi 3', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = parseFloat(bil3)+parseFloat(bil1)+parseFloat(bil2) + ' cm'
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
// let sisi1
// let sisi2 
// let sisi3

// const ambilInput = () => {
//     const nilaisisi1 = document.querySelector('#sisi1').value
//     const nilaisisi2 = document.querySelector('#sisi2').value
//     const nilaisisi3 = document.querySelector('#sisi3').value
//     if(isNaN(nilaisisi1) && isNaN(nilaisisi2) && isNaN(nilaisisi3)) { alert('Nilai harus berupa angka!!!') }
//     sisi1 = nilaisisi1
//     sisi2 = nilaisisi2
//     sisi3 = nilaisisi3
//     console.log(`${sisi1} - ${sisi2} - ${sisi3}`)
// }

// const proses = () => {
//     const hasil = document.querySelector('#segitiga')
//     const result = parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3) + ' cm'
//     console.log(result)
//     hasil.value = isNaN(sisi1) && isNaN(sisi2) && isNaN(sisi3) || isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) ? 'Besaran harus berupa angka!!' : result
// } 