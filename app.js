const express = require("express")
const app = express();
const path = require("path")

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.use(express.urlencoded());

//app.listen(3000, () => {
//    console.log("Servidor corriendo en el puerto 3000");
//});

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo en el puerto 3000");
})


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/home.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.post("/resultadoRegister", (req, res) => {
    console.log(req.body);
    res.redirect("/")
})