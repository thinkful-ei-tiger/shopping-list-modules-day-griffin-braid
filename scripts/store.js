import item from './item.js'

let items = [];
let hideCheckedItems = false;

const findById = function(id) {
    let foundItem = items.find(item => item.id === id);
    return foundItem;
}

const addItem = function(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch(error) {
        console.log('Error.')
    }
}

const findAndToggleChecked = function (id) { 
   if (this.findById(id).checked === true) {
        this.findById(id).checked = false;
   } else this.findById(id).checked = true
}

const findAndUpdateName = function (id, newName) {
    try {
        item.validateName(newName);
        findById(id).name = newName;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`)
    }
}

const findAndDelete = function (id) {
    items.find((item) => item.id === id);
    items.splice(items, 1);
}

const toggleCheckedFilter = function () {
    hideCheckedItems = !hideCheckedItems;
}

  export default {
      items,
      hideCheckedItems,
      findById,
      addItem,
      findAndToggleChecked,
      findAndUpdateName,
      findAndDelete,
      toggleCheckedFilter
  };
