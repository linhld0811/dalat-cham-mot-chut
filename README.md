# Đà Lạt, chậm một chút

Website lịch trình Đà Lạt 21–24/11/2026, viết bằng HTML, CSS và JavaScript thuần.

Website: https://linhld0811.github.io/dalat-cham-mot-chut/

GitHub Actions tự deploy nội dung `dist/` lên GitHub Pages sau khi push lên `main`. Không cần chạy build.

Xem tiến độ và đường dẫn deploy ở [Actions](https://github.com/linhld0811/dalat-cham-mot-chut/actions/workflows/deploy-pages.yml).

## Các file thường chỉnh

- `dist/app.js`: lịch trình từng ngày và danh sách hành lý.
- `dist/index.html`: thông tin hiển thị cố định, chuyến bay, lưu trú.
- `dist/countdown.js`: mốc thời gian đếm ngược.
- `dist/*.css`: giao diện.
- `dist/assets/music.mp3`: nhạc nền.

Các đường dẫn tài nguyên dùng dạng tương đối để hoạt động tại `/dalat-cham-mot-chut/` trên GitHub Pages.

## Thiết lập trên một máy mới

```bash
git clone https://github.com/linhld0811/dalat-cham-mot-chut.git
cd dalat-cham-mot-chut
```

Trong repository, **Settings → Pages → Build and deployment → Source** sử dụng **GitHub Actions**. Workflow `.github/workflows/deploy-pages.yml` hỗ trợ cả push tự động và chạy thủ công bằng **Run workflow**.

Tài liệu: [GitHub Pages với custom workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
