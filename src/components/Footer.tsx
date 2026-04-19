import { Camera, Globe, Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Redamancy Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-serif tracking-widest text-[#2D5A27]">REDAMANCY</span>
            </div>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Tiệm bánh ngọt thủ công mang phong cách Pháp, mang lại trải nghiệm ẩm thực tinh tế và ấm áp cho thực khách.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#2D5A27] transition-colors"><Camera size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D5A27] transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#2D5A27] transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold text-gray-900 mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4">
              {['Trang chủ', 'Sản phẩm', 'Về chúng tôi', 'Chính sách bảo mật'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-[#2D5A27] text-sm font-light transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold text-gray-900 mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500 font-light">
                <MapPin size={18} className="text-[#2D5A27] shrink-0" />
                <span>123 Đường Bánh Ngọt, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 font-light">
                <Phone size={18} className="text-[#2D5A27] shrink-0" />
                <span>+84 901 234 567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 font-light">
                <Mail size={18} className="text-[#2D5A27] shrink-0" />
                <span>hello@redamancy.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold text-gray-900 mb-6">Đăng ký nhận tin</h4>
            <p className="text-gray-500 text-sm font-light mb-4">Nhận thông báo về các loại bánh mới nhất.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-gray-50 border-gray-100 border px-4 py-2 w-full text-sm focus:outline-none focus:border-[#2D5A27]"
              />
              <button className="bg-[#2D5A27] text-white px-4 py-2 text-xs uppercase tracking-widest">Gửi</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-light">
            © 2024 Redamancy Bakery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-400 text-xs font-light cursor-pointer hover:text-[#2D5A27]">Terms & Conditions</span>
            <span className="text-gray-400 text-xs font-light cursor-pointer hover:text-[#2D5A27]">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
