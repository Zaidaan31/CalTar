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
        formBil1.setAttribute('placeholder', 'Masukkan Volume', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
              result = Math.cbrt(bil1) + ' cm'
            if(isNaN(bil1) || bil1 == ""){alert('Besaran harus berupa angka!!')}
            else{
                formResult.value = result
            }
        })
    }
    else if (selectedIndex == "Volume"){
        formBil1.setAttribute('placeholder', 'Masukkan Sisi', true)
        formproses.addEventListener('click', (e) => {
            e.preventDefault()
            result = bil1*bil1*bil1 + ' cm'
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

