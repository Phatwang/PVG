import { motion } from 'framer-motion';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Bánh Matcha Kem Phô Mai',
    price: '150.000 VNĐ',
    image: '/cake1.jpg',
    description: 'Bánh matcha mịn màng kết hợp cùng lớp kem phô mai béo ngậy, phủ một lớp trà xanh tinh khiết.'
  },
  {
    id: 2,
    name: 'Bánh Mousse Chanh Tuyết',
    price: '185.000 VNĐ',
    image: '/cake2.jpg',
    description: 'Bánh mousse chanh tươi mát, mỏng nhẹ, mang lại cảm giác thanh khiết cho mỗi miếng bánh.'
  },
  {
    id: 3,
    name: 'Bánh Macaron Hương Trà Xanh',
    price: '45.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Vỏ bánh giòn tan, nhân kem trà xanh ngọt dịu, hoàn hảo cho một buổi trà chiều sang trọng.'
  },
  {
    id: 4,
    name: 'Bánh Earl Grey Lavender',
    price: '210.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sự kết hợp tinh tế giữa trà Earl Grey thơm nồng và hương hoa Lavender quyến rũ.'
  },
  {
    id: 5,
    name: 'Bánh Sừng Bò Pistachio',
    price: '65.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Bánh sừng bò ngàn lớp giòn rụm với nhân hạt dẻ cười béo bùi, một món quà cho bữa sáng.'
  },
  {
    id: 6,
    name: 'Bánh Tart Trái Cây Mùa Hè',
    price: '120.000 VNĐ',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Đế bánh tart giòn tan, phủ đầy trái cây tươi theo mùa và lớp thạch bóng bẩy.'
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#2D5A27] text-sm uppercase tracking-widest font-medium mb-3">Our Collection</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Danh Mục Sản Phẩm</h3>
          <div className="w-24 h-[1px] bg-[#2D5A27] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2D5A27]/0 group-hover:bg-[#2D5A27]/10 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-white text-[#2D5A27] text-xs uppercase tracking-widest hover:bg-[#2D5A27] hover:text-white transition-colors">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="text-xl font-serif text-gray-900 group-hover:text-[#2D5A27] transition-colors mb-2">
                  {item.name}
                </h4>
                <p className="text-[#2D5A27] font-medium tracking-wider mb-2">
                  {item.price}
                </p>
                <p className="text-gray-500 text-sm font-light italic leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
