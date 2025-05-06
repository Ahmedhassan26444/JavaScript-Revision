class Test {
    constructor() {
      console.log(this);
    }
  }
  const test = new Test();




  
  const obj = {
    a: 2,
    func1: function () {
      console.log(this);
    },
  };
  
  obj.func1();