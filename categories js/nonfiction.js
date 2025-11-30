// Non-Fiction book data with images
const bookData = [
    { 
        title: "Outliers", 
        author: "Malcolm Gladwell", 
        rating: 4.6, 
        price: 11.99,
        image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780141043029.webp"
    },
    { 
        title: "The Subtle Art", 
        author: "Mark Manson", 
        rating: 4.3, 
        price: 10.99,
        image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780062899149.webp"
    },
    { 
        title: "Born a Crime", 
        author: "Trevor Noah", 
        rating: 4.8, 
        price: 13.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5HHEsC-QqclOeBnHkDe1hxp3Uz4gbyLjiA&s"
    },
    { 
        title: "7 Habits", 
        author: "Stephen Covey", 
        rating: 4.5, 
        price: 15.99,
        image: "https://www.ilmibookhouse.com/cdn/shop/files/5fa4c82b2152d74116642ac5_7-habits-of-highly-effective-people-p-800.jpg?v=1728307733"
    },
    { 
        title: "Quiet", 
        author: "Susan Cain", 
        rating: 4.7, 
        price: 12.99,
        image: "https://book-shelf.pk/cdn/shop/products/quiet-by-susan-cain-bookshelfpk-pakistan-8367450.jpg?v=1763059543"
    },
    { 
        title: "The Body Keeps Score", 
        author: "Bessel van der Kolk", 
        rating: 4.9, 
        price: 16.49,
        image: "https://upload.wikimedia.org/wikipedia/en/9/91/TheBodyKeepstheScore.jpg"
    },
    { 
        title: "When Breath Becomes Air", 
        author: "Paul Kalanithi", 
        rating: 4.8, 
        price: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cUQwKQS4CH5HD5j7ArRjG1_6rM6YVQAYLA&s"
    },
    { 
        title: "Henrietta Lacks", 
        author: "Rebecca Skloot", 
        rating: 4.7, 
        price: 13.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPyv22j7wkyg4-wRmA60obnrygpozgW6sJg&s"
    },
    { 
        title: "Bad Blood", 
        author: "John Carreyrou", 
        rating: 4.6, 
        price: 14.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS7i1pRaXmRQJjDvs-nQ2IcsZVlQJzetatw&s"
    },
    { 
        title: "The Wright Brothers", 
        author: "David McCullough", 
        rating: 4.5, 
        price: 12.99,
        image: "https://m.media-amazon.com/images/I/81+O-3L5rYL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Into the Wild", 
        author: "Jon Krakauer", 
        rating: 4.4, 
        price: 10.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_zc_NXEAwX1vkgXnQoksV_yfTjJHdq6EF4g&s"
    },
    { 
        title: "Anne Frank Diary", 
        author: "Anne Frank", 
        rating: 4.8, 
        price: 8.99,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Non-Fiction page loaded");
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
        alert(`Searching for Non-Fiction books: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}