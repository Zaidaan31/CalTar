const formBil1 = document.getElementById("bil1");
const formBil2 = document.getElementById("bil2");
const formBil3 = document.getElementById("bil3");
const formBil4 = document.getElementById("bil4");
const formResult = document.getElementById("result");
const formSelect = document.getElementById("select");
const formproses = document.getElementById("proses");
const formReset = document.getElementById("reset");
let bil1;
let bil2;
let bil3;
let bil4;

formSelect.addEventListener("change", async (e) => {
	e.preventDefault();
	const selectedIndex = formSelect.options[formSelect.selectedIndex].value;
	if (selectedIndex == "sisi1") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 3", true);
		formBil3.setAttribute("placeholder", "Masukkan Sisi 4", true);
		formBil4.setAttribute("placeholder", "Masukkan Keliling", true);
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = parseFloat(bil4) - (parseFloat(bil2) + parseFloat(bil1) + parseFloat(bil3)) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == "" ||
                isNaN(bil4) ||
                bil4 == ""
			) {
				alert("Besaran harus berupa angka!!");             
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "sisi2") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 3", true);
		formBil3.setAttribute("placeholder", "Masukkan Sisi 4", true);
		formBil4.setAttribute("placeholder", "Masukkan Keliling", true);
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = parseFloat(bil4) - (parseFloat(bil2) + parseFloat(bil1) + parseFloat(bil3)) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == "" ||
                isNaN(bil4) ||
                bil4 == ""
			) {
				alert("Besaran harus berupa angka!!");             
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "sisi3") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil3.setAttribute("placeholder", "Masukkan Sisi 4", true);
		formBil4.setAttribute("placeholder", "Masukkan Keliling", true);
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = parseFloat(bil4) - (parseFloat(bil2) + parseFloat(bil1) + parseFloat(bil3)) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == "" ||
                isNaN(bil4) ||
                bil4 == ""
			) {
				alert("Besaran harus berupa angka!!");             
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "sisi4") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil3.setAttribute("placeholder", "Masukkan Sisi 3", true);
		formBil4.setAttribute("placeholder", "Masukkan Keliling", true);
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = parseFloat(bil4) - (parseFloat(bil2) + parseFloat(bil1) + parseFloat(bil3)) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == "" ||
                isNaN(bil4) ||
                bil4 == ""
			) {
				alert("Besaran harus berupa angka!!");             
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "Keliling") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil3.setAttribute("placeholder", "Masukkan Sisi 3", true);
		formBil4.setAttribute("placeholder", "Masukkan Sisi 4", true);
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = parseFloat(bil4) + parseFloat(bil2) + parseFloat(bil1) + parseFloat(bil3) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == "" ||
                isNaN(bil4) ||
                bil4 == ""
			) {
				alert("Besaran harus berupa angka!!");             
			}
            else{
                formResult.value = result;
            }
		});
	}
});

formReset.addEventListener("click", (e) => {
	e.preventDefault();
	bil1 = "";
	bil2 = "";
	bil3 = "";
    bil4 = "";
	formBil1.value = null;
	formBil2.value = null;
	formBil3.value = null;
    formBil4.value = null;
	formResult.value = null;
});

formBil1.addEventListener("blur", (e) => {
    e.preventDefault();
    const nilaiBil1 = document.querySelector("#bil1").value;
    if (isNaN(nilaiBil1)) {
        alert("Nilai harus berupa angka!!!");
    }
    bil1 = nilaiBil1;
    console.log("bil1 =", nilaiBil1);
});

formBil2.addEventListener("blur", (e) => {
    e.preventDefault();
    const nilaiBil2 = document.querySelector("#bil2").value;
    if (isNaN(nilaiBil2)) {
        alert("Nilai harus berupa angka!!!");
    }
    bil2 = nilaiBil2;
    console.log("bil2 =", nilaiBil2);
});

formBil3.addEventListener("blur", (e) => {
    e.preventDefault();
    const nilaiBil3 = document.querySelector("#bil3").value;
    if (isNaN(nilaiBil3)) {
        alert("Nilai harus berupa angka!!!");
    }
    bil3 = nilaiBil3;
    console.log("bil3 =", nilaiBil3);
});

formBil4.addEventListener("blur", (e) => {
    e.preventDefault();
    const nilaiBil4 = document.querySelector("#bil4").value;
    if (isNaN(nilaiBil4)) {
        alert("Nilai harus berupa angka!!!");
    }
    bil4 = nilaiBil4;
    console.log("bil4 =", nilaiBil4);
});


// let sisi1
// let sisi2 
// let sisi3
// let sisi4

// const ambilInput = () => {
//     const nilaisisi1 = document.querySelector('#sisi1').value
//     const nilaisisi2 = document.querySelector('#sisi2').value
//     const nilaisisi3 = document.querySelector('#sisi3').value
//     const nilaisisi4 = document.querySelector('#sisi4').value
//     if(isNaN(nilaisisi1) && isNaN(nilaisisi2) && isNaN(nilaisisi3) && isNaN(nilaisisi4)) { alert('Nilai harus berupa angka!!!') }
//     sisi1 = nilaisisi1
//     sisi2 = nilaisisi2
//     sisi3 = nilaisisi3
//     sisi4 = nilaisisi4
//     console.log(`${sisi1} - ${sisi2} - ${sisi3} - ${sisi4}`)
// }

// const proses = () => {
//     const hasil = document.querySelector('#trapesium')
//     const result = parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3)+parseInt(sisi4) + ' cm'
//     console.log(result)
//     hasil.value = isNaN(sisi1) && isNaN(sisi2) && isNaN(sisi3) && isNaN(sisi4) || isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || isNaN(sisi4) ? 'Besaran harus berupa angka!!' : result
// } 