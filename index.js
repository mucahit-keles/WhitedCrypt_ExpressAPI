const Express = require("express");
const Kodla_Router = require("./routes/Kodla")
const KodlamayiCoz_Router = require("./routes/KodlamayiCoz")
const Sifrele_Router = require("./routes/Sifrele")
const SifrelemeyiCoz_Router = require("./routes/SifrelemeyiCoz")

app = Express();

app.use(Express.json());

app.use("/kodla", Kodla_Router);
app.use("/kodlamayicoz", KodlamayiCoz_Router);
app.use("/sifrele", Sifrele_Router);
app.use("/sifrelemeyicoz", SifrelemeyiCoz_Router);

app.listen(3000, () => {
	console.log("Server started on port 3000");
});