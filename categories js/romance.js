// Romance book data with images
const bookData = [
    { 
        title: "The Notebook", 
        author: "Nicholas Sparks", 
        rating: 4.7, 
        price: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s"
    },
    { 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        rating: 4.8, 
        price: 9.99,
        image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_QL75_UX190_CR0,0,190,281_.jpg"
    },
    { 
        title: "Outlander", 
        author: "Diana Gabaldon", 
        rating: 4.6, 
        price: 14.99,
        image: "https://m.media-amazon.com/images/M/MV5BMTc4M2JmYmEtMjJhOC00MmRlLThhZDEtMWRhZTZiNTI0ZDZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    { 
        title: "The Wedding Date", 
        author: "Jasmine Guillory", 
        rating: 4.3, 
        price: 10.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWbwhiFN07QrQZ2LkMIsaFxUm3fdKAQJgOg&s"
    },
    { 
        title: "It Ends With Us", 
        author: "Colleen Hoover", 
        rating: 4.5, 
        price: 12.99,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg"
    },
    { 
        title: "The Hating Game", 
        author: "Sally Thorne", 
        rating: 4.4, 
        price: 11.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbveJrhh1EBBtZ-R8hiPkZQTLM2jQ6QAUcw&s"
    },
    { 
        title: "The Proposal", 
        author: "Jasmine Guillory", 
        rating: 4.2, 
        price: 10.99,
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p192250_p_v8_ap.jpg"
    },
    { 
        title: "Red, White & Royal Blue", 
        author: "Casey McQuiston", 
        rating: 4.6, 
        price: 13.99,
        image: "https://m.media-amazon.com/images/I/71skR7IaVEL._SL1500_.jpg"
    },
    { 
        title: "The Spanish Love Deception", 
        author: "Elena Armas", 
        rating: 4.3, 
        price: 11.99,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610900883i/54189398.jpg"
    },
    { 
        title: "The Unhoneymooners", 
        author: "Christina Lauren", 
        rating: 4.4, 
        price: 12.49,
        image: "https://www.bookshub.pk/wp-content/uploads/2024/02/The-Unhoneymooners-By-Christina-Lauren.jpg"
    },
    { 
        title: "Beach Read", 
        author: "Emily Henry", 
        rating: 4.5, 
        price: 12.99,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1580659115i/48722416.jpg"
    },
    { 
        title: "The Kiss Quotient", 
        author: "Helen Hoang", 
        rating: 4.4, 
        price: 11.99,
        image: "https://verityreadsbooks.com/wp-content/uploads/2018/07/img_8699-1.jpg"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Romance page loaded");
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
    const booksToLoad = 6;
    loadBooks(0, booksToLoad);
}

function loadMoreBooks() {
    console.log("View More button clicked!");
    const booksToLoad = 6;
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
        alert(`Searching for Romance books: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}