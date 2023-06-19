let kalimat = "Saya ingin belajar bersama";
let newKalimat = kalimat.split(" ");
console.log(newKalimat);
newKalimat.forEach((item, index) => {
  console.log(`Item : ${item} Index ke ${index}`);
});
