let booksArray = [];
let message = document.createElement("span");
let available_unordered_list = document.getElementById("available");
let borrow_unordered_list = document.getElementById("unorderBorrowlist");
let inputBooks = document.getElementById("addBook");
let addBtn = document.getElementById("addbtn");

inputBooks.addEventListener("input", function () {
  addBtn.disabled = false;
  if (inputBooks.value.length > 15) {
    message.innerText = "Please Enter Correct value";
    addBtn.disabled = true;
  } else {
    message.innerText = "";
  }
});
let span1 = document.getElementById("span1");
span1.appendChild(message);

addBtn.addEventListener("click", function () {
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
    listBook.innerText = `Book-id = ${bookObj.book_Id}     Book-Title = ${bookObj.book_Name}     Book-Availablity = ${bookObj.book_Availability}`;
    available_unordered_list.appendChild(listBook);

    // Borrow Button
    let borrowBtn = document.createElement("button");
    borrowBtn.innerText = "Borrow";

    borrowBtn.addEventListener("click", function () {
      if (bookObj.book_Availability === true) {
        listBook.classList.add("line");
        borrowBtn.disabled = true;
        bookObj.book_Availability = false;

        // Borrowed item
        let borrowBooklist = document.createElement("li");
        borrowBooklist.innerText = `Book Title = ${bookObj.book_Name}`;

        // Return Button
        let returnBtn = document.createElement("button");
        returnBtn.innerText = "Return";

        returnBtn.addEventListener("click", function () {
          borrowBooklist.remove();       // remove from borrow list
          listBook.classList.remove("line"); // un-cross original
          borrowBtn.disabled = false;
          bookObj.book_Availability = true;
        });

        borrowBooklist.appendChild(returnBtn);
        borrow_unordered_list.appendChild(borrowBooklist);
      }
    });

    listBook.appendChild(borrowBtn);
  }
});

