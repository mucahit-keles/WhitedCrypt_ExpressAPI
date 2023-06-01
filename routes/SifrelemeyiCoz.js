const Express = require("express");
const Router = Express.Router();
const WhitedCrypt = require("../services/WhitedCrypt");

Router.use(Express.json());

Router.post("/", async function(req, res) {
	try {
		const IstekArgumanlari = req.body;
		const DuzYazi = await WhitedCrypt.SifrelemeyiCoz(IstekArgumanlari.SifrelenmisYazi, IstekArgumanlari.Anahtar)
			.then(Sonuc => {
				return Sonuc.replace(new RegExp("\\n", "gi"), "");
			})
			.catch(Hata => {
				console.error("Bir hata oluştu: ", Hata.message);
			})
			res.status(200).json({ sonuc: DuzYazi });
	} catch(Hata) {
		console.error("Bir hata oluştu: ", Hata.message);
		next(Hata);
	}
});

module.exports = Router