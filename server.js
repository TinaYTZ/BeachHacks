// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: single, undef: true, unused: true, strict: true, trailing: true */


'use strict';
var express=require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    app = express(),
    formidable = require('formidable'),
    util = require('util'),
    server= http.createServer(app),
    path = require('path');
    bodyParser = require('body-parser');
var fs      = require('fs');
var data='';

//var file = new sta.Server(path.join(__dirname, '..', 'public'));

app.use('/', express.static(__dirname+'/public'));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//var server = https.createServer(options,app);

server.listen(process.env.PORT || 3000);
console.log('server running PORT 3000...');
const cognitiveServices = require('cognitive-services');


app.get('/', function(req,res){
    res.sendFile('index.html'); 
});



app.post('/upload',function(req,res){
//     console.log(req.files);
// var fs      = require('fs'),
 //var data= fs.readFileSync('base64', 'utf8');
// base64Data,
// binaryData;

// base64Data  =   data.replace(/^data:image\/png;base64,/, "");
// base64Data  +=  base64Data.replace('+', ' ');
// binaryData  =   new Buffer(base64Data, 'base64').toString('binary');

// fs.writeFile("out.png", binaryData, "binary", function (err) {
//     console.log(err); // writes out file without error, but it's not a valid image
// });


 // var form = new formidable.IncomingForm();

 //    form.parse(req, function(err, fields, files) {
 //      res.writeHead(200, {'content-type': 'text/plain'});
 //      res.write('received upload:\n\n');
 //      res.end(util.inspect({fields: fields, files: files}));
 //    });
// console.log("data:"+req.body.data)
//  var base64Data  = req.body.data;
//    //base64Data=base64Data.replace(/------WebKitFormBoundaryhQOyt0PmbtJ65vvf/,'');  
//    base64Data=base64Data.replace(/Content-Disposition: form-data; name="image"/,'');
//    base64Data=base64Data.replace(/data:image\/png;base64,/, '');
//   //console.log("base64:"+base64Data);
//   var binaryData = new Buffer(base64Data, 'base64');
//   fs.writeFile("out.png", binaryData, 'binary', function(err) {
//    console.log('err'+err);

//  });
 data='';
 req.setEncoding('utf8');
 req.on('data', function(chunk){
  data += chunk;
 });
 req.on('end', function(){
 // console.log(data);
 var base64Data  = data;
   //base64Data=base64Data.replace(/------WebKitFormBoundaryhQOyt0PmbtJ65vvf/,'');  
    base64Data = base64Data.replace(/.*/, "").substr(1);
    base64Data = base64Data.replace(/.*/, "").substr(1);
    base64Data = base64Data.replace(/.*/, "").substr(1);

   base64Data=base64Data.replace(/Content-Disposition: form-data; name="image"/,'');
   base64Data=base64Data.replace(/data:image\/png;base64,/, '');
  //console.log("base64:"+base64Data);
  var binaryData = new Buffer(base64Data, 'base64');
//  console.log("replace"+binaryData);
  //console.log('replace.end');
  fs.writeFile(__dirname+"/public/out.png", binaryData, 'binary', function(err) {
//  console.log('err'+err);
}); 
});
  res.end();

 
//var base64Data  = data;



// var base64Data  + =  base64Data.replace('+', ' ');
// var binaryData  = new Buffer(base64Data, 'base64').toString('binary');
// fs.writeFile("out.png", binaryData, "binary", function (err) {
//     console.log(err); // writes out file without error, but it's not a valid image
// });


});




// const computerVision = new cognitiveServices.computerVision({
//     'API_KEY': 'e765587bff6b47a9964aa266d703a5c6'
// });



// const parameters = {
//     visualFeatures: "Categories"
// };
//  Input passed within the POST body. Supported input methods: raw image binary or image URL. 
 
// Input requirements: 
 
// Supported image formats: JPEG, PNG, GIF, BMP. 
// Image file size must be less than 4MB.
// Image dimensions must be at least 50 x 50.
 
// const body = {};
 
 
// computerVision.analyzeImage({
//         parameters,
//         body
//     })
//     .then((response) => {
//         console.log('Got response', response);
//     })
//     .catch((err) => {
//         console.error('Encountered error making request:', err);
//     });