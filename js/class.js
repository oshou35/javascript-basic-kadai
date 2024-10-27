class Product{
  constructor(name,price,category){
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe() {
    console.log('この商品名は' + this.name + 'です。');
  }

} 

const shampoo = new Product('shampoo',300,'seikatu');

console.log(shampoo);

shampoo.describe();