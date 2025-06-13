const forms = document.getElementById("formm");
    const taskList = document.getElementById("Addtask");

    forms.addEventListener("submit", function (event) {
      event.preventDefault();

      const inputtask = document.getElementById("Task");
      const tasktext = inputtask.value.trim();

      if (tasktext) {
        const li = document.createElement("li");

        // Task text
        const textspan = document.createElement("span");
        textspan.className = "task-text";
        textspan.textContent = tasktext;

        // Buttons container
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
          li.remove();
        });

        // Update button
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.className = "update-btn";
        updateBtn.addEventListener("click", function () {
          const newtext = prompt("Update your task:", textspan.textContent);
          if (newtext) {
            textspan.textContent = newtext;
          }
        });

        buttonsDiv.appendChild(updateBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(textspan);
        li.appendChild(buttonsDiv);

        taskList.appendChild(li);
        inputtask.value = "";
      }
    });