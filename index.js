// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuDiv = document.getElementById('menu'); 
    // Loop through each category and its items in the menu objectss
    Object.entries(menu).forEach(([category, items]) => {
            
            // Create an element to represent the category
            let categoryEl = document.createElement('h3')
            // Set the text content of the category element to the category name
            categoryEl.textContent = category;  
             // Append the category element to the menu container
            menuDiv.appendChild(categoryEl);
             // Create an element to represent a list of items
            let listEl = document.createElement('ul');
            // Append a list of items element to the menu container
            menuDiv.appendChild(listEl);
            // Loop through the items in the category and create list items
             items.forEach((items) => {
                  // Create a list for menu
                 let listItem = document.createElement('li');
                listItem.textContent = items;
                
                // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener("click" , () =>{
                     addToOrder(items)
                 })
            // Append the list item to the list of items
            listEl.appendChild(listItem)
             }
            )
          
          
     }
    ) 
          
}   
// Callback function for adding an item to the order
let totalPrice = 0; // Keeps track of the total price
const fixedPrice = 60; 

function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
      let orderItemsList = document.getElementById("order-items");
      let orderTotal = document.getElementById("order-total");
    
      // Create a list item for the order
      let orderList = document.createElement('li');
      orderList.textContent = itemName;

      orderItemsList.appendChild(orderList);
      
      // Calculate and update the total price 
      totalPrice += fixedPrice;
      orderTotal.textContent = totalPrice;
 
    // remove when clicked
    orderList.addEventListener("click" , () =>{
    orderList.remove()
    totalPrice -= fixedPrice;
    orderTotal.textContent = totalPrice; }
  )
      

} 

// Function to initialize the menu system
function initMenuSystem(menu) {
// Call the function to display menu items
displayMenuItems(menu)
}

// Start the menu system by calling the init function 
initMenuSystem(menu);

      

       

       
