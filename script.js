const laptop = {
    name: "Laptop",
    price: 50000,
    quantity: 5
}






const phone = {
    name: "Phone",
    price: 20000,
    quantity: 5
}




const headphones = {
    name: "Headphones",
    price: 50000,
    quantity: 8
};


const storeProducts = [laptop, phone, headphones]


function findProduct(searchName) {
    for (const product of storeProducts) {
        if (product.name === searchName) {
            return product;
        }
        
    }
    return null;
}



const searchName = "Phone"
const foundProduct=  findProduct(searchName)


if (foundProduct !== null) {
     console.log("Product: " + foundProduct.name);
    console.log("Price: ₦" + foundProduct.price);
    console.log("Quantity in stock: " + foundProduct.quantity);
    
} else {
     console.log("Sorry, product not found!");
    
}





















