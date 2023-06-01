const Express = require("express");
const Router = Express.Router();
const WhitedCrypt = require("../services/WhitedCrypt");

Router.use(Express.json());

Router.post("/", async (req, res) => {
	try {
		let HataOlustu = false;
		let OzelHata = false;
		const IstekArgumanlari = req.body;
		const DuzYazi = await WhitedCrypt.SifrelemeyiCoz(IstekArgumanlari.SifrelenmisYazi, IstekArgumanlari.Anahtar)
			.then(Sonuc => {
				if (Sonuc.substring(0, 6) === "[HATA]") {
					HataOlustu = true;
					OzelHata = true;
				}
				return Sonuc.replace(new RegExp("\\n", "gi"), "").substring(!OzelHata && 0 || 7, Sonuc.length - 1);
			})
			.catch(Hata => {
				console.error(" ------------------ \n| Bir hata oluştu! |\n ------------------ \n", Hata);
				HataOlustu = true;
			})
			res.status(!HataOlustu && 200 || (OzelHata && 400 || 500)).json({ Basarili: !HataOlustu, Sonuc: (!HataOlustu || OzelHata) && DuzYazi || "" });
	} catch(Hata) {
		console.error(" ------------------ \n| Bir hata oluştu! |\n ------------------ \n", Hata);
	}
});

module.exports = Router