// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgresql://gen_user:8Ly%7Cm-%5Ctt-j4gZ@188.225.87.171:5432/default_db')
//
// db.one('SELECT * FROM public.quotes')
//     .then((data) => {
//         console.log('DATA:', data)
//     })
//     .catch((error) => {
//         console.log('ERROR:', error)
//     })

const app = require('express')();
const server = require('http').createServer(app);
const port = process.env.PORT || 8080;
const db = require("./models");

app.get("/quotes", (req, res) => {
    db.sequelize.query("SELECT * FROM public.quotes").then((data) => {
        res.send(data[0])
    }).catch((error) => {
        console.log(error)
    })
})

server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});