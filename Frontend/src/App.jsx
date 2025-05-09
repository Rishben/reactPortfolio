import React, { useEffect, useState } from 'react';
import Loading from './components/Loading1';
import Home from './pages/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading time (e.g., API call or fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // 3 seconds

    // Cleanup to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <Home />}
    </div>
  );
};

export default App;
