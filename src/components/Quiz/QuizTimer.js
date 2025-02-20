import { useEffect } from 'react';
import { formatTime } from '../../utils/timer';

function QuizTimer({ timeLeft, onTimeUp }) {
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className="w-full bg-gray-800 rounded-full p-1">
      <div className="relative">
        <div 
          className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        />
        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-purple-200">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
}

export default QuizTimer;