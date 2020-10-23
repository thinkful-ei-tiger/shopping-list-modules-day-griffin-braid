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
    let deletedArray = this.items.filter(item => item.id != id);
    return deletedArray;
}

  export default {
      items,
      hideCheckedItems,
      findById,
      addItem,
      findAndToggleChecked,
      findAndUpdateName,
      findAndDelete
  };
