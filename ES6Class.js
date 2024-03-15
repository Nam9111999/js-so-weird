function Cat(name, color, type) {
  this.name = name
  this.color = color
  this.type = type
  this.meow = function(){
    console.log('check')
  }
}

Cat.prototype.dog = function () {
  console.log('hello')
}

let alex = new Cat('name','blue','bengal')
alex.meow()
------------------------------------------
class Cat {
  constructure(name,color,type) {
    this.name = name
    this.color = color
    this.type = type
  }

  meow() {
    console.log(`here {this.name}`)
  }
}

let alex = new Cat('name','blue','bengal')
alex.meow()
