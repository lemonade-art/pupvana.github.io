 // Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Sample dog data
    const dogs = [
        {
            id: 1,
            name: "Golden Retriever",
            price: 1500,
            age: "10 weeks",
            image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyJTIwcHVwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            description: "Friendly, intelligent and devoted."
        },
        {
            id: 2,
            name: "French Bulldog",
            price: 2500,
            age: "12 weeks",
            image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlbmNoJTIwYnVsbGRvZyUyMHB1cHB5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            description: "Playful, smart and adaptable."
        },
        {
            id: 3,
            name: "Siberian Husky",
            price: 1200,
            age: "8 weeks",
            image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1c2t5JTIwcHVwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            description: "Loyal, outgoing and mischievous."
        }
    ];

    // Cart functionality
    let cart = [];
    const cartBtn = document.querySelector('.cart-btn');
    
    // Display dogs
    const dogGrid = document.querySelector('.dog-grid');
    
    dogs.forEach(dog => {
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';
        dogCard.innerHTML = `
            <div class="dog-image-container">
                <img src="${dog.image}" alt="${dog.name}" class="dog-image">
                <div class="price-tag">$${dog.price}</div>
            </div>
            <div class="dog-info">
                <h3>${dog.name}</h3>
                <p>${dog.age}</p>
                <p class="dog-description">${dog.description}</p>
                <button class="add-to-cart" data-id="${dog.id}">Add to Cart</button>
            </div>
        `;
        dogGrid.appendChild(dogCard);
    });

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const dogId = parseInt(e.target.getAttribute('data-id'));
            const selectedDog = dogs.find(dog => dog.id === dogId);
            
            cart.push(selectedDog);
            updateCartCount();
            
            // Animation feedback
            e.target.textContent = 'Added!';
            e.target.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.style.backgroundColor = '#ffde7d';
            }, 1000);
        }
    });

    function updateCartCount() {
        cartBtn.textContent = `Cart (${cart.length})`;
    }

    // Add hover animations to dog cards
    const dogCards = document.querySelectorAll('.dog-card');
    
    dogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});

// Add more styles for dog cards
const style = document.createElement('style');
style.textContent = `
    .dog-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }
    
    .dog-image-container {
        position: relative;
        height: 200px;
        overflow: hidden;
    }
    
    .dog-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    
    .dog-card:hover .dog-image {
        transform: scale(1.05);
    }
    
    .price-tag {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-weight: bold;
    }
    
    .dog-info {
        padding: 1.5rem;
    }
    
    .dog-info h3 {
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    .dog-description {
        margin: 1rem 0;
        color: #666;
    }
    
    .add-to-cart {
        background: #ffde7d;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;
        width: 100%;
    }
    
    .add-to-cart:hover {
        background: #f8d05a;
    }
`;
document.head.appendChild(style);