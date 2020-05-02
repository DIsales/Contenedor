const express = require('express');
const router = express.Router();
const unirest = require("unirest");
var api;



router.get('/', (req, res)=>{

    var req = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");

    req.headers({
	"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	"x-rapidapi-key": "fb567843edmshcfcb2d41286a8b3p1ea704jsn35342300bb54"
    });

    req.end(function (res) {
	if (res.error) throw new Error(res.error);
    api=res.body;
    
    	
});
    
res.render('layouts/list',api.countries_stat);
console.log(api);
    
});

module.exports=router;