// Islamic book data with images
const bookData = [
    { 
        title: "The Sealed Nectar", 
        author: "Safiur Rahman Mubarakpuri", 
        rating: 4.9, 
        price: 18.99,
        image: "https://www.pakbooks.com/cdn/shop/files/a12613667c3535094c722381244ee8b4.png?v=1729061362"
    },
    { 
        title: "In the Footsteps of the Prophet", 
        author: "Tariq Ramadan", 
        rating: 4.7, 
        price: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBcFKT32yAK1jV9onWg6zzM6CRcYr5wk3NQ&s"
    },
    { 
        title: "The Productive Muslim", 
        author: "Mohammed Faris", 
        rating: 4.6, 
        price: 12.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8g3YIIOh8bkZ6KlTeyETsBdsd7nPkkU7WnQ&s"
    },
    { 
        title: "Purification of the Heart", 
        author: "Hamza Yusuf", 
        rating: 4.8, 
        price: 14.49,
        image: "https://static-01.daraz.pk/p/6b9287360aec43c1655c505df8fb0e8a.jpg"
    },
    { 
        title: "The Qur'an", 
        author: "Trans. Abdullah Yusuf Ali", 
        rating: 5.0, 
        price: 22.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgekPECqQmbu7Mm0cLulE3UvV7VReYfbOog&s"
    },
    { 
        title: "Muhammad: His Life", 
        author: "Martin Lings", 
        rating: 4.9, 
        price: 16.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdV4r3xhtNDRdQp5etvr7-rAzozluPL1VmlA&s"
    },
    { 
        title: "The Road to Mecca", 
        author: "Muhammad Asad", 
        rating: 4.8, 
        price: 17.99,
        image: "https://m.media-amazon.com/images/M/MV5BNzIxYzAyNjQtMWFiMi00NDM1LWI1YTQtN2I5N2EyZDhhYTdiXkEyXkFqcGc@._V1_.jpg"
    },
    { 
        title: "Islam and the Destiny of Man", 
        author: "Charles Le Gai Eaton", 
        rating: 4.7, 
        price: 15.49,
        image: "https://friendsbook.pk/cdn/shop/files/81iYU13JwXL._SL1500_800x.jpg?v=1705009261"
    },
    { 
        title: "The Vision of Islam", 
        author: "Sachiko Murata", 
        rating: 4.6, 
        price: 13.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_YFDUhDG75p8wvWnyF7qIOsT5R35CrFA0w&s"
    },
    { 
        title: "The Book of Assistance", 
        author: "Imam al-Haddad", 
        rating: 4.9, 
        price: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGozWG2zQbDAGrSaBDCdmfm7GTXF5tYyhEXA&s"
    },
    { 
        title: "The Content of Character", 
        author: "Sherman Jackson", 
        rating: 4.5, 
        price: 12.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLp01jzAqyUM00npGb96OaguvTbPLhiDLVQ&s"
    },
    { 
        title: "The Muslim Prayer Book", 
        author: "Muhammad Abdul-Rauf", 
        rating: 4.8, 
        price: 8.99,
        image: "https://images.booksense.com/images/560/808/9781848808560.jpg"
    }
];

let booksLoaded = 0;
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Islamic Books page loaded");
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
        alert(`Searching for Islamic books: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}