// Get the required elements
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');
const pickFavoritesButton = document.getElementById('pick-favorites-button');
const favoritesContainer = document.getElementById('favorites-container');

// Create an empty array to store the items
let items = [];

// Function to handle adding items
function handleAddItem() {
  const itemName = itemInput.value.trim();

  if (itemName !== '') {
    if (items.length < 5) {
      items.push(itemName);
      const listItem = document.createElement('li');
      listItem.textContent = itemName;
      itemList.appendChild(listItem);
      itemInput.value = '';
    } else {
      alert('You can only add up to 5 items.');
    }
  }
}

// Function to handle item selection
function handleItemSelection(event) {
    const selectedItem = event.target;
  
    // Check if the item is already selected
    const isSelected = selectedItem.classList.contains('selected');
  
    // Check the number of currently selected items
    const selectedItems = document.querySelectorAll('#item-list .selected');
  
    if (!isSelected && selectedItems.length >= 3) {
      alert('You can only select up to three items.');
      return;
    }
  
    // Toggle the 'selected' class
    selectedItem.classList.toggle('selected');
  }

// Function to handle picking favorites
function handlePickFavorites() {
  const selectedItems = document.querySelectorAll('#item-list .selected');

  if (selectedItems.length !== 3) {
    alert('Please select exactly three favorites.');
  } else {
    selectedItems.forEach((item) => {
      item.style.color = '#D78825';
      favoritesContainer.appendChild(item);
    });

    // Disable item selection after picking favorites
    itemList.removeEventListener('click', handleItemSelection);
  }
}

// Event listener for the add button
addButton.addEventListener('click', handleAddItem);

// Event listener for the Enter key press
itemInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleAddItem();
    event.preventDefault(); // Prevent form submission if the input is within a form element
  }
});

// Event listener for picking favorites
pickFavoritesButton.addEventListener('click', handlePickFavorites);

// Event delegation for the item list
itemList.addEventListener('click', handleItemSelection);
