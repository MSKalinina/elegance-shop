const productsData = [
            {
                id: 2,
                name: "Пальто",
                price: 18900,
                category: "outerwear",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BQIO_27113135_1_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BQIO_27113137_3_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BQIO_27113136_2_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BQIO_27113138_4_v2_2x.jpg"
                ],
                description: "Двубортовое пальто чёрного цвета"
            },
            {
                id: 3,
                name: "Приталенный жакет",
                price: 13900,
                category: "jackets-blazers",
                images: [
                    "https://a.lmcdn.ru/product/R/T/RTLAEJ112101_29123673_1_v4_2x.jpg",
                    "https://a.lmcdn.ru/product/R/T/RTLAEJ112101_29241288_5_v3_2x.jpg",
                    
                ],
                description: "Стильный жакет коричневого цвета"
            },
            {
                id: 4,
                name: "Блуза",
                price: 4600,
                category: "blouses-shirts",
                images: [
                    "https://a.lmcdn.ru/img600x866/M/P/MP002XW1JQB4_28526685_1_v3_2x.jpg",
                    "https://a.lmcdn.ru/img600x866/M/P/MP002XW1JQB4_28526687_3_v3_2x.jpg",
                    "https://a.lmcdn.ru/img600x866/M/P/MP002XW1JQB4_28526686_2_v3_2x.jpg"
                ],
                description: "Блуза с бантом."
            },
            {
                id: 5,
                name: "Рубашка",
                price: 4300,
                category: "blouses-shirts",
                images: [
                    "https://a.lmcdn.ru/img600x866/R/T/RTLADZ994701_25947575_1_v1.jpg",
                    "https://a.lmcdn.ru/img600x866/R/T/RTLADZ994701_25947576_2_v1.jpg",
                    "https://a.lmcdn.ru/img600x866/R/T/RTLADZ994701_25947577_3_v1.jpg"
                ],
                description: "Хлопковая рубашка."
            },
            {
                id: 6,
                name: "Бордовые туфли",
                price: 4200,
                category: "shoes",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0EZJG_28315060_1_v1_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0EZJG_28352797_9_v1_2x.jpg",
                    
                ],
                description: "Классические туфли на невысоком каблуке"
            },
            {
                id: 7,
                name: "Пиджак",
                price: 8500,
                category: "jackets-blazers",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW1JMH8_28413267_1_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1JMH8_28413270_4_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1JMH8_28413268_2_v2_2x.jpg"
                ],
                description: "Пиджак с акцентом"
            },
            {
                id: 8,
                name: "Атласная блуза",
                price: 3900,
                category: "blouses-shirts",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW1276L_21803014_1_v4.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1276L_21803012_2_v3.jpg",
                    
                ],
                description: "Блуза с бантом из атласной ткани с деликатным блеском."
            },
            {
                id: 9,
                name: "Полупальто",
                price: 10900,
                category: "outerwear",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0VPB4_30285122_1_v1_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0VPB4_30285124_3_v1_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0VPB4_30285123_2_v1_2x.jpg"
                ],
                description: "Укороченное пальто пудрового цвета"
            },
            {
                id: 10,
                name: "Черные кожаные брюки",
                price: 16700,
                category: "pants-skirts",
                images: [
                    "https://a.lmcdn.ru/img600x866/M/P/MP002XW12WNL_26175539_1_v2_2x.jpg",
                    "https://a.lmcdn.ru/img600x866/M/P/MP002XW12WNL_26175541_3_v2_2x.jpg",
                    "https://a.lmcdn.ru/img600x866/M/P/MP002XW12WNL_26175540_2_v2_2x.jpg"
                ],
                description: "Стильные кожаные брюки классического кроя"
            },
            {
                id: 11,
                name: "Брюки в полоску",
                price: 7740,
                category: "pants-skirts",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0N5K6_28836446_1_v3_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0N5K6_28836448_3_v4_2x.jpg",
                    
                ],
                description: "Стильные брюки классического кроя"
            },
            {
                id: 12,
                name: "Бежевая юбка-карандаш",
                price: 7600,
                category: "pants-skirts",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0OQH2_21958789_1_v1.jpeg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0OQH2_21958762_3_v1.jpeg",
                    
                ],
                description: "Универсальная юбка-карандаш бежевого цвета"
            },
            {
                id: 13,
                name: "Костюм двойка серый",
                price: 24500,
                category: "suits",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0ZNTF_24876757_1_v1.jpeg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0ZNTF_24876308_2_v1.jpeg",
                   
                ],
                description: "Элегантный костюм из жакета и брюк"
            },
            {
                id: 14,
                name: "Черные туфли-лодочки",
                price: 11200,
                category: "shoes",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW1ISXY_27867050_4_v4_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1ISXY_27867051_6_v4_2x.jpg",
                    
                ],
                description: "Классические туфли на каблуке"
            },
            {
                id: 15,
                name: "Плиссированная юбка",
                price: 5000,
                category: "pants-skirts",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0TCH7_27744953_1_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0TCH7_27744954_2_v2_2x.jpg",
                    
                ],
                description: "Юбка плиссе миди гофре"
            },
            {
                id: 16,
                name: "Белая рубашка",
                price: 6800,
                category: "blouses-shirts",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0UH5H_29524628_4_v4.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0UH5H_29524658_3_v4.jpg",
                    
                ],
                description: "Классическая белая рубашка из хлопка"
            },
            {
                id: 17,
                name: "Костюм двойка коричневый",
                price: 9900,
                category: "suits",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0G9UW_28900662_2_v2.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0G9UW_28900666_3_v2.jpg",
                    
                ],
                description: "Элегантный костюм из жакета и юбки"
            },
            {
                id: 18,
                name: "Черные сапоги",
                price: 22500,
                category: "shoes",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW0UF31_29697177_1_v1_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW0UF31_29776137_9_v1_2x.jpg",
                    
                ],
                description: "Классические сапоги из натуральной кожи"
            },
            {
                id: 19,
                name: "Кожаное пальто черное",
                price: 28900,
                category: "outerwear",
                images: [
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BLVQ_27116625_2_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BLVQ_27116626_3_v2_2x.jpg",
                    "https://a.lmcdn.ru/product/M/P/MP002XW1BLVQ_27116624_1_v2_2x.jpg"
                ],
                description: "Стильное кожаное пальто прямого кроя"
            }

        ];
const categoriesData = [
    {
        id: 1,
        name: "Верхняя одежда",
        slug: "outerwear",
        image: "https://via.placeholder.com/300x200/667eea/ffffff?text=Пальто"
    },
    {
        id: 2,
        name: "Жакеты и пиджаки", 
        slug: "jackets-blazers",
        image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=Жакеты"
    },
    {
        id: 3,
        name: "Блузы и рубашки",
        slug: "blouses-shirts", 
        image: "https://via.placeholder.com/300x200/f093fb/ffffff?text=Блузы"
    },
    {
        id: 4,
        name: "Брюки и юбки",
        slug: "pants-skirts",
        image: "https://via.placeholder.com/300x200/4facfe/ffffff?text=Юбки"
    },
    {
        id: 5, 
        name: "Обувь",
        slug: "shoes",
        image: "https://via.placeholder.com/300x200/43e97b/ffffff?text=Обувь"
    },
    {
        id: 6,
        name: "Костюмы",
        slug: "suits", 
        image: "https://via.placeholder.com/300x200/ff9a9e/ffffff?text=Костюмы"
    }
];
