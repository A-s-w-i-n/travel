import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
  // Optional: Add global AOS configuration here
  duration: 1200,
  once: false,
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
