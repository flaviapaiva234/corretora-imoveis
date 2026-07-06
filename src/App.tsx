import './App.css';
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
  return (
    <div>
      <Header />
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