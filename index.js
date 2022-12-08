const itemList = [];
let index = 1;
let command = toLowerCase(prompt("COMMAND : What do you want to do?"));

while (command !== "quit") {
    if (command === "new") {
        let addItem = prompt("NEW : What do you want to add into your ToDo?");
        itemList.push(addItem);
        index = 1;
        console.clear();
        console.log("ToDo List : ")
        for (let item in itemList) {
            console.log(`"${index} : ${itemList[index - 1]}"`);
            index++;
        }
        console.log("---------------")
    } else if (command === "list") {
        console.clear();
        index = 1;
        console.log("ToDo List : ")
        for (let item in itemList) {
            console.log(`"${index} : ${itemList[index - 1]}"`);
            index++;
        }
        console.log("---------------")
    } else if (command === "delete") {
        index = 1;
        let indexDelete = prompt("DELETE : What list do you want to delete?");
        itemList.splice(indexDelete - 1, 1);
        console.clear();
        index = 1;
        console.log("ToDo List : ")
        for (let item in itemList) {
            console.log(`"${index} : ${itemList[index - 1]}"`);
            index++;
        }
        console.log("---------------")
    }
    command = toLowerCase(prompt("COMMAND : What do you want to do?"));
}
console.log("Okay! You quit the app!")