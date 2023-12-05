import React from "react";
import Modal from "react-modal";
import axios from 'axios'
const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm,productId }) => {
    const handleConfirm = async () => {
        try {
            console.log("p id is",productId)
          // Perform your axios.post request here
          const response = await axios.post("http://localhost:8000/remove-product", { productId });
    
          // Handle the response or any additional logic as needed
          console.log(response.data);
        window.location.reload();
          // Close the modal after successful operation
          onRequestClose();
        } catch (error) {
          // Handle errors
          console.error("Error removing product:", error);
    
          // Close the modal, or display an error message, as needed
          onRequestClose();
        }
      };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "400px",
          margin: "auto",
          marginTop: "150px",
          border: "1px solid #ccc",
          background: "#fff",
          borderRadius: "8px",
          outline: "none",
          padding: "20px",
          height:"190px"
        },
      }}
    >
      <p style={{ marginBottom: "40px",marginTop:"15px",fontSize:"18px" }}>Are you sure you want to remove this item?</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleConfirm}
          style={{
            padding: "10px",
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight:"0px"
          }}
        >
          Confirm
        </button>
        <button
          onClick={onRequestClose}
          style={{
            padding: "10px",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
