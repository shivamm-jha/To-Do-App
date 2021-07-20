//  -------------function to prevent the form from getting submitted---------------

const plus_btn = document.getElementById("plus-btn");
plus_btn.addEventListener("click", (e) => {
  e.preventDefault();
});

let input = document.getElementById("input-text");

// function to add todos to our list

function addItem() {
  if (input.value.trim()) {
    //   creating ul tag

    let ul_tag = document.createElement("ul");
    ul_tag.classList.add("todo-list-container");

    // todo list div

    let todoList = document.createElement("div");
    todoList.classList.add("todo-list");

    //  li tag

    let li_tag = document.createElement("li");
    li_tag.innerHTML = input.value;

    li_tag.classList.add("todo-item");

    // button div
    let btn_div = document.createElement("div");
    btn_div.classList.add("button-divv");

    //on click complete event which means...
    //when you click on the todo it will get completed
    //and when you click again it will be uncompleted

    li_tag.addEventListener("click", () => {
      li_tag.classList.toggle("completed");
    });

    // function to create edit button.....

    let edit_button = document.createElement("button");
    edit_button.classList.add("edit-btn");
    edit_button.innerHTML = `edit`;

    edit_button.onclick = function () {
      editWorking(li_tag);
    };

    // funcion to create delete button......

    let delete_button = document.createElement("button");
    delete_button.classList.add("dlt-btn");
    delete_button.innerHTML = `delete`;

    //  appending element into each other

    ul_tag.appendChild(todoList);
    todoList.appendChild(li_tag);
    todoList.appendChild(btn_div);

    //-------------btn_div.appendChild(completed_button);------------

    btn_div.appendChild(edit_button);
    btn_div.appendChild(delete_button);

    // append all the elements in main div

    document.getElementById("container").appendChild(ul_tag);

    // deleted button function........

    todoList.addEventListener("click", (e) => {
      let items = e.target;
      if (items.classList[0] === "dlt-btn") {
        let todo_to_delete = items.parentElement.parentElement;
        todo_to_delete.classList.add("fall");
        todo_to_delete.addEventListener("transitionend", () => {
          todo_to_delete.remove();
        });
      }
    });

    // -----------to clear the input field after adding a todo--------------

    input.value = "";
  }
  //   --------this will alert the user they try to add blank field in the todo------
  else if (input.value === "") {
    alert("please fill the input field");
  }
}

// ------------function to edit our todo using prompt------------

function editWorking(e) {
  let editValue = prompt("Edit your todo", e.firstChild.nodeValue);

  //    this is to ensure that if user inputs nothing
  //    then the list remains same

  if (editValue === "") {
    return;
  }
  e.firstChild.nodeValue = editValue;
}

// let x = document.getElementsByClassName('')

//  ---------function to delete all the todo together----------

// function removeAll() {

//   document.getElementById("container").innerHTML = "";
// }

//  function to clear all the todo trough transition.....

let delete_everything = document.getElementById("button");
let cont = document.getElementById("container");
delete_everything.addEventListener("click", () => {
  cont.classList.add("dlt-everything");
  cont.addEventListener("transitionend", () => {
    cont.innerHTML = "";
  });
});
