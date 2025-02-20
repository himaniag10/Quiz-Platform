const DB_NAME = 'QuizDB';
const DB_VERSION = 2;
const STORE_NAME = 'attempts';

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { 
          keyPath: 'id', 
          autoIncrement: true 
        });
        store.createIndex('timestamp', 'timestamp', { unique: true });
      } else {
        const store = event.target.transaction.objectStore(STORE_NAME);
        if (!store.indexNames.contains('timestamp')) {
          store.createIndex('timestamp', 'timestamp', { unique: true });
        }
      }
    };
  });
};

export const saveAttempt = async (attemptData) => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.add({
      ...attemptData,
      timestamp: new Date().toISOString()
    });

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        window.dispatchEvent(new CustomEvent('attemptsUpdated'));
        resolve(request.result);
      };
      request.onerror = () => {
        if (request.error.name === 'ConstraintError') {
          resolve(null);
        } else {
          reject(request.error);
        }
      };
    });
  } catch (error) {
    console.error('Error saving attempt:', error);
    throw error;
  }
};

export const getAttempts = async () => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const attempts = request.result.sort((a, b) => 
          new Date(b.timestamp) - new Date(a.timestamp)
        );
        resolve(attempts);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error('Error getting attempts:', error);
    throw error;
  }
};

export const clearDatabase = async () => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore('attempts');
    
    return new Promise((resolve, reject) => {
      const clearRequest = store.clear();
      
      clearRequest.onsuccess = () => {
        window.dispatchEvent(new CustomEvent('attemptsUpdated'));
        resolve();
      };
      clearRequest.onerror = () => reject(clearRequest.error);
    });
  } catch (error) {
    console.error('Error clearing database:', error);
    throw error;
  }
};