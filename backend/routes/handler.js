const express = require('express');
const router = express.Router();
var AWS = require('aws-sdk');  //AWS


//Llamada a rekognition haciendo una referencia a ina imagen del bucket.
//Regresa un json con las etiquetas encontradas la imagen.
router.get('/labelsImage', (req, res) => {

    AWS.config.update({
        accessKeyId : "AKIATUNWZX3ZQPLKMF6T",
        secretAccessKey : "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",
        region:"us-east-1"
    });

    var params = {
        Image:{
            S3Object:{
                Bucket:"turing-bucket-1",
                Name:"tom-barrett-uiKqLsjusB0-unsplash.jpg"
            }
        }
    };

    //Call to aws rekorgnition
    const rekognition = new AWS.Rekognition();
    var labelsDetected ;
    //Detect labels
    rekognition.detectLabels(params, function(err,data){
        if (err)
            console.log(err,err.stack); //Error
        else { 
            console.log(data);
            labelsDetected = data
        };
        res.end(JSON.stringify([data])); 
            });

        
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;