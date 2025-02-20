function QuizQuestion({ 
    question, 
    options, 
    onAnswer, 
    selectedAnswer,
    correctAnswer,
    isAnswered 
  }) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl md:text-2xl text-purple-200 font-bold">
          {question}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => !isAnswered && onAnswer(index)}
              className={`
                p-4 rounded-lg text-left transition-all duration-300
                ${isAnswered && index === correctAnswer ? 'bg-green-500/20 border-green-500' : ''}
                ${isAnswered && index === selectedAnswer && index !== correctAnswer ? 'bg-red-500/20 border-red-500' : ''}
                ${!isAnswered ? 'hover:bg-purple-700/50 bg-purple-900/30' : ''}
                border-2
                ${!isAnswered ? 'border-transparent hover:border-purple-500' : ''}
              `}
              disabled={isAnswered}
            >
              <span className="text-purple-200">{option}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default QuizQuestion;