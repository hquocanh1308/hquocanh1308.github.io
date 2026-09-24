# DANH MỤC TRANH THAM KHẢO – VÉ DU HÀNH

Bộ website gồm:
- `index.html`: trang danh mục
- `bai-song.html`: trang Bùi Xuân Việt — Bãi Sông
- `song-hong-mua-lu.html`: trang Lê Sa Long — Sông Hồng mùa lũ
- `style.css`: giao diện cổ điển/văn học
- `script.js`: tạo QR tự động
- `images/`: hai ảnh tác phẩm

## QR hoạt động thế nào?

Mỗi trang tác phẩm tự lấy URL hiện tại bằng `window.location.href` rồi tạo QR.
Vì vậy sau khi website được đưa lên Internet, QR trên từng trang sẽ dẫn tới
đúng URL của trang đó.

Lưu ý: nếu bạn muốn in QR lên vé, hãy mở từng trang sau khi website đã được
triển khai, sau đó chụp/tải QR từ trang để đưa vào thiết kế vé.

## Gợi ý triển khai

Có thể đưa nguyên thư mục này lên một dịch vụ hosting tĩnh. Không cần máy chủ
backend: HTML/CSS/JavaScript là đủ.

## Ghi chú bản quyền

Hai ảnh tác phẩm được đưa vào bộ demo theo các ảnh do người dùng cung cấp.
Khi dùng cho sản phẩm công khai, nên giữ thông tin tác giả và nguồn tham khảo,
đồng thời kiểm tra quyền sử dụng hình ảnh theo yêu cầu của dự án.
