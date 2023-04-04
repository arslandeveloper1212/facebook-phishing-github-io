import './App.css';
import Facebook from './Components/Facebook';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Routes>
    <Route path='/' element={<Facebook/>}/>
    </Routes>
  );
}

export default App;
