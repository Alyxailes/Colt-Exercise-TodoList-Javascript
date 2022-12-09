const itemList = [];
let command = prompt("COMMAND : What do you want to do?").toLowerCase();

while (command !== "quit") {
    if (command === "new") {
        let addItem = prompt("NEW : What do you want to add into your ToDo?");
        itemList.push(addItem);
        showTodo();
    } else if (command === "list") {
        showTodo();
    } else if (command === "delete") {
        index = 1;
        let indexDelete = prompt("DELETE : What list do you want to delete?");
        if (indexDelete <= itemList.length && indexDelete >= 1 && isNaN(indexDelete) == false) {
            itemList.splice(indexDelete - 1, 1);
            showTodo();
        }
    }
    command = prompt("COMMAND : What do you want to do?").toLowerCase();
}
console.log("Okay! You quit the app!")

function showTodo() {
    console.clear();
    console.log("ToDo List : ")
    for (let item in itemList) {
        console.log(`"${parseInt(item) + 1} : ${itemList[item]}"`);
    }
    console.log("---------------")
}