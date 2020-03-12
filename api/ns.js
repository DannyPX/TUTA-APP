const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/api/departures/:code', (req, res) => {
    //Params moet worden aangepast worden aan de request url.
    var params = "maxJourneys=25&lang=nl&station=" + req.params.code

    const Http = new XMLHttpRequest();
    const url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures';
    Http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          res.json(JSON.parse(this.responseText).payload.departures.map(({direction, plannedDateTime, actualDateTime, plannedTrack, product}) => ({direction, plannedDateTime, actualDateTime, plannedTrack, product})))
        }
      };
    Http.open("GET", url + "?" + params);
    Http.setRequestHeader("Ocp-Apim-Subscription-Key", "0961b0af97c046a4839a61f927d3bc25")
    Http.send();
})

app.get('/api/stations', (req, res) => {
    //Params moet worden aangepast worden aan de request url.
    var params = ""
    var toKeep = ['code']
    const Http = new XMLHttpRequest();
    const url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations';
    Http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          res.json(JSON.parse(this.responseText).payload.map(({code, namen}) => ({code, namen})))
        }
      };
    Http.open("GET", url + "?" + params);
    Http.setRequestHeader("Ocp-Apim-Subscription-Key", "0961b0af97c046a4839a61f927d3bc25")
    Http.send();
})

//gettrips