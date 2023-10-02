// Importing CSS styles
import './styles/reset.css'; // Reset styles for consistent browser rendering
import './styles/globals.css'; // Global styles for the entire app
import './styles/locomotive-scroll.css'; // Styles for a specific scrolling library
import 'react-tooltip/dist/react-tooltip.css'; // Styles for tooltips

// Importing necessary modules from React and related libraries
import React from 'react'; // Core React library
import ReactDOM from 'react-dom/client'; // DOM rendering methods from React
import { lazy } from 'react'; // Lazy loading for components
import { HelmetProvider } from 'react-helmet-async'; // Provider for managing document head metadata
import { BrowserRouter } from 'react-router-dom'; // Routing functionality
import { ThemeProvider } from 'styled-components'; // Theming for styled components

// Importing custom styles and components
import media from './styles/media'; // Media query breakpoints
import { theme } from './styles/global-theme'; // Global theme for styled components
import { Head } from './components/index'; // Custom Head component for managing document head

// Lazy loading the main App component
const App = lazy(() => import('./App'));

// Creating a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app
root.render(
  <>
    {/* Wrapping the app with HelmetProvider for managing document head */}
    <HelmetProvider>

      {/* Rendering the custom Head component */}
      <Head />
      
      {/* Wrapping the app with ThemeProvider to provide global styling */}
      <ThemeProvider theme={{ ...theme, ...media }}>

        {/* Using BrowserRouter for handling client-side routing */}
        <BrowserRouter basename='/'>

          <App />

        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </>
);
