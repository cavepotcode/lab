import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { useLayoutEffect } from 'react';
const ToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="app">
      <div className="grid">
        <ToTop>
          <Header />
          <div id="container">
            <Routes>
              {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
              <Route path="/" element={<HomePage />} >
                <Route path=":menu" element={<HomePage />} />
              </Route>
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </ToTop>
      </div>
    </div>
  );
}

export default App;
