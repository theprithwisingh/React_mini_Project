// FeedbackPage.js

import React, { useState } from 'react';

function FeedbackPage() {
  // Array to store feedback items
  const [feedbackItems, setFeedbackItems] = useState([]);

  // Add some dummy feedback items for demonstration
  // Replace this with actual feedback data from an API or database
  useState(() => {
    const dummyFeedback = [];
    for (let i = 1; i <= 20; i++) {
      dummyFeedback.push({ id: i, message: `Feedback ${i}` });
    }
    setFeedbackItems(dummyFeedback);
  }, []);

  // Function to handle scrolling left to right
  const scrollLeft = () => {
    const container = document.getElementById('feedback-container');
    if (container) {
      container.scrollLeft -= 100; // Adjust scrolling distance as needed
    }
  };

  // Function to handle scrolling right to left
  const scrollRight = () => {
    const container = document.getElementById('feedback-container');
    if (container) {
      container.scrollLeft += 100; // Adjust scrolling distance as needed
    }
  };

  return (
    <div className="feedback-page">
      <h1>Feedback Page</h1>
      <div className="feedback-container" id="feedback-container">
        {feedbackItems.map((item) => (
          <div key={item.id} className="feedback-item">
            <p>{item.message}</p>
          </div>
        ))}
      </div>
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>Scroll Left</button>
        <button onClick={scrollRight}>Scroll Right</button>
      </div>
    </div>
  );
}

export default FeedbackPage;