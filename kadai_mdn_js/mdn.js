const date = new Date(Date());
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
let m= date.getMonth()+1;
console.log(date.getFullYear()+"年" +m+"月" +date.getDate()+"日");