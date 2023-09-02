const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,callback) {
        callback(null,'uploads/');
    },
    filename:function(req,file,callback){
        const name = Date.now()+"-"+file.originalname;
        callback(null,name);
    }
})
const upload = multer({storage:storage})

module.exports = upload