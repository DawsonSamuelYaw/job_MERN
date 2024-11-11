
import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import the BrowserRouter

 // Assuming you are using App as your main component

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    {/* Wrap your app with BrowserRouter */}
    <App />
  </BrowserRouter>
);
