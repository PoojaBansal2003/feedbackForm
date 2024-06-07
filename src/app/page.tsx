
"use client";

import React, { useState } from 'react';


const FeedbackForm: React.FC = () => {
  
  const [rating, setRating] = useState<number>(0);
  const [safetyRating, setSafetyRating] = useState<number>(0);
  const [communicationRating, setCommunicationRating] = useState<number>(0);
  const [recommendation, setRecommendation] = useState<boolean | null>(null);
  const [praise, setPraise] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleRatingChange = (category: string, star: number) => {
    switch (category) {
      case 'overall':
        setRating(star);
        break;
      case 'safety':
        setSafetyRating(star);
        break;
      case 'communication':
        setCommunicationRating(star);
        break;
      default:
        break;
    }
  };

  const handleRecommendation = (value: boolean) => {
        setRecommendation(value);
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { rating, safetyRating, communicationRating, recommendation, praise });
    setSubmitted(true);
    setRating(0);
    setSafetyRating(0);
    setCommunicationRating(0);
    setRecommendation(null);
    setPraise([]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 border border-gray-200 rounded-lg">
      <h2 className="text-4xl font-bold mb-4">Leave a Review</h2>
      <p className="text-gray-600 mb-10">Your feedback is invaluable to us. Please take a moment to share your experience with Trausti.</p>
      <div className="mb-6">
        <label htmlFor="rating" className="block mb-4 font-bold">Overall Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() =>  handleRatingChange('overall', star)}
              className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'} focus:outline-none mr-2`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-4 font-bold">Safety Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange('safety', star)}
              className={`text-2xl ${star <= safetyRating ? 'text-yellow-500' : 'text-gray-300'} focus:outline-none mr-2`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-4 font-bold">Communication Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange('communication', star)}
              className={`text-2xl ${star <= communicationRating ? 'text-yellow-500' : 'text-gray-300'} focus:outline-none mr-2`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="recommendation" className="block mb-8 font-bold">Would you recommend Trausti?</label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => handleRecommendation(true)}
            className={`text-2xl ${recommendation === true ? 'text-green-500' : 'text-gray-300'} focus:outline-none mr-2`}
          >
            👍<span className="text-xl ml-1 font-semibold">Yes</span>
          </button>
          <button
            type="button"
            onClick={() => handleRecommendation(false)}
            className={`text-2xl ${recommendation === false ? 'text-red-500' : 'text-gray-300'} focus:outline-none`}
          >
            👎<span className="text-xl ml-1 font-semibold">No</span>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-6 font-bold">Praise</label>
        <div>
          <label className="inline-flex items-center mb-2">
            <input
              type="checkbox"
              checked={praise.includes('Excellent service')}
              onChange={() => setPraise((prevPraise) => prevPraise.includes('Excellent service') ? prevPraise.filter((item) => item !== 'Excellent service') : [...prevPraise, 'Excellent service'])}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Excellent service</span>
          </label>
          <label className="inline-flex items-center mx-5">
            <input
              type="checkbox"
              checked={praise.includes('Timely responses')}
              onChange={() => setPraise((prevPraise) => prevPraise.includes('Timely responses') ? prevPraise.filter((item) => item !== 'Timely responses') : [...prevPraise, 'Timely responses'])}
              className="form-checkbox h-5 w-5 text-blue-500 "
            />
            <span className="ml-2">Timely responses</span>
          </label>
          <label className="inline-flex items-center mb-2">
            <input
              type="checkbox"
              checked={praise.includes('Professionalism')}
              onChange={() => setPraise((prevPraise) => prevPraise.includes('Professionalism') ? prevPraise.filter((item) => item !== 'Professionalism') : [...prevPraise, 'Professionalism'])}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Professionalism</span>
          </label>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg ">Submit</button>
      {submitted && <p className="text-red-600 mt-4">Your feedback helps us improve our service. Thank you for taking the time to share your thoughts!</p>}
    </form>
  );
};

export default FeedbackForm;


