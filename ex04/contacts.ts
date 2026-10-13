import { constants } from "node:buffer";

export interface Contact {
firstName: string;
lastName: string;
age: number;
email?: string;
phone?: string;
}

export function fullName(contact: Contact): string
{
        contact.firstName;
        contact.lastName;
        let t: string;

        t = (contact.firstName+ " " +contact.lastName)

    return t;
}

export function hasContactInfo(contact: Contact): boolean
{
    if (contact.email !== undefined || contact.phone !== undefined)
       return true;

    return false;
}

export function formatContact(contact: Contact): string
{
    let t: string;
    const name = fullName(contact)
    const text = `${name}, ${contact.age} years old`;

    if (contact.email !== undefined) {
        t = (text + " " + "[" + contact.email + "]");
        return t;
    }
    if (contact.phone !== undefined) {
        t = (text  + " " + "[" + contact.phone + "]");
        return t;
    } 
    return text;
}

export function filterAdults(contacts: Contact[]): Contact[]
{
    const array: Contact[] = [];
    let i = 0

    while (i < contacts.length) {
        if (contacts[i].age >= 18) {
        array.push(contacts[i]);
        }
        i++;
    }
    return array; 
}