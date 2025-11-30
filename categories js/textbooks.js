// Textbooks data with images
const bookData = [
    { 
        title: "Calculus: Early Transcendentals", 
        author: "James Stewart", 
        rating: 4.5, 
        price: 89.99,
        image: "https://u-mercari-images.mercdn.net/photos/m97607433756_1.jpg"
    },
    { 
        title: "Organic Chemistry", 
        author: "Paula Yurkanis Bruice", 
        rating: 4.3, 
        price: 129.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2inU5NVnSuVIeSSjtvv4XkrsrPzFhTtH0tw&s"
    },
    { 
        title: "Fundamentals of Physics", 
        author: "Halliday, Resnick, Walker", 
        rating: 4.6, 
        price: 149.99,
        image: "https://newbooksnbooks.pk/cdn/shop/files/81_lwBghWBL._SL1500.jpg?v=1716714268"
    },
    { 
        title: "Campbell Biology", 
        author: "Lisa A. Urry", 
        rating: 4.7, 
        price: 159.99,
        image: "https://m.media-amazon.com/images/I/51B0-CRw4PL._SS400_.jpg"
    },
    { 
        title: "Principles of Economics", 
        author: "N. Gregory Mankiw", 
        rating: 4.4, 
        price: 119.99,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Alfred_Marshall_-_Principles_of_Economics_%281890%29.JPG"
    },
    { 
        title: "Introduction to Algorithms", 
        author: "Cormen, Leiserson, Rivest", 
        rating: 4.8, 
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrT19PDdGt2w4VJon3hV7O9ffKMccwMfeUQg&s"
    },
    { 
        title: "Linear Algebra and Its Applications", 
        author: "David C. Lay", 
        rating: 4.4, 
        price: 99.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdOx65HmVY7mZtHd2XKhSuM7HQYnnkRSVSA&s"
    },
    { 
        title: "Molecular Biology of the Cell", 
        author: "Bruce Alberts", 
        rating: 4.7, 
        price: 139.99,
        image: "https://chemistry.com.pk/wp-content/uploads/2022/01/Molecular-Biology-of-the-Cell-6th-Ed.-By-Alberts-Johnson-Lewis-Morgan-Raff-Roberts-and-Walter.jpg"
    },
    { 
        title: "Psychology", 
        author: "David G. Myers", 
        rating: 4.3, 
        price: 109.99,
        image: "https://m.media-amazon.com/images/I/81LDP+GDKVL._SL1500_.jpg"
    },
    { 
        title: "Human Anatomy & Physiology", 
        author: "Elaine N. Marieb", 
        rating: 4.5, 
        price: 129.99,
        image: "https://m.media-amazon.com/images/I/61YpOxD7QSL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Financial Accounting", 
        author: "Walter T. Harrison", 
        rating: 4.2, 
        price: 89.99,
        image: "https://petiwalaeducation.com/wp-content/uploads/2018/10/FA1.jpg"
    },
    { 
        title: "Microelectronic Circuits", 
        author: "Adel S. Sedra", 
        rating: 4.6, 
        price: 149.99,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388544445i/198582.jpg"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Textbooks page loaded");
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
        alert(`Searching for Textbooks: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}