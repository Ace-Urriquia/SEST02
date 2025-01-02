
let library = [
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", isAvailable: true },
  { title: "Atomic Habits", author: "James Clear", isAvailable: true },
  { title: "48 Laws of Power", author: "Robert Greene", isAvailable: true },
];

// Load pag ka refresh ng page
window.onload = function () {
  const storedLibrary = localStorage.getItem("library");
  if (storedLibrary) {
    library = JSON.parse(storedLibrary);
  }
  displayLibrary();
};


function displayLibrary() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; 
  
    library.forEach((book, index) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");
  
      
      let availabilityText;
      let buttonText;
  
      if (book.isAvailable) {
        availabilityText = "Available";
        buttonText = "Borrow";
      } else {
        availabilityText = "Borrowed";
        buttonText = "Return";
      }
  
      bookElement.innerHTML = `
          <p><strong>${book.title}</strong> by ${book.author} - ${availabilityText}</p>
          <button onclick="toggleBookStatus(${index})">${buttonText}</button>
          <button onclick="deleteBook(${index})">Delete</button>
        `;
      bookList.appendChild(bookElement);
    });
  }

// toggle switch na ginaya ko sa google
function toggleBookStatus(index) {
  const book = library[index];
  book.isAvailable = !book.isAvailable; 
  localStorage.setItem("library", JSON.stringify(library));
  displayLibrary(); 
}


function deleteBook(index) {
  library.splice(index, 1); 
  localStorage.setItem("library", JSON.stringify(library)); 
  displayLibrary(); 
}


const addBookForm = document.getElementById("add-book-form");
addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const bookTitle = document.getElementById("book-title").value;
  const bookAuthor = document.getElementById("book-author").value;
  if (bookTitle && bookAuthor) {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      isAvailable: true,
    };
    library.push(newBook);
    localStorage.setItem("library", JSON.stringify(library)); // Save to sa local storage ko
    displayLibrary(); //display ulit
    document.getElementById("book-title").value = ""; // para malinis yung input field
    document.getElementById("book-author").value = ""; // para malinis yung input field
  }
});
