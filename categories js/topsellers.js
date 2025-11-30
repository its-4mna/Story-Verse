// Top sellers book data with images - 15 books total
const topSellersData = [
    { 
        title: "Just Ask", 
        author: "Sonia Sotomayor", 
        rating: 4.8, 
        price: 800,
        image: "https://images.penguinrandomhouse.com/cover/9780525514121",
        category: "Non-fiction"
    },
    { 
        title: "Pray Big", 
        author: "Alistair Begg", 
        rating: 4.9, 
        price: 1000,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1553293105i/43218670.jpg",
        category: "Religion"
    },
    { 
        title: "The Call of the Wild", 
        author: "Jack London", 
        rating: 4.6, 
        price: 900,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaOtAir_yiP20a_14ozgiDp9VJR2IXYfmgw&s",
        category: "Fiction"
    },
    { 
        title: "A Curse So Dark And Lonely", 
        author: "Brigid Kemmerer", 
        rating: 4.4, 
        price: 900,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQks1aGwMd4SSLxfE4wRaRA9NqPXjxw8vaw&s",
        category: "Fantasy"
    },
    { 
        title: "The Midnight Library", 
        author: "Matt Haig", 
        rating: 4.7, 
        price: 850,
        image: "https://i0.wp.com/kitabee.pk/wp-content/uploads/2021/07/IMG_7824-2.jpeg?fit=330%2C500&ssl=1",
        category: "Fiction"
    },
    { 
        title: "Atomic Habits", 
        author: "James Clear", 
        rating: 4.9, 
        price: 950,
        image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780735211292.webp",
        category: "Self-help"
    },
    { 
        title: "The Silent Patient", 
        author: "Alex Michaelides", 
        rating: 4.5, 
        price: 750,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZKRYwK-lWX0_AKS3jH4b4HYblz0bIm3RUg&s",
        category: "Mystery"
    },
    { 
        title: "It Ends With Us", 
        author: "Colleen Hoover", 
        rating: 4.6, 
        price: 820,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfN7aAVP3vmUEG6ymT6L5bNrzcU28ya3h0Q&s",
        category: "Romance"
    },
    { 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        rating: 4.8, 
        price: 780,
        image: "https://www.linkshop.pk/image/cache/english/the-alchemist-550x550h.jpg.webp",
        category: "Fiction"
    },
    { 
        title: "Harry Potter", 
        author: "J.K. Rowling", 
        rating: 4.9, 
        price: 1200,
        image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
        category: "Fantasy"
    },
    { 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        rating: 4.7, 
        price: 950,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hobbit_trilogy_dvd_cover.jpg",
        category: "Fantasy"
    },
    { 
        title: "Dune", 
        author: "Frank Herbert", 
        rating: 4.6, 
        price: 880,
        image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Sci-fi"
    },
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        rating: 4.5, 
        price: 720,
        image: "https://thecommononline.org/wp-content/uploads/2013/06/Screen-Shot-2017-05-31-at-2.19.46-PM.png",
        category: "Fiction"
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        rating: 4.8, 
        price: 800,
        image: "https://bookabook.pk/cdn/shop/products/book-cover-To-Kill-a-Mockingbird-many-1961_0aa127fc-51d7-4b9a-a7d5-a70255aa90f4.jpg?v=1626023935",
        category: "Fiction"
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        rating: 4.7, 
        price: 760,
        image: "https://bookeve.pk/wp-content/uploads/2024/07/61ZewDE3beL._AC_UF10001000_QL80_.jpg",
        category: "Fiction"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Top Sellers page loaded");
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
    const booksToLoad = 8;
    loadBooks(0, booksToLoad);
}

function loadMoreBooks() {
    console.log("View More button clicked!");
    const booksToLoad = 8;
    loadBooks(booksLoaded, booksLoaded + booksToLoad);
}

function loadBooks(startIndex, endIndex) {
    const booksContainer = document.getElementById('booksContainer');
    
    if (!booksContainer) {
        console.error("Books container not found!");
        return;
    }
    
    endIndex = Math.min(endIndex, topSellersData.length);

    for (let i = startIndex; i < endIndex; i++) {
        const book = topSellersData[i];
        
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
                    <span class="price">Rs. ${book.price}</span>
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
    const remainingBooks = topSellersData.length - booksLoaded;
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
        alert(`Searching for Top Sellers: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}