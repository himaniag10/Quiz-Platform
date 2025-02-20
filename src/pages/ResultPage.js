import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ScoreBoard from "../components/Quiz/ScoreBoard";
import AttemptHistory from '../components/Quiz/AttemptHistory';
import { saveAttempt, clearDatabase } from '../utils/IndexedDB';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [saved, setSaved] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const { score, totalQuestions, correctAnswers, timeSpent } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate('/');
      return;
    }

    // Only save if we have a new attempt (checking for timestamp prevents reload saves)
    const saveQuizAttempt = async () => {
      if (!saved && location.state.isNewAttempt) {
        const attemptData = {
          score,
          totalQuestions,
          correctAnswers,
          timeSpent,
          timestamp: new Date().toISOString()
        };
        
        await saveAttempt(attemptData);
        setSaved(true);
      }
    };

    saveQuizAttempt();
  }, [location.state, navigate, score, totalQuestions, correctAnswers, timeSpent, saved]);

  const handleReset = async () => {
    try {
      setIsResetting(true);
      await clearDatabase();
      // Force refresh AttemptHistory component
      window.location.reload();
    } catch (error) {
      console.error('Error resetting database:', error);
    } finally {
      setIsResetting(false);
    }
  };

  if (!location.state) return null;

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScoreBoard 
          score={score}
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeSpent={timeSpent}
        />

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-purple-900/50 rounded-lg text-purple-200 hover:bg-purple-800/50 transition-colors"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-bold hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <button
            onClick={handleReset}
            disabled={isResetting}
            className="px-6 py-3 bg-red-600/50 rounded-lg text-red-200 hover:bg-red-500/50 transition-colors disabled:opacity-50"
          >
            {isResetting ? 'Resetting...' : 'Reset All Attempts'}
          </button>
        </div>

        <AttemptHistory />
      </div>
    </div>
  );
}

export default ResultPage;