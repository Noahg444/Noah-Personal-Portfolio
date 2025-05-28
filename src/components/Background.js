import React from 'react';
import '../styles/main.css';

const Background = ({ count = 30 }) => {
  const bubbles = Array.from({ length: count });
  return (
    <div className="bubble-bg">
      {bubbles.map((_, i) => {
        const size = Math.random() * 80 + 20;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        const left = Math.random() * 100;
        return (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;