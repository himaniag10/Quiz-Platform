import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/questions.json';

function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime] = useState(Date.now());
  
  const handleNextQuestion = useCallback(() => {
    if (currentQuestion === quizData.length - 1) {
      const timeSpent = Math.round((Date.now() - startTime) / 1000); // Calculate total time spent
      navigate('/result', { 
        state: { 
          score, 
          totalQuestions: quizData.length,
          correctAnswers,
          timeSpent,
          isNewAttempt: true 
        } 
      });
    } else {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(30);
      setIsAnswered(false);
      setSelectedAnswer(null);
      setUserInput('');
    }
  }, [currentQuestion, score, correctAnswers, startTime, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0 && !isAnswered) {
        setTimeLeft(prev => prev - 1);
      } else if (!isAnswered) {
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, handleNextQuestion]);

  const handleAnswer = (selectedIndex) => {
    if (isAnswered) return;
    
    setSelectedAnswer(selectedIndex);
    const isCorrect = quizData[currentQuestion].options[selectedIndex] === quizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1); // Increment correct answers count
    }
    setIsAnswered(true);

    setTimeout(handleNextQuestion, 1500);
  };

  const handleNumericAnswer = () => {
    if (isAnswered) return;
    
    const isCorrect = parseInt(userInput) === quizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1); // Increment correct answers count
    }
    setIsAnswered(true);
    
    setTimeout(handleNextQuestion, 1500);
  };


  const question = quizData[currentQuestion];
  const isNumericQuestion = !question.options;

  return (
      <div className="min-h-screen flex items-center justify-center p-4 pt-20">
        <div className="max-w-4xl w-full mx-auto bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl border border-purple-500/30">
        {/* Timer and Progress */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-purple-200">
              Question {currentQuestion + 1}/{quizData.length}
            </span>
            <span className="text-purple-200">
              Time: {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-purple-900/50 h-2 rounded-full">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-purple-200 mb-6">
            {question.question}
          </h2>
          {isNumericQuestion ? (
            <div className="flex flex-col items-center">
              <input 
                type="number" 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)} 
                className="p-2 border rounded-lg text-black"
                disabled={isAnswered}
              />
              <button 
                onClick={handleNumericAnswer} 
                className="mt-4 p-2 bg-purple-500 text-white rounded-lg"
                disabled={isAnswered}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`p-4 rounded-lg text-left transition-all duration-300 
                    ${isAnswered
                      ? option === question.answer
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : index === selectedAnswer
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-purple-900/30 border-2 border-transparent'
                      : 'bg-purple-900/30 border-2 border-transparent hover:border-purple-500'}
                    ${!isAnswered && 'hover:transform hover:scale-102 hover:shadow-lg hover:shadow-purple-500/20'}
                  `}
                  disabled={isAnswered}
                >
                  <span className="text-purple-200">{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Score */}
        <div className="text-center">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Score: {score}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;