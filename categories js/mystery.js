// Mystery & Thriller book data with images
const bookData = [
    { 
        title: "The Girl on the Train", 
        author: "Paula Hawkins", 
        rating: 4.1, 
        price: 12.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhSmVVfW3gKGTXjv3XHgk-JjTfCrHQoyRLA&s"
    },
    { 
        title: "Gone Girl", 
        author: "Gillian Flynn", 
        rating: 4.2, 
        price: 13.99,
        image: "https://www.cinematheque.qc.ca/cdn-cgi/image/format=auto/workspace/uploads/films/movie-story-gone-girl-2014-fr-1693237332-fr-1697472134.jpg"
    },
    { 
        title: "The Silent Patient", 
        author: "Alex Michaelides", 
        rating: 4.5, 
        price: 14.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZ0dAIs47di2OM0pOVRa5YBPXzgazkEVSTg&s"
    },
    { 
        title: "The Da Vinci Code", 
        author: "Dan Brown", 
        rating: 4.3, 
        price: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrprIIFQfgtvXTbL-fly2jT53BndWYjG74_g&s"
    },
    { 
        title: "Sharp Objects", 
        author: "Gillian Flynn", 
        rating: 4.0, 
        price: 10.99,
        image: "https://listeningbooks.s3.eu-west-2.amazonaws.com/public/books/1000x0/0986.jpg"
    },
    { 
        title: "The Woman in the Window", 
        author: "A.J. Finn", 
        rating: 4.1, 
        price: 12.49,
        image: "https://a.ltrbxd.com/resized/film-poster/4/5/0/1/6/4/450164-the-woman-in-the-window-0-230-0-345-crop.jpg?v=380253d297"
    },
    { 
        title: "The Couple Next Door", 
        author: "Shari Lapena", 
        rating: 4.0, 
        price: 10.99,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1471502242i/28815474.jpg"
    },
    { 
        title: "Behind Closed Doors", 
        author: "B.A. Paris", 
        rating: 4.2, 
        price: 11.99,
        image: "https://m.media-amazon.com/images/I/81-uOUBKrFL.jpg"
    },
    { 
        title: "The Wife Between Us", 
        author: "Greer Hendricks", 
        rating: 4.1, 
        price: 12.49,
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/The_Wife_Between_Us.jpg"
    },
    { 
        title: "An Anonymous Girl", 
        author: "Greer Hendricks", 
        rating: 4.0, 
        price: 11.99,
        image: "https://bookabook.pk/cdn/shop/files/18_5dadf727-5fe0-4a31-8080-d4cb1944cd3b.jpg?v=1696393901"
    },
    { 
        title: "The Last Thing He Told Me", 
        author: "Laura Dave", 
        rating: 4.3, 
        price: 13.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_goowljufMr8fGSY9maXC0QFoVcp2p2fYZw&s"
    },
    { 
        title: "Then She Was Gone", 
        author: "Lisa Jewell", 
        rating: 4.2, 
        price: 12.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGHT_K9wLgxwx2Zuk0fVThBg09R4dZi5l6g&s"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Mystery & Thriller page loaded");
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
        alert(`Searching for Mystery & Thriller books: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}