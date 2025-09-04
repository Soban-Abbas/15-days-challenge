let inputNotes = document.getElementById("notes");
let uL = document.getElementById("noteList");

let saveArray = JSON.parse(localStorage.getItem("notes") || "[]");
let addBtn = document.getElementById("addNotes");
addBtn.addEventListener("click", function (e) {
  if (inputNotes.value === "") {
    document.getElementById("message").innerHTML = "<br>Enter Notes";
  } else {
    let noteObj = {
      id: Date.now(),
      note_Content: inputNotes.value,
    };

    saveArray.push(noteObj);

    inputNotes.value = "";

    let list = document.createElement("li");
    uL.appendChild(list);

    list.dataset.id = noteObj.id;
    list.innerText = noteObj.note_Content;

    localStorage.setItem("notes", JSON.stringify(saveArray));
  }
});

(function () {
  let output = localStorage.getItem("notes");

  if (output !== null) {
    let newarray = saveArray.map(function (t) {
      return t.note_Content;
    });

    for (let item of newarray) {
      let list = document.createElement("li");
      list.innerText = item;
      uL.appendChild(list);
    }
  }
})();
