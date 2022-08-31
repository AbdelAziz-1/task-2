let input = document.getElementById("inputData");
let btnAdd = document.getElementById("btnAdd");
let tasks = document.getElementById("tasks");
let noTask = document.getElementById("noTask");

let showDiv = () => {
  if (tasks.childElementCount == 0) noTask.classList.remove("none");
};

let addNewTask = () => {
  let data = input.value;

  if (data.trim() == "" || data.length < 3 || data.length > 20) {
    alert("pleas enter reel task 🤬");
  } else {
    tasks.innerHTML += `<div class="alert alert-info">${data}

    <button class=" delete btn btn-danger float-right " style="margin:-6px">Delete</button>
    </div>`;
    noTask.classList.add("none");
    input.value = "";
  }
};

btnAdd.addEventListener("click", addNewTask);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) e.target.parentElement.remove();
  showDiv();
});
