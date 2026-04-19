import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-serif selection:bg-[#2D5A27] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-[#2D5A27] text-sm uppercase tracking-[0.3em] font-medium mb-12">Instagram @Redamancy</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1578985543813-6894ad096ef1?q=80&w=1920&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1920&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=1920&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1920&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Instagram post ${i+1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
