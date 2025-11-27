# GIT

## Undo Action

### Commit message  
```bash
git commit --amend -m "message"
```

### File staging → working directory  
```bash
git restore --staged <file_name>
git restore --staged .
```

### File repository → working directory (un-commit)  
```bash
git reset HEAD~1      # reset 1 commit
git reset HEAD~N      # reset N commit
```

> **Note:**  
> - Commit đầu tiên không thể reset  
> - Muốn reset commit đầu tiên → xóa `.git` rồi `git init` lại

---

## Pull code
```bash
git pull origin main
```

---

## Branch
```bash
git init
git branch
git branch <name>
git checkout <name>
git checkout -b <name>
git branch -D <name>     # xoá nhánh (đang đứng ở nhánh khác)
```

> **Luôn pull code trước khi tạo branch mới**

---

## .gitignore
```txt
# Comment
secret.txt
*.log
node_modules/
build/
**/*.tmp
!important.log
/TODO
doc/**/*.txt
```

---

# JAVASCRIPT

## Convention
- kebab-case → tên file, folder  
- camelCase → tên biến, hàm  
- PascalCase → tên class  
- snake_case → không dùng  

---

## Console.log
```js
console.log("toi la Thuy");

let name = "Thuy";
console.log(`Toi la ${name}`);
console.log("Toi ten la " + name);
```

---

## Object
```js
let user = {
  name: "Alex",
  age: 10,
  email: "alex@gmail.com"
};

const product = {
  name: "Laptop",
  price: 500,
  isWindow: true,
  manufacturer: {
    name: "Acer",
    year: 2024
  }
};
```

---

## Logical operators
- && — cả hai đều đúng  
- || — một trong hai đúng  
- !  — phủ định  

---

## Array
```js
let arr = [1, 2, 3];

arr.length;   // độ dài
arr[0];        // phần tử đầu
```

---

## Function
```js
function myFunction() {
  // code
}

function sum(a, b) {
  return a + b;
}
```
