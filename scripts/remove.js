// Removes child elements from parent
// Code adapted from Marvin Sernee
export function removeAllChildNodes(parent) {
    // while (parent.firstChild) {
    //     parent.removeChild(parent.firstChild);
    // }
    console.log(parent)
    parent.innerHTML = "";
};
