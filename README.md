# TLweb_Nh-m2
Bài tập lớn thiết kế web bất động sản của nhóm 2

## 👥 Thành viên nhóm

**Lương Quốc Huy** - Phụ trách:
- Trang `index.html`: hero, list "Featured Properties"
- Trang `properties.html`: danh sách nhiều căn hộ, thông tin chi tiết, nút Book/Quote.
- Trang `about.html`: giới thiệu công ty, câu chuyện, giá trị cốt lõi
- Trang `agents.html`: danh sách agent, ảnh, mô tả, contact button
- Trang `contact.html`: thông tin liên hệ, form gửi message, link sang properties & agents
- Trang `blog1.html`, `blog2.html`, `blog3.html`: các bài blog về bất động sản

**Hiếu** - Phụ trách:
- Popup, Bộ lọc (form)
- Responsive trên Mobile
**Minh Châu** - Phụ trách: 
- Trang `property-detail.html`: trang chi tiết sản phẩm với gallery, thông tin đầy đủ, form liên hệ
**CSS Architecture:**
- `variables.css`: CSS Variables (màu sắc, shadow, transition)
- `base.css`: Reset CSS và base styles
- `components.css`: Components tái sử dụng (buttons, forms, cards)
- `layout.css`: Layout chính (header, footer, mobile CTA)
- `sections.css`: Sections trang chủ (hero, properties, testimonials, about, blog)
- `pages.css`: Styles theo trang (properties page, agents, contact, blog content, property detail)
- `modals.css`: Popup modals
- `responsive.css`: Media queries cho responsive design
- `main.css`: File chính import tất cả các file CSS

**JavaScript:**
- `main.js`: Validate contact form, xử lý form search/filter, form newsletter, active menu theo trang, popup tư vấn khách hàng
- `property-detail.js`: Load dữ liệu sản phẩm động, xử lý gallery images, form liên hệ

---

## 🎯 Giới thiệu dự án

Dự án xây dựng website giới thiệu bất động sản với các trang và chức năng chính:

### Trang chính:
- **Trang Home** (`index.html`): Hero section, form tìm kiếm, featured properties, testimonials, blog section
- **Trang About** (`about.html`): Giới thiệu công ty, câu chuyện, giá trị cốt lõi
- **Trang Properties** (`properties.html`): Danh sách bất động sản với bộ lọc
- **Trang Property Detail** (`property-detail.html`): Trang chi tiết sản phẩm với gallery, thông tin đầy đủ, amenities, bản đồ, form liên hệ
- **Trang Agents** (`agents.html`): Danh sách nhân viên môi giới
- **Trang Contact** (`contact.html`): Thông tin liên hệ, form gửi message
- **Trang Blog** (`blog1.html`, `blog2.html`, `blog3.html`): Các bài viết về bất động sản

### Tính năng:
- ✅ Bộ lọc (filter) và tìm kiếm bất động sản
- ✅ Trang chi tiết sản phẩm với gallery ảnh
- ✅ Popup tư vấn khách hàng (không hiển thị trên trang chi tiết)
- ✅ Giao diện responsive cho mobile/tablet/desktop
- ✅ Dynamic content loading cho property details
- ✅ Form validation và xử lý form
- ✅ Navigation menu với mobile toggle

### Công nghệ sử dụng:
- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với CSS Variables, Grid, Flexbox
- **JavaScript (Vanilla)**: Xử lý tương tác, form validation, dynamic content
- **Font Awesome**: Icons
- **Google Maps**: Bản đồ trong trang chi tiết
- **GitHub**: Quản lý mã nguồn
- **GitHub Pages**: Triển khai website

---

## 📂 Cấu trúc thư mục dự án

```
web-bất-động-sản-mới/
│
├── index.html              # Trang chủ
├── about.html              # Trang giới thiệu
├── properties.html         # Trang danh sách bất động sản
├── property-detail.html    # Trang chi tiết sản phẩm
├── agents.html             # Trang danh sách agents
├── contact.html            # Trang liên hệ
├── blog1.html              # Blog bài 1
├── blog2.html              # Blog bài 2
├── blog3.html              # Blog bài 3
│
├── css/
│   ├── main.css            # File chính (import tất cả)
│   ├── variables.css       # CSS Variables
│   ├── base.css            # Reset & base styles
│   ├── components.css      # Components tái sử dụng
│   ├── layout.css          # Header, footer, mobile CTA
│   ├── sections.css        # Sections trang chủ
│   ├── pages.css           # Page-specific styles
│   ├── modals.css          # Popup modals
│   ├── responsive.css      # Media queries
│   └── style.css           # File CSS cũ (backup)
│
├── js/
│   ├── main.js             # JavaScript chính
│   └── property-detail.js  # JavaScript cho trang chi tiết
│
├── image/
│   ├── hero/               # Ảnh hero sections
│   ├── properties/         # Ảnh bất động sản
│   ├── agents/             # Ảnh agents
│   ├── blog/               # Ảnh blog
│   ├── testimonials/       # Ảnh testimonials
│   ├── about/              # Ảnh about
│   └── contact/            # Ảnh contact
│
└── README.md               # File này
```

---
// ...existing code...
## 📂 Cấu trúc thư mục dự án (new)

- [index.html](index.html) — Trang chủ
- [about.html](about.html) — Giới thiệu công ty
- [properties.html](properties.html) — Danh sách bất động sản
- [property-detail.html](property-detail.html) — Trang chi tiết sản phẩm (dynamic)
- [agents.html](agents.html) — Danh sách nhân viên môi giới
- [contact.html](contact.html) — Trang liên hệ
- [blog1.html](blog1.html), [blog2.html](blog2.html), [blog3.html](blog3.html) — Các bài blog

- css/
  - [css/main.css](css/main.css) — File chính (import tất cả)
  - [css/variables.css](css/variables.css)
  - [css/base.css](css/base.css)
  - [css/components.css](css/components.css)
  - [css/layout.css](css/layout.css)
  - [css/sections.css](css/sections.css)
  - [css/pages.css](css/pages.css)
  - [css/modals.css](css/modals.css)
  - [css/responsive.css](css/responsive.css)
  - [css/style.css](css/style.css) — File cũ / backup

- js/
  - [js/main.js](js/main.js) — Khởi tạo module chung
  - [js/property-detail.js](js/property-detail.js) — Xử lý trang chi tiết
  - [js/property-data.js](js/property-data.js) — Dữ liệu bất động sản
  - [js/popup.js](js/popup.js) — Popup tư vấn
  - [js/forms.js](js/forms.js) — Form validation và xử lý
  - [js/navigation.js](js/navigation.js) — Menu & điều hướng

- [image/](image/) — Thư mục ảnh (hero, properties, agents, blog, testimonials ...)
- [README.md](README.md) — Tài liệu dự án

Ghi chú: cấu trúc theo modular (CSS tách module, JS theo chức năng), dễ bảo trì và mở rộng.
// ...existing code...
## 🔧 Hướng dẫn sử dụng

### Chạy website local:
1. Clone repository về máy
2. Mở file `index.html` bằng trình duyệt web
3. Hoặc sử dụng local server (ví dụ: Live Server trong VS Code)

### Link GitHub Pages:
https://huymonsterhuman-eng.github.io/BTL_WebBDS/

### Cách sử dụng các tính năng:

#### 1. Tìm kiếm bất động sản:
- Trên trang chủ: Sử dụng form tìm kiếm trong hero section
- Trên trang Properties: Sử dụng bộ lọc (filter) để tìm theo location, type, bedrooms, price

#### 2. Xem chi tiết sản phẩm:
- Click vào button **"Details"** trên bất kỳ property card nào
- Hoặc click vào button **"Book a Visit"** để mở trang chi tiết và tự động scroll đến form liên hệ
- Trang chi tiết hiển thị: gallery ảnh, thông tin đầy đủ, amenities, bản đồ, form liên hệ

#### 3. Liên hệ:
- Điền form liên hệ trên trang Contact
- Hoặc sử dụng form trong sidebar của trang Property Detail
- Hoặc click vào button "Call Now" để gọi điện trực tiếp

#### 4. Đọc blog:
- Click vào "READ ARTICLE" trên các blog card ở trang chủ
- Hoặc truy cập trực tiếp `blog1.html`, `blog2.html`, `blog3.html`

---

## 🎨 Cấu trúc CSS

CSS được chia thành các module để dễ quản lý và bảo trì:

### 1. **variables.css**
- Chứa tất cả CSS Variables (`:root`)
- Màu sắc, shadow, transition

### 2. **base.css**
- Reset CSS (`*`, `html`, `body`)
- Typography cơ bản
- Container, section base styles

### 3. **components.css**
- Buttons (`.btn`, `.btn-outline`)
- Forms (`.form-group`, `.search-form`)
- Cards (`.property-card`, `.testimonial-card`, `.agent-card`, `.blog-card`)
- Section titles

### 4. **layout.css**
- Header & Navigation
- Footer
- Mobile CTA bar

### 5. **sections.css**
- Hero section
- Featured Properties
- Testimonials
- About section
- Blog section (listing)

### 6. **pages.css**
- Properties page styles
- Agents page styles
- Contact page styles
- Blog content pages styles
- **Property Detail page styles** (gallery, info, amenities, location)

### 7. **modals.css**
- Popup overlay & modal styles

### 8. **responsive.css**
- Tất cả media queries cho responsive design
- Breakpoints: 992px (tablet), 768px (mobile), 480px (small mobile)

### 9. **main.css**
- File chính import tất cả các file trên theo thứ tự

---

## 🧪 Kiểm thử

Nhóm đã kiểm thử website trên:

- ✅ **Mobile** (320px - 480px)
- ✅ **Tablet** (481px - 992px)
- ✅ **Laptop/Desktop** (993px+)

### Các chức năng đã kiểm thử:

- ✅ Form tìm kiếm
- ✅ Filter bất động sản
- ✅ Form liên hệ
- ✅ Popup tư vấn (không hiển thị trên trang chi tiết)
- ✅ Điều hướng giữa các trang
- ✅ Giao diện responsive
- ✅ **Trang chi tiết sản phẩm** (gallery, dynamic content loading)
- ✅ **Property card links** (Details, Book a Visit)
- ✅ **Image gallery** trong trang chi tiết
- ✅ **Scroll to contact form** khi có anchor `#contact`

---

## 📱 Responsive Design

Website được thiết kế responsive với các breakpoints:

- **Desktop**: > 992px - Layout đầy đủ, grid nhiều cột
- **Tablet**: 768px - 992px - Layout điều chỉnh, grid 2 cột
- **Mobile**: 480px - 768px - Layout 1 cột, mobile menu
- **Small Mobile**: < 480px - Layout tối ưu cho màn hình nhỏ

### Tính năng responsive:
- Mobile navigation menu (hamburger menu)
- Responsive grid layouts
- Responsive images
- Mobile CTA bar (hiển thị ở mobile)
- Responsive forms và buttons

---

## 🚀 Tính năng nổi bật

### 1. **Trang chi tiết sản phẩm động**
- Load dữ liệu dựa trên ID từ URL (`?id=1`, `?id=2`, ...)
- Gallery ảnh với thumbnail navigation
- Thông tin chi tiết đầy đủ
- Amenities list
- Google Maps integration
- Form liên hệ trong sidebar

### 2. **CSS Architecture**
- Modular CSS structure
- Dễ bảo trì và mở rộng
- Tái sử dụng components
- Responsive-first approach

### 3. **User Experience**
- Smooth scrolling
- Hover effects
- Loading states
- Form validation
- Auto-scroll to contact form

---

## 📚 Tài liệu tham khảo

- **W3Schools** – HTML / CSS / JS
- **MDN Web Docs** – Tài liệu web standards
- **Font Awesome** – Icons
- **Unsplash** – Hình ảnh miễn phí
- **RandomUser** – Avatar images
- **GitHub Docs** – GitHub Pages deployment

---

## 📝 Ghi chú

- Toàn bộ mã nguồn được commit đầy đủ bởi các thành viên nhóm theo đúng phần việc đã phân công
- CSS được tổ chức theo module để dễ quản lý và bảo trì
- JavaScript được tách thành các file riêng theo chức năng
- Website hỗ trợ đầy đủ responsive design cho mọi thiết bị
- Popup tư vấn không hiển thị trên các trang: about, agents, properties, contact, blog, và property-detail

---

## 🔄 Changelog

### Version 2.0
- ✅ Chia CSS thành các module riêng biệt
- ✅ Thêm trang Property Detail với dynamic content
- ✅ Thêm JavaScript cho property detail page
- ✅ Cập nhật tất cả property card links
- ✅ Thêm responsive CSS cho property detail page
- ✅ Tắt popup trên trang property detail

### Version 1.0
- ✅ Các trang cơ bản (Home, About, Properties, Agents, Contact)
- ✅ Blog pages (blog1, blog2, blog3)
- ✅ Responsive design
- ✅ Form validation
- ✅ Popup tư vấn

---

**© 2025 Luxury Estates - Website Bất Động Sản**
