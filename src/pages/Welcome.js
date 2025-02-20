import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20">
      <div className="max-w-4xl w-full mx-auto bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl border border-purple-500/30">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            BRAIN BLAST
          </h1>
          <p className="text-lg md:text-xl text-purple-200">
            Test Your Knowledge!
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Instructions */}
          <div className="bg-purple-900/30 rounded-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-3">
              How to Play
            </h2>
            <ul className="text-purple-200 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-pink-400">•</span>
                <span>30 seconds per question</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-400">•</span>
                <span>Answer correctly to score points</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-400">•</span>
                <span>Track your progress across attempts</span>
              </li>
            </ul>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={() => navigate('/quiz')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-bold text-lg md:text-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;