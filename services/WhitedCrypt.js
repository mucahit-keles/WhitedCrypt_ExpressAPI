const { spawn } = require("child_process");

function WhitedCrypt(Argumanlar) {
	return new Promise((resolve, reject) => {
		const PythonIslemi = spawn("python3", ["python_modules/WhitedCrypt.py", ...Argumanlar]);
		let CiktiVerisi = "";
		
		PythonIslemi.stdout.on("data", (Cikti) => {
			CiktiVerisi += Cikti.toString();
		});
		
		PythonIslemi.stderr.on("data", (Cikti) => {
			reject(Cikti.toString());
		});
		
		PythonIslemi.on("close", (CikisKodu) => {
			if (CikisKodu === 0) {
				resolve(CiktiVerisi);
			} else {
				reject(`Python, ${CikisKodu} çıkış kodu ile hata verdi.`)
			}
		})
	})
}

function Kodla(MaskelemeMetodu, DuzYazi) {
	return WhitedCrypt(["Kodla", MaskelemeMetodu, DuzYazi])
}

function KodlamayiCoz(DuzYazi) {
	return WhitedCrypt(["KodlamayiCoz", DuzYazi])
}

function Sifrele(HashlemeAlgoritmasiAdi, Maskeli, MaskelemeMetodu, DuzYazi, Anahtar) {
	return WhitedCrypt(["Sifrele", HashlemeAlgoritmasiAdi, Maskeli, MaskelemeMetodu, DuzYazi, Anahtar])
}

function SifrelemeyiCoz(SifrelenmisYazi, Anahtar) {
	return WhitedCrypt(["SifrelemeyiCoz", SifrelenmisYazi, Anahtar])
}

module.exports = {
	Kodla,
	KodlamayiCoz,
	Sifrele,
	SifrelemeyiCoz
}