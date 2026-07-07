import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { FeaturedProperties } from './components/FeaturedProperties/FeaturedProperties';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { PropertyDetailsPage } from './pages/PropertyDetailsPage';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <div className={`app-shell app-theme-${theme}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <FeaturedProperties />
              <Contact />
            </>
          }
        />
        <Route path="/imovel/:id" element={<PropertyDetailsPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;