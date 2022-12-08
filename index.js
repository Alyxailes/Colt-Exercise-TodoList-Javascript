const itemList = [];
let index = 1;
let command = prompt("COMMAND : What do you want to do?").toLowerCase();

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
        if (indexDelete !== NaN) {
            itemList.splice(indexDelete - 1, 1);
            console.clear();
            index = 1;
            console.log("ToDo List : ")
            for (let item in itemList) {
                console.log(`"${index} : ${itemList[index - 1]}"`);
                index++;
            }
            console.log("---------------")
        } else {
            let indexDelete = prompt("DELETE : You entered an invalid number! What list do you want to delete?");
        }
    }
    command = prompt("COMMAND : What do you want to do?").toLowerCase();
}
console.log("Okay! You quit the app!")