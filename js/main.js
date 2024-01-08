//* city obyektini aşağıdakı obyektdən silmək üçün JavaScript proqramı yazın. obyekti silinmədən əvvəl və ya sonraki obyekti çap edin.

let obj = { name: "John", age: 30, city: "New York" };
console.log(obj); //{ name: 'John', age: 30, city'New York' }
delete obj.city;
console.log(obj); // {name:'John',age:30}

//* 4. Aşağıdakı kitabların oxu vəziyyətini (yəni kitab adı, müəllif adı və oxu statusu) göstərmək üçün JavaScript proqramı yazın.

var kitabxana = [
  {
    müəllif: "Bill Gates",
    başlıq: "Qarşıda Yol",
    oxuStatus: true,
  },
  {
    müəllif: "Steve Jobs",
    başlıq: "Walter Isaacson",
    oxuStatus: true,
  },
  {
    müəllif: "Suzanne Collins",
    başlıq: "Mockingjay: Aclıq Oyunlarının Son Kitabı",
    oxuStatus: false,
  },
];
for (var i = 0; i < kitabxana.length; i++) {
  var book =
    "'" + kitabxana[i].başlıq + "'" + " by " + kitabxana[i].müəllif + ".";
  if (kitabxana[i].oxuStatus) {
    console.log("Artıq oxudum" + book);
  } else {
    console.log("Hələ oxumaq lazımdır " + book);
  }
}

//*  Bir obyektin müəyyən bir əmlakın olub olmadığını yoxlamaq üçün JavaScript funksiyası yazın.

function hasProperty(obj, key) {
  //hasOwnProperty metodu  olub olmadığını yoxlayır. Əgər varsa true qaytarır, əks halda false qaytarır.
  return obj.hasOwnProperty(key);
}

const Object = { name: "John", age: 25, city: "New York" };

console.log(hasProperty(Object, "name")); // true
console.log(hasProperty(Object, "gender")); // false
