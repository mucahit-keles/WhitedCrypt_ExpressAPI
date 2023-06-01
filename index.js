const Express = require("express");
const Kodla_Router = require("./routes/Kodla")
const KodlamayiCoz_Router = require("./routes/KodlamayiCoz")
const Sifrele_Router = require("./routes/Sifrele")
const SifrelemeyiCoz_Router = require("./routes/SifrelemeyiCoz")

Uygulama = Express();

Uygulama.use(Express.json());

Uygulama.use("/kodla", Kodla_Router);
Uygulama.use("/kodlamayicoz", KodlamayiCoz_Router);
Uygulama.use("/sifrele", Sifrele_Router);
Uygulama.use("/sifrelemeyicoz", SifrelemeyiCoz_Router);

Uygulama.listen(3000, () => {
	console.log("Server started on port 3000");
});