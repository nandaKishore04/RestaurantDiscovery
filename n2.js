document.addEventListener('DOMContentLoaded', () => {
    // Mock Data
    const mockRestaurants = [
        {
            id: '1',
            name: 'Jewel of Nizam - The Minar',
            cuisine: 'Indian,Asian',
            rating: 4.8,
            priceLevel: 3,
            distance: 0.5,
            lat: 40.7128,
            lng: -74.0060,
            photo: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/20180026/Jewel-of-Nizam.jpg',
            hours: { open: 8, close: 22 },
            address: 'Gandipet Sagarmahal Complex, Hyderabad 500075 India',
            menuCards: [
                'https://cdn.tasteatlas.com/Images/Restaurants/06284df1d0a749e992f298b953466ea7.jpg?m=facebook',
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/f/f/p18871-15408042045bd6ce6c8e879.jpg?tr=tr:n-large',
                'https://b.zmtcdn.com/data/pictures/3/96763/26f6d23620959a5498ab8c1ab7746c27.jpg'
            ],
            reviews: [
                {
                    user: { name: 'John D.' },
                    rating: 5,
                    text: 'Amazing food and service!'
                }
            ],
            dishes: [
                { name: 'Classic Burger', description: 'Beef patty with lettuce, tomato, and cheese', price: 12.99, category: 'Main Course' },
                { name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing', price: 8.99, category: 'Starters' },
                { name: 'Grilled Salmon', description: 'Fresh salmon with lemon herb sauce', price: 18.99, category: 'Main Course' },
                { name: 'Chocolate Lava Cake', description: 'Warm cake with molten chocolate center', price: 7.99, category: 'Desserts' },
                { name: 'Buffalo Wings', description: 'Spicy wings with blue cheese dip', price: 9.99, category: 'Starters' },
                { name: 'Steak Frites', description: 'Grilled sirloin with fries', price: 22.99, category: 'Main Course' },
                { name: 'Cheesecake', description: 'Creamy cheesecake with berry compote', price: 6.99, category: 'Desserts' },
                { name: 'Onion Rings', description: 'Crispy fried onion rings', price: 5.99, category: 'Starters' },
                { name: 'BBQ Ribs', description: 'Slow-cooked ribs with BBQ sauce', price: 19.99, category: 'Main Course' },
                { name: 'Apple Pie', description: 'Classic pie with vanilla ice cream', price: 6.99, category: 'Desserts' }
            ]
        },
        {
            id: '2',
            name: 'Ottimo Cucina Italiana',
            cuisine: 'Italian',
            rating: 4.9,
            priceLevel: 2,
            distance: 1.2,
            lat: 40.7150,
            lng: -74.0080,
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/0e/c2/39/ottimo-ambience.jpg?w=1400&h=800&s=1',
            hours: { open: 11, close: 23 },
            address: 'ITC Kohenur, HITEC city, Madhapur, Hyderabad 500081 India',
            menuCards: [
                'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/restaurant-landing-page/restaurant-overview-desktop/ottimo.png',
                'https://assets.gqindia.com/photos/5cdc7a19e994c840feb6a1b5/16:9/w_1920,c_limit/24-ottimo.jpg'
            ],
            photos: [
                'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            ],
            reviews: [
                {
                    user: { name: 'Michael T.', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
                    rating: 5,
                    text: 'Best pasta in town!'
                }
            ],
            dishes: [
                { name: 'Spaghetti Carbonara', description: 'Pasta with egg and pancetta', price: 14.99, category: 'Main Course' },
                { name: 'Margherita Pizza', description: 'Tomato, mozzarella, and basil', price: 12.99, category: 'Main Course' },
                { name: 'Bruschetta', description: 'Toasted bread with tomato and basil', price: 6.99, category: 'Starters' },
                { name: 'Tiramisu', description: 'Coffee-flavored layered dessert', price: 7.99, category: 'Desserts' },
                { name: 'Fettuccine Alfredo', description: 'Creamy Alfredo sauce with pasta', price: 13.99, category: 'Main Course' },
                { name: 'Caprese Salad', description: 'Tomato, mozzarella, and balsamic', price: 8.99, category: 'Starters' },
                { name: 'Cannoli', description: 'Crispy shell with sweet ricotta', price: 5.99, category: 'Desserts' },
                { name: 'Minestrone Soup', description: 'Vegetable and pasta soup', price: 6.99, category: 'Starters' },
                { name: 'Lasagna', description: 'Layered pasta with meat sauce', price: 15.99, category: 'Main Course' },
                { name: 'Panna Cotta', description: 'Creamy dessert with berry sauce', price: 6.99, category: 'Desserts' }
            ]
        },
        {
            id: '3',
            name: 'Deccan Pavilion',
            cuisine: 'Chinese',
            rating: 4.9,
            priceLevel: 2,
            distance: 0.8,
            lat: 40.7140,
            lng: -74.0070,
            photo: 'https://th.bing.com/th/id/R.c112f1da5fe01c8228c2a0b9e621493a?rik=85CC0nNTbbWrZA&riu=http%3a%2f%2fhydfoodguy.com%2fwp-content%2fgf-uploads%2f2016%2f12%2fdeccan_pavilion_05.jpg&ehk=6kFsLwn3I%2brHQy60nBcZSph2KXMsat3uvusa89SMQOA%3d&risl=&pid=ImgRaw&r=0',
            hours: { open: 10, close: 23 },
            address: 'Begumpet Road 6 -3 -1187, Hyderabad 500016 India',
            menuCards: [
                'https://media-cdn.tripadvisor.com/media/photo-s/13/09/b5/d7/caption.jpg',
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/u/a/p3542-144292868856015830917f1.jpg?tr=tr:n-xlarge',
                ''
            ],
            reviews: [
                {
                    user: { name: 'Sofia R.', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
                    rating: 4,
                    text: 'Love the tacos and margaritas!'
                }
            ],
            dishes: [
                { name: 'Carne Asada Tacos', description: 'Grilled steak tacos with salsa', price: 10.99, category: 'Main Course' },
                { name: 'Guacamole & Chips', description: 'Fresh avocado with tortilla chips', price: 7.99, category: 'Starters' },
                { name: 'Enchiladas Verdes', description: 'Chicken enchiladas with green sauce', price: 12.99, category: 'Main Course' },
                { name: 'Churros', description: 'Crispy churros with chocolate dip', price: 5.99, category: 'Desserts' },
                { name: 'Quesadilla', description: 'Cheese-filled tortilla with salsa', price: 9.99, category: 'Main Course' },
                { name: 'Mexican Street Corn', description: 'Grilled corn with chili and cheese', price: 6.99, category: 'Starters' },
                { name: 'Flan', description: 'Caramel custard dessert', price: 5.99, category: 'Desserts' },
                { name: 'Nachos Supreme', description: 'Loaded nachos with beef and cheese', price: 8.99, category: 'Starters' },
                { name: 'Burrito Bowl', description: 'Rice, beans, and choice of protein', price: 11.99, category: 'Main Course' },
                { name: 'Tres Leches Cake', description: 'Sponge cake soaked in three milks', price: 6.99, category: 'Desserts' }
            ]
        },
        {
            id: '4',
            name: 'Bidri',
            cuisine: 'Chinese',
            rating: 4.2,
            priceLevel: 2,
            distance: 1.5,
            lat: 40.7160,
            lng: -74.0090,
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=1400&h=800&s=1',
            hours: { open: 11, close: 22 },
            address: 'Hyderabad Marriott Hotel, Tank Bund Opp Hussain Sagar Lake, Hyderabad 500080 India',
            menuCards: [
                'https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/30/54/ba/bidri-ambience.jpg',
                'https://media.assettype.com/indulgexpress/import/uploads/user/ckeditor_images/article/2023/11/17/BIDRI1.JPG?w=640&auto=format%2Ccompress',
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/o/q/p144309-170518616965a31379f2d7b.jpg?tr=tr:n-xlarge'
            ],
            reviews: [
                {
                    user: { name: 'Li W.', avatar: 'https://randomuser.me/api/portraits/men/67.jpg' },
                    rating: 4,
                    text: 'Great dim sum and noodles!'
                }
            ],
            dishes: [
                { name: 'Kung Pao Chicken', description: 'Spicy chicken with peanuts', price: 12.99, category: 'Main Course' },
                { name: 'Spring Rolls', description: 'Crispy rolls with vegetables', price: 5.99, category: 'Starters' },
                { name: 'Beef Chow Mein', description: 'Stir-fried noodles with beef', price: 11.99, category: 'Main Course' },
                { name: 'Mango Pudding', description: 'Sweet mango-flavored dessert', price: 4.99, category: 'Desserts' },
                { name: 'Hot & Sour Soup', description: 'Spicy and tangy soup', price: 6.99, category: 'Starters' },
                { name: 'General Tso’s Chicken', description: 'Crispy chicken in sweet sauce', price: 13.99, category: 'Main Course' },
                { name: 'Fortune Cookies', description: 'Crispy cookies with messages', price: 2.99, category: 'Desserts' },
                { name: 'Dumplings', description: 'Steamed pork dumplings', price: 7.99, category: 'Starters' },
                { name: 'Mapo Tofu', description: 'Spicy tofu with minced pork', price: 10.99, category: 'Main Course' },
                { name: 'Sesame Balls', description: 'Sweet glutinous rice balls', price: 4.99, category: 'Desserts' }
            ]
        },
        {
            id: '5',
            name: 'Dakshin',
            cuisine: 'Indian',
            rating: 4.6,
            priceLevel: 3,
            distance: 0.9,
            lat: 40.7135,
            lng: -74.0065,
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/40/f4/ta-img-20181024-134937.jpg?w=1000&h=600&s=1',
            hours: { open: 12, close: 23 },
            address: 'ITC Kakatiya Hotel, Lobby Level, 6-3-1187, Begumpet, Hyderabad 500016 India',
            menuCards: [
                'https://images.unsplash.com/photo-1606493866489-4ea138be7f99',
                'https://images.unsplash.com/photo-1599487339979-27bc6eaae34f'
            ],
            photos: [
                'https://images.unsplash.com/photo-1599487339979-27bc6eaae34f?auto=format&fit=crop&w=500&q=60'
            ],
            reviews: [
                {
                    user: { name: 'Priya S.', avatar: 'https://randomuser.me/api/portraits/women/88.jpg' },
                    rating: 5,
                    text: 'Authentic flavors, amazing biryani!'
                }
            ],
            dishes: [
                { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: 14.99, category: 'Main Course' },
                { name: 'Samosa', description: 'Crispy pastry with spiced potato', price: 5.99, category: 'Starters' },
                { name: 'Vegetable Biryani', description: 'Fragrant rice with vegetables', price: 12.99, category: 'Main Course' },
                { name: 'Gulab Jamun', description: 'Sweet milk dumplings in syrup', price: 4.99, category: 'Desserts' },
                { name: 'Naan Bread', description: 'Soft tandoori flatbread', price: 2.99, category: 'Starters' },
                { name: 'Palak Paneer', description: 'Spinach curry with cottage cheese', price: 13.99, category: 'Main Course' },
                { name: 'Rasmalai', description: 'Soft cheese patties in sweet milk', price: 5.99, category: 'Desserts' },
                { name: 'Onion Bhaji', description: 'Crispy onion fritters', price: 6.99, category: 'Starters' },
                { name: 'Rogan Josh', description: 'Spicy lamb curry', price: 15.99, category: 'Main Course' },
                { name: 'Mango Lassi', description: 'Sweet mango yogurt drink', price: 3.99, category: 'Beverages' }
            ]
        },
        {
            id: '6',
            name: 'Hard Rock Cafe',
            cuisine: 'American',
            rating: 4.6,
            priceLevel: 3,
            distance: 1.0,
            lat: 40.7145,
            lng: -74.0075,
            photo: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https://media.insider.in/image/upload/c_crop%2Cg_custom/v1659082982/k4g9rxmricbhoohnjkay.jpg',
            hours: { open: 11, close: 22 },
            address: 'Road Number 1, Gvk One, Banjara Hills, Hyderabad 500034 India',
            menuCards: [
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/p/y/p97249-1632397326614c680edb582.jpg?tr=tr:n-xlarge',
                'https://www.hardrockcafe.com/location/hyderabad/files/5394/9969152_ImageLargeWidth.jpeg'
            ],
            reviews: [
                {
                    user: { name: 'Elena K.', avatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
                    rating: 4,
                    text: 'Fresh ingredients, great hummus!'
                }
            ],
            dishes: [
                { name: 'Grilled Lamb Kebab', description: 'Marinated lamb with tzatziki', price: 16.99, category: 'Main Course' },
                { name: 'Hummus & Pita', description: 'Creamy hummus with warm pita', price: 7.99, category: 'Starters' },
                { name: 'Falafel Plate', description: 'Crispy falafel with tahini sauce', price: 11.99, category: 'Main Course' },
                { name: 'Baklava', description: 'Layered pastry with nuts and honey', price: 5.99, category: 'Desserts' },
                { name: 'Greek Salad', description: 'Feta, olives, and cucumber', price: 8.99, category: 'Starters' },
                { name: 'Chicken Shawarma', description: 'Spiced chicken wrap', price: 12.99, category: 'Main Course' },
                { name: 'Knafeh', description: 'Sweet cheese pastry with syrup', price: 6.99, category: 'Desserts' },
                { name: 'Stuffed Grape Leaves', description: 'Rice-filled grape leaves', price: 6.99, category: 'Starters' },
                { name: 'Seafood Paella', description: 'Saffron rice with seafood', price: 18.99, category: 'Main Course' },
                { name: 'Turkish Coffee', description: 'Strong, aromatic coffee', price: 3.99, category: 'Beverages' }
            ]
        },
        {
            id: '7',
            name: 'R&G - GreenPark Chennai',
            cuisine: 'Indian',
            rating: 4.9,
            priceLevel: 3,
            distance: 1.0,
            lat: 40.7145,
            lng: -74.0075,
            photo: 'https://d4t7t8y8xqo0t.cloudfront.net/app/resized/818X450/restaurant/611751/restaurant320201116052810.jpg',
            hours: { open: 11, close: 22 },
            address: '183 N.S.K. Salai, Arcot Rd, Vadapalani Hotel Green Park, Chennai (Madras) 600026 India',
            menuCards: [
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/p/y/p97249-1632397326614c680edb582.jpg?tr=tr:n-xlarge',
                'https://images.unsplash.com/photo-1628294896998-31c7ebbf787c'
            ],
            reviews: [
                {
                    user: { name: 'Elena K.', avatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
                    rating: 4,
                    text: 'Fresh ingredients, great hummus!'
                }
            ],
            dishes: [
                { name: 'Grilled Lamb Kebab', description: 'Marinated lamb with tzatziki', price: 16.99, category: 'Main Course' },
                { name: 'Hummus & Pita', description: 'Creamy hummus with warm pita', price: 7.99, category: 'Starters' },
                { name: 'Falafel Plate', description: 'Crispy falafel with tahini sauce', price: 11.99, category: 'Main Course' },
                { name: 'Baklava', description: 'Layered pastry with nuts and honey', price: 5.99, category: 'Desserts' },
                { name: 'Greek Salad', description: 'Feta, olives, and cucumber', price: 8.99, category: 'Starters' },
                { name: 'Chicken Shawarma', description: 'Spiced chicken wrap', price: 12.99, category: 'Main Course' },
                { name: 'Knafeh', description: 'Sweet cheese pastry with syrup', price: 6.99, category: 'Desserts' },
                { name: 'Stuffed Grape Leaves', description: 'Rice-filled grape leaves', price: 6.99, category: 'Starters' },
                { name: 'Seafood Paella', description: 'Saffron rice with seafood', price: 18.99, category: 'Main Course' },
                { name: 'Turkish Coffee', description: 'Strong, aromatic coffee', price: 3.99, category: 'Beverages' }
            ]
        },
        {
            id: '8',
            name: 'Hard Rock Cafe',
            cuisine: 'American',
            rating: 4.6,
            priceLevel: 3,
            distance: 1.0,
            lat: 40.7145,
            lng: -74.0075,
            photo: 'https://www.hardrockcafe.com/location/hyderabad/files/5394/9969152_ImageLargeWidth.jpeg',
            hours: { open: 11, close: 22 },
            address: 'Road Number 1, Gvk One, Banjara Hills, Hyderabad 500034 India',
            menuCards: [
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/p/y/p97249-1632397326614c680edb582.jpg?tr=tr:n-xlarge',
                'https://images.unsplash.com/photo-1628294896998-31c7ebbf787c'
            ],
            reviews: [
                {
                    user: { name: 'Elena K.', avatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
                    rating: 4,
                    text: 'Fresh ingredients, great hummus!'
                }
            ],
            dishes: [
                { name: 'Grilled Lamb Kebab', description: 'Marinated lamb with tzatziki', price: 16.99, category: 'Main Course' },
                { name: 'Hummus & Pita', description: 'Creamy hummus with warm pita', price: 7.99, category: 'Starters' },
                { name: 'Falafel Plate', description: 'Crispy falafel with tahini sauce', price: 11.99, category: 'Main Course' },
                { name: 'Baklava', description: 'Layered pastry with nuts and honey', price: 5.99, category: 'Desserts' },
                { name: 'Greek Salad', description: 'Feta, olives, and cucumber', price: 8.99, category: 'Starters' },
                { name: 'Chicken Shawarma', description: 'Spiced chicken wrap', price: 12.99, category: 'Main Course' },
                { name: 'Knafeh', description: 'Sweet cheese pastry with syrup', price: 6.99, category: 'Desserts' },
                { name: 'Stuffed Grape Leaves', description: 'Rice-filled grape leaves', price: 6.99, category: 'Starters' },
                { name: 'Seafood Paella', description: 'Saffron rice with seafood', price: 18.99, category: 'Main Course' },
                { name: 'Turkish Coffee', description: 'Strong, aromatic coffee', price: 3.99, category: 'Beverages' }
            ]
        },
        {
            id: '9',
            name: 'Hard Rock Cafe',
            cuisine: 'American',
            rating: 4.6,
            priceLevel: 3,
            distance: 1.0,
            lat: 40.7145,
            lng: -74.0075,
            photo: 'https://www.hardrockcafe.com/location/hyderabad/files/5394/9969152_ImageLargeWidth.jpeg',
            hours: { open: 11, close: 22 },
            address: 'Road Number 1, Gvk One, Banjara Hills, Hyderabad 500034 India',
            menuCards: [
                'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/p/y/p97249-1632397326614c680edb582.jpg?tr=tr:n-xlarge',
                'https://images.unsplash.com/photo-1628294896998-31c7ebbf787c'
            ],
            reviews: [
                {
                    user: { name: 'Elena K.', avatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
                    rating: 4,
                    text: 'Fresh ingredients, great hummus!'
                }
            ],
            dishes: [
                { name: 'Grilled Lamb Kebab', description: 'Marinated lamb with tzatziki', price: 16.99, category: 'Main Course' },
                { name: 'Hummus & Pita', description: 'Creamy hummus with warm pita', price: 7.99, category: 'Starters' },
                { name: 'Falafel Plate', description: 'Crispy falafel with tahini sauce', price: 11.99, category: 'Main Course' },
                { name: 'Baklava', description: 'Layered pastry with nuts and honey', price: 5.99, category: 'Desserts' },
                { name: 'Greek Salad', description: 'Feta, olives, and cucumber', price: 8.99, category: 'Starters' },
                { name: 'Chicken Shawarma', description: 'Spiced chicken wrap', price: 12.99, category: 'Main Course' },
                { name: 'Knafeh', description: 'Sweet cheese pastry with syrup', price: 6.99, category: 'Desserts' },
                { name: 'Stuffed Grape Leaves', description: 'Rice-filled grape leaves', price: 6.99, category: 'Starters' },
                { name: 'Seafood Paella', description: 'Saffron rice with seafood', price: 18.99, category: 'Main Course' },
                { name: 'Turkish Coffee', description: 'Strong, aromatic coffee', price: 3.99, category: 'Beverages' }
            ]
        }
    ];

    // App State
    const state = {
        restaurants: [],
        filteredRestaurants: [],
        location: null,
        filters: {
            cuisine: '',
            minRating: 0,
            priceRange: [1, 4],
            openNow: false,
            sortBy: 'distance',
            locationFilter: null,
            maxDistance: 5
        },
        currentView: 'list',
        selectedRestaurant: null,
        userProfile: {
            name: '',
            phone: '',
            email: '',
            address: ''
        },
        favoriteRestaurants: []
    };

    // DOM Elements
    const elements = {
        restaurantList: document.getElementById('restaurantList'),
        restaurantDetails: document.getElementById('restaurantDetails'),
        map: document.getElementById('map'),
        searchInput: document.getElementById('searchInput'),
        searchButton: document.getElementById('searchButton'),
        suggestions: document.getElementById('suggestions'),
        cuisineFilter: document.getElementById('cuisineFilter'),
        ratingFilter: document.getElementById('ratingFilter'),
        priceFilter: document.getElementById('priceFilter'),
        openNowFilter: document.getElementById('openNowFilter'),
        sortBy: document.getElementById('sortBy'),
        filterPanel: document.getElementById('filterPanel'),
        locationFilter: document.getElementById('locationFilter'),
        locationButton: document.getElementById('locationButton'),
        useCurrentLocation: document.getElementById('useCurrentLocation'),
        profileSection: document.getElementById('profileSection'),
        profileName: document.getElementById('profileName'),
        profilePhone: document.getElementById('profilePhone'),
        profileEmail: document.getElementById('profileEmail'),
        profileAddress: document.getElementById('profileAddress'),
        editProfile: document.getElementById('editProfile'),
        saveProfile: document.getElementById('saveProfile'),
        profileToggle: document.getElementById('profileToggle'),
        userName: document.getElementById('userName')
    };

    // Initialize the app
    const init = () => {
        state.restaurants = mockRestaurants;
        state.filteredRestaurants = mockRestaurants;
        state.location = { lat: 40.7128, lng: -74.0060 };
        state.filters.locationFilter = "New York, NY";
        elements.locationFilter.value = "New York, NY";
        
        // Load user profile from localStorage
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            state.userProfile = JSON.parse(savedProfile);
            updateProfileDisplay();
        }

        // Load favorite restaurants from localStorage
        const savedFavorites = localStorage.getItem('favoriteRestaurants');
        if (savedFavorites) {
            state.favoriteRestaurants = JSON.parse(savedFavorites);
        }
        
        initMap();
        renderRestaurantList();
        setupEventListeners();
    };

    // Initialize Google Map
    const initMap = () => {
        elements.map.innerHTML = '<div style="width:100%;height:100%;background:#eee;display:flex;align-items:center;justify-content:center;">Map would display here with restaurant markers</div>';
        console.log('Map initialized with center at:', state.location);
    };

    // Update profile display
    const updateProfileDisplay = () => {
        elements.profileName.value = state.userProfile.name || '';
        elements.profilePhone.value = state.userProfile.phone || '';
        elements.profileEmail.value = state.userProfile.email || '';
        elements.profileAddress.value = state.userProfile.address || '';
        elements.userName.textContent = state.userProfile.name || 'Guest';
    };

    // Set up event listeners
    const setupEventListeners = () => {
        elements.searchInput.addEventListener('input', handleSearchInput);
        elements.searchButton.addEventListener('click', handleSearch);
        
        elements.cuisineFilter.addEventListener('change', () => {
            state.filters.cuisine = elements.cuisineFilter.value;
            applyFilters();
        });
        
        elements.ratingFilter.addEventListener('click', (e) => {
            if (e.target.classList.contains('rating-option')) {
                document.querySelectorAll('.rating-option').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                state.filters.minRating = parseFloat(e.target.dataset.rating);
                applyFilters();
            }
        });
        
        elements.priceFilter.addEventListener('click', (e) => {
            if (e.target.classList.contains('price-option')) {
                document.querySelectorAll('.price-option').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                state.filters.priceRange = [
                    parseInt(e.target.dataset.min),
                    parseInt(e.target.dataset.max)
                ];
                applyFilters();
            }
        });
        
        elements.openNowFilter.addEventListener('change', () => {
            state.filters.openNow = elements.openNowFilter.checked;
            applyFilters();
        });
        
        elements.sortBy.addEventListener('change', () => {
            state.filters.sortBy = elements.sortBy.value;
            applyFilters();
        });

        elements.locationFilter.addEventListener('change', (e) => {
            state.filters.locationFilter = e.target.value;
            applyFilters();
        });

        elements.locationButton.addEventListener('click', getCurrentLocation);
        elements.useCurrentLocation.addEventListener('click', getCurrentLocation);

        // Profile event listeners
        elements.profileToggle.addEventListener('click', () => {
            elements.profileSection.style.display = elements.profileSection.style.display === 'block' ? 'none' : 'block';
        });

        elements.editProfile.addEventListener('click', () => {
            elements.profileName.disabled = false;
            elements.profilePhone.disabled = false;
            elements.profileEmail.disabled = false;
            elements.profileAddress.disabled = false;
            elements.editProfile.style.display = 'none';
            elements.saveProfile.style.display = 'block';
        });

        elements.saveProfile.addEventListener('click', () => {
            state.userProfile = {
                name: elements.profileName.value,
                phone: elements.profilePhone.value,
                email: elements.profileEmail.value,
                address: elements.profileAddress.value
            };
            localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
            elements.profileName.disabled = true;
            elements.profilePhone.disabled = true;
            elements.profileEmail.disabled = true;
            elements.profileAddress.disabled = true;
            elements.editProfile.style.display = 'block';
            elements.saveProfile.style.display = 'none';
            updateProfileDisplay();
        });
    };

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    state.location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    state.filters.locationFilter = "Current Location";
                    elements.locationFilter.value = "Current Location";
                    applyFilters();
                    initMap();
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Could not get your location. Please enter an address manually.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    // Handle search input
    const handleSearchInput = (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 2) {
            elements.suggestions.style.display = 'none';
            return;
        }
        
        const suggestions = state.restaurants
            .filter(restaurant => 
                restaurant.name.toLowerCase().includes(query) ||
                restaurant.cuisine.toLowerCase().includes(query) ||
                restaurant.dishes.some(dish => dish.name.toLowerCase().includes(query))
            )
            .map(restaurant => ({
                id: restaurant.id,
                text: `${restaurant.name} (${restaurant.cuisine})`
            }))
            .slice(0, 5);
        
        if (suggestions.length > 0) {
            elements.suggestions.innerHTML = suggestions.map(suggestion => 
                `<li data-id="${suggestion.id}">${suggestion.text}</li>`
            ).join('');
            elements.suggestions.style.display = 'block';
            
            Array.from(elements.suggestions.children).forEach(li => {
                li.addEventListener('click', () => {
                    elements.searchInput.value = li.textContent.split(' (')[0];
                    elements.suggestions.style.display = 'none';
                    showRestaurantDetails(li.dataset.id);
                });
            });
        } else {
            elements.suggestions.style.display = 'none';
        }
    };

    // Handle search
    const handleSearch = () => {
        const query = elements.searchInput.value.toLowerCase();
        
        state.filteredRestaurants = query
            ? state.restaurants.filter(restaurant => 
                restaurant.name.toLowerCase().includes(query) ||
                restaurant.cuisine.toLowerCase().includes(query) ||
                restaurant.dishes.some(dish => dish.name.toLowerCase().includes(query))
            )
            : state.restaurants;
        
        applyFilters();
        elements.suggestions.style.display = 'none';
        renderRestaurantList();
    };

    // Apply all filters
    const applyFilters = () => {
        let results = [...state.restaurants];
        const currentHour = new Date().getHours();
        
        if (state.filters.cuisine) {
            results = results.filter(r => r.cuisine === state.filters.cuisine);
        }
        
        if (state.filters.minRating > 0) {
            results = results.filter(r => r.rating >= state.filters.minRating);
        }
        
        results = results.filter(r => 
            r.priceLevel >= state.filters.priceRange[0] && 
            r.priceLevel <= state.filters.priceRange[1]
        );
        
        if (state.filters.openNow) {
            results = results.filter(r => 
                currentHour >= r.hours.open && currentHour < r.hours.close
            );
        }
        
        if (state.filters.locationFilter && state.filters.locationFilter !== "Current Location") {
            const locationQuery = state.filters.locationFilter.toLowerCase();
            results = results.filter(r => r.address.toLowerCase().includes(locationQuery));
        }
        
        results.sort((a, b) => {
            switch (state.filters.sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'price':
                    return a.priceLevel - b.priceLevel;
                default:
                    return a.distance - b.distance;
            }
        });
        
        state.filteredRestaurants = results;
        renderRestaurantList();
    };

    // Render restaurant list
    const renderRestaurantList = () => {
        elements.restaurantList.innerHTML = state.filteredRestaurants.map(restaurant => `
            <div class="restaurant-card" data-id="${restaurant.id}">
                <img src="${restaurant.photo}" alt="${restaurant.name}">
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <div class="meta">
                        <span class="rating">⭐ ${restaurant.rating.toFixed(1)}</span>
                        <span class="price">${'$'.repeat(restaurant.priceLevel)}</span>
                        <span class="cuisine">${restaurant.cuisine}</span>
                    </div>
                    <div class="address">📍 ${restaurant.address}</div>
                    <div class="status ${isOpenNow(restaurant) ? 'open' : 'closed'}">
                        ${isOpenNow(restaurant) ? 'Open Now' : 'Closed'}
                    </div>
                </div>
                <button class="favorite-button ${state.favoriteRestaurants.includes(restaurant.id) ? 'favorited' : ''}" data-id="${restaurant.id}">❤️</button>
            </div>
        `).join('');

        document.querySelectorAll('.restaurant-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('favorite-button')) {
                    showRestaurantDetails(card.dataset.id);
                }
            });
        });

        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', () => {
                const restaurantId = button.dataset.id;
                if (state.favoriteRestaurants.includes(restaurantId)) {
                    state.favoriteRestaurants = state.favoriteRestaurants.filter(id => id !== restaurantId);
                    button.classList.remove('favorited');
                } else {
                    state.favoriteRestaurants.push(restaurantId);
                    button.classList.add('favorited');
                }
                localStorage.setItem('favoriteRestaurants', JSON.stringify(state.favoriteRestaurants));
            });
        });
    };

    // Check if restaurant is open now
    const isOpenNow = (restaurant) => {
        const currentHour = new Date().getHours();
        return currentHour >= restaurant.hours.open && currentHour < restaurant.hours.close;
    };

    // Show restaurant details
    const showRestaurantDetails = (restaurantId) => {
        const restaurant = state.restaurants.find(r => r.id === restaurantId);
        if (!restaurant) return;
        
        state.selectedRestaurant = restaurant;
        state.currentView = 'details';
        
        elements.restaurantList.style.display = 'none';
        elements.restaurantDetails.style.display = 'block';
        elements.profileSection.style.display = 'none';
        
        renderRestaurantDetails();
    };

    // Render restaurant details
    const renderRestaurantDetails = () => {
        const restaurant = state.selectedRestaurant;
        
        const menuCardsHTML = restaurant.menuCards.map(url => `
            <div class="menu-card">
                <img src="${url}?auto=format&fit=crop&w=800&q=80" alt="Menu Card">
            </div>
        `).join('');

        const dishesHTML = restaurant.dishes.map(dish => `
            <div class="menu-item">
                <h4>${dish.name}</h4>
                <p>${dish.description}</p>
                <span>$${dish.price.toFixed(2)}</span>
            </div>
        `).join('');

        elements.restaurantDetails.innerHTML = `
            <div class="restaurant-header">
                <h1>${restaurant.name}</h1>
                <div class="restaurant-meta">
                    <span class="rating">⭐ ${restaurant.rating.toFixed(1)}</span>
                    <span class="price">${'$'.repeat(restaurant.priceLevel)}</span>
                    <span class="cuisine">${restaurant.cuisine}</span>
                    <span class="status ${isOpenNow(restaurant) ? 'open' : 'closed'}">
                        ${isOpenNow(restaurant) ? 'Open Now' : 'Closed'}
                    </span>
                </div>
                <div class="address">📍 ${restaurant.address}</div>
            </div>
            
            <div class="tabs">
                <button class="tab-button active" data-tab="menu">Menu</button>
                <button class="tab-button" data-tab="reviews">Reviews</button>
                <button class="tab-button" data-tab="info">Info</button>
            </div>
            
            <div class="tab-content">
                <div id="menuTab" class="tab-pane active">
                    <div class="menu-cards-grid">
                        ${menuCardsHTML}
                    </div>
                    <div class="dishes-grid">
                        ${dishesHTML}
                    </div>
                </div>
                <div id="reviewsTab" class="tab-pane" style="display: none;">
                    ${restaurant.reviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <img src="${review.user.avatar}" alt="${review.user.name}">
                                <div>
                                    <h4>${review.user.name}</h4>
                                    <div class="rating">${'★'.repeat(review.rating)}</div>
                                </div>
                            </div>
                            <p>${review.text}</p>
                        </div>
                    `).join('')}
                </div>
                <div id="infoTab" class="tab-pane" style="display: none;">
                    <div class="info-section">
                        <h4>Opening Hours</h4>
                        <p>${restaurant.hours.open}:00 AM - ${restaurant.hours.close}:00 PM</p>
                    </div>
                </div>
            </div>
            
            <div class="menu-lightbox" id="menuLightbox">
                <img class="lightbox-image" src="" alt="Menu Card">
            </div>
            
            <button class="back-button" id="backButton">← Back to List</button>
        `;

        // Add tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                document.querySelectorAll('.tab-pane').forEach(pane => pane.style.display = 'none');
                document.getElementById(`${button.dataset.tab}Tab`).style.display = 'block';
            });
        });

        // Add lightbox functionality
        document.querySelectorAll('.menu-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const lightbox = document.getElementById('menuLightbox');
                const lightboxImg = lightbox.querySelector('img');
                lightboxImg.src = e.target.src;
                lightbox.style.display = 'flex';
            });
        });

        // Close lightbox
        document.getElementById('menuLightbox').addEventListener('click', () => {
            document.getElementById('menuLightbox').style.display = 'none';
        });

        // Back button
        document.getElementById('backButton').addEventListener('click', () => {
            elements.restaurantDetails.style.display = 'none';
            elements.restaurantList.style.display = 'grid';
            state.currentView = 'list';
            renderRestaurantList();
        });
    };

    init();
});
