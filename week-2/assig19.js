const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
//Create a deep copy of order
let deeporder=structuredClone(order)
//customer.address.city in copied object
deeporder.customer.address.city="chenni"
//items[0].price
deeporder.items[0].price=75000
//printing
console.log(order)
console.log(deeporder)