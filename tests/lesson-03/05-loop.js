// 1. Tinh tong tu 1 -> 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// 2. In bảng cửu chương từ 2 đến 9

for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong: ${i}`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    }
    console.log("\n");
}

// Tạo một mảng chứa các số lẻ từ 1 đến 99
const mang = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        mang.push(i);
    }
}
console.log(mang);

/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user1@example.com, user2@example.com, ..., user10@example.com). */

for (let i = 1; i <= 10; i++) {
    const email = `user${i}@example`;
    console.log(email);
}

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100} */

const revenue = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 150 },
    { month: 4, total: 300 },
    { month: 5, total: 250 },
    { month: 6, total: 180 },
    { month: 7, total: 220 },
    { month: 8, total: 260 },
    { month: 9, total: 190 },
    { month: 10, total: 240 },
    { month: 11, total: 210 },
    { month: 12, total: 230 }
];

let totalRevenue = 0;

for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total;
}

console.log("Tổng doanh thu năm:", totalRevenue);
