// es6 class 只是语法糖
function Person(name) {
  this.name = name
}

Person.prototype = {
  getName: function() {
    return this.name;
  }
}

function Author(name, books) {
  Person.call(this, name);
  this.books = books;
}

extend(Author, Person);
Author.prototype.getBooks = function() {
  return this.books;
}

function extend(subClass, superClass) {
  subClass.prototype = new superClass();
  // constructor属性丢失了
  subClass.prototype.constructor = subClass;
}


const zk = new Person('曾凯');
const author = new Author('高尔基', ['我的大学']);
console.log(zk.constructor.prototype);