// src/components/FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', { feedback });
      alert('Phản hồi của bạn đã được gửi thành công!');
      setFeedback('');
    } catch (error) {
      console.error('Lỗi khi gửi phản hồi:', error);
      alert('Đã xảy ra lỗi khi gửi phản hồi.');
    }
  };

  return (
   <form onSubmit={handleSubmit}>
      <label>
        Phản hồi của bạn:
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </label>
      <button type="submit">Gửi Phản hồi</button>
    </form>
  );
};

export default FeedbackForm;
