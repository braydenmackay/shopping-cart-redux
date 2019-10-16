class Product {
  constructor(id, name, price, description) {
    this.id = id
    this.name = name
    this.price = price
    this.description = description
  }
}

export default [
  new Product(1, "Shirt", 19.99, "Sleeves sold separately"),
  new Product(2, "Shoe", 29.99, "Buy one Get one 2x the price"),
  new Product(3, "Vest", 34.99, "Sleeves removed separately"),
  new Product(4, "Pants", 48.99, "One size fits all"),
  new Product(5, "Hat", 12.99, "Only available in 6xl")
]
