// Fiction book data with images - CORRECTED URLs
const bookData = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        rating: 4.5,
        image: "https://thecommononline.org/wp-content/uploads/2013/06/Screen-Shot-2017-05-31-at-2.19.46-PM.png"
    },
    {
        title: "1984",
        author: "George Orwell",
        price: 14.99,
        rating: 4.7,
        image: "https://bookeve.pk/wp-content/uploads/2024/07/61ZewDE3beL._AC_UF10001000_QL80_.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 11.99,
        rating: 4.8,
        image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 13.49,
        rating: 4.3,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        price: 13.99,
        rating: 4.4,
        image: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 15.99,
        rating: 4.9,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hobbit_trilogy_dvd_cover.jpg"
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        price: 10.49,
        rating: 4.2,
        image: "https://shop.nearpeer.org/cdn/shop/files/9780571374250_11zon.jpg?v=1750360788"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 10.99,
        rating: 4.6,
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16161151_b_v10_aa.jpg"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Fiction page loaded");
    initializePage();
});

function initializePage() {
    // Load initial books
    loadInitialBooks();
    
    // Add event listener to View More button
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', loadMoreBooks);
        console.log("View More button event listener added");
    }
    
    // Setup search functionality
    setupSearch();
    
    // Add event delegation for cart buttons
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('add-to-cart')) {
            handleAddToCart(e.target);
        }
    });
}

function loadInitialBooks() {
    const booksToLoad = 4;
    loadBooks(0, booksToLoad);
}

function loadMoreBooks() {
    console.log("View More button clicked!");
    const booksToLoad = 4;
    loadBooks(booksLoaded, booksLoaded + booksToLoad);
}

function loadBooks(startIndex, endIndex) {
    const booksContainer = document.getElementById('booksContainer');
    
    if (!booksContainer) {
        console.error("Books container not found!");
        return;
    }
    
    endIndex = Math.min(endIndex, bookData.length);

    for (let i = startIndex; i < endIndex; i++) {
        const book = bookData[i];
        
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.image}" alt="${book.title}" loading="lazy">
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-rating">⭐ ${book.rating}/5</div>
                <div class="book-price">
                    <span class="price">$${book.price.toFixed(2)}</span>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    }

    booksLoaded = endIndex;
    updateViewMoreButton();
}

function handleAddToCart(button) {
    const bookCard = button.closest('.book-card');
    const bookTitle = bookCard.querySelector('.book-title').textContent;
    
    cartCount++;
    updateCartCount();
    
    // Visual feedback
    button.textContent = 'Added!';
    button.style.backgroundColor = '#27ae60';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
        button.disabled = false;
    }, 1500);
    
    console.log(`Added to cart: ${bookTitle}`);
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function updateViewMoreButton() {
    const remainingBooks = bookData.length - booksLoaded;
    const viewMoreBtn = document.getElementById('viewMoreBtn');

    if (viewMoreBtn) {
        if (remainingBooks > 0) {
            viewMoreBtn.textContent = `View More (${remainingBooks} more)`;
            viewMoreBtn.style.display = 'block';
        } else {
            viewMoreBtn.style.display = 'none';
        }
    }
}

function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') performSearch();
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        alert(`Searching for Fiction books: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}
function addToCart(title, price, image) {
    // Get existing cart from storage or start empty array
    let cart = JSON.parse(localStorage.getItem('storyVerseCart')) || [];

    // Check if item already exists
    let existingItem = cart.find(item => item.name === bookName);

    if (existingItem) {
        // If exists, just increase quantity
        existingItem.qty += 1;
    } else {
        // If new, add to array
        cart.push({
            name: bookName,
            price: price,
            image: imageUrl,
            qty: 1
        });
    }

    // Save back to storage
    localStorage.setItem('storyVerseCart', JSON.stringify(cart));

    alert(bookName + " added to cart!");
}
