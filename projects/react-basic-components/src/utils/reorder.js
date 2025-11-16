export function reorder(array, fromIndex, toIndex) {
    const newArray = [...array]; // opción segura (no muta el original)
    const [item] = newArray.splice(fromIndex, 1); // 1) sacar
    newArray.splice(toIndex, 0, item); // 2) insertar
    return newArray;
}