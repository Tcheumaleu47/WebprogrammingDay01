export interface Item {
id: number;
name: string;
quantity: number;
description?: string;
price: number;
}
export type Inventory = Item[];

export function addItem(inventory: Inventory, item: Item): Inventory
{
   if (inventory.some(existingItem => existingItem.id === item.id)) { // .some Pour vérifier si un identifiant existe déjà.
       return inventory;
    }
    return [...inventory, item]; // returns a new array with added at the end.
}

export function removeItem(inventory: Inventory, id: number): Inventory
{
        return (inventory.filter(existingItem => existingItem.id !== id)) // nouveau tableau sans l'article ciblé : filter()
}

export function findById(inventory: Inventory, id: number): Item | undefined
{
    return (inventory.find(existingItem => existingItem.id === id)) // ✅ Returns the item whose id IS the given id
}

export function totalValue(inventory: Inventory): number
{
    let sums: number = 0;
    
    for (let i = 0; i < inventory.length; i++) {
        const currentItem = inventory[i];

       if (inventory[i].price && inventory[i].price !== 0) {
           sums += inventory[i].price * inventory[i].quantity;
       }
    }
    return sums;
}

export function lowStock(inventory: Inventory, threshold: number): Item[]
{
    return (inventory.filter( item => item.quantity < threshold));
}