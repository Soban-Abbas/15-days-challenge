let retString = localStorage.getItem("notes");
let notesArray = retString ? JSON.parse(retString) : [];
let ulList = document.getElementById("notesList");
let inputNotes = document.getElementById("notes");
let addBtn = document.getElementById("btn");
let errorMessage = document.getElementById("message");

addBtn.addEventListener("click", function (e) {
  if (inputNotes.value === "") {
    errorMessage.innerHTML = "<br>Enter Note";
  } else {
    let noteObj = {
      id: Date.now(),
      noteContent: inputNotes.value,
    };
    notesArray.push(noteObj);
    let listContent = document.createElement("li");
    listContent.dataset.id = noteObj.id;
    listContent.innerText = noteObj.noteContent;
    ulList.appendChild(listContent);

    let makeString = JSON.stringify(notesArray);
    localStorage.setItem("notes", makeString);
  }
  inputNotes.value = "";
});

let retArray = JSON.parse(retString);

for (let i = 0; i < retArray.length; i++) {
  let listContent = document.createElement("li");
  listContent.dataset.id = retArray[i].id;
  listContent.innerText = retArray[i].noteContent;
  ulList.appendChild(listContent);
}

inputNotes.addEventListener("input", function (e) {
  if (inputNotes.value !== "") {
    errorMessage.innerText = "";
  }
});
