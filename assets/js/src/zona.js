
// function ambilWaktu() {
// 	// You can perform additional actions if needed when the time zone is changed
// }

async function convert() {
	// Get selected time zones and time input
	var zonaDari = document.getElementById("zonaDari").value;
	var zonaKe = document.getElementById("zonaKe").value;
	var pukul = document.getElementById("pukul").value;

	// Perform the time conversion
	var convertedTime = await performConversion(zonaDari, zonaKe, pukul);

	// Display the result in the "result" input field
	document.getElementById("result").value = convertedTime;
}

async function performConversion(zonaDari, zonaKe, pukul) {
    const timezoneMappings = {
        "indonesia": "Asia/Jakarta",
        "cina": "Asia/Shanghai",
        "inggris": "Europe/London",
        "russia": "Europe/Moscow",
        "usa": "America/New_York",
        "brazil": "America/Sao_Paulo",
        "afrika": "Africa/Johannesburg",
        "maroko": "Africa/Casablanca",
        "australia": "Australia/Sydney",
        "selandia": "Pacific/Auckland",
    };

    // Check if the selected time zones are valid
    if (!timezoneMappings[zonaDari] || !timezoneMappings[zonaKe]) {
        console.log("Pilih zona waktu dari dan ke terlebih dahulu.");
    }

    // Parse the input time using moment-timezone directly
    var parsedTime = moment.tz(pukul, "HH:mm", timezoneMappings[zonaDari]);

    // Check if the parsed time is valid
    if (!parsedTime.isValid()) {
        console.log("Masukkan waktu yang valid.");
    }

    // Convert time from the source timezone to the destination timezone
    var convertedTime = parsedTime.clone().tz(timezoneMappings[zonaKe]);
    console.log(convertedTime);

    // Format the result
    var result = convertedTime.format("HH:mm");

    return result;
}



// Reset function
document.getElementById("reset").addEventListener("click", function (e) {
	e.preventDefault()
	document.getElementById("result").value = "Lakukan Konversi...";
	document.getElementById("pukul").value = ""
});




// const formBil = document.getElementById("pukul");
// const formReset = document.getElementById("reset");
// const formresult = document.getElementById("result");
// let waktuPertama;
// let waktuKedua;
// let bil;
// let result;

// const ambilWaktu = () => {
// 	const waktuDari = document.getElementById("zonaDari").value;
// 	const waktuKe = document.getElementById("zonaKe").value;
// 	waktuPertama = waktuDari;
// 	waktuKedua = waktuKe;
// };

// const convert = () => {
// 	const formresult = document.querySelector("#result");

// 	if (waktuPertama == "indo" && waktuKedua == "cina") {
//             result = parseFloat(bil) + 1.0;
//             console.log(result);

//             if (result >= 24.0) {
//                 if (result >= .60) {
//                     result = result - .60;
//                 }
//                 result = result - 24.0;
//             } else {
//                 if (result >= .60) {
//                     result = result - 0.60;
//                     console.log(result)
//                 }
//             }
//             formresult.value = result.toFixed(2);
//     }
// };
    
// formReset.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	formBil.value = null;
// 	formresult.value = null;
// 	bil = null;
// 	result = null;
// });

// formBil.addEventListener("blur", (e) => {
// 	e.preventDefault();
// 	const pukul = document.getElementById("pukul").value;
// 	if (isNaN(pukul)) {
// 		alert("Nilai harus berupa angka!!!");
// 	}
// 	bil = pukul;
// 	console.log(pukul);
// });
