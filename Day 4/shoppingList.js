/* Imagine that you are going out to do some grocery shopping. 
So you have an array called shoppingList of all the products you want to buy. 
Now that you are inside the shop, you have a basket with all the products from your list, but you want to add a few more.
Create a new array called shoppingBasket, that will be a copy of of the shoppingList array, and add some new products into it. */

let shoppingList = ["Milk","Rice","Spices","Grams","Yogurt","Suger","Soup"]; // all products to buy
console.log("Original list of items: "+shoppingList);
let shoppingBasket = [...shoppingList,"Chocolates","Cheese","Bread","Ketchup"]; // original list with a few additions
console.log("New list: "+shoppingBasket);