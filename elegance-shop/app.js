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
    return (
        <div className="col-md-6 col-lg-4 fade-in">
            <div 
                className="product-card position-relative"
                onClick={() => onProductClick(product)}
            >
                <div className="category-badge">
                    {product.category === 'blouses-shirts' ? 'Блузы и Рубашки' :
                     product.category === 'pants-skirts' ? 'Брюки и Юбки' :
                     product.category === 'jackets-blazers' ? 'Жакеты и Пиджаки' :
                     product.category === 'suits' ? 'Костюмы' :
                     product.category === 'shoes' ? 'Обувь' :
                     product.category === 'outerwear' ? 'Верхняя одежда' : ''}
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
                            {product.category === 'blouses-shirts' ? 'Блузы и Рубашки' :
                             product.category === 'pants-skirts' ? 'Брюки и Юбки' :
                             product.category === 'jackets-blazers' ? 'Жакеты и Пиджаки' :
                             product.category === 'suits' ? 'Костюмы' :
                             product.category === 'shoes' ? 'Обувь' :
                             product.category === 'outerwear' ? 'Верхняя одежда' : ''}
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

// Компонент корзины с модальным окном оформления заказа
function Cart({ show, onHide, cart, removeFromCart, updateQuantity, totalPrice }) {
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [checkoutFormData, setCheckoutFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        comment: ''
    });

    const handleCheckoutInputChange = (e) => {
        const { name, value } = e.target;
        setCheckoutFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        
        if (!checkoutFormData.firstName || !checkoutFormData.phone || !checkoutFormData.email) {
            alert('Пожалуйста, заполните все обязательные поля (Имя, Телефон, Email)');
            return;
        }

        console.log('Данные заказа:', {
            customer: checkoutFormData,
            cart: cart,
            total: totalPrice
        });
        
        alert(`Заказ успешно оформлен! Номер вашего заказа: #${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
        
        setShowCheckoutModal(false);
        onHide();
        
        setCheckoutFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            comment: ''
        });
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Корзина пуста');
            return;
        }
        setShowCheckoutModal(true);
    };

    if (!show) return null;

    return (
        <>
            <div className="offcanvas offcanvas-end show" tabIndex="-1" style={{visibility: 'visible'}}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Корзина</h5>
                    <button type="button" className="btn-close" onClick={onHide}></button>
                </div>
                <div className="offcanvas-body">
                    {cart.length === 0 ? (
                        <p>Ваша корзина пуста</p>
                    ) : (
                        <>
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6>{item.name}</h6>
                                            <p>{item.price.toLocaleString()} ₽ × {item.quantity}</p>
                                            {item.selectedSize && (
                                                <small className="text-muted">Размер: {item.selectedSize}</small>
                                            )}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button 
                                                className="btn btn-sm btn-outline-secondary me-2"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button 
                                                className="btn btn-sm btn-outline-secondary ms-2"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-outline-danger ms-3"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4 pt-3 border-top">
                                <h5>Итого: {totalPrice.toLocaleString()} ₽</h5>
                                <button 
                                    className="btn btn-primary w-100 mt-3"
                                    onClick={handleCheckout}  {/* ИСПРАВЛЕНО: было handleCheckoutClick */}
                                >
                                    Оформить заказ
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Модальное окно оформления заказа */}
            {showCheckoutModal && (
                <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Оформление заказа</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowCheckoutModal(false)}
                                ></button>
                            </div>
                            <form onSubmit={handleCheckoutSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Контактная информация</h6>
                                            <div className="mb-3">
                                                <label htmlFor="checkoutFirstName" className="form-label">Имя *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="checkoutFirstName"
                                                    name="firstName"
                                                    value={checkoutFormData.firstName}
                                                    onChange={handleCheckoutInputChange}
                                                    required
                                                    placeholder="Введите ваше имя"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="checkoutLastName" className="form-label">Фамилия</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="checkoutLastName"
                                                    name="lastName"
                                                    value={checkoutFormData.lastName}
                                                    onChange={handleCheckoutInputChange}
                                                    placeholder="Введите вашу фамилию"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="checkoutPhone" className="form-label">Телефон *</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="checkoutPhone"
                                                    name="phone"
                                                    value={checkoutFormData.phone}
                                                    onChange={handleCheckoutInputChange}
                                                    required
                                                    placeholder="+7 (999) 123-45-67"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="checkoutEmail" className="form-label">Email *</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="checkoutEmail"
                                                    name="email"
                                                    value={checkoutFormData.email}
                                                    onChange={handleCheckoutInputChange}
                                                    required
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Доставка</h6>
                                            <div className="mb-3">
                                                <label htmlFor="checkoutAddress" className="form-label">Адрес доставки</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="checkoutAddress"
                                                    name="address"
                                                    value={checkoutFormData.address}
                                                    onChange={handleCheckoutInputChange}
                                                    placeholder="Введите адрес доставки"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="checkoutComment" className="form-label">Комментарий к заказу</label>
                                                <textarea
                                                    className="form-control"
                                                    id="checkoutComment"
                                                    name="comment"
                                                    value={checkoutFormData.comment}
                                                    onChange={handleCheckoutInputChange}
                                                    rows="3"
                                                    placeholder="Дополнительные пожелания..."
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <h6>Ваш заказ</h6>
                                                {cart.map(item => (
                                                    <div key={item.id} className="d-flex justify-content-between small">
                                                        <span>{item.name} × {item.quantity}</span>
                                                        <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                                                    </div>
                                                ))}
                                                <div className="d-flex justify-content-between mt-2 border-top pt-2">
                                                    <strong>Итого:</strong>
                                                    <strong>{totalPrice.toLocaleString()} ₽</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-text mt-3">
                                        * Обязательные поля для заполнения
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary" 
                                        onClick={() => setShowCheckoutModal(false)}
                                    >
                                        Вернуться к корзине
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                    >
                                        Подтвердить заказ
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

// Остальные компоненты (Header, Footer, App) остаются без изменений...
