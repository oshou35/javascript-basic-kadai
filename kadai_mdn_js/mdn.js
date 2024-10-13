const today = new Date();
const [month, day, year] = [
  today.getMonth()+1,
  today.getDate(),
  today.getFullYear(),
];
// [0, 17, 2000] （月は 0 基点であるため）
console.log(year+"年"+month+"月"+day+"日");