const Express = require("express");
const Router = Express.Router();
const WhitedCrypt = require("../services/WhitedCrypt");

Router.use(Express.json());

Router.post("/", async (req, res) => {
	try {
		let HataOlustu = false;
		let OzelHata = false;
		const IstekArgumanlari = req.body;
		const KodlanmisYazi = await WhitedCrypt.Kodla(String(IstekArgumanlari.MaskelemeMetodu), IstekArgumanlari.DuzYazi)
			.then(Sonuc => {
				if (Sonuc.substring(0, 6) === "[HATA]") {
					HataOlustu = true;
					OzelHata = true;
					Sonuc = Sonuc.substring(!OzelHata && 0 || 7, Sonuc.length);
				}
				return Sonuc.replace(new RegExp("\\n", "gi"), "");
			})
			.catch(Hata => {
				console.error(" ------------------ \n| Bir hata oluştu! |\n ------------------ \n", Hata);
				HataOlustu = true;
			})
		res.status(!HataOlustu && 200 || (OzelHata && 400 || 500)).json({ Basarili: !HataOlustu, Sonuc: (!HataOlustu || OzelHata) && KodlanmisYazi || "" });
	} catch(Hata) {
		console.error(" ------------------ \n| Bir hata oluştu! |\n ------------------ \n", Hata);
	}
});

module.exports = Router