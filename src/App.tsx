
import {createContext, useState} from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext({}as any);

function App() {
  const [value, setValue] = useState('teste');

  return (
    <BrowserRouter>
        <TestContext.Provider value={{value, setValue}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms/new" element={<NewRoom/>}/>
      </Routes>
        </TestContext.Provider>
    </BrowserRouter>
  );
}
export default App;