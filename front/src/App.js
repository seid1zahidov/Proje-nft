import './App.css';
import Header from './components/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Index from './screen/index/Index.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />

        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
