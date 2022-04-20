// Place your server entry point code here

const express = require('express');
const app = express();


HTTP_PORT = 5000;

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

app.use(express.json())
app.use(express.static('./public'))

// //Main app screen
// app.get('/', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./index.html', null, function(err, data){
//         if(err){
//             res.writeHead(404);
//             res.write('File not found.');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     })
// });

app.post('/app/flip/coins/', (req, res, next) => {
    const flips = coinFlips(req.body.number)
    const count = countFlips(flips)
    res.status(200).json({"raw":flips,"summary":count})
})

