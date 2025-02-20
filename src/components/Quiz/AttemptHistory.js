import { useEffect, useState } from 'react';
import { getAttempts } from '../../utils/IndexedDB';

function AttemptHistory() {
  const [attempts, setAttempts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadAttempts = async () => {
    try {
      setIsLoading(true);
      const attemptHistory = await getAttempts();
      setAttempts(attemptHistory.sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      ));
    } catch (error) {
      console.error('Error loading attempts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAttempts();

    // Listen for database updates
    const handleUpdate = () => {
      loadAttempts();
    };

    window.addEventListener('attemptsUpdated', handleUpdate);
    return () => {
      window.removeEventListener('attemptsUpdated', handleUpdate);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-200 mb-4">Previous Attempts</h3>
        <p className="text-purple-300">Loading attempts...</p>
      </div>
    );
  }

  return (
    <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
      <h3 className="text-xl font-bold text-purple-200 mb-4">Previous Attempts</h3>
      
      {attempts.length === 0 ? (
        <p className="text-purple-300">No previous attempts yet</p>
      ) : (
        <div className="space-y-4">
          {attempts.map((attempt, index) => (
            <div 
              key={attempt.timestamp || index} 
              className="bg-purple-900/30 rounded-lg p-4 flex justify-between items-center"
            >
              <div className="space-y-1">
                <p className="text-purple-200">
                  {new Date(attempt.timestamp).toLocaleDateString()} {' '}
                  <span className="text-purple-400 text-sm">
                    {new Date(attempt.timestamp).toLocaleTimeString()}
                  </span>
                </p>
                <p className="text-sm text-purple-400">
                  Score: {attempt.score}/{attempt.totalQuestions}
                </p>
              </div>
              <div className="text-pink-400 text-2xl font-bold">
                {Math.round((attempt.score / attempt.totalQuestions) * 100)}%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AttemptHistory;