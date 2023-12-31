import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import https from 'https';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({path: "secrets.env"});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data= {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const JSONdata = JSON.stringify(data);

    const url = process.env.URL;

    const options = {
        method: 'POST',
        auth: 'SmellyCat:'+process.env.API_KEY
    }
    const request = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + '/success.html');
        }
        else{
            res.sendFile(__dirname + '/failure.html');
        }

        response.on('data', function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(JSONdata);
    request.end();
})

app.post('/failure', function(req, res){
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})