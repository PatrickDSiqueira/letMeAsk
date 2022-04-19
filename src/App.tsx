
import {createContext, useState} from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext({}as any);

function App() {
  const [value, setValue] = useState('teste');

  return (
    <BrowserRouter>
      <Routes>
        <TestContext.Provider value={{value, setValue}}>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms/new" element={<NewRoom/>}/>
        </TestContext.Provider>
      </Routes>
    </BrowserRouter>
  );
}
export default App;