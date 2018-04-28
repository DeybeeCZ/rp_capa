var fs=require('fs');

exports.getMongoAdapter = function() {
    // var path = __dirname+'/../config/config.json';
    var localPath = __dirname+'/../config/local.json';
    // if(fs.existsSync(localPath)){
        path=localPath;
    // }
    var config=JSON.parse(fs.readFileSync(path, 'utf8'));//require(__dirname+'/../database.json');
    return config.mongo.bookStore;
}
