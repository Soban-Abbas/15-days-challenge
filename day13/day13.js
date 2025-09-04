let inputNotes = document.getElementById("notes");
let uL = document.getElementById("noteList");
let saveArray = JSON.parse(localStorage.getItem("notes") || "[]");

function renderNotes() {
  uL.innerHTML = "";
  saveArray.forEach((noteObj) => {
    let list = document.createElement("li");
    list.dataset.id = noteObj.id;
    list.innerText = noteObj.note_Content;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    list.appendChild(deleteBtn);

    uL.appendChild(list);
  });
}

function addNote() {
  if (inputNotes.value === "") {
    document.getElementById("message").innerHTML = "<br>Enter Notes";
    return;
  }

  let noteObj = {
    id: Date.now(),
    note_Content: inputNotes.value,
  };

  saveArray.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(saveArray));
  inputNotes.value = "";
  renderNotes();
}

function deleteNote(id) {
  saveArray = saveArray.filter((obj) => obj.id !== id);
  localStorage.setItem("notes", JSON.stringify(saveArray));
  renderNotes();
}

// Event Listeners
document.getElementById("addNotes").addEventListener("click", addNote);

uL.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    let li = e.target.parentElement;
    deleteNote(Number(li.dataset.id));
  }
});

// Initial render
renderNotes();
