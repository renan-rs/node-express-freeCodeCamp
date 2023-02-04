var http = require('http');
var fs = require('fs');

http
    .createServer(function(req,res){
        //whole file transfered to client
        // const text = fs.readFileSync('./content/big.txt', 'utf8');
        // res.end(text);

        //whole file transfered but chuncked
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err);
        })
    })
    .listen(5000);