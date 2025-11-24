const { useState, useEffect } = React;

// Компонент карточки категории
function CategoryCard({ category, onClick }) {
    return (
        <div className="col-md-6 col-lg-4 fade-in">
            <div 
                className="category-card"
                onClick={() => onClick(category.id)}
            >
                <img 
                    src={category.image} 
                    className="category-image" 
                    alt={category.name}
                />
                <div className="category-overlay">
                    <div>
                        <h3 className="category-title">{category.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Компонент карточки товара
function ProductCard({ product, onAddToCart, onProductClick }) {
    const getCategoryName = (category) => {
        switch(category) {
            case 'blouses-shirts': return 'Блузы и Рубашки';
            case 'pants-skirts': return 'Брюки и Юбки';
            case 'jackets-blazers': return 'Жакеты и Пиджаки';
            case 'suits': return 'Костюмы';
            case 'shoes': return 'Обувь';
            case 'outerwear': return 'Верхняя одежда';
            default: return '';
        }
    };

    return (
        <div className="col-md-6 col-lg-4 fade-in">
            <div 
                className="product-card position-relative"
                onClick={() => onProductClick(product)}
            >
                <div className="category-badge">
                    {getCategoryName(product.category)}
                </div>
                <div className="product-image-container">
                    <img 
                        src={product.images[0]} 
                        className="product-image main"
                        alt={product.name}
                    />
                    <img 
                        src={product.images[1] || product.images[0]} 
                        className="product-image hover"
                        alt={`${product.name} - дополнительное фото`}
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="price">{product.price.toLocaleString()} ₽</span>
                        <button 
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart(product);
                            }}
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Компонент галереи изображений
function ProductGallery({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="product-gallery">
            <div className="product-gallery-main">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`product-gallery-image ${index === currentImageIndex ? 'active' : ''}`}
                        alt={`Фото товара ${index + 1}`}
                    />
                ))}
                
                <div className="product-gallery-indicator">
                    {currentImageIndex + 1} / {images.length}
                </div>
                
                <div className="product-gallery-nav">
                    <button className="product-gallery-btn" onClick={prevImage}>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="product-gallery-btn" onClick={nextImage}>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
            
            {images.length > 1 && (
                <div className="product-gallery-thumbnails">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={`product-gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                            alt={`Миниатюра ${index + 1}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// Компонент модального окна товара
function ProductModal({ product, isOpen, onClose, onAddToCart }) {
    const getCategoryName = (category) => {
        switch(category) {
            case 'blouses-shirts': return 'Блузы и Рубашки';
            case 'pants-skirts': return 'Брюки и Юбки';
            case 'jackets-blazers': return 'Жакеты и Пиджаки';
            case 'suits': return 'Костюмы';
            case 'shoes': return 'Обувь';
            case 'outerwear': return 'Верхняя одежда';
            default: return '';
        }
    };

    if (!isOpen || !product) return null;

    const [selectedProduct, setSelectedProduct] = useState(product);

    const handleSizeSelect = (size) => {
        setSelectedProduct({
            ...product,
            selectedSize: size
        });
    };

    const handleAddToCart = () => {
        if (product.category === 'shoes' && !selectedProduct.selectedSize) {
            alert('Пожалуйста, выберите размер обуви');
            return;
        }
        onAddToCart(selectedProduct);
        onClose();
    };

    return (
        <div className="product-modal" onClick={onClose}>
            <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="product-modal-close" onClick={onClose}>
                    <i className="bi bi-x"></i>
                </button>
                <div className="product-modal-body">
                    <div className="product-modal-images">
                        <ProductGallery images={product.images} />
                    </div>
                    <div className="product-modal-info">
                        <h2 className="product-modal-title">{product.name}</h2>
                        <div className="product-modal-price">{product.price.toLocaleString()} ₽</div>
                        <div className="product-modal-category">
                            {getCategoryName(product.category)}
                        </div>
                        <p className="product-modal-description">{product.description}</p>
                        
                        <div className="mt-4">
                            <h5>Детали товара</h5>
                            <ul>
                                <li>Высококачественные материалы</li>
                                <li>Бесплатная доставка по России</li>
                                <li>Возврат в течение 14 дней</li>
                                <li>Размеры: {product.category === 'shoes' ? '35-42' : 'XS, S, M, L, XL'}</li>
                            </ul>
                        </div>

                        {product.category === 'shoes' && (
                            <div className="mt-4">
                                <h5>Выберите размер обуви:</h5>
                                <div className="size-selector d-flex flex-wrap gap-2 mt-2">
                                    {[35, 36, 37, 38, 39, 40, 41, 42].map(size => (
                                        <button
                                            key={size}
                                            className={`btn ${
                                                selectedProduct.selectedSize === size 
                                                ? 'btn-primary' 
                                                : 'btn-outline-secondary'
                                            }`}
                                            onClick={() => handleSizeSelect(size)}
                                            style={{
                                                minWidth: '45px',
                                                padding: '5px 10px',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                {selectedProduct.selectedSize && (
                                    <p className="text-success mt-2 mb-0">
                                        <i className="bi bi-check-circle me-2"></i>
                                        Выбран размер: {selectedProduct.selectedSize}
                                    </p>
                                )}
                            </div>
                        )}
                        
                        <div className="product-modal-actions">
                            <button 
                                className="btn btn-primary"
                                onClick={handleAddToCart}
                                disabled={product.category === 'shoes' && !selectedProduct.selectedSize}
                            >
                                {product.category === 'shoes' && !selectedProduct.selectedSize 
                                    ? 'Выберите размер' 
                                    : 'Добавить в корзину'
                                }
                            </button>
                            <button className="btn btn-outline" onClick={onClose}>
                                Продолжить покупки
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Компонент корзины
function Cart({ show, onHide, cart, removeFromCart, updateQuantity, totalPrice }) {
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [orderData, setOrderData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        comment: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Обработчик оформления заказа - ОСНОВНАЯ ФИКСАЦИЯ
    const handleCheckoutClick = (e) => {
        console.log('🎯 КНОПКА "ОФОРМИТЬ ЗАКАЗ" НАЖАТА');
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        if (cart.length === 0) {
            alert('Корзина пуста');
            return;
        }
        console.log('✅ Открываем модальное окно');
        setShowCheckoutModal(true);
    };

    // Обработчик отправки формы - ОСНОВНАЯ ФИКСАЦИЯ
    const handleSubmitOrder = async (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        console.log('📦 Отправка заказа...');

        // Простая валидация
        if (!orderData.name || !orderData.phone) {
            alert('Заполните обязательные поля: Имя и Телефон');
            return;
        }

        setIsSubmitting(true);

        try {
            // Создаем объект заказа
            const order = {
                customer: orderData,
                items: cart.map(item => ({
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    size: item.selectedSize
                })),
                total: totalPrice,
                orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
            };

            console.log('✅ Заказ создан:', order);

            // Имитация отправки на сервер (без реального fetch)
            setTimeout(() => {
                // Успешное оформление
                alert(`Заказ успешно оформлен! Номер заказа: ${order.orderNumber}`);
                
                // Закрываем модальные окна
                setShowCheckoutModal(false);
                onHide();
                
                // Очищаем корзину
                cart.forEach(item => removeFromCart(item.id));
                
                // Сбрасываем форму
                setOrderData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    comment: ''
                });
                
                setIsSubmitting(false);
            }, 1000);

        } catch (error) {
            console.error('❌ Ошибка оформления заказа:', error);
            alert('Произошла ошибка при оформлении заказа');
            setIsSubmitting(false);
        }
    };

    // Обработчик изменения полей формы
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Обработчик для кнопки подтверждения (альтернатива форме)
    const handleConfirmOrder = () => {
        console.log('✅ Подтверждение заказа');
        handleSubmitOrder(); // Вызываем без event
    };

    if (!show) return null;

    return (
        <>
            {/* Корзина */}
            <div className="cart-overlay" onClick={onHide}>
                <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                    <div className="cart-header">
                        <h3>Корзина</h3>
                        <button type="button" className="cart-close-btn" onClick={onHide}>×</button>
                    </div>

                    <div className="cart-body">
                        {cart.length === 0 ? (
                            <p>Ваша корзина пуста</p>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <h6>{item.name}</h6>
                                        <p>{item.price.toLocaleString()} ₽ × {item.quantity}</p>
                                        {item.selectedSize && (
                                            <small>Размер: {item.selectedSize}</small>
                                        )}
                                    </div>
                                    <div className="cart-item-actions">
                                        <button 
                                            type="button"
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >-</button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            type="button"
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >+</button>
                                        <button 
                                            type="button"
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >×</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="cart-footer">
                        <div className="cart-total">
                            <h4>Итого: {totalPrice.toLocaleString()} ₽</h4>
                            <button 
                                type="button"
                                className="checkout-btn"
                                onClick={handleCheckoutClick}
                                disabled={cart.length === 0}
                                style={{
                                    background: cart.length === 0 ? '#ccc' : '#007bff',
                                    color: 'white',
                                    padding: '15px',
                                    border: 'none',
                                    cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                                    width: '100%',
                                    fontSize: '16px'
                                }}
                            >
                                {cart.length === 0 ? 'Корзина пуста' : '🛒 Оформить заказ'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно оформления заказа - УПРОЩЕННАЯ ВЕРСИЯ БЕЗ ФОРМЫ */}
            {showCheckoutModal && (
                <div className="checkout-overlay" onClick={() => !isSubmitting && setShowCheckoutModal(false)}>
                    <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Оформление заказа</h3>
                            <button 
                                type="button"
                                className="cart-close-btn"
                                onClick={() => setShowCheckoutModal(false)}
                                disabled={isSubmitting}
                            >
                                ×
                            </button>
                        </div>
                        
                        {/* ЗАМЕНА ФОРМЫ НА ОБЫЧНЫЙ DIV */}
                        <div>
                            <div className="form-group">
                                <label>Имя *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={orderData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="form-control"
                                    placeholder="Введите ваше имя"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={orderData.email}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="your@email.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Телефон *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={orderData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="form-control"
                                    placeholder="+7 (999) 123-45-67"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Адрес доставки *</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={orderData.address}
                                    onChange={handleInputChange}
                                    required
                                    className="form-control"
                                    placeholder="Введите адрес доставки"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="order-summary">
                                <h4>Ваш заказ:</h4>
                                {cart.map(item => (
                                    <div key={item.id} className="order-item">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                                    </div>
                                ))}
                                <div className="order-total">
                                    <strong>Итого: {totalPrice.toLocaleString()} ₽</strong>
                                </div>
                            </div>
                            
                            {/* ЗАМЕНА submit на обычную кнопку */}
                            <button 
                                type="button"
                                className="checkout-btn"
                                onClick={handleConfirmOrder}
                                disabled={isSubmitting}
                                style={{
                                    background: isSubmitting ? '#ccc' : '#28a745',
                                    color: 'white',
                                    padding: '15px',
                                    border: 'none',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    width: '100%',
                                    fontSize: '16px'
                                }}
                            >
                                {isSubmitting ? '⏳ Оформление...' : '✅ Подтвердить заказ'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
// Компонент шапки
function Header({ cartCount, onCartClick }) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные регистрации:', formData);
        alert('Регистрация успешно завершена!');
        setShowLoginModal(false);
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">ELEGANCE</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">О нас</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#categories">Категории</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">Каталог</a>
                            </li>
                        </ul>
                        
                        <div className="d-flex align-items-center">
                            <button 
                                className="btn btn-outline me-3"
                                onClick={() => setShowLoginModal(true)}
                            >
                                <i className="bi bi-person me-2"></i>
                                Войти
                            </button>
                            <button className="btn btn-outline me-3">
                                <i className="bi bi-search"></i>
                            </button>
                            <button className="btn btn-outline position-relative" onClick={onCartClick}>
                                <i className="bi bi-bag"></i>
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-olive">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {showLoginModal && (
                <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Регистрация</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowLoginModal(false)}
                                ></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">Имя *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Введите ваше имя"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Фамилия *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Введите вашу фамилию"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Номер телефона *</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="+7 (999) 123-45-67"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="form-text">
                                        * Обязательные поля для заполнения
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary" 
                                        onClick={() => setShowLoginModal(false)}
                                    >
                                        Отмена
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Компонент футера
function Footer({ onCategoryClick }) {
    const handleShopLinkClick = (categoryId) => {
        if (onCategoryClick) {
            onCategoryClick(categoryId);
        }
        document.getElementById('products').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    const handleHelpLinkClick = (section) => {
        switch(section) {
            case 'delivery':
                alert('Информация о доставке:\n\n• Бесплатная доставка по России при заказе от 5000₽\n• Срок доставки: 2-7 рабочих дней\n• Возврат в течение 14 дней');
                break;
            case 'sizes':
                const sizeTable = `
Таблица размеров:

Женская одежда:
XS - 42-44 
S - 44-46   
M - 46-48 
L - 48-50 
XL - 50-52 

Обувь:
35-36 - 22-23 см
37-38 - 24-25 см
39-40 - 26-27 см
41-42 - 28-29 см
                `;
                alert(sizeTable);
                break;
            case 'contacts':
                alert('Контактная информация:\n\nТелефон: +7 (999) 123-45-67\nEmail: info@elegance.ru\nАдрес: Омск, Ленина, 20');
                break;
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5>Магазин ELEGANCE</h5>
                        <p>Вечная классика, созданная для жизни. ELEGANCE - это капсульный гардероб для современной женщины, где каждая вещь - это инвестиция в стиль, качество и осознанность.</p>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h5>Магазин</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a 
                                    href="#products" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleShopLinkClick('blouses-shirts');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Блузы и Рубашки
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#products" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleShopLinkClick('pants-skirts');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Брюки и Юбки
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#products" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleShopLinkClick('outerwear');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Верхняя одежда
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#products" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleShopLinkClick('shoes');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Обувь
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5>Помощь</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleHelpLinkClick('delivery');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Доставка и возврат
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleHelpLinkClick('sizes');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Размеры
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleHelpLinkClick('contacts');
                                    }}
                                    style={{cursor: 'pointer', textDecoration: 'none'}}
                                >
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5>Контакты</h5>
                        <p>
                            <span 
                                style={{cursor: 'pointer', textDecoration: 'underline'}}
                                onClick={() => handleHelpLinkClick('contacts')}
                            >
                                +7 (999) 123-45-67
                            </span>
                            <br/>
                            <span 
                                style={{cursor: 'pointer', textDecoration: 'underline'}}
                                onClick={() => handleHelpLinkClick('contacts')}
                            >
                                info@elegance.ru
                            </span>
                            <br/>
                            <span 
                                style={{cursor: 'pointer', textDecoration: 'underline'}}
                                onClick={() => handleHelpLinkClick('contacts')}
                            >
                                Омск, Ленина, 20
                            </span>
                        </p>
                        <div className="d-flex">
                            <a href="#" className="me-3"><i className="bi bi-telegram"></i></a>
                            <a href="#"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-3 border-top">
                    <p>&copy; 2025 ELEGANCE. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

// Главный компонент
function App() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showProductModal, setShowProductModal] = useState(false);

    // Фильтрация товаров по категории
    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredProducts(productsData);
        } else {
            setFilteredProducts(productsData.filter(product => product.category === activeCategory));
        }
    }, [activeCategory]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
    if (productId === 'all') {
        setCart([]); // Очищаем всю корзину
        return;
    }
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
};

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowProductModal(true);
    };

    const handleCloseProductModal = () => {
        setShowProductModal(false);
        setSelectedProduct(null);
    };

    return (
        <div>
            <Header 
                cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
                onCartClick={() => setShowCart(true)}
            />
            
            {/* Герой секция */}
            <section id="home" className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Магазин ELEGANCE</h1>
                    <p className="hero-subtitle">Минимализм, уникальность, качество.</p>
                    <button 
                        className="btn btn-primary btn-lg"
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    >
                        О нас
                    </button>
                </div>
            </section>

            {/* Секция "О нас" */}
            <section id="about" className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="section-title text-start">О нас</h2>
                            <p className="lead">
                                Наша философия проста: меньше, но лучше. Мы верим, что настоящая роскошь - это ощущение комфорта, уверенность в безупречном качестве и свобода от сиюминутных трендов. Каждое наше изделие - это тщательно отобранные натуральные ткани, идеальная посадка и лаконичный дизайн, который будет актуален всегда.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img 
                                src="https://yellowhome.ru/wp-content/uploads/2017/10/15-12.jpg" 
                                alt="О нас" 
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Категории */}
            <section id="categories" className="py-5 bg-beige">
                <div className="container">
                    <h2 className="section-title">Категории</h2>
                    <div className="row">
                        {categoriesData.map(category => (
                            <CategoryCard 
                                key={category.id}
                                category={category}
                                onClick={handleCategoryClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Каталог товаров */}
            <section id="products" className="py-5">
                <div className="container">
                    <h2 className="section-title">Каталог</h2>
                    
                    {/* Фильтры по категориям */}
                    <div className="filter-buttons">
                        <button 
                            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            Все товары
                        </button>
                        {categoriesData.map(category => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="row">
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id}
                                product={product}
                                onAddToCart={addToCart}
                                onProductClick={handleProductClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer onCategoryClick={handleCategoryClick} />

            <Cart 
                show={showCart}
                onHide={() => setShowCart(false)}
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                totalPrice={getTotalPrice()}
            />

            {/* Модальное окно товара */}
            <ProductModal 
                product={selectedProduct}
                isOpen={showProductModal}
                onClose={handleCloseProductModal}
                onAddToCart={addToCart}
            />
        </div>
    );
}

// Рендеринг приложения
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);










