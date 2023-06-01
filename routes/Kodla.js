const Express = require("express");
const Router = Express.Router();
const WhitedCrypt = require("../services/WhitedCrypt");

Router.use(Express.json());

Router.post("/", async function(req, res) {
	try {
		const IstekArgumanlari = req.body;
		const KodlanmisYazi = await WhitedCrypt.Kodla(IstekArgumanlari.MaskelemeMetodu, IstekArgumanlari.DuzYazi)
			.then(Sonuc => {
				return Sonuc.replace(new RegExp("\\n", "gi"), "");
			})
			.catch(Hata => {
				console.error("Bir hata oluştu:", Hata.message);
			})
			res.status(200).json({ sonuc: KodlanmisYazi });
	} catch(Hata) {
		console.error("Bir hata oluştu ", Hata.message);
		next(Hata);
	}
});

module.exports = Router