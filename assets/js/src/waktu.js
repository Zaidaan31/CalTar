//JS untuk konversi suhu
let waktuPertama = "";
let waktuKedua = "";

const ambilWaktu = () => {
	const waktuDari = document.querySelector("#waktuDari").value;
	const waktuKe = document.querySelector("#waktuKe").value;
	waktuPertama = waktuDari;
	waktuKedua = waktuKe;
	// console.log(`pertama: ${suhuPertama} - kedua: ${suhuKedua}`)
};

const convert = () => {
	const besaran = document.querySelector("#waktu").value;
	const result = document.querySelector("#result");

	if (waktuPertama == "jam" && waktuKedua == "menit") {
		const converted = parseFloat(besaran * 60);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " Menit";
	} else if (waktuPertama == "jam" && waktuKedua == "detik") {
		const converted = parseFloat(besaran * 3600);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " Detik";
	} else if (waktuPertama == "menit" && waktuKedua == "jam") {
		const converted = parseFloat(besaran / 60);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " Jam";
	} else if (waktuPertama == "menit" && waktuKedua == "detik") {
		const converted = parseFloat(besaran * 60);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " Detik";
	} else if (waktuPertama == "detik" && waktuKedua == "jam") {
		const converted = parseFloat(besaran / 3600);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " Jam";
	} else if (waktuPertama == "detik" && waktuKedua == "menit") {
		const converted = parseFloat(besaran / 60);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " Menit";
	} else {
		alert("Pilihan Waktu tidak valid");
	}
};
//
