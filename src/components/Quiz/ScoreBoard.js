function ScoreBoard({ score, totalQuestions, correctAnswers, timeSpent }) {
    return (
      <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Quiz Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-900/30 rounded-lg p-4 text-center">
            <p className="text-purple-200 text-sm">Final Score</p>
            <p className="text-3xl font-bold text-pink-400">{score}</p>
            <p className="text-purple-300 text-sm">out of {totalQuestions}</p>
          </div>
  
          <div className="bg-purple-900/30 rounded-lg p-4 text-center">
            <p className="text-purple-200 text-sm">Accuracy</p>
            <p className="text-3xl font-bold text-pink-400">
              {Math.round((correctAnswers / totalQuestions) * 100)}%
            </p>
          </div>
  
          <div className="bg-purple-900/30 rounded-lg p-4 text-center">
            <p className="text-purple-200 text-sm">Correct Answers</p>
            <p className="text-3xl font-bold text-pink-400">{correctAnswers}</p>
            <p className="text-purple-300 text-sm">of {totalQuestions} questions</p>
          </div>
  
          <div className="bg-purple-900/30 rounded-lg p-4 text-center">
            <p className="text-purple-200 text-sm">Average Time</p>
            <p className="text-3xl font-bold text-pink-400">
              {Math.round(timeSpent / totalQuestions)}s
            </p>
            <p className="text-purple-300 text-sm">per question</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ScoreBoard;