import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import WordCloud from './components/WordCloud';
import Home from './components/Home';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Rlist from './components/Rlist';
import Xtabs from './components/Xtabs';
import Photos from './components/Photos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="word" element={<WordCloud />} />
              <Route path="rlist" element={<Rlist />} />
              <Route path="xtabs" element={<Xtabs />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
