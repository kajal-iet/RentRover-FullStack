// // const reviewSchema=new mongoose.Schema({
// //   name:{
// //     type:String,
// //     required:[true, 'name is required']
// //   },
// //   ratng:{
// //     type:Number,
// //     default:0
// //   },
// //   user:{
// //     type:mongoose.Schema.Types.ObjectId,
// //     ref:'Users',
// //     reuired:[true,'user required'],
// //   },
// // },
// //   {timestamps:true}
// // );
// // //add this in productSchema
// // reviewSchema:[reviewSchema],
// // rating:{
// //   type:Number,
// //   default:0
// // },
// // numeviews:{
// //   type:Number,
// //   default:0
// // }


// //router
// Router.put('/:id/review',controller)


// //controller
// xport const productReviewController = async (req, res) => {
//   try {
//     const { comment, rating } = req.body;
//     // find product
//     const product = await productModel.findById(req.params.id);
//     // check previous review
//     const alreadyReviewed = product.reviews.find(
//       (r) => r.user.toString() === req.user._id.toString()
//     );
//     if (alreadyReviewed) {
//       return res.status(400).send({
//         success: false,
//         message: "Product Alredy Reviewed",
//       });
//     }
//     // review object
//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };
//     // passing review object to reviews array
//     product.reviews.push(review);
//     // number or reviews
//     product.numReviews = product.reviews.length;
//     product.rating =
//       product.reviews.reduce((acc, item) => item.rating + acc, 0) /
//       product.reviews.length;
//     // save
//     await product.save();
//     res.status(200).send({
//       success: true,
//       message: "Review Added!",
//     });
//   } catch (error) {
//     console.log(error);
//     // cast error ||  OBJECT ID
//     if (error.name === "CastError") {
//       return res.status(500).send({
//         success: false,
//         message: "Invalid Id",
//       });
//     }
//     res.status(500).send({
//       success: false,
//       message: "Error In Review Comment API",
//       error,
//     });
//   }
// };


