'use strict';
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

exports.readFile() = () => {
    console.log('Reading File');
    var archivo = storage.bucket('data_for_app').file('data.json').createReadStream();
    console.log('Concat Data');
    var  buf = '';
    archivo.on('data', function(d) {
        buf += d;
    }).on('end', function() {
        res = JSON.parse(buf);
    });
}