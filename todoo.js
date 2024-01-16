const title = document.getElementById("title");
// const description4 = document.getElementById("description4");
// const description3 = document.getElementById("description3");
// const description2 = document.getElementById("description2");
const description1 = document.getElementById("description1");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

showAllTasks();

function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span1 = document.createElement("span");
    span1.innerText = value.description1;
    innerDiv.append(span1);

    // const span2 = document.createElement("span");
    // span2.innerText = value.description2;
    // innerDiv.append(span2);
 
    // const span3 = document.createElement("span");
    // span3.innerText = value.description3;
    // innerDiv.append(span3);

    // const span4 = document.createElement("span");
    // span4.innerText = value.description4;
    // innerDiv.append(span4);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    btn.innerText = "✌️";

    btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });     

    div.append(btn);
    container.append(div);
  });
}


function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
  console.log(tasks);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();

  tasks.push({
    title: title.value,
    description1: description1.value,
    // description2: description2.value,
    // description3: description3.value,
    // description4: description4.value,
  });
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllTasks();
  console.log(tasks);
});


// const p = document.createElement("p");
// div.setAttribute("class", "task");
// p.innerText = value.title;
// innerDiv.append(p);
