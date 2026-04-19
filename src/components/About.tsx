import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F9FAF9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Bakery Crafting" 
                className="rounded-sm shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -left-6 w-full h-full border border-[#2D5A27]/20 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2D5A27]/5 z-0"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-[#2D5A27] text-sm uppercase tracking-[0.3em] font-medium mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Redamancy - Tình yêu trao đi và nhận lại</h3>
              <div className="w-16 h-[2px] bg-[#2D5A27]"></div>
            </div>

            <p className="text-gray-700 leading-relaxed font-light text-lg">
              Cái tên "Redamancy" mang ý nghĩa về một tình yêu được đáp lại trọn vẹn. Tại đây, chúng tôi trao đi sự tận tâm, tỉ mỉ trong từng khâu chọn nguyên liệu cho đến khi chiếc bánh ra lò, để nhận lại nụ cười hài lòng của bạn.
            </p>

            <p className="text-gray-700 leading-relaxed font-light text-lg italic">
              "Chúng tôi không chỉ bán bánh, chúng tôi trao gửi những khoảnh khắc ngọt ngào và ấm áp cho gia đình bạn."
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-3xl font-serif text-[#2D5A27] mb-1">100%</span>
                <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Tự nhiên</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#2D5A27] mb-1">20+</span>
                <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Loại bánh đặc trưng</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
