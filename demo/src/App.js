import Service from "./pages/Service/Service";
import Main from "./pages/index/Main";
import { Routes, Route, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Events from "./pages/Events/Events";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Main/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/Event" element={<Events/>} />
          
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
