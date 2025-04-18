const tasks = [];

/*
 * Add a task to the list of tasks. @function addTask
 */
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  let text = document.createTextNode(
    document.getElementById("taskInput").value
  );
  let li = document.createElement("li");
  if (taskText === "") {
    alert("لطفا کاری را وارد کنید ");
  }
  li.appendChild(text);
  document.getElementById("taskList").appendChild(li);
  tasks.push(taskText);
  console.log("کار اضافه شد: " + taskText);
  document.getElementById("taskInput").value = "";
}
function clearTasks() {
  let Q1 = confirm("آیا مطمئن هستید که میخواهید همه کارها را پاک کنید؟");
  if (Q1) {
    document.getElementById("taskList").innerHTML = "";
    tasks.length = 0;
  }
  console.log(tasks);
}
function welcomeMessage() {
  alert("به مدیر کارهای روزانه خوش اومدی!");
}
