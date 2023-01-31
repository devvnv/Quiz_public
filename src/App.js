import './App.css';
import MainQuiz from './components/MainQuiz';
import EnterName from './components/EnterName'
import WelcomeBanner from './components/WelcomeBanner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EnterName/>}  />
        <Route path='/mainquiz' element={<MainQuiz/>}  />
        <Route path='/welcomebanner' element={<WelcomeBanner/>}  />
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
