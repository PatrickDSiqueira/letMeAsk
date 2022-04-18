import {BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    // <Home/>    // teste
    // <NewRoom/>  // teste
    <BrowserRouter>
    <Routes>

      <Route index element={<Home />} />

      <Route  path="/" element={<Home/>} />
      <Route path="/rooms/new" element={<NewRoom/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;