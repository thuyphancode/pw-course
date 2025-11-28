/* 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với
2 cặp giá trị khác nhau. */

function multiple(a, b) {
    console.log(a * b);
}

// Gọi hàm với 2 cặp giá trị khác nhau
multiple(3, 5);   // 15
multiple(10, 2);  // 20

/* Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
với 2 bộ số khác nhau. */

function findMin(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c;
    }

    return min;
}

// Gọi hàm 2 lần
console.log(findMin(3, 7, 2));    // 2
console.log(findMin(10, 5, 20));  // 5

/* Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả. */

function getTopStudents(students, threshold) {
    const result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }

    return result;
}

// Dữ liệu thực tế
const students = [
    { name: "An", score: 95 },
    { name: "Bình", score: 70 },
    { name: "Châu", score: 85 },
    { name: "Đạt", score: 60 }
];

// Gọi hàm
console.log(getTopStudents(students, 70));

/* Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).

● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả. */

function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years / 100);
    return total;
}

// Gọi hàm với ví dụ thực tế
const result = calculateInterest(1000000, 5, 3);  // 1 triệu, lời 5%/năm, gửi 3 năm
console.log("Tổng tiền sau 3 năm:", result);
