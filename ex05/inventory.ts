
/* Informations sur un article */
export interface Item {
    id: number;
    name: string;
    quantity: number;
    description?: string; // Description facultative
    price?: number; // Prix facultatif
}

/* Un inventaire est un tableau d'articles */
export type Inventory = Item[];

/* Ajouter un article sans doublon d'identifiant */
export function addItem(inventory: Inventory, item: Item): Inventory
{
    // Vérifie si l'identifiant existe déjà
    if (inventory.some(existingItem => existingItem.id === item.id)) {
        return inventory; // Garde le tableau original
    }
    return [...inventory, item]; // Crée un nouveau tableau avec l'article
}

/* Supprimer un article par son identifiant */
export function removeItem(inventory: Inventory, id: number): Inventory
{
    // Garde les articles dont l'identifiant est différent
    return inventory.filter(existingItem => existingItem.id !== id);
}

/* Rechercher un article par son identifiant */
export function findById(inventory: Inventory, id: number): Item | undefined
{
    // Retourne l'article trouvé, ou undefined s'il n'existe pas
    return inventory.find(existingItem => existingItem.id === id);
}

/* Calculer la valeur totale de l'inventaire */
export function totalValue(inventory: Inventory): number
{
    let sums: number = 0; // Initialise le total à zéro

    // Parcourt tous les articles
    for (let i = 0; i < inventory.length; i++) {
        const currentItem = inventory[i]; // Article actuel

        // Ignore les articles sans prix ou avec un prix égal à zéro
        if (currentItem.price !== undefined && currentItem.price !== 0) {
            sums += currentItem.price * currentItem.quantity; // Ajoute la valeur
        }
    }
    return sums; // Retourne le total calculé
}

/* Trouver les articles dont le stock est faible */
export function lowStock(inventory: Inventory, threshold: number): Item[]
{
    // Retourne les articles sous le seuil demandé
    return inventory.filter(item => item.quantity < threshold);
}
