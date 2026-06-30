import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { FeaturedProperties } from './components/FeaturedProperties/FeaturedProperties';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <FeaturedProperties />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;