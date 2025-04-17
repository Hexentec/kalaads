import { useState, useEffect } from 'react';
import './Counter.css';

const Counter = ({ end, duration, suffix = '', label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60); // 60fps

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="counter-item">
      <div className="counter-number">
        {count}{suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export default Counter;