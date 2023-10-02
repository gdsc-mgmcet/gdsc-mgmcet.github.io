import React, { createContext, useState } from 'react';

// Create a context for managing transition color state
export const TransitionColorContext = createContext({
  transitionColor: '',             // Initial transition color
  transitionColorHandler: () => {},  // Initial transition color change handler
});

// Define a component for providing transition color context
const TransitionColorProvider = ({ children }) => {
  // State to store the current transition color
  const [transitionColor, setTransitionColor] = useState('');

  // Function to update the transition color
  const handleTransitionColor = (newColor) => {
    setTransitionColor(newColor);
  };

  // Provide transition color and handler to consuming components
  return (
    <TransitionColorContext.Provider
      value={{
        transitionColor: transitionColor,            // Provide current transition color
        transitionColorHandler: handleTransitionColor,  // Provide transition color change handler
      }}
    >
      {children} {/* Render child components within the provider */}
    </TransitionColorContext.Provider>
  );
};

export default TransitionColorProvider; // Export the context provider
