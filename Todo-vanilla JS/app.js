document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form"); // Target the form
  const formInput = document.querySelector(".form-input");
  const todoList = document.querySelector(".todo-list");
  const todoBtn = document.querySelector(".submit-btn");
  let editItem = null;
  let editMode = false;
  todoList.addEventListener("click", function (e) {
    const target = e.target;
    // console.log(target);

    const todoItem = target.parentNode;
    if (target.tagName === "BUTTON") {
      if (target.innerText === "🗑️") {
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        console.log(target.innerText);
        editMode = true;
        editItem = todoItem;
        todoBtn.innerText = "Edit Todo";
        formInput.value = todoItem.firstChild.textContent;
        formInput.focus();
      }
    }
  });

  // Event listener on form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    const textInput = formInput.value.trim();

    // Add the task only if input is not empty
    if (textInput !== "") {
      if (editMode) {
        todoBtn.textContent = "Add Todo";
        editItem.firstChild.textContent = textInput;
        editMode = false;
        editItem = null;
        console.log("EDIT", editItem);
      } else {
        addTask(textInput);
      }
      formInput.value = ""; // Clear input field after adding task
    } else alert("Please add the data");
  });

  // Function to add the task to the list
  function addTask(textInput) {
    const liElement = document.createElement("li");
    const remove = document.createElement("button");
    const edit = document.createElement("button");

    liElement.innerHTML = `<span>${textInput}</span>`;
    remove.innerText = "🗑️";
    edit.textContent = "✏️";
    liElement.appendChild(edit);
    liElement.appendChild(remove);
    todoList.appendChild(liElement);
  }
});
