# 1. Function Advance

## ● Function Expression
- Là cách định nghĩa function bằng cách gán nó vào một biến.
- Khác với Function Declaration ở hình thức, nhưng cách gọi và chức năng giống nhau.

## ● Lambda Function (Arrow Function)
- Cú pháp ngắn gọn hơn Function truyền thống.
- Có thể viết nhiều dạng:
  - Không tham số: `() =>`
  - Một tham số: `x =>`
  - Nhiều tham số: `(a, b) =>`
- Dùng nhiều trong callback, xử lý bất đồng bộ, và viết code clean hơn.

## ● Anonymous Function
- Là function **không tên**.
- Không thể đứng độc lập, phải đi kèm một hành động khác:
  - Gán vào biến
  - Truyền làm callback

---

# 2. DOM (Document Object Model)

DOM là mô hình biểu diễn cấu trúc HTML dưới dạng cây node.

## Các thẻ Form quan trọng:
- `<form>` — Biểu mẫu
- `<input>` — Ô nhập liệu (text, password, checkbox, radio, ...)
- `<button>` — Nút bấm
- `<select>` + `<option>` — Dropdown
- `<textarea>` — Nhập văn bản nhiều dòng

Demo DOM elements:  
https://material.playwrightvn.com/035-DOM-elements.html

---

# 3. Selector

## ● XPath
- Mạnh mẽ, dùng được 99.99% trường hợp.
- Có 2 loại:
  - Tuyệt đối
  - Tương đối (`//tag[@attribute="value"]`)

## ● CSS Selector
- Ngắn gọn, hiệu suất cao.
- Dùng class, id, attribute,...

## ● Playwright Selector
- Selector riêng của Playwright.
- Ví dụ: getByText, getByRole, getByLabel,...

---

# 4. Playwright Basic Syntax

Automation = **Tương tác + Kiểm tra (verify)**.

## Các phần chính:
- Viết test
- Tổ chức test thành step (nên map 1-1 với test case)
- Tương tác với trang
  - Navigate (đi tới URL)
  - Locate (tìm element)
  - Click
  - Input text
  - Radio / Checkbox
  - Dropdown (select)
  - Upload file

---

# 5. Các function hay dùng trong Playwright

- **test** → Khai báo 1 test case  
- **step** → Khai báo từng bước nhỏ trong test  
- **goto** → Điều hướng URL  
- **locator** → Tìm element  
- **click** → Click element  
- **fill** → Nhập text  
- **check / uncheck** → Radio / checkbox  
- **selectOption** → Chọn dropdown  
- **setInputFiles** → Upload file  

