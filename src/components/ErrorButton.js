import React, { useState } from 'react';
import './ErrorButton.css';

const ErrorButton = ({ 
  errorType = 'generic',
  buttonText,
  variant = 'danger',
  size = 'small',
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const errorTypes = {
    // JavaScript Runtime Errors
    generic: {
      text: 'Generic Error',
      action: () => {
        throw new Error('Generic application error thrown for testing purposes');
      }
    },
    
    reference: {
      text: 'Reference Error',
      action: () => {
        // eslint-disable-next-line no-undef
        undefinedVariable.someProperty = 'test';
      }
    },
    
    type: {
      text: 'Type Error',
      action: () => {
        const nullValue = null;
        nullValue.someMethod();
      }
    },
    
    syntax: {
      text: 'Syntax Error',
      action: () => {
        // Simulate syntax error without using eval
        throw new SyntaxError('Unexpected token in expression (Simulated syntax error)');
      }
    },
    
    range: {
      text: 'Range Error',
      action: () => {
        const arr = new Array(-1); // Invalid array length
        console.log(arr);
      }
    },
    
    // Network/API Errors (Client-side simulation only)
    networkError: {
      text: 'Network Error',
      action: () => {
        // Simulate network error without making real requests
        throw new Error('Network request failed: ERR_NETWORK_FAILURE - Simulated client-side network error');
      }
    },
    
    api404: {
      text: 'API 404 Error',
      action: () => {
        // Simulate 404 error without making real requests
        throw new Error('API Error: 404 - Not Found (Simulated client-side API error)');
      }
    },
    
    api500: {
      text: 'API 500 Error',
      action: () => {
        // Simulate 500 error without making real requests
        throw new Error('Server Error: 500 - Internal Server Error (Simulated client-side server error)');
      }
    },
    
    timeout: {
      text: 'Timeout Error',
      action: () => {
        // Simulate timeout error without making real requests
        throw new Error('Request timeout: The operation timed out after 5000ms (Simulated client-side timeout)');
      }
    },

    // Real Network/Server Errors (Make actual requests)
    realNetworkError: {
      text: 'Real Network Error',
      action: async () => {
        setIsLoading(true);
        try {
          // Try to connect to a non-existent domain
          const response = await fetch('https://nonexistent-api-endpoint-12345-definitely-does-not-exist.com/fail', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          setIsLoading(false);
          
          if (!response.ok) {
            throw new Error(`Real Network Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          setIsLoading(false);
          throw new Error(`Real Network Error: ${error.message}`);
        }
      }
    },

    realApi404: {
      text: 'Real API 404',
      action: async () => {
        setIsLoading(true);
        try {
          // Make real request to get actual 404
          const response = await fetch('https://httpbin.org/status/404', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          setIsLoading(false);
          
          if (!response.ok) {
            throw new Error(`Real API 404 Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          setIsLoading(false);
          throw new Error(`Real API 404 Error: ${error.message}`);
        }
      }
    },

    realApi500: {
      text: 'Real API 500',
      action: async () => {
        setIsLoading(true);
        try {
          // Make real request to get actual 500 error
          const response = await fetch('https://httpbin.org/status/500', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          setIsLoading(false);
          
          if (!response.ok) {
            throw new Error(`Real Server Error: ${response.status} - Internal Server Error`);
          }
        } catch (error) {
          setIsLoading(false);
          throw new Error(`Real Server Error: ${error.message}`);
        }
      }
    },

    realTimeout: {
      text: 'Real Timeout',
      action: async () => {
        setIsLoading(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort();
          setIsLoading(false);
        }, 3000); // 3 second timeout
        
        try {
          // Make real request that will timeout
          const response = await fetch('https://httpbin.org/delay/10', {
            signal: controller.signal,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          clearTimeout(timeoutId);
          setIsLoading(false);
          
          if (!response.ok) {
            throw new Error(`Request completed but failed: ${response.status}`);
          }
        } catch (error) {
          clearTimeout(timeoutId);
          setIsLoading(false);
          
          if (error.name === 'AbortError') {
            throw new Error('Real Timeout Error: Request was aborted due to timeout (3 seconds)');
          } else {
            throw new Error(`Real Timeout Error: ${error.message}`);
          }
        }
      }
    },

    realSlowApi: {
      text: 'Real Slow API',
      action: async () => {
        setIsLoading(true);
        try {
          // Make real slow request
          const response = await fetch('https://httpbin.org/delay/5', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          setIsLoading(false);
          
          if (!response.ok) {
            throw new Error(`Slow API Error: ${response.status} - ${response.statusText}`);
          } else {
            throw new Error('Slow API completed successfully (this simulates when slow responses cause issues)');
          }
        } catch (error) {
          setIsLoading(false);
          throw new Error(`Real Slow API Error: ${error.message}`);
        }
      }
    },

    realCorsError: {
      text: 'Real CORS Error',
      action: async () => {
        setIsLoading(true);
        try {
          // This will likely cause a CORS error
          const response = await fetch('https://www.google.com/api/nonexistent', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'X-Custom-Header': 'test'
            },
            body: JSON.stringify({ test: 'data' })
          });
          setIsLoading(false);
          
          if (!response.ok) {
            throw new Error(`CORS Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          setIsLoading(false);
          throw new Error(`Real CORS Error: ${error.message}`);
        }
      }
    },
    
    // State/React Errors
    stateError: {
      text: 'State Error',
      action: () => {
        // Simulate state manipulation error
        const fakeSetState = null;
        fakeSetState({ invalidState: true });
      }
    },
    
    renderError: {
      text: 'Render Error',
      action: () => {
        // This will cause a render error
        throw new Error('Component render error - simulating broken JSX');
      }
    },
    
    // Memory/Performance Errors
    memoryError: {
      text: 'Memory Error',
      action: () => {
        // Create a large array that might cause memory issues
        const massiveArray = new Array(10000000).fill('memory test string that is quite long and will consume memory');
        console.log('Created massive array:', massiveArray.length);
        throw new Error('Memory stress test completed - check console for memory usage');
      }
    },
    
    infiniteLoop: {
      text: 'Infinite Loop',
      action: () => {
        let counter = 0;
        const startTime = Date.now();
        
        // Controlled "infinite" loop that breaks after 2 seconds
        while (Date.now() - startTime < 2000) {
          counter++;
          if (counter % 100000 === 0) {
            console.log(`Loop iteration: ${counter}`);
          }
        }
        throw new Error(`Infinite loop simulation completed. Ran ${counter} iterations in 2 seconds.`);
      }
    },
    
    // Local Storage Errors
    storageError: {
      text: 'Storage Error',
      action: () => {
        try {
          // Try to exceed localStorage quota
          const largeString = 'x'.repeat(10000000); // 10MB string
          localStorage.setItem('testLargeData', largeString);
        } catch (error) {
          throw new Error(`Storage quota exceeded: ${error.message}`);
        }
      }
    },
    
    // Custom Business Logic Errors
    validationError: {
      text: 'Validation Error',
      action: () => {
        const userData = { email: 'invalid-email', age: -5 };
        
        if (!userData.email.includes('@')) {
          throw new Error('Validation Error: Invalid email format');
        }
        if (userData.age < 0) {
          throw new Error('Validation Error: Age cannot be negative');
        }
      }
    },
    
    authError: {
      text: 'Auth Error',
      action: () => {
        const token = null;
        if (!token) {
          throw new Error('Authentication Error: User not logged in or token expired');
        }
      }
    },
    
    permissionError: {
      text: 'Permission Error',
      action: () => {
        const userRole = 'guest';
        const requiredRole = 'admin';
        
        if (userRole !== requiredRole) {
          throw new Error(`Permission Error: User role '${userRole}' does not have '${requiredRole}' privileges`);
        }
      }
    }
  };

  const currentError = errorTypes[errorType] || errorTypes.generic;
  const displayText = buttonText || currentError.text;

  const handleClick = async () => {
    try {
      console.warn(`🔥 Triggering ${errorType} error for testing purposes`);
      await currentError.action();
    } catch (error) {
      console.error(`❌ Error triggered: ${error.message}`, error);
      
      // Show user-friendly error notification
      const userConfirmed = window.confirm(`Error Triggered: ${error.message}\n\nThis is a test error. Check console for details.\n\nClick OK to acknowledge, Cancel to dismiss.`);
      
      if (userConfirmed) {
        console.log('✅ Error acknowledged by user');
        // Only re-throw if user confirms - this allows error boundaries to catch it
        throw error;
      } else {
        console.log('❌ Error dismissed by user (clicked Cancel)');
        // Don't re-throw if user clicks Cancel - just log and return
        return;
      }
    }
  };

  const buttonClasses = [
    'error-button',
    `error-button--${variant}`,
    `error-button--${size}`,
    isLoading ? 'error-button--loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
      disabled={isLoading}
      type="button"
      title={`Trigger ${errorType} error for testing`}
      aria-label={`Test button: ${displayText}`}
    >
      <span className="error-button__icon">
        {isLoading ? '⏳' : '💥'}
      </span>
      <span className="error-button__text">
        {displayText}
      </span>
    </button>
  );
};

export default ErrorButton;
