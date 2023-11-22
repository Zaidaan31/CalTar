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
        formBil1.setAttribute('placeholder', 'Masukkan Keliling', true)
        formproses.addEventListener('click', (e) => {
        
              result = bil1 / (2 * 3.14) + ' cm'
            if(isNaN(bil1) || bil1 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Keliling"){
        console.log(formBil1)
        formBil1.setAttribute('placeholder', 'Masukkan Jari-jari', true)
        formproses.addEventListener('click', (e) => {
        
            result = (2*3.14)*bil1 + ' cm'
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


// let Jari = ''

// const jari = () => {
//     const nilaiJari = document.querySelector('#Jari2').value
//     if(isNaN(nilaiJari)){ alert('Nilai harus berupa angka!!!') }
//     Jari = nilaiJari
// }

// const proses = () => {
//     const hasil = document.querySelector('#lingkaran')
//     const result = 2 * 3.14 * Jari + ' cm'
//     hasil.value = isNaN(Jari) ? 'Besaran harus berupa angka!!' : result
// } 
