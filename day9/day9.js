let booksArray = [];
let message = document.createElement("span");
let available_unordered_list = document.getElementById("available");
let inputBooks = document.getElementById("addBook");
inputBooks.addEventListener("input", function (e) {
  addBtn.disabled = false;
  if (inputBooks.value.length > 15) {
    message.innerText = "Please Enter Correct value";
    addBtn.disabled = true;
  } else message.innerText = "";
});
let span1 = document.getElementById("span1");
span1.appendChild(message);

let addBtn = document.getElementById("addbtn");

addBtn.addEventListener("click", function (e) {
  if (inputBooks.value === "" || inputBooks.value.length > 15) {
    message.innerText = "Please Enter Correct value";
  } else {
    let bookObj = {
      book_Id: Date.now(),
      book_Name: inputBooks.value,
      book_Availability: true,
    };

    booksArray.push(bookObj);

    let listBook = document.createElement("li");
    listBook.dataset.id = bookObj.book_Id;

    listBook.innerText = ` Book-id =${
      bookObj.book_Id
    } ${"\u00A0\u00A0\u00A0"} Book-Title=${
      bookObj.book_Name
    }  ${"\u00A0\u00A0\u00A0"} Book-Availablity=${bookObj.book_Availability}`;
    available_unordered_list.appendChild(listBook);
  }
});
