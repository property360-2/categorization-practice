const booksArr = [
  { title: "The Great Gatsby", price: 10, category: "fiction" },
  { title: "Sapiens", price: 15, category: "non-fiction" },
  { title: "A Brief History of Time", price: 20, category: "science" },
  { title: "1984", price: 12, category: "fiction" },
  { title: "To Kill a Mockingbird", price: 13, category: "fiction" },
  { title: "Brave New World", price: 14, category: "fiction" },
  { title: "Thinking, Fast and Slow", price: 17, category: "non-fiction" },
  { title: "Atomic Habits", price: 16, category: "non-fiction" },
  { title: "The Selfish Gene", price: 18, category: "science" },
  { title: "Cosmos", price: 22, category: "science" }
];


const filterDropDown = document.querySelector(".filter-dropdown");
const booksContainer = document.querySelector(".books-container");

// 🔄 Handle dropdown change
filterDropDown.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  changeCategory(selectedCategory);
});

function changeCategory(category) {
  // 🔍 Filter books
  const categorizedBooks =
    category === "all"
      ? booksArr
      : booksArr.filter((book) => book.category === category);

  // 🧹 Clear previous cards
  booksContainer.innerHTML = "";

  // 🧱 Add new cards
  categorizedBooks.forEach((book) => {
    const card = bookCard(book);
    booksContainer.appendChild(card);
  });
}

function bookCard(book) {
  const div = document.createElement("div");
  div.classList.add("book-card");

  const h2 = document.createElement("h2");
  h2.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = `Price: $${book.price}`;

  div.appendChild(h2);
  div.appendChild(p);

  return div;
}
