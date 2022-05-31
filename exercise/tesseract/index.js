const tesseract = require("tesseract.js");

tesseract
    .recognize("image-text.jpg", "eng", { logger: (m) => console.log(m) })
    .then((result) => {
        console.log(result.data.text);
    })
    .catch((err) => {
        console.log(err.message);
    });

