/* Các thông số sức khỏe được tính như sau:
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
 */

// a. Khai báo chiều cao của bạn
// b. In ra cân nặng lí tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng 1 dòng

const height = 152;
// Số lẻ của chiều cao
let sole = height - 100;
let idealWeight = (sole * 9) / 10;
let maxWeight = sole;
let minWeight = (sole * 8) / 10;
console.log(`Mức cân năng lí tưởng: ${idealWeight}, Mức cân nặng tối đa: ${maxWeight}, Mức cân nặng tối thiểu: ${minWeight}`);
