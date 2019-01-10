// file services/createPdfs.js 
const pdf = require("html-pdf"); 
module.exports = function (result, html, options) {
    pdf.create(html, options).toStream(function (err, stream) {
        stream.pipe(result.stream);
    });
};