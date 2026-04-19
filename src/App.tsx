const products = [
  {
    id: 1,
    name: "Bánh Mousse Trà Xanh",
    description: "Lớp mousse mịn màng từ matcha hảo hạng, vị ngọt thanh và thơm nhẹ.",
    price: "85.000đ",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Tiramisu Redamancy",
    description: "Bánh tiramisu kiểu Ý với kem mascarpone béo nhẹ và cà phê đậm đà.",
    price: "95.000đ",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Cheesecake Chanh Dây",
    description: "Cheesecake nướng mềm mượt, phủ sốt chanh dây chua ngọt hài hòa.",
    price: "89.000đ",
  },
  {
    id: 4,
    name: "Bánh Su Kem Lá Dứa",
    description: "Vỏ su giòn nhẹ, nhân kem lá dứa thanh mát, ít ngọt.",
    price: "18.000đ/chiếc",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-emerald-100/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Logo placeholder: thay bằng <img src="..." /> */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-200">
              <span className="text-lg font-semibold tracking-tight">R</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.2em] uppercase text-emerald-700">
                Redamancy
              </div>
              <p className="text-xs text-slate-500">Patisserie &amp; Dessert Atelier</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#menu" className="hover:text-emerald-700">Menu</a>
            <a href="#story" className="hover:text-emerald-700">Câu chuyện</a>
            <a href="#gallery" className="hover:text-emerald-700">Bộ sưu tập</a>
            <a href="#contact" className="hover:text-emerald-700">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-emerald-100 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
              Bánh ngọt thủ công • Nguyên liệu tuyển chọn
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Vị ngọt tinh tế cho những
              <span className="block text-emerald-700">khoảnh khắc ấm áp</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Redamancy mang đến những chiếc bánh được chăm chút tỉ mỉ từ hương vị đến hình thức, với tông trắng - xanh lá chủ đạo, tạo nên không gian thưởng bánh thanh lịch, sạch sẽ nhưng vẫn ấm áp và gần gũi.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-800"
              >
                Xem menu hôm nay
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-emerald-800 underline-offset-4 hover:underline"
              >
                Đặt bánh theo yêu cầu
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-500">
              <div>
                <p className="font-semibold text-emerald-800">Nguyên liệu tươi mỗi ngày</p>
                <p>Không dùng màu tổng hợp gắt, ưu tiên vị ngọt thanh.</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-800">Thiết kế tinh tế</p>
                <p>Phù hợp tiệc sinh nhật, kỷ niệm, tea-break cao cấp.</p>
              </div>
            </div>
          </div>

          {/* Hero image area - có thể thay bằng hình thật */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_18px_45px_rgba(15,118,110,0.12)]">
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-50 via-white to-emerald-100/80 p-5">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-emerald-200/60 bg-white/70 px-4 py-5 text-xs text-slate-500">
                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-700">
                      Khu vực hình ảnh
                    </p>
                    <p>
                      Thay thế vùng này bằng <span className="font-semibold text-emerald-800">ảnh logo Redamancy</span> và
                      <span className="font-semibold text-emerald-800"> ảnh bánh ngọt chủ đạo</span>.
                    </p>
                    <p>
                      Bạn có thể cập nhật ảnh trong thư mục <span className="font-mono text-emerald-700">/public</span> và sửa đường dẫn trong mã nguồn.
                    </p>
                  </div>
                  <div className="space-y-3 rounded-xl bg-emerald-50/80 p-3">
                    <p className="text-[11px] font-semibold text-emerald-900">Gợi ý sắp xếp hình ảnh</p>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Ảnh close-up bề mặt bánh, ánh sáng ấm nhẹ.</li>
                      <li>Tông màu trắng - xanh lá, tối giản, sang trọng.</li>
                      <li>Có thể bổ sung ảnh không gian tiệm / hộp bánh.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-4 -top-4 hidden rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-md shadow-emerald-100 sm:block">
              <p className="font-semibold text-emerald-800">Tip:</p>
              <p>Giữ phông nền trắng, sử dụng lá xanh, khăn linen, ly trà để tăng cảm giác ấm áp.</p>
            </div>
          </div>
        </section>

        {/* Story section */}
        <section id="story" className="mt-16 border-y border-emerald-50 bg-white/80 py-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                Redamancy – khi mỗi chiếc bánh là một lời hồi đáp trọn vẹn
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                "Redamancy" là tình yêu được đáp lại một cách trọn vẹn – cũng giống như cách chúng tôi gửi gắm trọn vẹn sự chăm chút, tỉ mỉ và tử tế vào từng lớp bánh, từng đường kem và từng chi tiết trang trí.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                Không quá cầu kỳ, không quá ngọt, Redamancy chọn phong cách tối giản, tinh tế với tông trắng và xanh lá chủ đạo, để mọi giác quan đều được nghỉ ngơi và thư giãn khi bạn nâng tách trà và thưởng thức một miếng bánh nhỏ.
              </p>
            </div>
            <div className="flex-1 space-y-3 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-100/60 p-4 text-xs text-slate-600 shadow-sm">
              <p className="font-semibold text-emerald-900">Gợi ý chỉnh sửa nội dung</p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Cập nhật triết lý làm bánh riêng của tiệm.</li>
                <li>Thêm thông tin về chứng chỉ an toàn thực phẩm, chứng nhận nguyên liệu.</li>
                <li>Đính kèm ảnh founder / đội ngũ nếu muốn tăng độ tin cậy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Menu section */}
        <section id="menu" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">Menu bánh ngọt</h2>
              <p className="mt-1 text-sm text-slate-600">
                Danh sách dưới đây chỉ là gợi ý. Bạn có thể thêm / bớt món, chỉnh sửa tên, mô tả và giá trực tiếp trong mã nguồn.
              </p>
            </div>
            <span className="hidden rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 md:inline-flex">
              Có thể bổ sung hình ảnh từng món tại đây
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {products.map((item) => (
              <article
                key={item.id}
                className="group flex gap-4 rounded-2xl border border-emerald-100/80 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-50"
              >
                {/* Hình minh họa món bánh - có thể thay bằng thẻ <img> */}
                <div className="mt-1 h-20 w-24 flex-none overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50/60">
                  <div className="flex h-full items-center justify-center px-2 text-[11px] text-slate-500">
                    Khu vực
                    <br />
                    hình món
                  </div>
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      {item.tag ? (
                        <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700">
                          {item.tag}
                        </span>
                      ) : null}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-800">{item.price}</p>
                      <p className="text-[10px] text-slate-400">Có thể chỉnh sửa</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery section */}
        <section id="gallery" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                Bộ sưu tập hình ảnh
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Khu vực dành cho hình ảnh tiệm, quầy bánh, món signature, set trà chiều, hộp quà,...
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="relative flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-emerald-200/80 bg-emerald-50/40 p-4 text-xs text-slate-500"
              >
                <div className="text-center">
                  <p className="mb-1 font-semibold text-emerald-800">Vị trí ảnh #{slot}</p>
                  <p>
                    Thay thế bằng ảnh thực tế: drag &amp; drop file vào thư mục
                    <span className="font-mono text-emerald-700"> public/</span> và cập nhật đường dẫn hình tại khu vực này.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Info section */}
        <section id="contact" className="mt-16 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 px-6 py-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3 md:items-start">
            <div className="space-y-2 md:col-span-2">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">Liên hệ &amp; đặt bánh</h2>
              <p className="text-sm text-slate-600">
                Bạn có thể tùy ý thay đổi thông tin bên dưới cho phù hợp với địa chỉ, giờ mở cửa, và kênh đặt bánh của tiệm.
              </p>
              <div className="mt-4 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-emerald-900">Địa chỉ tiệm</p>
                  <p>123 Đường Ngọt Ngào, Quận 1, TP. Hồ Chí Minh</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-900">Giờ mở cửa</p>
                  <p>Thứ 2 - Chủ nhật: 9:00 - 21:30</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-900">Đặt bánh &amp; tư vấn</p>
                  <p>Hotline: 0900 000 000</p>
                  <p>Zalo / Instagram: @redamancy.patisserie</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-900">Ghi chú</p>
                  <p>Nhận đặt bánh theo concept riêng, vui lòng liên hệ trước 2–3 ngày.</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-emerald-100 bg-white/80 p-4 text-xs text-slate-600">
              <p className="font-semibold text-emerald-900">Hướng dẫn triển khai tĩnh (GitHub Pages)</p>
              <ol className="list-decimal space-y-1 pl-4">
                <li>Build project để sinh ra thư mục <span className="font-mono text-emerald-700">dist/</span>.</li>
                <li>Deploy nội dung trong thư mục đó lên GitHub Pages ở chế độ static hosting.</li>
                <li>Cập nhật hình ảnh bằng cách thay file trong <span className="font-mono text-emerald-700">public/</span>.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-emerald-50 pt-6 pb-4 text-xs text-slate-500">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Redamancy Patisserie. Giữ trọn vị ngọt tinh tế cho những khoảnh khắc đáng nhớ.
            </p>
            <p className="text-[11px]">
              Thiết kế với tông <span className="font-semibold text-emerald-800">trắng &amp; xanh lá</span> theo phong cách sang trọng, sạch sẽ và ấm áp.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
