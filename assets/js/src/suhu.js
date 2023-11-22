//JS untuk konversi suhu
let suhuPertama
let suhuKedua

const ambilSuhu = () => {
	const suhuDari = document.querySelector("#suhuDari").value;
	const suhuKe = document.querySelector("#suhuKe").value;
	suhuPertama = suhuDari;
	suhuKedua = suhuKe;
}

const convert = () => {
	const besaran = document.querySelector("#besaran").value;
	const result = document.querySelector("#result");

	if (suhuPertama == "celsius" && suhuKedua == "fahrenheit") {
		const converted = parseFloat((besaran * 9) / 5) + 32;
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °F";
	} else if (suhuPertama == "fahrenheit" && suhuKedua == "celsius") {
		const converted = (parseFloat(besaran - 32) * 5) / 9;
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °C";
	} else if (suhuPertama == "celsius" && suhuKedua == "kelvin") {
		const converted = parseFloat(besaran + 273.15);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °K";
	} else if (suhuPertama == "kelvin" && suhuKedua == "celsius") {
		const converted = parseFloat(besaran - 273.15);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °C";
	} else if (suhuPertama == "celsius" && suhuKedua == "reamur") {
		const converted = parseFloat((besaran * 4) / 5);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °R";
	} else if (suhuPertama == "reamur" && suhuKedua == "celsius") {
		const converted = parseFloat((besaran * 5) / 4);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °C";
	} else if (suhuPertama == "fahrenheit" && suhuKedua == "kelvin") {
		const converted = (parseFloat(besaran - 32) * 5) / 9 + 273.15;
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °K";
	} else if (suhuPertama == "fahrenheit" && suhuKedua == "reamur") {
		const converted = parseFloat(besaran - 32) * (4 / 9);
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °R";
	} else if (suhuPertama == "kelvin" && suhuKedua == "fahrenheit") {
		const converted = (parseFloat(besaran - 273.15) * 9) / 5 + 32;
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °F";
	} else if (suhuPertama == "kelvin" && suhuKedua == "reamur") {
		const converted = (parseFloat(besaran - 273.15) * 4) / 5;
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °R";
	} else if (suhuPertama == "reamur" && suhuKedua == "fahrenheit") {
		const converted = parseFloat((besaran * 9) / 4) + 32;
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °F";
	} else if (suhuPertama == "reamur" && suhuKedua == "kelvin") {
		const converted = parseFloat((besaran * 5) / 4) + 273.15;
		console.log(converted);
		result.value = isNaN(converted)
			? "Besaran harus berupa angka!!"
			: converted.toFixed(2) + " °K";
	} else {
		alert("Pilihan suhu tidak valid");
	}
};
//
