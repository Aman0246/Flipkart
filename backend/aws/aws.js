// var AWS = require("aws-sdk");

// require("dotenv").config();
// const bucketname = process.env.BUCKETNAME;
// const accesskey = process.env.ACCESSKEY;
// const seceretaccesskey = process.env.SECERETACCESSKEY;

// const s3 = new AWS.S3({
//   accessKeyId: accesskey,
//   secretAccessKey: seceretaccesskey,
// });

// let uploadFile = (file) => {
//   return new Promise((resolve, reject) => {
//     var uploadParams = {
//       Bucket: bucketname,
//       Key: file.mimetype,
//       Body: file.buffer,
//       ContentType: "image/JPG",
//     };
//     s3.upload(uploadParams, (err, data) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         console.log(data);
//         resolve(data.Location); // Resolve with the uploaded file URL
//       }
//     });
//   });
// };

// const uploadimg = async (req, res) => {
//   try {
//     let files = req.files;
//     if (files && files.length > 0) {
//       const uploadFileUrl = await uploadFile(files[0]);
//       res.status(201).send({
//         status: true,
//         data: uploadFileUrl,
//       });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// module.exports = { uploadimg };
