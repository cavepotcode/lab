import './App.scss';
import { Header } from '../src/components/generics/header/Header';
import { Route, Routes, useLocation } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { useLayoutEffect } from 'react';
import { Footer } from './components/generics/footer/Footer';
import { footerLab, headerLab } from './helpers';
import { Logo } from './components/logo/Logo';
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
          <Header {...headerLab} logo={<Logo/>}/>
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
          <Footer {...footerLab}/>
        </ToTop>
      </div>
    </div>
  );
}

export default App;
