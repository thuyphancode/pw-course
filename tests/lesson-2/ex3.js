// a. Khai báo một hằng số với giá trị kiểu "Number" bất kì
// In ra dòng sau ở console
// i. Nếu hằng số nhỏ hơn 0: "Giá trị bạn nhập là số duơng"
// ii. Nếu hằng số nhỏ hơn 0: "Giá trị bạn nhập là số âm"
// iii. Nếu hằng số = 0: "Giá trị bạn nhập là số 0"

const num = 1995

if (num > 0) {
    console.log(`Giá trị bạn nhập là số dương: ${num}`);
} else if (num < 0) {
    console.log(`Giá trị bạn nhập là số âm: ${num}`);
}else {
    console.log(`Giá trị bạn nhập là số 0: ${num}`);
}