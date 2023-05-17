import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '@/pages/Home';
import Settings from '@/pages/Settings';
import Layout from '@/components/Layout';
import Page from '@/pages/Page';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
