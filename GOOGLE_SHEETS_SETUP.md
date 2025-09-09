# Hướng dẫn setup Google Sheets cho form

## Bước 1: Tạo Google Apps Script

1. Truy cập [Google Apps Script](https://script.google.com/)
2. Tạo project mới
3. Thay thế code mặc định bằng code sau:

```javascript
function doPost(e) {
  try {
    // Lấy dữ liệu từ request
    const data = JSON.parse(e.postData.contents);
    
    // ID của Google Sheet (lấy từ URL)
    const SHEET_ID = 'YOUR_SHEET_ID_HERE';
    const SHEET_NAME = 'Form Data'; // Tên sheet
    
    // Mở sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Nếu sheet chưa tồn tại, tạo mới
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      // Thêm header
      newSheet.getRange(1, 1, 1, 8).setValues([
        ['Timestamp', 'Name', 'Position', 'Email', 'Phone', 'Organization', 'Message', 'Source']
      ]);
      newSheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }
    
    // Thêm dữ liệu mới
    const row = [
      data.timestamp,
      data.name,
      data.position,
      data.email,
      data.phone,
      data.organization,
      data.message,
      data.source
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Bước 2: Tạo Google Sheet

1. Tạo Google Sheet mới
2. Copy Sheet ID từ URL (phần giữa `/d/` và `/edit`)
3. Thay thế `YOUR_SHEET_ID_HERE` trong code Apps Script

## Bước 3: Deploy Google Apps Script

1. Trong Apps Script, click "Deploy" > "New deployment"
2. Chọn type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy Web App URL

## Bước 4: Cấu hình Environment Variables

Tạo file `.env.local` trong root project:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Bước 5: Test

1. Chạy project: `npm run dev`
2. Mở modal và điền form
3. Submit form
4. Kiểm tra Google Sheet có dữ liệu mới

## Cấu trúc dữ liệu trong Google Sheet

| Timestamp | Name | Position | Email | Phone | Organization | Message | Source |
|-----------|------|----------|-------|-------|--------------|---------|--------|
| 2024-01-15 10:30:00 | Nguyễn Văn A | Hiệu trưởng | a@email.com | 0123456789 | Trường THPT ABC | Tôi muốn tư vấn | register |

## Lưu ý

- Source sẽ là "buy" cho form Mua ngay và "register" cho form Đăng ký
- Timestamp được tự động thêm khi submit
- Tất cả dữ liệu được validate trước khi gửi
- Form sẽ reset sau khi submit thành công
