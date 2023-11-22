const formBil1 = document.getElementById("bil1");
const formBil2 = document.getElementById("bil2");
const formBil3 = document.getElementById("bil3");
const formResult = document.getElementById("result");
const formSelect = document.getElementById("select");
const formproses = document.getElementById("proses");
const formReset = document.getElementById("reset");
let bil1;
let bil2;
let bil3;

formSelect.addEventListener("change", async (e) => {
	e.preventDefault();
	const selectedIndex = formSelect.options[formSelect.selectedIndex].value;
	if (selectedIndex == "sisi1") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil2.setAttribute("placeholder", "Masukkan Tinggi", true);
		formBil3.setAttribute("placeholder", "Masukkan Luas", true);
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = (2 * bil3) / parseFloat(bil2) - parseFloat(bil1) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == ""
			) {
				alert("Besaran harus berupa angka!!");             
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "sisi2") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Tinggi", true);
		formBil3.setAttribute("placeholder", "Masukkan Luas", true);

		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = (2 * bil3) / parseFloat(bil2) - parseFloat(bil1) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == ""
			) {
				alert("Besaran harus berupa angka!!");
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "Tinggi") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil3.setAttribute("placeholder", "Masukkan Luas", true);
		
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result = (2 * bil3) / (parseFloat(bil1) + parseFloat(bil2)) + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == ""
			) {
				alert("Besaran harus berupa angka!!");
			}
            else{
                formResult.value = result;
            }
		});
	} else if (selectedIndex == "Luas") {
		formBil1.setAttribute("placeholder", "Masukkan Sisi 1", true);
		formBil2.setAttribute("placeholder", "Masukkan Sisi 2", true);
		formBil3.setAttribute("placeholder", "Masukkan Tinggi", true);
		
		formproses.addEventListener("click", (e) => {
			e.preventDefault();
			const result =
				((parseFloat(bil1) + parseFloat(bil2)) * bil3 * 1) / 2 + " cm";
			if (
				isNaN(bil1) ||
				bil1 == "" ||
				isNaN(bil2) ||
				bil2 == "" ||
				isNaN(bil3) ||
				bil3 == ""
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
	formBil1.value = null;
	formBil2.value = null;
	formBil3.value = null;
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


//hitung trapesium
// let Sisi1
// let Sisi2
// let Tinggi

// const ambilInput = () => {
//     const nilaiSisi1 = document.querySelector('#sisi1').value
//     const nilaiSisi2 = document.querySelector('#sisi2').value
//     const nilaiTinggi = document.querySelector('#tinggi').value
//     if(isNaN(nilaiSisi1) && isNaN(nilaiSisi2) && isNaN(nilaiTinggi)){ alert('Nilai harus berupa angka!!!') }
//     Sisi1 = parseInt(nilaiSisi1)
//     Sisi2 = parseInt(nilaiSisi2)
//     Tinggi = parseInt(nilaiTinggi)
// }

// const proses = () => {
//     const hasil = document.querySelector('#trapesium')
//     const result = (Sisi1 + Sisi2) * Tinggi * 1/2 + ' cm²'
//     hasil.value = isNaN(Sisi1) && isNaN(Sisi2) &&  isNaN(Tinggi) || isNaN(Sisi1) || isNaN(Sisi2) || isNaN(Tinggi ) ? 'Besaran harus berupa angka!!' : result
// }
