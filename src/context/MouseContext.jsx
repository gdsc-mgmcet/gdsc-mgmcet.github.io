// LinkedIn mouse @Student

// Import required modules
import { createContext, useState } from 'react';

// Create a context for managing cursor state
export const MouseContext = createContext({
  cursorType: '',             // Initial cursor type
  cursorChangeHandler: () => {},  // Initial cursor change handler
});

// Define a component for providing cursor context
function MouseContextProvider(props) {
  // State to store the current cursor type
  const [cursorType, setCursorType] = useState('');

  // Function to update the cursor type
  const handleCursorChange = (newType) => {
    setCursorType(newType);
  };

  // Provide cursor type and handler to consuming components
  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,              // Provide current cursor type
        cursorChangeHandler: handleCursorChange,  // Provide cursor change handler
      }}
    >
      {props.children}  {/* Render child components within the provider */}
    </MouseContext.Provider>
  );
}

export default MouseContextProvider;  // Export the context provider
