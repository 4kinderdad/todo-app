function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let list = document.getElementById("taskList");
    let listItem = document.createElement("li");
    listItem.innerText = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.onclick = function() {
        list.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    list.appendChild(listItem);

    input.value = "";
}