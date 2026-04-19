import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, ChevronRight, ShoppingBag, Globe, Share2 } from 'lucide-react';

// Types for our products
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Bánh Kem Matcha Redamancy",
    price: "450,000đ",
    image: "/matcha-cake.jpg",
    category: "Bánh Kem",
    description: "Lớp kem matcha đậm vị kết hợp cùng cốt bánh chiffon mềm mịn."
  },
  {
    id: 2,
    name: "Croissant Bơ Pháp",
    price: "45,000đ",
    image: "/croissant.jpg",
    category: "Bánh Mì",
    description: "Bánh ngàn lớp giòn tan với hương vị bơ cao cấp nhập khẩu từ Pháp."
  },
  {
    id: 3,
    name: "Tiramisu Ý Truyền Thống",
    price: "85,000đ",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop",
    category: "Bánh Ngọt",
    description: "Hương vị cà phê nồng nàn quyện cùng lớp kem Mascarpone béo ngậy."
  },
  {
    id: 4,
    name: "Bánh Kem Dâu Tây Trắng",
    price: "520,000đ",
    image: "/hero-cake.jpg",
    category: "Bánh Kem",
    description: "Sự kết hợp hoàn hảo giữa dâu tây tươi và kem tươi thanh nhẹ."
  },
  {
    id: 5,
    name: "Macaron Đủ Vị",
    price: "35,000đ",
    image: "https://images.unsplash.com/photo-1569864358642-9d16197022c3?q=80&w=1000&auto=format&fit=crop",
    category: "Bánh Ngọt",
    description: "Những chiếc bánh nhỏ xinh với lớp vỏ giòn tan và nhân kem ngọt ngào."
  },
  {
    id: 6,
    name: "Bánh Mì Hoa Cúc",
    price: "120,000đ",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    category: "Bánh Mì",
    description: "Cốt bánh mềm xốp, thơm mùi bơ và hương hoa cúc đặc trưng."
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Redamancy Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-serif tracking-widest text-[#2D5A27] font-bold">REDAMANCY</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-[#2D5A27] transition-colors">Trang Chủ</a>
          <a href="#menu" className="hover:text-[#2D5A27] transition-colors">Thực Đơn</a>
          <a href="#about" className="hover:text-[#2D5A27] transition-colors">Về Chúng Tôi</a>
          <a href="#contact" className="hover:text-[#2D5A27] transition-colors">Liên Hệ</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              <a href="#" onClick={() => setIsOpen(false)}>Trang Chủ</a>
              <a href="#menu" onClick={() => setIsOpen(false)}>Thực Đơn</a>
              <a href="#about" onClick={() => setIsOpen(false)}>Về Chúng Tôi</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Liên Hệ</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero-cake.jpg"
        alt="Hero Cake"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
    
    <div className="relative z-10 text-center text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-serif mb-6 drop-shadow-lg">Redamancy</h1>
        <p className="text-xl md:text-2xl font-light tracking-widest mb-8 max-w-2xl mx-auto italic">
          "The act of loving the one who loves you; a love returned in full."
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-[#2D5A27] text-white px-8 py-3 rounded-full hover:bg-[#1e3d1a] transition-all flex items-center justify-center gap-2"
          >
            Khám Phá Menu <ChevronRight size={18} />
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-md border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2D5A27] transition-all"
          >
            Đặt Bánh Ngay
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
  >
    <div className="relative h-72 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2D5A27] uppercase tracking-wider">
        {product.category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-serif mb-2 group-hover:text-[#2D5A27] transition-colors">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-lg font-bold text-[#2D5A27]">{product.price}</span>
        <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-[#2D5A27] transition-colors">
          Thêm <ShoppingBag size={16} />
        </button>
      </div>
    </div>
  </motion.div>
);

const MenuSection = () => {
  const [filter, setFilter] = useState('Tất Cả');
  const categories = ['Tất Cả', 'Bánh Kem', 'Bánh Ngọt', 'Bánh Mì'];

  const filteredProducts = filter === 'Tất Cả' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="menu" className="py-24 bg-[#fcfdfc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D5A27] mb-4">Danh Mục Bánh Ngọt</h2>
          <div className="w-24 h-1 bg-[#2D5A27] mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  filter === cat 
                    ? 'bg-[#2D5A27] text-white border-[#2D5A27]' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#2D5A27]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <div className="relative">
          <img
            src="/bakery-interior.jpg"
            alt="Bakery Interior"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 border-8 border-[#2D5A27] rounded-2xl z-[-1]" />
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D5A27] mb-6">Câu Chuyện Redamancy</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Tại Redamancy, chúng tôi tin rằng mỗi chiếc bánh không chỉ là món ăn, mà là một tác phẩm nghệ thuật truyền tải tình yêu và sự chân thành. Cái tên Redamancy mang ý nghĩa về một tình yêu trọn vẹn được đáp lại.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Sử dụng những nguyên liệu cao cấp nhất, kết hợp cùng kỹ thuật làm bánh thủ công tinh xảo, chúng tôi mang đến những hương vị ngọt ngào, ấm áp cho những khoảnh khắc đáng nhớ của bạn.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-[#2D5A27] mb-2 uppercase tracking-widest text-sm">Chất Lượng</h4>
            <p className="text-sm text-gray-500">Nguyên liệu nhập khẩu 100% từ Pháp và Ý.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#2D5A27] mb-2 uppercase tracking-widest text-sm">Tận Tâm</h4>
            <p className="text-sm text-gray-500">Từng chiếc bánh được tạo ra bằng sự tỉ mỉ nhất.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-[#2D5A27] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 brightness-0 invert" />
          <span className="text-2xl font-serif tracking-widest font-bold">REDAMANCY</span>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Tiệm bánh ngọt cao cấp mang đến hương vị sang trọng và ấm áp cho mọi gia đình Việt.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-serif mb-6">Liên Hệ</h4>
        <ul className="space-y-4 text-sm text-white/70">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="shrink-0" />
            <span>123 Đường Bánh Ngọt, Quận 1, TP. Hồ Chí Minh</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="shrink-0" />
            <span>090 123 4567</span>
          </li>
          <li className="flex items-center gap-3">
            <Clock size={18} className="shrink-0" />
            <span>08:00 - 22:00 Hàng ngày</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-serif mb-6">Liên Kết</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li><a href="#" className="hover:text-white transition-colors">Trang Chủ</a></li>
          <li><a href="#menu" className="hover:text-white transition-colors">Thực Đơn</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Chính Sách Giao Hàng</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-serif mb-6">Theo Dõi</h4>
        <div className="flex gap-4">
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Globe size={20} />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Share2 size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
      <p>&copy; 2024 Redamancy Bakery. All rights reserved. Designed with love.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <style>{`
        @font-face {
          font-family: 'SVN-Consent';
          src: local('Cormorant Garamond');
        }
        .font-serif {
          font-family: 'SVN-Consent', 'Cormorant Garamond', serif;
        }
        body {
          font-family: 'Montserrat', sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      
      <section className="py-20 bg-[#2D5A27] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img src="/logo.png" alt="" className="w-full h-full object-cover scale-150 rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">"Bánh ngon không chỉ ở vị giác, mà còn ở ký ức."</h2>
          <p className="tracking-[0.2em] uppercase text-sm font-light">Ghé thăm chúng tôi ngay hôm nay</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
