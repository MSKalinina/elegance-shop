const productsData = [
            {
                id: 1,
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
                id: 2,
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
                id: 3,
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
                id: 4,
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
                id: 5,
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
                id: 6,
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
                id: 7,
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
                id: 8,
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
                id: 9,
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
                id: 10,
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
                id: 11,
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
                id: 12,
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
                id: 13,
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
                id: 14,
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
                id: 15,
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
                id: 16,
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
                id: 17,
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
                id: 18,
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
                id: 'blouses-shirts',
                name: 'Блузы и Рубашки',
                image: 'https://a.lmcdn.ru/product/M/P/MP002XW0ZIMS_24790123_1_v3.jpg',
            },
            {
                id: 'pants-skirts',
                name: 'Брюки и Юбки',
                image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1EZG4_21131543_1_v3_2x.jpg',
            },
            {
                id: 'jackets-blazers',
                name: 'Жакеты и Пиджаки',
                image: 'https://a.lmcdn.ru/product/M/P/MP002XW0VMIJ_30352674_1_v2_2x.jpg',
            },
            {
                id: 'suits',
                name: 'Костюмы',
                image: 'https://a.lmcdn.ru/product/M/P/MP002XW1BVLZ_27790402_1_v3.jpg',
            },
            {
                id: 'shoes',
                name: 'Обувь',
                image: 'https://respect-shoes.ru/upload/medialibrary/a63/a6345979fe5d0128d4403a132a7cba06.jpg',
            },
            {
                id: 'outerwear',
                name: 'Верхняя одежда',
                image: 'https://a.lmcdn.ru/product/M/P/MP002XW0VH31_30078717_2_v1_2x.jpg',
            }
        ];


