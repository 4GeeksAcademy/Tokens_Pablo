import React, { useState, useEffect } from 'react'

function PrivateRoute({ children }) {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsValid(false);
        return;
      }
      try {
        const response = await fetch('https://refactored-bassoon-g47p4rj6vx4qhpvr4-3001.app.github.dev/api/verify-token', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsValid(response.ok);
      } catch {
        setIsValid(false);
      }
    };
    verifyToken();
  }, [token]);

  if (isValid === null) return <p>Cargando...</p>;
  return isValid ? children : <Navigate to="/" replace />;
}
export default PrivateRoute;