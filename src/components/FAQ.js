// FAQ.js

import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqData = [
    { question: "How can I order groceries online?", answer: "You can order groceries online by visiting our website and selecting the items you need. Add them to your cart and proceed to checkout." },
    { question: "Is there a minimum order amount?", answer: "Yes, we have a minimum order amount of $20 for online grocery orders." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods, including credit/debit cards and online payment services." },
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} className="faq-item">
            <div className="question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className={`toggle-icon ${expandedIndex === index ? "expanded" : ""}`}>+</span>
            </div>
            {expandedIndex === index && <div className="answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
