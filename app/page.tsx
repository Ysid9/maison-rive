import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogue from './components/Catalogue';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catalogue />
    </main>
  );
}