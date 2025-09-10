# 🔧 Hướng dẫn setup Environment Variables

## Vấn đề hiện tại
Form không gửi được lên Google Sheets vì thiếu biến môi trường `GOOGLE_SCRIPT_URL`.

## Giải pháp

### Bước 1: Tạo file .env.local
Tạo file `.env.local` trong thư mục `schools/` với nội dung:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Bước 2: Setup Google Apps Script
1. Truy cập [Google Apps Script](https://script.google.com/)
2. Tạo project mới
3. Copy code từ file `GOOGLE_SHEETS_SETUP.md`
4. Thay thế `YOUR_SHEET_ID_HERE` bằng Sheet ID thực
5. Deploy script và copy Web App URL
6. Thay thế `YOUR_SCRIPT_ID` trong `.env.local`

### Bước 3: Restart Server
```bash
npm run dev
```

## Test
1. Mở modal form
2. Điền thông tin
3. Submit form
4. Kiểm tra console logs
5. Kiểm tra Google Sheet

## Debug
- Mở Developer Tools > Console
- Xem logs bắt đầu bằng "🔄 GoogleSheets:"
- Kiểm tra API response status
