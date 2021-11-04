const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//Configuration for saving user files
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        //Define the file name
        const name = file.originalname.split(' ').join('_');
        //Define the file extension
        const extension = MIME_TYPES[file.mimetype];
        //Change the file name
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('image');