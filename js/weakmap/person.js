const privateData = new WeakMap();

class Pserson {
  constructor (name, age) {
    privateData.set(this, { name, age })
  }

  getName() {
    return privateData.get(this).name;
  }

  getAge() {
    return privateData.get(this).age;
  }
}

const zk = new Pserson('zk', 18);
console.log(zk.getName());

引用
// zk.name = '曾凯';
// public 属性公开， 外