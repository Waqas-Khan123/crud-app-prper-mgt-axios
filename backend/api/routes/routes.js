const express=require("express");
const multer = require('multer');
const path = require('path');



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // The directory to save the uploaded files
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const extension = path.extname(file.originalname);
//     cb(null, uniqueSuffix + extension);
//   }
// });
//   const upload = multer({ storage: storage })  

const router=express.Router();


const contrl=require('../controller/contrller')
router.post('/signup',contrl.signup);


router.get('/get',contrl.getdata);
router.delete('/delete/:id',contrl.delete);
router.get('/getone/:id',contrl.one_data);
router.put('/update/:id',contrl.update)


module.exports = router;