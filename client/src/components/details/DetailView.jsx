import React, { useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import './detailview.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';

const DetailView = (props) => {
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('name');
  const { id } = useParams();
  const productId = String(id);
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [userHasReviewed, setUserHasReviewed] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-product/${productId}`);
        setProduct(response.data.product);
        setReviews(response.data.product.reviews);

        // Check if the current user has already reviewed the product
        const hasReviewed = response.data.product.reviews.some(review => review.user === userId);
        setUserHasReviewed(hasReviewed);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId, userId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/review/${productId}`, {
        comment,
        rating,
        userId,
        userName
      }, {
        headers: {
          Authorization: `Bearer ${props.authToken}`, // Ensure you pass the user's auth token if required
        },
      });
      setReviews([...reviews, response.data.review]); // Append the new review to the reviews list
      setComment('');
      setRating(0);
      setUserHasReviewed(true);
      setIsDialogOpen(false); // Hide the dialog after submission
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div style={{ textAlign: "left" }}>
      {product && (
        <div className="container">
          <div className="overall">
            <div>
              <ActionItem product={product} id={productId} helper={props.helper} />
            </div>
            <div className="right" style={{ marginLeft: "80px" }}>
              <div className="cont" style={{ fontWeight: "600", color: "#6b0727" }}>{product.pname}</div>
              <small className="cont" style={{ color: "#446114" }}>{product.pdesc}</small>
              <div className="cont" style={{ color: "#875608", marginTop: "20px" }}>
                <span style={{ fontSize: 28 }}>₹{product.price}/day</span>
              </div>
              <small className="cont"><i className="bi bi-geo-fill"></i> {product.pcity}</small>
              <ProductDetail product={product} data={props.login} helper={props.helper} />
            </div>
          </div>
          <div className="reviews">
            <h3>Reviews</h3>
            {reviews.length === 0 ? (
              <p>No reviews yet</p>
            ) : (
              reviews.map((review) => (
                <div key={review._id} className="review">
                  <strong>{review.name} </strong>
                  <span>Rating: {review.rating}</span>
                  <p>{review.comment}</p>
                </div>
              ))
            )}

            {!userHasReviewed && (
              <>
                <button onClick={() => setIsDialogOpen(true)}>Add Review</button>
                <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                  <div className="dialog-content">
                    <form onSubmit={handleReviewSubmit} className="review-form">
                      <div>
                        <label htmlFor="rating">Rating:</label>
                        <select
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                          id="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div>
                      <button type="submit">Submit Review</button>
                    </form>
                  </div>
                </Dialog>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
