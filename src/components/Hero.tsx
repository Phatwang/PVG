import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-bakery.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#2D5A27] text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-4">
            Chào mừng đến với
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-gray-900 mb-8 tracking-tight">
            Redamancy <span className="text-[#2D5A27] italic">Bakery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl font-light leading-relaxed mb-10">
            Nơi hương vị tinh tế hòa quyện cùng sự ấm áp. Mỗi chiếc bánh là một tác phẩm nghệ thuật 
            được tạo nên từ lòng đam mê và sự tận tâm.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#menu" 
              className="px-10 py-4 bg-[#2D5A27] text-white uppercase tracking-widest text-sm hover:bg-[#1e3d1a] transition-all shadow-lg"
            >
              Khám phá thực đơn
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-[#2D5A27] text-[#2D5A27] uppercase tracking-widest text-sm hover:bg-[#2D5A27] hover:text-white transition-all"
            >
              Liên hệ ngay
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#2D5A27] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
