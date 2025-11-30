// Sample book data for homepage categories
const bookData = {
    fiction: [
        { 
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            rating: 4.5, 
            price: 12.99,
            image: "https://thecommononline.org/wp-content/uploads/2013/06/Screen-Shot-2017-05-31-at-2.19.46-PM.png"
        },
        { 
            title: "1984", 
            author: "George Orwell", 
            rating: 4.7, 
            price: 10.99,
            image: "https://bookeve.pk/wp-content/uploads/2024/07/61ZewDE3beL._AC_UF10001000_QL80_.jpg"
        },
        { 
            title: "To Kill a Mockingbird", 
            author: "Harper Lee", 
            rating: 4.8, 
            price: 14.99,
            image: "https://bookabook.pk/cdn/shop/products/book-cover-To-Kill-a-Mockingbird-many-1961_0aa127fc-51d7-4b9a-a7d5-a70255aa90f4.jpg?v=1626023935"
        },
        { 
            title: "Pride and Prejudice", 
            author: "Jane Austen", 
            rating: 4.6, 
            price: 9.99,
            image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_QL75_UX190_CR0,0,190,281_.jpg"
        }
    ],
    nonfiction: [
        { 
            title: "Atomic Habits", 
            author: "James Clear", 
            rating: 4.9, 
            price: 13.99,
            image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780735211292.webp"
        },
        { 
            title: "Sapiens", 
            author: "Yuval Noah Harari", 
            rating: 4.7, 
            price: 16.99,
            image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780099590088.webp"
        },
        { 
            title: "Educated", 
            author: "Tara Westover", 
            rating: 4.8, 
            price: 14.49,
            image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780099511021.webp"
        },
        { 
            title: "Born a Crime", 
            author: "Trevor Noah", 
            rating: 4.8, 
            price: 12.99,
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/0b/dc/69/0bdc6956-69ed-31b6-5427-b0b168062bb3/9781473648142.jpg/1200x900wf.jpg"
        }
    ],
    romance: [
        { 
            title: "The Notebook", 
            author: "Nicholas Sparks", 
            rating: 4.7, 
            price: 11.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s"
        },
        { 
            title: "It Ends With Us", 
            author: "Colleen Hoover", 
            rating: 4.6, 
            price: 12.99,
            image: "https://www.libertybooks.com/image/cache/Adnan_khan/It-Ends-With-Us-626x974.jpg?q6"
        },
        { 
            title: "The Hating Game", 
            author: "Sally Thorne", 
            rating: 4.4, 
            price: 10.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEWU7LaJb2IDC-upsddDR7xL_dJIRQ60BOQ&s"
        },
        { 
            title: "Red, White & Royal Blue", 
            author: "Casey McQuiston", 
            rating: 4.6, 
            price: 13.99,
            image: "https://m.media-amazon.com/images/I/71skR7IaVEL._SL1500_.jpg"
        }
    ],
    mystery: [
        { 
            title: "The Silent Patient", 
            author: "Alex Michaelides", 
            rating: 4.5, 
            price: 14.49,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZ0dAIs47di2OM0pOVRa5YBPXzgazkEVSTg&s"
        },
        { 
            title: "Gone Girl", 
            author: "Gillian Flynn", 
            rating: 4.2, 
            price: 13.99,
            image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9781780228228.webp"
        },
        { 
            title: "The Girl on the Train", 
            author: "Paula Hawkins", 
            rating: 4.1, 
            price: 12.99,
            image: "https://booksvilla.com.pk/cdn/shop/products/716gv_eJtAL_88c20c72-81df-4e7e-866a-1ccaec4b0474.jpg?v=1632987930"
        },
        { 
            title: "The Da Vinci Code", 
            author: "Dan Brown", 
            rating: 4.3, 
            price: 11.99,
            image: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg"
        }
    ],
    islamic: [
        { 
            title: "The Sealed Nectar", 
            author: "Safiur Rahman Mubarakpuri", 
            rating: 4.9, 
            price: 18.99,
            image: "https://m.media-amazon.com/images/I/71tyJxa+cnL._AC_UF350,350_QL50_.jpg"
        },
        { 
            title: "In the Footsteps of the Prophet", 
            author: "Tariq Ramadan", 
            rating: 4.7, 
            price: 15.99,
            image: "https://i.ebayimg.com/images/g/shwAAOSw-itXvWYP/s-l225.jpg"
        },
        { 
            title: "The Productive Muslim", 
            author: "Mohammed Faris", 
            rating: 4.6, 
            price: 12.99,
            image: "https://static-01.daraz.pk/p/1999f57f55aca8115d1e92f3985e2ab8.jpg"
        },
        { 
            title: "Purification of the Heart", 
            author: "Hamza Yusuf", 
            rating: 4.8, 
            price: 14.49,
            image: "https://static-01.daraz.pk/p/6b9287360aec43c1655c505df8fb0e8a.jpg"
        }
    ],
    textbooks: [
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
            image: "https://chemistry.com.pk/wp-content/uploads/2020/02/Organic-Chemistry-10e-Francis-A-Carey.jpg"
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
        }
    ]
};

let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Storyverse homepage loaded");
    initializePage();
});

function initializePage() {
    // Load books for all categories
    loadCategoryBooks();
    
    // Setup search functionality
    setupSearch();
    
    // Add event delegation for cart buttons
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('add-to-cart')) {
            handleAddToCart(e.target);
        }
    });
}

function loadCategoryBooks() {
    // Load books for each category
    loadBooksForCategory('fiction', 'fictionBooks');
    loadBooksForCategory('nonfiction', 'nonfictionBooks');
    loadBooksForCategory('romance', 'romanceBooks');
    loadBooksForCategory('mystery', 'mysteryBooks');
    loadBooksForCategory('islamic', 'islamicBooks');
    loadBooksForCategory('textbooks', 'textbooksBooks');
}

function loadBooksForCategory(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const books = bookData[category];
    if (!books) return;
    
    container.innerHTML = '';
    
    books.forEach(book => {
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
        container.appendChild(bookCard);
    });
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
        alert(`Searching for: "${searchTerm}"`);
        // You can add actual search functionality here later
    }
}




