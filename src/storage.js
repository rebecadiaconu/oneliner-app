'use strict';
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

function readFile() {
    console.log('Reading File');
    var archivo = storage.bucket('data_for_app').file('inputs.json').createReadStream();
    console.log('Concat Data');
    var  buf = '';
    archivo.on('data', function(d) {
        buf += d;
    }).on('end', function() {
        res = JSON.parse(buf);
    });

    console.log(archivo);
    return archivo;
}

readFile();
