const express = require('express');
const router = express.Router();


router.use("/",(req, res)=>{
    // format data json
    const data = {
        caption: "Mahasiswa",
        layout : "layout/main-layout",
        data : [
            {
                npm : "2226240092",
                nama : "Alya Putri Rizaldy"
            },
            {
                npm : "2226240002",
                nama : "Cintuy"
            },
            {
                npm : "2226240292",
                nama : "Livia"
            }
        ]
    };

    res.render("index" , data);
    // menuju ke views/index.ejs
});

module.exports = router;



