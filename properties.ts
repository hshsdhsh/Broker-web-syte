import { Language } from './types';

export interface PropertyLocale {
  title: string;
  address: string;
  description: string;
  rooms?: string;
  baths?: string;
  amenities?: string[];
  size?: string;
  price?: string;
}

export interface PropertyData {
  id: string;
  category: 'residential' | 'commercial' | 'land';
  status: 'sale' | 'rent' | 'long_term';
  price: string;
  featured: boolean;
  images: string[];
  locales: Record<Language, PropertyLocale>;
  sqft?: number;
  beds?: number;
  baths?: number;
}

export const PROPERTIES: PropertyData[] = [
  {
    id: 'stepanavan_triangle_cottage_daily',
    category: 'residential',
    status: 'rent',
    price: 'Price on request',
    featured: true,
    images: [
      'https://imagizer.imageshack.com/img922/6235/L2XcCz.jpg',
      'https://imagizer.imageshack.com/img924/8338/gjOc0I.jpg',
      'https://imagizer.imageshack.com/img922/6046/PVQv3Q.jpg',
      'https://imagizer.imageshack.com/img922/1488/dYVmQ6.jpg',
      'https://imagizer.imageshack.com/img924/6350/mwGgMJ.jpg'
    ],
    locales: {
      en: {
        title: 'Triangular (A-Frame) Cottage for Daily Rent',
        address: 'Stepanavan',
        rooms: '2 Rooms',
        description: 'Beautiful two-storey A-frame cottage in the heart of nature. Ideal for 4-5 persons seeking a cozy getaway.',
        amenities: ['2 Floors', 'Capacity: 4-5 persons', 'In Nature', 'Modern Design'],
        price: 'Price on request'
      },
      ru: {
        title: 'Треугольный домик (A-Frame) посуточно',
        address: 'Степанаван',
        rooms: '2 комнаты',
        description: 'Красивый двухэтажный домик в стиле A-frame на лоне природы. Идеально подходит для 4-5 человек.',
        amenities: ['2 этажа', 'На 4-5 человек', 'На природе', 'Современный дизайн'],
        price: 'Цена по запросу'
      },
      hy: {
        title: 'Օրավարձով է տրվում եռանկյունի տնակ Ստեփանավանում',
        address: 'Ստեփանավան',
        rooms: '2 սենյակ',
        description: 'Գեղեցիկ երկհարկանի եռանկյունի տնակ (A-frame) բնության գրկում: Նախատեսված 4-5 անձի համար:',
        amenities: ['2 սենյակ', '4-5 անձի համար', 'Բնության գրկում', 'Երկհարկանի'],
        price: 'Գինը ըստ հարցման'
      }
    }
  },
  {
    id: 'gyulagarak_land_1000sqm_dendropark',
    category: 'land',
    status: 'sale',
    price: '$22,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img922/6405/71pbkJ.jpg',
      'https://imagizer.imageshack.com/img923/1590/LPowjX.jpg',
      'https://imagizer.imageshack.com/img924/290/0Tx7Tl.jpg'
    ],
    locales: {
      en: {
        title: 'Homestead Land in Gyulagarak — 1000 sqm (near Dendropark)',
        address: 'Gyulagarak (near Dendropark)',
        size: '1000 sqm',
        description: 'The plot has 2 frontages: 42m frontage along the asphalt road and 25m width. All utilities run right next to it. View towards Pushkin Pass. Close to nature. Located in one of the quietest neighborhoods. The land is very flat and suitable for construction works. Distance from Dendropark 3km (10 min). Permanent utilities.',
        amenities: ['1000 sqm', '2 Frontages', 'View to Pushkin Pass', 'Flat land']
      },
      ru: {
        title: 'Приусадебный участок в Гюлагараке — 1000 м² (рядом с Дендропарком)',
        address: 'Гюлагарак (рядом с Дендропарком)',
        size: '1000 м²',
        description: 'Участок имеет 2 фасада: 42 м вдоль асфальтированной дороги и ширина 25 м. Все коммуникации проходят прямо рядом. Вид на перевал Пушкина. Близость к природе. Находится в одном из самых тихих районов. Участок очень ровный и подходит для строительных работ. Расстояние от Дендропарка 3 км (10 мин). Постоянные коммуникации.',
        amenities: ['1000 м²', '2 фасада', 'Вид на перевал', 'Ровный участок']
      },
      hy: {
        title: 'Տնամերձ հողամաս Գյուլագարակում — 1000 քմ (Դենդրոպարկի հարեւանությամբ)',
        address: 'Գյուլագարակ (Դենդրոպարկի մոտ)',
        size: '1000 քմ',
        description: 'Հողամասը ունի 2 ճակատային մաս։ 42 մ ճակատ ասֆալտապատ ճանապարհի հետ եւ 25 մ լայնություն։ Բոլոր կոմունիկացիաները անցնում են հենց կողքով։ Տեսարան դեպի Պուշկինի լեռնանցք։ Առավել քան բնությանը մոտ։ Գտնվում է ամենա անաղմուկ եւ հանգիստ  թաղամասերից մեկում։ Հողամասը շատ հարթ է եւ հարմար է շինարարական աշխատանքների համար։ Դենդրոպարկից հեռավորությունը 3կմ (10ր)։ Կոմունիկացիաները մշտական։',
        amenities: ['1000 քմ', '2 ճակատ', 'Տեսարան դեպի լեռնանցք', 'Հարթ հող']
      }
    }
  },
  {
    id: 'arjut_luxury_villa_daily',
    category: 'residential',
    status: 'rent',
    price: 'Price on request',
    featured: true,
    images: [
      'https://imagizer.imageshack.com/img923/3232/sBqaWd.jpg',
      'https://imagizer.imageshack.com/img924/5403/BdK1Es.jpg',
      'https://imagizer.imageshack.com/img923/1543/RTBM5y.jpg',
      'https://imagizer.imageshack.com/img924/9307/zDHwB3.jpg',
      'https://imagizer.imageshack.com/img922/3223/7fqXIg.jpg',
      'https://imagizer.imageshack.com/img924/3364/VvTpPe.jpg',
      'https://imagizer.imageshack.com/img922/3241/06HUpv.jpg',
      'https://imagizer.imageshack.com/img923/7136/vwilnT.jpg',
      'https://imagizer.imageshack.com/img922/3483/TtNToR.jpg',
      'https://imagizer.imageshack.com/img924/3253/veK8tk.jpg',
      'https://imagizer.imageshack.com/img923/3985/IH4Kbu.jpg',
      'https://imagizer.imageshack.com/img923/7397/Y3j9NO.jpg',
      'https://imagizer.imageshack.com/img924/7541/kOqY2r.jpg',
      'https://imagizer.imageshack.com/img923/4348/KKKs2o.jpg',
      'https://imagizer.imageshack.com/img922/3112/UWbOIo.jpg',
      'https://imagizer.imageshack.com/img922/4879/q34Nep.jpg'
    ],
    locales: {
      en: {
        title: 'Large Luxury Villa for Daily Rent in Arjut',
        address: 'Arjut Village (Near Vanadzor), Lori Region',
        rooms: '4 Bedrooms · 1 Living Room',
        description: 'Stunning 3-story luxury villa in the picturesque Lori region. Features 4 bedrooms, a sauna, indoor fireplace (kamin), and an outdoor summer swimming pool. Includes a beautifully landscaped garden with a massive gazebo. Equipped with a modern heating system. Perfect for events and large groups, accommodating up to 18 people.',
        amenities: ['3 Floors', 'Sauna', 'Indoor Fireplace', 'Summer Pool', 'Large Gazebo', 'Heating System', 'Capacity: 18 guests'],
        price: 'Price on request'
      },
      ru: {
        title: 'Роскошный особняк посуточно в селе Арджут',
        address: 'Село Арджут (Рядом с Ванадзором), Лорийская область',
        rooms: '4 Спальни · 1 Гостиная',
        description: 'Великолепная 3-этажная вилла в живописном Лорийском регионе. К услугам гостей 4 спальни, сауна, камин и открытый летний бассейн. На территории разбит красивый ухоженный сад с огромной беседкой. Дом оснащен современной системой отопления. Идеально подходит для мероприятий и больших компаний, вмещает до 18 человек.',
        amenities: ['3 Этажа', 'Сауна', 'Камин', 'Летний бассейн', 'Большая беседка', 'Система отопления', 'До 18 человек'],
        price: 'Цена по запросу'
      },
      hy: {
        title: 'Օրավարձով մեծ եւ շքեղ առանձնատուն Արջուտում',
        address: 'Արջուտ գյուղ (Վանաձորի հարեւանությամբ), Լոռու մարզ',
        rooms: '4 Ննջասենյակ · 1 Հյուրասենյակ',
        description: 'Օրավարձով է տրվում մեծ եւ շքեղ առանձնատուն Արջուտ գյուղում՝ Վանաձորի հարեւանությամբ, չնաշխարհիկ Լոռու մարզում: 3 հարկանի շինություն, ունի 4 ննջասենյակ, շոքեբաղնիք, կամին և ամառային լողավազան: Գեղեցիկ եւ բարեկարգված այգի մեծ տաղավարով: Ապահովված է ջեռուցման համակարգով: Կարող է ընդհունել մինչեւ 18 անձի:',
        amenities: ['3 Հարկանի', 'Շոքեբաղնիք', 'Կամեն', 'Ամառային լողավազան', 'Մեծ տաղավար', 'Ջեռուցման համակարգ', 'Մինչև 18 անձ'],
        price: 'Գինը ըստ հարցման'
      }
    }
  },
  {
    id: 'stepanavan_bagramyan_neighbor_private_house',
    category: 'residential',
    status: 'sale',
    price: '$30,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/4477/f7t7lJ.jpg',
          'https://imagizer.imageshack.com/img922/8704/HkUnmP.jpg',
          'https://imagizer.imageshack.com/img924/1110/n6Ox28.jpg'
    ],
    locales: {
      en: {
        title: 'Private House near Bagramyan First School',
        address: 'Stepanavan (Bagramyan district)',
        description: '400 sqm land plot. Main utilities already on site. Just 20 meters from the main highway. Roof recently replaced. Needs full renovation.',
        amenities: ['400 sqm land', 'Utilities on site', 'Near highway', 'New roof']
      },
      ru: {
        title: 'Частный дом рядом с Первой школой на Баграмян',
        address: 'Степанаван (район Баграмян)',
        description: 'Участок 400 м². Коммуникации подведены. Всего 20 м от трассы. Крыша заменена. Требуется полный ремонт.',
        amenities: ['Участок 400 м²', 'Коммуникации', 'Рядом с трассой', 'Новая крыша']
      },
      hy: {
        title: 'Անհատական տուն Բաղրամյան փողոցի հարևանությամբ',
        address: 'Ստեփանավան (Բաղրամյան թաղամաս)',
        description: '400 քմ հողամաս։ Կոմունիկացիաները պատրաստ են։ Գլխավոր մայրուղուց 20մ հեռավորությամբ։ Տանիքը նոր տեղափոխված է։ Ունի լրջագույն վերանորոգման կարիք։',
        amenities: ['400 քմ հողամաս', 'Կոմունիկացիաներ', 'Մոտ մայրուղուն', 'Նոր տանիք']
      }
    }
  },
  {
    id: 'stepanavan_center_pushkin_land_1800_exclusive',
    category: 'land',
    status: 'sale',
    price: '$130,000',
    featured: false,
    images: [
      'https://i.imgur.com/EVQkY3o.jpeg', 'https://i.imgur.com/lq3Rki9.jpeg', 'https://i.imgur.com/KZyZFGD.jpeg', 'https://i.imgur.com/NsmpUi4.jpeg', 'https://i.imgur.com/5wWuW7R.jpeg'
    ],
    locales: {
      en: {
        title: 'Land Plot for Sale in the Heart of Stepanavan',
        address: 'Stepanavan, Center, Pushkin Street',
        size: '1800 sqm',
        rooms: 'Land/Plot',
        description: 'Exclusive right to sell. 1800 sqm. Flat plot suitable for new construction. ~45m frontage. Utilities available.',
        amenities: ['1800 sqm', 'Flat plot', '≈45 m frontage', 'Utilities available']
      },
      ru: {
        title: 'Продаётся земельный участок в самом сердце Степанавана',
        address: 'Степанаван, Центр, ул. Пушкина',
        size: '1800 м²',
        rooms: 'Земельный участок',
        description: 'Эксклюзивное право продажи. 1800 м². Ровный участок под застройку. Фасад ~45м. Коммуникации доступны.',
        amenities: ['1800 м²', 'Ровный участок', '≈45 м фасад', 'Коммуникации']
      },
      hy: {
        title: 'Վաճառքի հողամաս Ստեփանավանի սրտում',
        address: 'Ստեփանավան, Կենտրոն, Պուշկին փողոց',
        size: '1800 քմ',
        rooms: 'Հողամաս',
        description: 'Վաճառքի բացառիկ իրավունքով։ 1800 քմ։ Հարթ հողամաս՝ հարմար շինարարության համար։ ~45մ ճակատ։ Կոմունիկացիաներ։',
        amenities: ['1800 քմ', 'Հարթ հող', '≈45մ ճակատ', 'Կոմունիկացիաներ']
      }
    }
  },
  {
    id: 'gargar_two_storey_house',
    category: 'residential',
    status: 'sale',
    price: '$32,500',
    featured: false,
    images: [
      'https://i.imgur.com/9AIlwDx.jpeg', 'https://i.imgur.com/pv5RUdM.jpeg', 'https://i.imgur.com/AOURIa4.jpeg', 'https://i.imgur.com/5NaHyrj.jpeg', 'https://i.imgur.com/8scjp1g.jpeg', 'https://i.imgur.com/LmHaol7.jpeg', 'https://i.imgur.com/epl0zpP.jpeg', 'https://i.imgur.com/mPSQvIr.jpeg'
    ],
    locales: {
      en: {
        title: 'Two-storey private house for sale in Gargar village',
        address: 'Gargar',
        rooms: '3 Rooms',
        size: 'House 225 sqm · Land 1200 sqm',
        description: 'Affordable option. 3 very large and bright rooms. Needs renovation. House 225 sqm, Land 1200 sqm. View towards Pushkin Pass. Utilities available.',
        amenities: ['3 Rooms', 'Large Rooms', 'View to Pushkin Pass', 'Utilities available']
      },
      ru: {
        title: 'Продаётся двухэтажный частный дом в селе Гаргар',
        address: 'Гаргар',
        rooms: '3 комнаты',
        size: 'Дом 225 м² · Участок 1200 м²',
        description: 'Доступный вариант. 3 очень больших и светлых комнаты. Требуется ремонт. Дом 225 м², Участок 1200 м². Вид на перевал Пушкина.',
        amenities: ['3 комнаты', 'Большие комнаты', 'Вид на перевал', 'Коммуникации']
      },
      hy: {
        title: 'Վաճառվում է երկհարկանի սեփական տուն Գարգառ գյուղում',
        address: 'Գարգառ',
        rooms: '3 սենյակ',
        size: 'Տուն 225 քմ · Հողամաս 1200 քմ',
        description: 'Մատչելի տարբերակ։ 3 շատ մեծ եւ լուսավոր սենյակներ։ Ունի վերանորոգման կարիք։ Տուն 225քմ, Հող 1200քմ։ Տեսարան դեպի Պուշկինի լեռնանցք։',
        amenities: ['3 սենյակ', 'Մեծ սենյակներ', 'Տեսարան դեպի լեռնանցք', 'Կոմունիկացիաներ']
      }
    }
  },
  {
    id: 'stepanavan_plot_400sqm',
    category: 'land',
    status: 'sale',
    price: '$13,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img923/3770/Mxr0BT.jpg',
      'https://imagizer.imageshack.com/img924/7964/5KdGd4.jpg',
      'https://imagizer.imageshack.com/img923/6507/CnuMl4.jpg',
      'https://imagizer.imageshack.com/img923/8883/Zxt2GL.jpg'
    ],
    locales: {
      en: {
        title: '400 sqm Land Plot for Sale in Stepanavan',
        address: 'Stepanavan',
        size: '400 sqm',
        description: 'Affordable offer. Located in one of the best parts of the city. Two open and wide frontages along the asphalted road. Flat land suitable for construction.',
        amenities: ['400 sqm', 'Two frontages', 'Flat land', 'Utilities available']
      },
      ru: {
        title: 'Продаётся земельный участок 400 м² в Степанаване',
        address: 'Степанаван',
        size: '400 м²',
        description: 'Доступное предложение. В одном из лучших районов. Два открытых и широких фасада к асфальтированной дороге. Ровный рельеф.',
        amenities: ['400 м²', 'Два фасада', 'Ровный рельеф', 'Коммуникации']
      },
      hy: {
        title: 'Վաճառվում է 400 քմ հողամաս Ստեփանավանում',
        address: 'Ստեփանավան',
        size: '400 քմ',
        description: 'Մատչելի առաջարկ։ Քաղաքի լավագույն հատվածներից մեկում։ Երկու բաց եւ մեծ ճակատ ասֆալտապատ ճանապարհի հետ։ Հարթ հողամաս։',
        amenities: ['400 քմ', 'Երկու ճակատ', 'Հարթ հող', 'Կոմունիկացիաներ']
      }
    }
  },
  {
    id: 'five_room_house_long_term',
    category: 'residential',
    status: 'long_term',
    price: '֏ 150,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img924/4443/ppQFps.jpg',
      'https://imagizer.imageshack.com/img922/1639/OwlLZz.jpg',
      'https://imagizer.imageshack.com/img923/6035/630pl1.jpg',
      'https://imagizer.imageshack.com/img924/3318/vYJmVY.jpg',
      'https://imagizer.imageshack.com/img922/9259/EC3blw.jpg',
      'https://imagizer.imageshack.com/img923/6888/QVhDge.jpg',
      'https://imagizer.imageshack.com/img922/4021/wThkzf.jpg',
      'https://imagizer.imageshack.com/img923/4461/xbteHr.jpg',
      'https://imagizer.imageshack.com/img924/1893/SLMoUf.jpg',
      'https://imagizer.imageshack.com/img924/399/nA5UGr.jpg',
      'https://imagizer.imageshack.com/img922/9266/eXweyX.jpg',
      'https://imagizer.imageshack.com/img924/7702/VRvz7f.jpg',
      'https://imagizer.imageshack.com/img923/5262/7oGBce.jpg',
      'https://imagizer.imageshack.com/img924/6798/AE35zP.jpg',
      'https://imagizer.imageshack.com/img922/7637/g5yBG0.jpg',
      'https://imagizer.imageshack.com/img923/4195/H2mplT.jpg'
    ],
    locales: {
      en: {
        title: 'Five-Room House — Long-Term',
        address: 'Stepanavan',
        rooms: '5 Rooms',
        baths: '2 Bathrooms',
        description: 'Furnished with appliances. Two-storey. Baxi heating. Sunny and bright.',
        amenities: ['Furnished', 'Appliances', 'Two-storey', 'Baxi heating', 'Sunny']
      },
      ru: {
        title: 'Пятикомнатный дом — Долгосрочно',
        address: 'Степанаван',
        rooms: '5 комнат',
        baths: '2 санузла',
        description: 'С мебелью и техникой. Двухэтажный. Отопление Baxi. Солнечный и светлый.',
        amenities: ['С мебелью', 'Бытовая техника', 'Двухэтажный', 'Отопление Baxi', 'Солнечный']
      },
      hy: {
        title: 'Հինգ սենյականոց տուն — Երկարաժամկետ',
        address: 'Ստեփանավան',
        rooms: '5 սենյակ',
        baths: '2 սանհանգույց',
        description: 'Գույքով եւ տեխնիկայով։ Երկհարկանի։ Baxi ջեռուցում։ Արեւոտ եւ լուսավոր։',
        amenities: ['Կահավորված', 'Տեխնիկա', 'Երկհարկանի', 'Baxi ջեռուցում', 'Արեւոտ']
      }
    }
  },
  {
    id: 'gyulagarak_dendropark_plot_4350',
    category: 'land',
    status: 'sale',
    price: '$60,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img922/1903/P0rJMW.jpg',
        'https://imagizer.imageshack.com/img923/9973/cWn4YV.jpg',
        'https://imagizer.imageshack.com/img924/1885/tOTHrR.jpg',
        'https://imagizer.imageshack.com/img923/1479/rMkOxA.jpg'
    ],
    locales: {
      en: {
        title: 'Riverside Plot in Dendropark, Gyulagarak — 4,350 sqm',
        address: 'Gyulagarak (Dendropark)',
        size: '4,350 sqm',
        description: 'Affordable option. Agricultural designation. Located on the river bank. ~90m frontage along river.',
        amenities: ['4,350 sqm', 'Riverside', 'Agricultural', '90m frontage']
      },
      ru: {
        title: 'Участок у реки в Дендропарке Гюлагарака — 4,350 м²',
        address: 'Гюлагарак (Дендропарк)',
        size: '4,350 м²',
        description: 'Доступный вариант. Сельскохозяйственного назначения. Расположен на берегу реки. ~90м фасад вдоль реки.',
        amenities: ['4,350 м²', 'У реки', 'Сельхоз', '90м фасад']
      },
      hy: {
        title: 'Դենդրոպարկ Գյուլագարակ — գետի ափին հողամաս 4350քմ',
        address: 'Գյուլագարակ (Դենդրոպարկ)',
        size: '4350 քմ',
        description: 'Մատչելի տարբերակ։ Գյուղ նշանակության։ Գտնվում է գետի ափին։ ~90մ ճակատ գետի հետ։',
        amenities: ['4350 քմ', 'Գետափին', 'Գյուղատնտեսական', '90մ ճակատ']
      }
    }
  },
  {
    id: 'stepanavan_two_storey_house',
    category: 'residential',
    status: 'sale',
    price: '$35,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/2782/jtTHWl.jpg',
        'https://imagizer.imageshack.com/img924/5901/DaQeEf.jpg',
        'https://imagizer.imageshack.com/img922/8676/hfPjDa.jpg',
        'https://imagizer.imageshack.com/img924/6177/N3fwX5.jpg',
        'https://imagizer.imageshack.com/img923/9048/3lh6HV.jpg',
        'https://imagizer.imageshack.com/img922/2590/nJseO4.jpg',
        'https://imagizer.imageshack.com/img922/4398/1aV0Ml.jpg'
    ],
    locales: {
      en: {
        title: 'Two-Storey House in Stepanavan — 219 sqm',
        address: 'Stepanavan',
        size: '219 sqm',
        description: 'Requires interior renovation. Small land plot available. Roof in good condition. Open balcony. Utilities present.',
        amenities: ['219 sqm', 'Open Balcony', 'Good Roof', 'Utilities']
      },
      ru: {
        title: 'Двухэтажный дом в Степанаване — 219 м²',
        address: 'Степанаван',
        size: '219 м²',
        description: 'Требуется внутренняя отделка. Небольшой участок. Крыша в хорошем состоянии. Открытый балкон. Коммуникации.',
        amenities: ['219 м²', 'Балкон', 'Хорошая крыша', 'Коммуникации']
      },
      hy: {
        title: 'Վաճառվում է երկհարկանի տուն Ստեփանավանում — 219 քմ',
        address: 'Ստեփանավան',
        size: '219 քմ',
        description: 'Ունի ներքին վերանորոգման կարիք։ Փոքր հողամաս։ Տանիքը լավ վիճակում է։ Բաց պատշգամբ։ Կոմունիկացիաներ։',
        amenities: ['219 քմ', 'Բաց պատշգամբ', 'Լավ տանիք', 'Կոմունիկացիաներ']
      }
    }
  },
  {
    id: 'alea_semi_built_house_plot',
    category: 'residential',
    status: 'sale',
    price: '$35,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img923/8397/CYhvzq.jpg',
      'https://imagizer.imageshack.com/img924/3218/ojAMz7.jpg',
      'https://imagizer.imageshack.com/img922/5003/fW7DFy.jpg',
      'https://imagizer.imageshack.com/img924/2874/KNp4tC.jpg',
      'https://imagizer.imageshack.com/img923/356/dmQkBC.jpg',
      'https://imagizer.imageshack.com/img923/1651/ZwxOkE.jpg'
    ],
    locales: {
      en: {
        title: 'Semi-built House for Sale near Alea Park',
        address: 'Stepanavan (near Alea Park)',
        description: 'Semi-built private house near Alea Park. Close to main road. Great potential for finishing. Calm neighborhood.',
        amenities: ['Semi-built', 'Near Park', 'Quiet Area', 'Utilities nearby']
      },
      ru: {
        title: 'Полудостроенный дом на продажу рядом с парком Алея',
        address: 'Степанаван (рядом с парком Алея)',
        description: 'Полудостроенный частный дом. Рядом с главной дорогой. Большой потенциал. Спокойный район.',
        amenities: ['Недострой', 'Рядом парк', 'Тихий район', 'Коммуникации рядом']
      },
      hy: {
        title: 'Կիսակառույց տուն վաճառքի՝ Ալեա այգու հարեւանությամբ',
        address: 'Ստեփանավան (Ալեա այգու մոտ)',
        description: 'Կիսակառույց սեփական տուն։ Մոտ է գլխավոր ճանապարհին։ Մեծ հնարավորություններ։ Խաղաղ թաղամաս։',
        amenities: ['Կիսակառույց', 'Այգու մոտ', 'Խաղաղ թաղամաս', 'Կոմունիկացիաներ մոտ']
      }
    }
  },
  {
    id: 'stepanavan_private_house_sale',
    category: 'residential',
    status: 'sale',
    price: '$32,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/4169/fhrBUb.jpg',
        'https://imagizer.imageshack.com/img924/7758/XdtP9x.jpg',
        'https://imagizer.imageshack.com/img923/8225/CAqp2s.jpg',
        'https://imagizer.imageshack.com/img924/4345/ivEnBA.jpg',
        'https://imagizer.imageshack.com/img922/229/F7LB3G.jpg',
        'https://imagizer.imageshack.com/img923/2487/2uGBrR.jpg',
        'https://imagizer.imageshack.com/img924/9116/BZnDSC.jpg'
    ],
    locales: {
      en: {
        title: 'Private House in Stepanavan — 62 sqm house, 190 sqm land',
        address: 'Stepanavan',
        rooms: '2 Bedrooms · 1 Living Room',
        description: 'Newly renovated. Baxi heating. Open balcony. European windows. Close to center.',
        amenities: ['Renovated', 'Baxi', 'Balcony', 'Close to Center']
      },
      ru: {
        title: 'Частный дом в Степанаване — дом 62 м², участок 190 м²',
        address: 'Степанаван',
        rooms: '2 спальни · 1 гостиная',
        description: 'Новый ремонт. Система Baxi. Открытый балкон. Европейские окна. Близко к центру.',
        amenities: ['Ремонт', 'Baxi', 'Балкон', 'Близко к центру']
      },
      hy: {
        title: 'Սեփական տուն Ստեփանավանում — տուն 62 քմ, հող 190 քմ',
        address: 'Ստեփանավան',
        rooms: '2 ննջասենյակ · 1 հյուրասենյակ',
        description: 'Նոր վերանորոգված։ Baxi ջեռուցում։ Բաց պատշգամբ։ Մոտ է կենտրոնին։',
        amenities: ['Վերանորոգված', 'Baxi', 'Պատշգամբ', 'Կենտրոնին մոտ']
      }
    }
  },
  {
    id: 'stepanavan_house_600sqm_land',
    category: 'residential',
    status: 'sale',
    price: '$39,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/2890/GS5FOR.jpg',
'https://imagizer.imageshack.com/img924/1661/nu906a.jpg',
'https://imagizer.imageshack.com/img923/8781/uZvOPU.jpg',
'https://imagizer.imageshack.com/img923/4964/Czttz2.jpg',
'https://imagizer.imageshack.com/img924/3318/ZQZdEc.jpg',
'https://imagizer.imageshack.com/img924/3522/prbI7W.jpg'
    ],
    locales: {
      en: {
        title: 'Private House in Stepanavan — 600 sqm land',
        address: 'Stepanavan',
        rooms: '3 Rooms',
        description: 'Private house with 600 sqm homestead land. Barn, fruit trees, partly furnished. Very close to nature.',
        amenities: ['600 sqm land', 'Barn', 'Fruit trees', 'Partly furnished']
      },
      ru: {
        title: 'Собственный дом в Степанаване — участок 600 м²',
        address: 'Степанаван',
        rooms: '3 комнаты',
        description: 'Дом с участком 600 м². Сарай, плодовые деревья, частично с мебелью. Близко к природе.',
        amenities: ['Участок 600 м²', 'Сарай', 'Плодовые деревья', 'Частично мебель']
      },
      hy: {
        title: 'Սեփական տուն Ստեփանավանում — հողամաս 600 քմ',
        address: 'Ստեփանավան',
        rooms: '3 սենյակ',
        description: 'Սեփական տուն 600 քմ տնամերձ հողամասով։ Անասնագոմ, պտղատու ծառեր, մասամբ գույքով։',
        amenities: ['Հողամաս 600 քմ', 'Անասնագոմ', 'Պտղատու ծառեր', 'Մասամբ գույք']
      }
    }
  },
  {
    id: 'stepanavan_city_center_new_building_apartment',
    category: 'residential',
    status: 'sale',
    price: '$45,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/8724/LMvdQU.jpg',
'https://imagizer.imageshack.com/img923/9180/3F72BR.jpg',
'https://imagizer.imageshack.com/img924/3404/P1zmd5.jpg',
'https://imagizer.imageshack.com/img922/6808/ZOkxsn.jpg',
'https://imagizer.imageshack.com/img922/2302/Pxg92s.jpg',
'https://imagizer.imageshack.com/img924/6290/aTUEyR.jpg',
'https://imagizer.imageshack.com/img923/443/7pq3B9.jpg'
    ],
    locales: {
      en: {
        title: '3-room apartment — City Center, 4th floor (New Building)',
        address: 'Stepanavan (City Center)',
        rooms: '2 Bedrooms · 1 Living Room',
        size: '86 sqm',
        description: '86 sqm. Two-sided orientation. Baxi heating. Good condition. Very sunny. European windows. Central location.',
        amenities: ['86 sqm', 'Baxi', 'Sunny', 'New Building', 'Center']
      },
      ru: {
        title: '3‑комнатная квартира в центре, 4‑й этаж (Новостройка)',
        address: 'Степанаван (Центр)',
        rooms: '2 спальни · 1 гостиная',
        size: '86 м²',
        description: '86 м². Двусторонняя ориентация. Отопление Baxi. Хорошее состояние. Солнечная. Евроокна. Центр.',
        amenities: ['86 м²', 'Baxi', 'Солнечная', 'Новостройка', 'Центр']
      },
      hy: {
        title: '3 սենյականոց բնակարան — Կենտրոն, 4-րդ հարկ (Նորակառույց)',
        address: 'Ստեփանավան (Կենտրոն)',
        rooms: '2 ննջասենյակ · 1 հյուրասենյակ',
        size: '86 քմ',
        description: '86 քմ։ Երկկողմանի դիրք։ Baxi համակարգ։ Լավ վիճակ։ Արեւոտ։ Եվրոպական լուսամուտներ։ Կենտրոն։',
        amenities: ['86 քմ', 'Baxi', 'Արեւոտ', 'Նորակառույց', 'Կենտրոն']
      }
    }
  },
  {
    id: 'stepanavan_private_house_center_sale',
    category: 'residential',
    status: 'sale',
    price: '$70,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/2887/Zqqt9k.jpg',
        'https://imagizer.imageshack.com/img923/669/c5yVoy.jpg',
        'https://imagizer.imageshack.com/img923/1313/z3ObhE.jpg',
        'https://imagizer.imageshack.com/img923/4788/SugJCd.jpg',
        'https://imagizer.imageshack.com/img923/2637/mLtrLG.jpg',
        'https://imagizer.imageshack.com/img922/4270/j61xNN.jpg',
        'https://imagizer.imageshack.com/img924/87/Q91ZCJ.jpg'
    ],
    locales: {
      en: {
        title: 'Private House for Sale in Stepanavan',
        address: 'Stepanavan, Center',
        description: 'Stone building + small cabin. 400 sqm land. Next to police station. Frontage to main road. Fruit trees. Suitable for business.',
        amenities: ['400 sqm land', 'Center', 'Stone building', 'Business potential']
      },
      ru: {
        title: 'Продаётся частный дом в Степанаване',
        address: 'Степанаван, Центр',
        description: 'Каменное строение + домик. Участок 400 м². Рядом с полицией. Фасад на главную дорогу. Плодовые деревья. Под бизнес.',
        amenities: ['Участок 400 м²', 'Центр', 'Каменный дом', 'Бизнес-потенциал']
      },
      hy: {
        title: 'Վաճառվում է սեփական տուն Ստեփանավանում',
        address: 'Ստեփանավան, Կենտրոն',
        description: 'Քարե շինություն + փոքրիկ դոմիկ։ 400քմ հողամաս։ Ոստիկանության հարեւանությամբ։ Պտղատու ծառեր։ Հարմար է բիզնեսի համար։',
        amenities: ['400 քմ հող', 'Կենտրոն', 'Քարե տուն', 'Բիզնես պոտենցիալ']
      }
    }
  },
  {
    id: 'stepanavan_5room_house_long_term_new',
    category: 'residential',
    status: 'long_term',
    price: '֏ 130,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img922/2204/aSg7As.jpg',
        'https://imagizer.imageshack.com/img923/4103/z8ESvm.jpg',
        'https://imagizer.imageshack.com/img924/3563/Em5hHN.jpg',
        'https://imagizer.imageshack.com/img923/2880/OvIw3a.jpg',
        'https://imagizer.imageshack.com/img924/5634/phnLCG.jpg',
        'https://imagizer.imageshack.com/img922/4175/pY8gs7.jpg',
        'https://imagizer.imageshack.com/img923/8169/r7oQLj.jpg',
        'https://imagizer.imageshack.com/img922/3445/Melubw.jpg',
        'https://imagizer.imageshack.com/img923/5362/dYefRA.jpg'
    ],
    locales: {
      en: {
        title: 'Long-Term Rent — 5-Room Private House',
        address: 'Stepanavan',
        rooms: '5 Rooms',
        description: '4 bedrooms, 1 living room. Large garden. Gazebo area. Large open balcony. Fully furnished. Two kitchens. Quiet neighborhood.',
        amenities: ['5 Rooms', 'Large Garden', 'Furnished', '2 Kitchens', 'Balcony']
      },
      ru: {
        title: 'Долгосрочная аренда — 5‑комнатный частный дом',
        address: 'Степанаван',
        rooms: '5 комнат',
        description: '4 спальни, 1 гостиная. Большой сад. Зона для беседки. Большой балкон. Полностью меблирован. Две кухни. Тихий район.',
        amenities: ['5 комнат', 'Большой сад', 'Мебель', '2 кухни', 'Балкон']
      },
      hy: {
        title: 'Երկարաժամկետ վարձ — 5 սենյականոց առանձնատուն',
        address: 'Ստեփանավան',
        rooms: '5 սենյակ',
        description: '4 ննջասենյակ, 1 հյուրասենյակ։ Մեծ այգի։ Տաղավարի տեղ։ Մեծ բաց պատշգամբ։ Կահավորված։ Երկու խոհանոց։',
        amenities: ['5 սենյակ', 'Մեծ այգի', 'Կահավորված', '2 խոհանոց', 'Պատշգամբ']
      }
    }
  },
  {
    id: 'stepanavan_large_private_house_long_term',
    category: 'residential',
    status: 'long_term',
    price: '֏80,000',
    featured: false,
    images: [
      'https://i.imgur.com/eDgmfGp.jpeg', 'https://i.imgur.com/QK2n9Tf.jpeg', 'https://i.imgur.com/paabEIJ.jpeg',
      'https://i.imgur.com/7k18w0O.jpeg', 'https://i.imgur.com/2ab7TUv.jpeg', 'https://i.imgur.com/i47hDBs.jpeg'
    ],
    locales: {
      en: {
        title: 'Long-Term — Large Private House',
        address: 'Stepanavan, Yeritasardakan St.',
        rooms: '4 Rooms',
        description: 'Baxi heating. Large garden. Barn. Garage. Furniture and appliances included. Available from Oct 1.',
        amenities: ['4 Rooms', 'Baxi', 'Garden', 'Garage', 'Furnished']
      },
      ru: {
        title: 'Долгосрочно — Большой частный дом',
        address: 'Степанаван, ул. Еритасардакан',
        rooms: '4 комнаты',
        description: 'Отопление Baxi. Большой сад. Хлев. Гараж. Мебель и техника. С 1 октября.',
        amenities: ['4 комнаты', 'Baxi', 'Сад', 'Гараж', 'Мебель']
      },
      hy: {
        title: 'Երկարաժամկետ — Մեծ առանձնատուն',
        address: 'Ստեփանավան, Երիտասարդական փ.',
        rooms: '4 սենյակ',
        description: 'Baxi համակարգ։ Մեծ այգի։ Անասնագոմ։ Ավտոտնակ։ Գույք և տեխնիկա։ Հոկտեմբերի 1-ից։',
        amenities: ['4 սենյակ', 'Baxi', 'Այգի', 'Ավտոտնակ', 'Գույք']
      }
    }
  },
  {
    id: 'stepanavan_center_large_private_house_long_term',
    category: 'residential',
    status: 'long_term',
    price: '֏100,000',
    featured: false,
    images: [
         'https://imagizer.imageshack.com/img923/60/XmwVJI.jpg',
'https://imagizer.imageshack.com/img923/7663/YxPwXW.jpg',
'https://imagizer.imageshack.com/img924/6867/q8hgL1.jpg',
'https://imagizer.imageshack.com/img923/4056/rhbGOL.jpg',
'https://imagizer.imageshack.com/img924/2445/6fI6wI.jpg',
'https://imagizer.imageshack.com/img923/8901/3GGPxg.jpg',
'https://imagizer.imageshack.com/img924/2447/arhqGi.jpg',
'https://imagizer.imageshack.com/img922/1097/07UOKs.jpg'


    ],
    locales: {
      en: {
        title: 'Long-Term — Large Private House (Center)',
        address: 'Stepanavan (Center)',
        rooms: '5 Rooms',
        description: 'Baxi heating system. Furniture and appliances included. Large garden. Gazebo.',
        amenities: ['5 Rooms', 'Baxi', 'Garden', 'Gazebo', 'Furnished']
      },
      ru: {
        title: 'Долгосрочно — Большой частный дом (Центр)',
        address: 'Степанаван (Центр)',
        rooms: '5 комнат',
        description: 'Система отопления Baxi. Мебель и техника. Большой сад. Беседка.',
        amenities: ['5 комнат', 'Baxi', 'Сад', 'Беседка', 'Мебель']
      },
      hy: {
        title: 'Երկարաժամկետ — Մեծ առանձնատուն (Կենտրոն)',
        address: 'Ստեփանավան (Կենտրոն)',
        rooms: '5 սենյակ',
        description: 'Baxi համակարգ։ Գույք եւ տեխնիկա։ Մեծ այգի։ Տաղավար։',
        amenities: ['5 սենյակ', 'Baxi', 'Այգի', 'Տաղավար', 'Գույք']
      }
    }
  },
  {
    id: 'stepanavan_leftbank_1room_closed_balcony_sale_kika',
    category: 'residential',
    status: 'sale',
    price: '$23,500',
    featured: false,
    images: [
      'https://i.imgur.com/NjjqPSf.jpeg', 'https://i.imgur.com/v9g2FRE.jpeg', 'https://i.imgur.com/APUHj1D.jpeg',
      'https://i.imgur.com/wmsG4F6.jpeg', 'https://i.imgur.com/ogm44Np.jpeg'
    ],
    locales: {
      en: {
        title: 'For Sale — 1-Room House/Apartment',
        address: 'Stepanavan (Left Bank, 4th floor)',
        rooms: '1 Room + Closed Balcony',
        description: '4th floor. Left Bank (Dzakhap). Sunny and bright. In livable condition.',
        amenities: ['1 Room', 'Closed Balcony', '4th Floor', 'Sunny']
      },
      ru: {
        title: '1-комнатный дом',
        address: 'Степанаван (Левый берег, 4-й этаж)',
        rooms: '1 комната + закрытый балкон',
        description: '4-й этаж. Левый берег (Дзахап). Солнечный и светлый. В жилом состоянии.',
        amenities: ['1 комната', 'Закрытый балкон', '4-й этаж', 'Солнечный']
      },
      hy: {
        title: '1 սենյականոց վաճառքի տուն',
        address: 'Ստեփանավան (Ձախափ, 4-րդ հարկ)',
        rooms: '1 սենյակ + փակ պատշգամբ',
        description: '4-րդ հարկ։ Ձախափ։ Արեւոտ եւ լուսավոր։ Բնակելի վիճակում։',
        amenities: ['1 սենյակ', 'Փակ պատշգամբ', '4-րդ հարկ', 'Արեւոտ']
      }
    }
  },
  {
    id: 'stepanavan_center_g_nzhdeh_commercial_lease',
    category: 'commercial',
    status: 'long_term',
    price: '֏120,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/2364/kwdHqD.jpg',
        'https://imagizer.imageshack.com/img922/9875/Fx9RtV.jpg',
        'https://imagizer.imageshack.com/img923/2658/Rgv75y.jpg',
        'https://imagizer.imageshack.com/img923/2830/OMngp0.jpg',
        'https://imagizer.imageshack.com/img923/1427/Ci0Aip.jpg'
    ],
    locales: {
      en: {
        title: 'For Lease — Commercial Space (City Center)',
        address: 'Stepanavan (City Center, G. Nzhdeh St.)',
        rooms: 'Commercial Space',
        description: 'Panoramic windows. First line. Next to the newly opened park. In the busiest part of the city.',
        amenities: ['Panoramic windows', 'First line', 'Near park', 'Busy area']
      },
      ru: {
        title: 'В аренду — Коммерческое помещение (Центр)',
        address: 'Степанаван (Центр, ул. Г. Нжде)',
        rooms: 'Коммерческое помещение',
        description: 'Панорамные окна. Первая линия. Рядом с новым парком. В самой оживлённой части города.',
        amenities: ['Панорамные окна', 'Первая линия', 'Рядом парк', 'Оживлённый район']
      },
      hy: {
        title: 'Վարձակալություն — Կոմերցիոն տարածք (Կենտրոն)',
        address: 'Ստեփանավան (Կենտրոն, Գ. Նժդեհ փ.)',
        rooms: 'Կոմերցիոն տարածք',
        description: 'Պանորամային լուսամուտներ։ Առաջին գիծ։ Նորաբաց այգու հարեւանությամբ։ Քաղաքի ամենա բանուկ հատվածում։',
        amenities: ['Պանորամային', 'Առաջին գիծ', 'Այգու մոտ', 'Բանուկ հատված']
      }
    }
  },
  {
    id: 'stepanavan_longterm_4room_large_private_house_hav',
    category: 'residential',
    status: 'long_term',
    price: '֏160,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img922/3262/S9KYXe.jpg',
        'https://imagizer.imageshack.com/img923/466/Ug0iSe.jpg',
        'https://imagizer.imageshack.com/img924/4421/SPljSc.jpg',
        'https://imagizer.imageshack.com/img924/1283/FuKx2o.jpg',
        'https://imagizer.imageshack.com/img924/7379/uqdwq7.jpg',
        'https://imagizer.imageshack.com/img923/1738/y7pEVK.jpg',
        'https://imagizer.imageshack.com/img922/3803/YmvZWj.jpg',
        'https://imagizer.imageshack.com/img923/246/g3DsgA.jpg',
        'https://imagizer.imageshack.com/img924/1218/LDxnyC.jpg'
    ],
    locales: {
      en: {
        title: 'Long-Term — 4-Room Large Private House',
        address: 'Stepanavan',
        rooms: '3 Bedrooms + 1 Living Room',
        description: 'Euro-renovated. Modern furniture/appliances. Italian fireplace. Baxi heating. Garage. New building. Price includes utilities.',
        amenities: ['Euro-renovated', 'Italian fireplace', 'Baxi', 'Garage', 'Utilities included']
      },
      ru: {
        title: 'Долгосрочно — 4‑комнатный большой частный дом',
        address: 'Степанаван',
        rooms: '3 спальни + 1 гостиная',
        description: 'Евроремонт. Мебель/техника. Итальянский камин. Baxi. Гараж. Новостройка. Коммунальные включены.',
        amenities: ['Евроремонт', 'Итальянский камин', 'Baxi', 'Гараж', 'Коммунальные включены']
      },
      hy: {
        title: 'Երկարաժամկետ — 4 սենյականոց մեծ առանձնատուն',
        address: 'Ստեփանավան',
        rooms: '3 ննջարան + 1 հյուրասենյակ',
        description: 'Եվրովերանորոգված։ Ժամանակակից գույք/տեխնիկա։ Իտալական վառարան։ Baxi։ Ավտոտնակ։ Նորակառույց։ Կոմունալները ներառված։',
        amenities: ['Եվրովերանորոգված', 'Իտալական վառարան', 'Baxi', 'Ավտոտնակ', 'Կոմունալները ներառված']
      }
    }
  },
  {
    id: 'stepanavan_center_2room_longterm_gva',
    category: 'residential',
    status: 'long_term',
    price: '֏65,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/8278/Rh9TyE.jpg',
        'https://imagizer.imageshack.com/img923/7426/l2c3KA.jpg',
        'https://imagizer.imageshack.com/img924/2549/6joZxR.jpg',
        'https://imagizer.imageshack.com/img922/7493/B69YTi.jpg',
        'https://imagizer.imageshack.com/img924/6446/XNhfmm.jpg'
    ],
    locales: {
      en: {
        title: 'Long-Term — 2-Room Apartment (Center)',
        address: 'Stepanavan City Center (near Square)',
        rooms: '2 Rooms',
        description: 'Furniture and appliances included. Near the square.',
        amenities: ['2 Rooms', 'Furnished', 'Appliances']
      },
      ru: {
        title: 'Долгосрочно — 2‑комнатная квартира',
        address: 'Центр Степанавана (у площади)',
        rooms: '2 комнаты',
        description: 'С мебелью и техникой. Рядом с площадью.',
        amenities: ['2 комнаты', 'Мебель', 'Техника']
      },
      hy: {
        title: 'Երկարաժամկետ — 2 սենյականոց բնակարան',
        address: 'Ստեփանավան Կենտրոն (Հրապարակի մոտ)',
        rooms: '2 սենյակ',
        description: 'Առկա գույքով եւ տեխնիկայով։ Հրապարակի հարեւանությամբ։',
        amenities: ['2 սենյակ', 'Գույք', 'Տեխնիկա']
      }
    }
  },
  {
    id: 'stepanavan_dendropark_mixed_land_hoxamas',
    category: 'land',
    status: 'sale',
    price: '$30/sq m',
    featured: false,
    images: [
        'https://i.imgur.com/deu5GdQ.jpeg',
        'https://i.imgur.com/42UXrMp.jpeg',
        'https://i.imgur.com/VYkgys1.jpeg',
        'https://i.imgur.com/e8KJaYH.jpeg',
        'https://i.imgur.com/4JDzJn4.jpeg',
        'https://i.imgur.com/Ms7dYof.jpeg',

    ],
    locales: {
      en: {
        title: 'For Sale — Mixed-development Land (Dendropark)',
        address: 'Stepanavan (near Dendropark, by forest)',
        size: 'Price: $30/sq m',
        description: 'Near Dendropark, right by the forest. 25m frontage, 550m length. Close to nature. Ideal for business/ecotourism.',
        amenities: ['$30/sq m', 'By the forest', '25m frontage']
      },
      ru: {
        title: 'Продаётся участок смешанной застройки (Дендропарк)',
        address: 'Степанаван (у Дендропарка, у леса)',
        size: 'Цена: $30/м²',
        description: 'Рядом с Дендропарком, у самого леса. Фасад 25м, длина 550м. Идеально для бизнеса/экотуризма.',
        amenities: ['$30/м²', 'У леса', '25м фасад'],
        price: '$30/м²'
      },
      hy: {
        title: 'Վաճառք — Խառը կառուցապատման հողամաս (Դենդրոպարկ)',
        address: 'Ստեփանավան (Դենդրոպարկի մոտ, անտառի կողքին)',
        size: 'Գինը՝ $30/քմ',
        description: 'Դենդրոպարկի մոտ, անտառի կողքին։ 25մ ճակատ, 550մ երկարություն։ Հարմար է բիզնեսի/էկոտուրիզմի համար։',
        amenities: ['$30/քմ', 'Անտառի կողքին', '25մ ճակատ'],
        price: '$30/քմ'
      }
    }
  },
  {
    id: 'stepanavan_luxury_large_house_longterm_loks',
    category: 'residential',
    status: 'long_term',
    price: '֏210,000',
    featured: false,
    images: [
       "https://i.imgur.com/1KkxGz4.jpeg",
'https://i.imgur.com/4t8trgv.jpeg',
'https://i.imgur.com/WqTWlCI.jpeg',
'https://i.imgur.com/kS3fo0y.jpeg',
'https://i.imgur.com/thY0aZD.jpeg',
'https://i.imgur.com/VWkmisV.jpeg',
'https://i.imgur.com/Rup3gm9.jpeg',
'https://i.imgur.com/PNzh3Hb.jpeg',
'https://i.imgur.com/R81DZrV.jpeg',
'https://i.imgur.com/7PLE2RO.jpeg'

       
    ],
    locales: {
      en: {
        title: 'Long-Term — Luxury Private House (Stepanavan)',
        address: 'Stepanavan',
        description: 'Designer renovation. Modern security. Fully furnished. Panoramic windows. Garage space. Large garden with summer kitchen. Night lighting.',
        amenities: ['Designer renovation', 'Security system', 'Panoramic windows', 'Large garden', 'Summer kitchen']
      },
      ru: {
        title: 'Долгосрочно — Роскошный частный дом (Степанаван)',
        address: 'Степанаван',
        description: 'Дизайнерский ремонт. Охрана. Полностью меблирован. Панорамные окна. Гараж. Большой сад с летней кухней. Ночное освещение.',
        amenities: ['Дизайнерский ремонт', 'Охрана', 'Панорамные окна', 'Большой сад', 'Летняя кухня']
      },
      hy: {
        title: 'Երկարաժամկետ — Գերշքեղ առանձնատուն (Ստեփանավան)',
        address: 'Ստեփանավան',
        description: 'Դիզայներական վերանորոգում։ Անվտանգության համակարգ։ Կահավորված։ Պանորամային լուսամուտներ։ Ավտոտնակի տեղ։ Մեծ այգի ամառային խոհանոցով։',
        amenities: ['Դիզայներական', 'Անվտանգություն', 'Պանորամային', 'Մեծ այգի', 'Ամառային խոհանոց']
      }
    }
  },
  {
    id: 'stepanavan_center_apartment_sale_exclusive_v3',
    category: 'residential',
    status: 'sale',
    price: '$34,500',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/7423/4edZ1M.jpg',
'https://imagizer.imageshack.com/img923/9633/9m5oV1.jpg',
'https://imagizer.imageshack.com/img923/5185/dsMdRv.jpg',
'https://imagizer.imageshack.com/img924/5172/ocpHSg.jpg',
'https://imagizer.imageshack.com/img923/2818/xvUKxx.jpg'
    ],
    locales: {
      en: {
        title: 'For Sale — Exclusive Sale Apartment',
        address: 'Stepanavan (City Center)',
        description: 'Exclusive right. City Center. State condition. Baxi heating. Open balcony. Floor 4/2. Street view.',
        amenities: ['Exclusive', 'City Center', 'Baxi', 'Balcony', 'Floor 4/2']
      },
      ru: {
        title: 'Продажа — Эксклюзивное право продажи',
        address: 'Степанаван (Центр)',
        description: 'Эксклюзив. Центр. Гос. состояние. Отопление Baxi. Открытый балкон. Этаж 4/2. Вид на улицу.',
        amenities: ['Эксклюзив', 'Центр', 'Baxi', 'Балкон', 'Этаж 4/2']
      },
      hy: {
        title: 'Վաճառվում է բնակարան Ստեփանավանի կենտրոնում',
        address: 'Ստեփանավան (Կենտրոն)',
        description: 'Բացառիկ իրավունք։ Կենտրոն։ Պետական վիճակ։ Baxi։ Բաց պատշգամբ։ Հարկ 4/2։ Տեսարան դեպի փողոց։',
        amenities: ['Բացառիկ', 'Կենտրոն', 'Baxi', 'Պատշգամբ', 'Հարկ 4/2']
      }
    }
  },
  {
    id: 'stepanavan_prometheus_2room_longterm',
    category: 'residential',
    status: 'long_term',
    price: '֏100,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/7310/1FdAcl.jpg',
'https://imagizer.imageshack.com/img924/4937/NpdnEp.jpg',
'https://imagizer.imageshack.com/img924/9711/AgIaQO.jpg',
'https://imagizer.imageshack.com/img922/8008/G57rz8.jpg',
'https://imagizer.imageshack.com/img922/8808/RFhSIA.jpg'


    ],
    locales: {
      en: {
        title: 'Long-term — 2-room Apartment (Prometheus St.)',
        address: 'Stepanavan, Prometheus St., Left Bank',
        rooms: '2 rooms + closed balcony',
        description: 'First floor. Baxi heating system. Fully furnished with appliances.',
        amenities: ['2 rooms', '1st floor', 'Baxi', 'Furnished']
      },
      ru: {
        title: 'Долгосрочно — 2‑комнатная квартира (Прометеус)',
        address: 'Степанаван, ул. Прометеуса, Левый берег',
        rooms: '2 комнаты + закрытый балкон',
        description: 'Первый этаж. Система Baxi. Со всей мебелью и техникой.',
        amenities: ['2 комнаты', '1-й этаж', 'Baxi', 'Мебель']
      },
      hy: {
        title: 'Երկարաժամկետ — 2 սենյականոց բնակարան (Պրոմեթեւս)',
        address: 'Ստեփանավան, Պրոմեթեւս փ., Ձախափ',
        rooms: '2 սենյակ + փակ պատշգամբ',
        description: 'Առաջին հարկ։ Baxi համակարգ։ Ամբողջ գույքով եւ տեխնիկայով։',
        amenities: ['2 սենյակ', '1-ին հարկ', 'Baxi', 'Գույք']
      }
    }
  },
  {
    id: 'stepanavan_spacious_4room_house',
    category: 'residential',
    status: 'sale',
    price: '$42,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img922/3271/z22fdv.jpg',
'https://imagizer.imageshack.com/img924/3896/qkz3BU.jpg',
'https://imagizer.imageshack.com/img922/4498/VDhxKs.jpg',
'https://imagizer.imageshack.com/img922/8423/wLeyAK.jpg',
'https://imagizer.imageshack.com/img924/217/kNP0po.jpg',
'https://imagizer.imageshack.com/img922/5784/y1RQF1.jpg',
'https://imagizer.imageshack.com/img922/8606/tkEW2W.jpg',
'https://imagizer.imageshack.com/img922/8338/70P1Ju.jpg'
     
    ],
    locales: {
      en: {
        title: 'Two-storey large and spacious 4-room private house for sale in Stepanavan, near the 2nd school',
        address: 'Stepanavan',
        rooms: '4 Rooms',
        size: 'House 179 sqm · Land 490 sqm',
        description: '179 sqm living area. 490 sqm land plot. In livable condition. Sunny side and very dry. Ground floor is not residential. Close to the main road. Close to essential infrastructure. Utilities available (Electricity, Water, Gas).'
      },
      ru: {
        title: 'Продаётся двухэтажный большой и просторный 4‑комнатный частный дом в городе Степанаван, рядом со 2‑й школой',
        address: 'Степанаван',
        rooms: '4 комнаты',
        size: 'Дом 179 м² · Участок 490 м²',
        description: '179 м² жилая площадь. Участок 490 м². В жилом состоянии. Солнечная сторона, очень сухой. Первый этаж не жилой. Рядом с главной дорогой. Близко к необходимой инфраструктуре для проживания. Коммуникации подведены (Электричество, Вода, Газ).'
      },
      hy: {
        title: 'Վաճառվում է երկհարկանի մեծ եւ ընդարձակ 4 սենյականոց սեփական տուն Ստեփանավան քաղաքում 2րդ դպրոցի մոտակայքում',
        address: 'Ստեփանավան',
        rooms: '4 սենյակ',
        size: 'Տուն 179 քմ · Հողամաս 490 քմ',
        description: '179քմ բնակելի մակերես։ 490քմ հողամաս։ Գտնվում է բնակելի վիճակում։ Արեւկող եւ շատ չոր։ Առաջին հարկը բնակելի չէ։ Գլխավոր ճանապարհին մոտ։ Մոտ է բնակության համար անհրաժեշտ ենթակառուցվածքներին։ Առկա կոմունիկացիաներ (Հոսանք, Ջուր, Գազ)։'
      }
    }
  },
  {
    id: 'gyulagarak_3room_house_sale',
    category: 'residential',
    status: 'sale',
    price: '$45,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/23/mchvn7.jpg',
        'https://imagizer.imageshack.com/img923/521/uIqiR7.jpg',
        'https://imagizer.imageshack.com/img922/570/vMAcRB.jpg',
        'https://imagizer.imageshack.com/img922/7109/hUSCTN.jpg',
        'https://imagizer.imageshack.com/img923/8080/LZDeUL.jpg',
        'https://imagizer.imageshack.com/img923/888/uMTupF.jpg'
    ],
    locales: {
      en: {
        title: '3-room private house for sale near Dendropark',
        address: 'Gyulagarak (Dendropark)',
        rooms: '3 Rooms',
        size: 'House 88 sqm · Land 550 sqm',
        description: '88 sqm living area. 550 sqm land plot. Renovated and in excellent condition. Sunny side and very dry. Beautiful view towards Pushkin Pass. Next to the main road.'
      },
      ru: {
        title: 'Продаётся 3‑комнатный частный дом рядом с Дендропарком',
        address: 'Гюлагарак (Дендропарк)',
        rooms: '3 комнаты',
        size: 'Дом 88 м² · Участок 550 м²',
        description: '88 м² жилая площадь. Участок 550 м². Отремонтирован и в идеальном состоянии. Солнечная сторона и очень сухой. Красивый вид на перевал Пушкина. В непосредственной близости от главной дороги.'
      },
      hy: {
        title: 'Վաճառվում է 3 սենյականոց սեփական տուն Դենդրոպարկի հարեւանությամբ',
        address: 'Գյուլագարակ (Դենդրոպարկ)',
        rooms: '3 սենյակ',
        size: 'Տուն 88 քմ · Հողամաս 550 քմ',
        description: '88քմ բնակելի մակերես։ 550քմ հողամաս։ Վերանորոգված է եւ գտնվում է իդեալական վիճակում։ Արեւկող եւ շատ չոր։ Գեղեցիկ տեսարան դեպի Պուշկինի լեռնանցք։ Գլխավոր ճանապարհի հարեւանությամբ։'
      }
    }
  },
  {
    id: 'gyulagarak_plot_1500',
    category: 'land',
    status: 'sale',
    price: '$9,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/6229/IFzqqs.jpg',
        'https://imagizer.imageshack.com/img924/7369/Rq6agZ.jpg',
        'https://imagizer.imageshack.com/img923/2750/ElTMm6.jpg',
        'https://imagizer.imageshack.com/img922/3845/ypWfy3.jpg'
    ],
    locales: {
      en: {
        title: 'Homestead Plot in Gyulagarak — 1500 sqm (near Dendropark)',
        address: 'Gyulagarak',
        size: '1500 sqm',
        description: 'Homestead land plot 1500 sqm for sale in Gyulagarak village, next to the Dendropark. Utilities run alongside the plot. Located in a very quiet neighborhood. Beautiful nature view. The land is very flat and suitable for construction works. Close to essential infrastructure.'
      },
      ru: {
        title: 'Участок в Гюлагараке — 1500 м² (рядом с Дендропарком)',
        address: 'Гюлагарак',
        size: '1500 м²',
        description: 'Продаётся приусадебный участок 1500 м² в селе Гюлагарак, рядом с Дендропарком. Коммуникации проходят рядом. Находится в очень тихом районе. Красивый вид на природу. Участок очень ровный и подходит для строительных работ. Рядом необходимая инфраструктура для проживания.'
      },
      hy: {
        title: 'Տնամերձ հողամաս Գյուլագարակում — 1500 քմ (Դենդրոպարկի հարևանությամբ)',
        address: 'Գյուլագարակ',
        size: '1500 քմ',
        description: 'Վաճառվում է 1500քմ տնամերձ հողամաս Դենդրոպարկի հարևանությամբ Գյուլագարակ գյուղում։ Կոմունիկացիաները անցնում են կողքով։ Գտնվում է շատ անաղմուկ թաղամասում։ Գեղեցիկ տեսարան դեպի բնություն։ Հողամասը շատ հարթ է եւ հարմար շինարարական աշխատանքների համար։ Մոտ է բնության համար անհրաժեշտ ենթակառուցվածքներին։'
      }
    }
  },
  {
    id: 'stepanavan_alea_large_private_house_long_term',
    category: 'residential',
    status: 'long_term',
    price: '֏100,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/7393/5rlKiY.jpg',
        'https://imagizer.imageshack.com/img924/2350/7bMxws.jpg'
    ],
    locales: {
      en: {
        title: 'Large Private House for Long-Term Rent in Stepanavan',
        address: 'Stepanavan, near Alea Park',
        rooms: '4 Rooms',
        description: 'Livable condition. Large basement floor. Furniture and appliances included. Baxi heating system.',
        amenities: ['4 Rooms', 'Livable condition', 'Large basement', 'Furniture & Appliances', 'Baxi System']
      },
      ru: {
        title: 'Сдаётся в долгосрочную аренду большой частный дом в Степанаване',
        address: 'Степанаван, рядом с парком Алея',
        rooms: '4 комнаты',
        description: 'Жилое состояние. Большой подвальный этаж. С мебелью и техникой. Система отопления Baxi.',
        amenities: ['4 комнаты', 'Жилое состояние', 'Большой подвал', 'Мебель и техника', 'Система Baxi']
      },
      hy: {
        title: 'Վարձակալության է տրվում մեծ սեփական տուն Ստեփանավանում',
        address: 'Ստեփանավան, Ալեա այգու հարեւանությամբ',
        rooms: '4 սենյակ',
        description: 'Բնակելի վիճակ։ Մեծ նկուղային հարկ։ Գույքով եւ տեխնիկայով։ Baxi համակարգ։',
        amenities: ['4 սենյակ', 'Բնակելի վիճակ', 'Մեծ նկուղ', 'Գույք և տեխնիկա', 'Baxi համակարգ']
      }
    }
  },
  {
    id: 'stepanavan_leftbank_1room_apartment_lease_lola',
    category: 'residential',
    status: 'long_term',
    price: '֏45,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img922/8207/KCo4Na.jpg',
      'https://imagizer.imageshack.com/img923/5231/lYlQRs.jpg',
      'https://imagizer.imageshack.com/img924/3916/pYtTdF.jpg',
      'https://imagizer.imageshack.com/img923/8568/5twmnj.jpg',
      'https://imagizer.imageshack.com/img922/2993/iro5TF.jpg'
    ],
    locales: {
      en: {
        title: 'For Lease — 1-Room Apartment in Stepanavan',
        address: 'Stepanavan, Left Bank',
        rooms: '1 Room',
        description: '4th floor. Fully furnished with appliances.',
        amenities: ['1 Room', '4th Floor', 'Furniture & Appliances']
      },
      ru: {
        title: 'Сдаётся 1‑комнатная квартира в Степанаване',
        address: 'Степанаван, Левый берег',
        rooms: '1 комната',
        description: '4‑й этаж. С мебелью и техникой.',
        amenities: ['1 комната', '4‑й этаж', 'Мебель и техника']
      },
      hy: {
        title: 'Վարձակալության է տրվում 1 սենյականոց բնակարան Ստեփանավան քաղաքում',
        address: 'Ստեփանավան, Ձախափ',
        rooms: '1 սենյականոց',
        description: '4‑րդ հարկ։ Գույքով եւ տեխնիկայով։',
        amenities: ['1 սենյակ', '4‑րդ հարկ', 'Գույք եւ տեխնիկա']
      }
    }
  },
  {
    id: 'stepanavan_isahakyan_480sqm_plot_sale_hoxa',
    category: 'land',
    status: 'sale',
    price: '$12,500',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img922/808/ZLTvJv.jpg',
      'https://imagizer.imageshack.com/img922/2306/QsmrD2.jpg',
      'https://imagizer.imageshack.com/img922/3851/evCh7D.jpg'
    ],
    locales: {
      en: {
        title: 'Homestead Land for Sale in one of Stepanavan’s most in-demand areas (near Alea Park)',
        address: 'Stepanavan, Isahakyan Street',
        size: '480 sqm',
        rooms: 'Land/Plot',
        description: 'Utilities available. Very close to nature. Foundation laid on the plot. Flat land suitable for new construction works.',
        amenities: ['480 sqm', 'Utilities available', 'Close to nature', 'Foundation laid', 'Flat plot']
      },
      ru: {
        title: 'Продаётся приусадебный участок в одном из самых востребованных районов Степанавана (рядом с парком Алея)',
        address: 'Степанаван, улица Исаакяна',
        size: '480 м²',
        rooms: 'Земельный участок',
        description: 'Коммуникации доступны. Очень близко к природе. На участке заложен фундамент. Участок ровный и подходит для новых строительных работ.',
        amenities: ['480 м²', 'Коммуникации', 'Близость к природе', 'Заложен фундамент', 'Ровный участок']
      },
      hy: {
        title: 'Վաճառվում է տնամերձ հողամաս Ստեփանավանի ամենա պահանջվաղ թաղամասերից մեկում Ալեա այգու հարեւանությամբ',
        address: 'Ստեփանավան, Իսահակյան փողոց',
        size: '480 քմ',
        rooms: 'Հողամաս',
        description: 'Առկա կոմունիկացիաներ։ Առավել քան մոտ բնությանը։ Հողամասում կա գցված հիմք։ Հարթ է նոր շինարարական աշխատանքների համար։',
        amenities: ['480 քմ', 'Կոմունիկացիաներ', 'Մոտ բնությանը', 'Գցված հիմք', 'Հարթ հող']
      }
    }
  },
  {
    id: 'stepanavan_leftbank_3room_longterm_okl',
    category: 'residential',
    status: 'long_term',
    price: '֏80,000',
    featured: false,
    images: [
        'https://i.imgur.com/eiXrfk1.jpeg',
        'https://i.imgur.com/fX9w3QK.jpeg',
        'https://i.imgur.com/0fU2Gsb.jpeg',
        'https://i.imgur.com/a4MPLXs.jpeg',
        'https://i.imgur.com/GegVtfL.jpeg',
        'https://i.imgur.com/96sC4JO.jpeg',
        'https://i.imgur.com/NVmWWIR.jpeg',
        'https://i.imgur.com/J32ruCf.jpeg'
    ],
    locales: {
      en: {
        title: 'Long-term Rent — 3-room Apartment (Left Bank)',
        address: 'Stepanavan, Left Bank',
        rooms: '3 Rooms',
        description: 'Stylish renovation. Fully furnished with appliances. First floor. European-made windows. Large basement floor. Sunny and bright.',
        amenities: ['3 Rooms', 'Stylish renovation', 'Furniture & Appliances', '1st Floor', 'EU windows', 'Large basement', 'Sunny & Bright']
      },
      ru: {
        title: 'Долгосрочно — 3‑комнатная квартира (Левый берег)',
        address: 'Степанаван, Левый берег',
        rooms: '3 комнаты',
        description: 'Стильный ремонт. С мебелью и техникой. Первый этаж. Окна европейского производства. Большой подвальный этаж. Солнечная и светлая.',
        amenities: ['3 комнаты', 'Стильный ремонт', 'Мебель и техника', '1‑й этаж', 'Европейские окна', 'Большой подвал', 'Солнечная и светлая']
      },
      hy: {
        title: 'Վարձակալության է տրվում 3 սենյականոց բնակարան ձախափում',
        address: 'Ստեփանավան, Ձախափում',
        rooms: '3 սենյակ',
        description: 'Նորաոճ վերանորոգում։ Գույքով եւ տեխնիկայով։ Առաջին հարկ։ Եվրոպական արտադրության լուսամուտներ։ Մեծ նկուղային հարկ։ Արեւոտ եւ լուսավոր։',
        amenities: ['3 սենյակ', 'Նորաոճ վերանորոգում', 'Գույք եւ տեխնիկա', '1‑ին հարկ', 'Եվրոպական լուսամուտներ', 'Մեծ նկուղ', 'Արեւոտ եւ լուսավոր']
      }
    }
  },
  {
    id: 'lori_berd_large_plot_sale_gox',
    category: 'land',
    status: 'sale',
    price: '$32,000',
    featured: false,
    images: [
        'https://i.imgur.com/JsVS0M7.jpeg',
        'https://i.imgur.com/HvyepQW.jpeg',
        'https://i.imgur.com/yFRJjJc.jpeg',
        'https://i.imgur.com/9i9Y5ld.jpeg',
        'https://i.imgur.com/4gyaoUa.jpeg',
        'https://i.imgur.com/zWddHhN.jpeg',
        'https://i.imgur.com/kZTRyCt.jpeg',
        'https://i.imgur.com/IcRuvbd.jpeg'
    ],
    locales: {
      en: {
        title: 'For Sale — In one of the most picturesque corners of Lori',
        address: 'Lori Berd (historical-cultural site)',
        size: '3445 sqm',
        rooms: 'Land/Plot',
        description: 'Large plot for sale in Lori Berd, a historical-cultural site. Has frontage onto the main road. Flat surface. Suitable for implementing new business ideas. Old house on the plot — 93 sqm. Cattle shed — 34 sqm. Fruit trees present. Very close to nature, ideal for those seeking to escape city bustle. All utilities available.'
      },
      ru: {
        title: 'Продажа в одном из самых живописных уголков Лорийской области',
        address: 'Лори Берд (историко-культурное место)',
        size: '3445 м²',
        rooms: 'Земельный участок',
        description: 'Большой участок продается в Лори Берде, историко-культурном месте. Имеет фасадную часть с выходом на главную дорогу. Участок ровный. Подходит для воплощения новых бизнес-идей. На участке есть старый дом 93 м². Есть хлев 34 м². Имеются плодовые деревья. Очень близок к природе, подходит тем, кто хочет отвлечься от городской суеты. Имеются все коммунальные удобства.'
      },
      hy: {
        title: 'Վաճառք Լոռու մարզի ամենա գողտրիկ անկյուններից մեկում',
        address: 'Լոռի բերդ (պատմամշակութային վայր)',
        size: '3445 քմ',
        rooms: 'Հողամաս',
        description: 'Պատմամշակութային վայր համարվող Լոռի բերդում վաճառվում է մեծ հողամաս։ Ունի ճակատային մաս գլխավոր ճանապարհի հետ։ Հողամասի մակերեսը հարթ է։ Հարմար է նոր բիզնես գաղափարներ կյանքի կոչելու համար։ Հողամատի վրա առկա է հին տուն՝ 93 քմ մակերեսով։ Առկա է անասնագոմ՝ 34 քմ մակերեսով։ Առկա են պտղատու ծառեր։ Առավել քան մոտ է բնությանը եւ հարմար է նրանց համար, ովքեր ցանկանում են կտրվել քաղաքի թոհ ու բոհից։ Առկա են բոլոր կոմունալ հարմարությունները։'
      }
    }
  },
  {
    id: 'stepanavan_leftbank_2room_longterm_xas',
    category: 'residential',
    status: 'long_term',
    price: '֏80,000',
    featured: false,
    images: [
        'https://i.imgur.com/mlCH9Pt.jpeg',
        'https://i.imgur.com/fv3GTFX.jpeg',
        'https://i.imgur.com/DPZAZR8.jpeg',
        'https://i.imgur.com/WUBfTvH.jpeg',
        'https://i.imgur.com/t99TeXC.jpeg'
    ],
    locales: {
      en: {
        title: 'For Long-term Rent — 2-room Apartment',
        address: 'Stepanavan city (Left Bank)',
        rooms: '2 Rooms',
        description: 'Vacant apartment. Furniture and appliances included.',
        amenities: ['2 Rooms', 'Vacant', 'Furniture & Appliances']
      },
      ru: {
        title: 'В аренду — 2‑комнатная квартира',
        address: 'Степанаван город (Левый берег)',
        rooms: '2 комнаты',
        description: 'Нежилая квартира. С мебелью и техникой.',
        amenities: ['2 комнаты', 'Нежилая', 'Мебель и техника']
      },
      hy: {
        title: 'Վարձակալություն',
        address: 'Ստեփանավան քաղաք (Ձախափ)',
        rooms: '2 սենյակ',
        description: 'Չբնակեցված բնակարան։ Գույքով եւ տեխնիկայով։',
        amenities: ['2 սենյակ', 'Չբնակեցված', 'Գույք եւ տեխնիկա']
      }
    }
  },
  {
    id: 'stepanavan_leftbank_3room_longterm_new1',
    category: 'residential',
    status: 'long_term',
    price: '֏80,000',
    featured: false,
    images: [
        'https://i.imgur.com/tQ8mSnR.jpeg',
        'https://i.imgur.com/VNHUFZz.jpeg',
        'https://i.imgur.com/afXirKC.jpeg',
        'https://i.imgur.com/nAWfK6F.jpeg',
        'https://i.imgur.com/hKFf8YQ.jpeg',
        'https://i.imgur.com/kuJsaCX.jpeg',
        'https://i.imgur.com/jDAo1IB.jpeg'
    ],
    locales: {
      en: {
        title: 'For Long-term Rent — 3-room Apartment in Stepanavan',
        address: 'Stepanavan (Left Bank)',
        rooms: '3 Rooms',
        description: '3 rooms. With furniture and appliances. 4th floor. Sunny and bright. Baxi heating system.',
        amenities: ['3 Rooms', 'Furniture & Appliances', '4th floor', 'Sunny & Bright', 'Baxi Heating']
      },
      ru: {
        title: 'В аренду — 3‑комнатная квартира в Степанаване',
        address: 'Степанаван (Левый берег)',
        rooms: '3 комнаты',
        description: '3 комнаты. С мебелью и техникой. 4-й этаж. Солнечная и светлая. Система отопления Baxi.',
        amenities: ['3 комнаты', 'Мебель и техника', '4-й этаж', 'Солнечная и светлая', 'Отопление Baxi']
      },
      hy: {
        title: 'Վարձակալության է տրվում 3 սենյականոց բնակարան Ստեփանավան քաղաքում',
        address: 'Ստեփանավան (Ձախափում)',
        rooms: '3 սենյակ',
        description: '3 սենյակ։ Գույքով եւ տեխնիկայով։ 4-րդ հարկ։ Արեւոտ եւ լուսավոր։ Baxi ջեռուցման համակարգ։',
        amenities: ['3 սենյակ', 'Գույք եւ տեխնիկա', '4-րդ հարկ', 'Արեւոտ եւ լուսավոր', 'Baxi ջեռուցում']
      }
    }
  },
  {
    id: 'stepanavan_center_2room_longterm_new2',
    category: 'residential',
    status: 'long_term',
    price: '֏100,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img924/2890/GS5FOR.jpg',
      'https://imagizer.imageshack.com/img924/1661/nu906a.jpg',
      'https://imagizer.imageshack.com/img923/8781/uZvOPU.jpg',
      'https://imagizer.imageshack.com/img923/4964/Czttz2.jpg',
      'https://imagizer.imageshack.com/img924/3318/ZQZdEc.jpg',
      'https://imagizer.imageshack.com/img924/3522/prbI7W.jpg'
    ],
    locales: {
      en: {
        title: 'For Long-term Rent — 2-room Apartment in Stepanavan City Center',
        address: 'Stepanavan City Center (near Square)',
        rooms: '2 Rooms',
        description: '2 rooms. With furniture and appliances. 3rd floor. Sunny and warm home. Near the square.',
        amenities: ['2 Rooms', 'Furniture & Appliances', '3rd floor', 'Sunny & Warm', 'Near the Square']
      },
      ru: {
        title: 'В аренду — 2‑комнатная квартира в центре Степанавана',
        address: 'Центр города Степанаван (рядом с площадью)',
        rooms: '2 комнаты',
        description: '2 комнаты. С мебелью и техникой. 3-й этаж. Солнечный и тёплый дом. Рядом с площадью.',
        amenities: ['2 комнаты', 'Мебель и техника', '3-й этаж', 'Солнечный и тёплый', 'Рядом с площадью']
      },
      hy: {
        title: 'Վարձակալության է տրվում 2 սենյականոց բնակարան Ստեփանավան քաղաքի կենտրոնում',
        address: 'Ստեփանավան քաղաքի կենտրոն (Հրապարակի հարեւանությամբ)',
        rooms: '2 սենյակ',
        description: '2 սենյակ։ Գույքով եւ տեխնիկայով։ 3-րդ հարկ։ Արեւոտ եւ տաք տուն։ Հրապարակի հարեւանությամբ։',
        amenities: ['2 սենյակ', 'Գույք եւ տեխնիկա', '3-րդ հարկ', 'Արեւոտ եւ տաք', 'Հրապարակի հարեւանությամբ']
      }
    }
  },
  {
    id: 'stepanavan_top_floor_2room_sale',
    category: 'residential',
    status: 'sale',
    price: '$26,500',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/6229/IFzqqs.jpg',
        'https://imagizer.imageshack.com/img924/7369/Rq6agZ.jpg',
        'https://imagizer.imageshack.com/img923/2750/ElTMm6.jpg',
        'https://imagizer.imageshack.com/img922/3845/ypWfy3.jpg'
    ],
    locales: {
      en: {
        title: 'Sunny 2-room unit',
        address: 'Stepanavan',
        rooms: '2 Rooms',
        description: 'Top floor. State (original) condition. First line. Open balcony. Sunny and dry. 2 rooms. Bathroom and toilet combined. Utilities available.'
      },
      ru: {
        title: 'Солнечный 2-комнатный дом',
        address: 'Степанаван',
        rooms: '2 комнаты',
        description: 'Последний этаж. Государственное (первичное) состояние. Первая линия. Открытый балкон. Солнечно и сухо. 2 комнаты. Санузел и ванная вместе. Имеющиеся коммуникации.'
      },
      hy: {
        title: 'Արևոտ բնակելի տուն',
        address: 'Ստեփանավան',
        rooms: '2 սենյակ',
        description: 'Վերջին հարկ։ Պետական վիճակ։ Առաջին գիծ։ Բաց պատշգամբ։ Արեւոտ եւ չոր։ 2 սենյակ։ Սանհանգույցը եւ լոգարանը միասին։ Առկա կոմունիկացիաներ։'
      }
    }
  },
  {
    id: 'pushkino_semi_built_spacious_plot',
    category: 'land',
    status: 'sale',
    price: 'Price on request',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img924/3723/BQDTam.jpg',
      'https://imagizer.imageshack.com/img922/1907/zBFIxr.jpg',
      'https://imagizer.imageshack.com/img923/3858/bKNWEC.jpg',
      'https://imagizer.imageshack.com/img922/3118/DOim5j.jpg'
    ],
    locales: {
      en: {
        title: 'Semi-built large and spacious private house for sale in Pushkino village',
        address: 'Pushkino',
        size: '1300 sqm land',
        rooms: 'Land/Plot',
        description: '1300 sqm homestead land. Also available separate 800 and 900 sqm plots near the river next to the house. Close to the famous Dendropark. The area is considered one of the best ecotourism centers in Armenia. Permanent utilities available. Suitable for starting new construction works. The land is flat. Geographic position is among the best. Can serve as a guesthouse, private house, or hotel location. Located right in nature. Adjacent to the river. The land is fenced. Utilities available (Electricity, Water, Gas). Exclusive right to sell.',
        price:'Price on request'
      },
      ru: {
        title: 'Продаётся полудостроенный большой и просторный частный дом в селе Пушкино',
        address: 'Пушкино',
        size: 'Участок 1300 м²',
        rooms: 'Земельный участок',
        description: 'Усадебный участок 1300 м². Также доступны отдельные участки 800 и 900 м² у реки, рядом с домом. Рядом находится знаменитый Дендропарк. Территория считается одним из лучших центров экотуризма Армении. Постоянные коммуникации в наличии. Подходит для начала новых строительных работ. Участок ровный. Географическое расположение — одно из лучших. Может служить как гостевой дом, частный дом или гостиничный объект. Находится в самом сердце природы. Прилегает к реке. Участок ограждён. Коммуникации в наличии (Электроэнергия, Вода, Газ). Исключительное право продажи.',
        price: 'Цена по запросу'
      },
      hy: {
        title: 'Վաճառվում է կիսակառույց մեծ եւ ընդարձակ սեփական տուն Պուշկինո գյուղում',
        address: 'Պուշկինո',
        size: '1300 քմ հող',
        rooms: 'Հողամաս',
        description: '1300քմ տնամերձ հողամասով։ Առկա է նաեւ առանձնացված 800 եւ 900 քմ հողամասեր գետի մոտ տան հարեւանուլթյամբ։ Մոտ է հանրահռչակ Դենդրոպարկին։ Տարածամրջանը համարվում է Հայաստանի էկոտուրիզմի լավագույն կենտրոններից մեկը։ Առկա են մշտական կոմունիկացիաներ։ Հարմար է նոր շինարարական աշխատանքներ սկսելու համար։ Հողամասը հարթ է։ Աշխարհագյական դիրքը լավագույններից է։ Կարող է ծառայել որպես հյուրատուն,առանձնատուն կամ հյուրանոցային վայր։ Գտնվում է ուղիղ բնության գրկում։ Գետին հարակից։ Հողամասը ցանկապատված է։ Առկա կոմունիկացիաներ (Հոսանք, Ջուր, Գազ)։ Վաճառքի բացառիկ իրավունքով։',
        price: 'Գինը ըստ հարցման'
      }
    }
  },
  {
    id: 'pushkino_daily_rent_house',
    category: 'residential',
    status: 'rent',
    price: 'Price on request',
    featured: true,
    images: [
  'https://imagizer.imageshack.com/img922/3788/yPB0Yh.jpg',
'https://imagizer.imageshack.com/img922/2035/TL3Unz.jpg',
'https://imagizer.imageshack.com/img923/7952/gMfoOW.jpg',
'https://imagizer.imageshack.com/img922/715/SMEv4S.jpg',
'https://imagizer.imageshack.com/img924/9339/SGJBJ2.jpg',
'https://imagizer.imageshack.com/img922/797/WAVUPg.jpg',
'https://imagizer.imageshack.com/img923/6831/WAElNb.jpg',
'https://imagizer.imageshack.com/img923/3541/cr6Nk5.jpg',
'https://imagizer.imageshack.com/img922/5528/hzjyAD.jpg'
    ],
    locales: {
      en: {
        title: 'Private House for Daily Rent',
        address: 'Pushkino',
        rooms: '4 Bedrooms · 1 Living Room',
        description: 'Attention. Private house for daily rent with its own gorgeous landscaped green area. Garage. 4 bedrooms and one living room. Separate and fenced garden. Gazebo. Designated place for bonfire. Swing. Clean and comfortable. The house can accommodate up to 9–10 persons. Utilities available (Electricity, Water, Gas, Sewer).',
        price: 'Price on request'
      },
      ru: {
        title: 'Дом посуточно',
        address: 'Пушкино',
        rooms: '4 спальни · 1 гостиная',
        description: 'Внимание. Сдаётся посуточно красивый частный дом со своей роскошной благоустроенной зелёной территорией. Гараж. 4 спальни и одна гостиная. Отдельный и ограждённый сад. Беседка. Место, предназначенное для костра. Качели. Чисто и комфортно. Дом может принять до 9–10 человек. Коммуникации в наличии (Электроэнергия, Вода, Газ, Канализация).',
      price: 'Цена по запросу'
      },
      hy: {
        title: 'Օրավարձով առանձնատուն',
        address: 'Պուշկինո',
        rooms: '4 ննջասենյակ · 1 հյուրասենյակ',
        description: 'Ուշադրություն։ Օրավարձով է տրվում գեղեցիկ առանձնատուն իր սեփական գերշքեղ կանաչապատ տարածքով։ Ավտոտնակ։ 4 Ննջասենյակ եւ մեկ հյուրասենյակ։ Առանձնացված եւ ցանկապատված այգի։ Տաղավար։ Խարույկի համար նախատեսված վայր։ Ճոճանակ։ Մաքուր եւ հարմարավաետ։ Առանձնատունը կարող է ընդհունել մինչեւ 9-10 անձ։ Առկա կոմունիկացիաներ (Հոսանք, Ջուր, Գազ, Կոյուղի)։',
      price: 'Գինը ըստ հարցման'
      }
    }
  },
  {
    id: 'stepanavan_exclusive_600sqm_plot',
    category: 'land',
    status: 'sale',
    price: '$8,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img922/7452/jNko3Z.jpg',
'https://imagizer.imageshack.com/img924/6984/a4OkWD.jpg',
'https://imagizer.imageshack.com/img924/811/avyNCA.jpg'
    ],
    locales: {
      en: {
        title: 'Exclusive Right to Sell',
        address: 'Stepanavan',
        size: '600 sqm',
        rooms: 'Land/Plot',
        description: 'In one of Stepanavan’s calm and quiet areas, in the left-bank part, near a kindergarten, a 600 sqm land plot is for sale. Semi-built house available. Favorable location for living. Shops and schools available in the area. Fruit trees present. Utilities available (Electricity, Water, Gas).'
      },
      ru: {
        title: 'Эксклюзивное право продажи',
        address: 'Степанаван',
        size: '600 м²',
        rooms: 'Земельный участок',
        description: 'В одном из спокойных и тихих районов Степанавана, в левобережной части, рядом с детским садом, продаётся земельный участок 600 м². Имеется полудостроенный дом. Благоприятное расположение для проживания. В районе есть магазины и школы. Есть плодовые деревья. Коммуникации в наличии (Электроэнергия, Вода, Газ).'
      },
      hy: {
        title: 'Վաճառքի բացառիկ իրավունքով',
        address: 'Ստեփանավան',
        size: '600 քմ',
        rooms: 'Հողամաս',
        description: 'Ստեփանավանի աշենա հանգիստ եւ անաղմուկ հատվածներից մեկում ձախափում մանկապարտեզի հարեւանությխմբ վաճառվում է 600քմ հողամաս։ Առկա է կիսակառույց տուն։ Բարենպաստ դիրք բնակության համար։ Տարածքում առկա են խանութներ եւ դպրոցներ։ Կան նաեւ պտղատու ծառեր։ Առկա կոմունիկացիաներ (Էլեկտրաեներգիա, Ջուր, Գազ)։'
      }
    }
  },
  {
    id: 'stepanavan_proshyan_two_storey_house',
    category: 'residential',
    status: 'sale',
    price: '$59,900',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/1209/GxXRle.jpg',
  'https://imagizer.imageshack.com/img923/2043/kTQN5t.jpg',
'https://imagizer.imageshack.com/img923/3500/8zxCBB.jpg',
'https://imagizer.imageshack.com/img924/2897/kvrwDh.jpg',
'https://imagizer.imageshack.com/img922/4650/mYKbBq.jpg',
'https://imagizer.imageshack.com/img923/3444/rQxj1w.jpg',
'https://imagizer.imageshack.com/img922/844/RANJRf.jpg',
'https://imagizer.imageshack.com/img922/492/mJz6MH.jpg',
'https://imagizer.imageshack.com/img923/6923/OZb96n.jpg',
'https://imagizer.imageshack.com/img923/1979/uSQFUT.jpg'
    ],
    locales: {
      en: {
        title: 'Proshyan Street, in one of the quietest neighborhoods of Stepanavan',
        address: 'Stepanavan (Proshyan St.)',
        size: 'House 230 sqm · Land 600 sqm',
        description: '600 sqm private land plot. House area 230 sqm. Renovated, in good livable condition. Roof is in perfect condition. European-made windows. Open balcony. Large and spacious garage. Basement floor. Heating system. Sold with all furniture. Very sunny and bright geographic position. All essential infrastructure nearby: shops, educational institutions, etc. Only 10 m from the asphalted road. Utilities available (Electricity, Water, Gas).'
      },
      ru: {
        title: 'на улице Прошяна, продаётся большой и красивый двухэтажный частный дом',
        address: 'Степанаван (ул. Прошяна)',
        size: 'Дом 230 м² · Участок 600 м²',
        description: 'Собственный участок 600 м². Площадь дома 230 м². Отремонтирован, в хорошем жилом состоянии. Крыша в идеальном состоянии. Окна европейского производства. Открытый балкон. Большой и просторный гараж. Цокольный этаж. Система отопления. Продаётся со всей мебелью. Очень солнечное и светлое расположение. Рядом необходимая инфраструктура: магазины, учебные заведения и т. д. Всего в 10 м от асфальтированной дороги. Коммуникации в наличии (Электроэнергия, Вода, Газ).'
      },
      hy: {
        title: 'Պռոշյան փողոցում վաճառվում է մեծ եւ գեղեցիկ երկհարկանի սեփական տուն',
        address: 'Ստեփանավան (Պռոշյան փ.)',
        size: 'Տուն 230 քմ · Հողամաս 600 քմ',
        description: 'Սեփական հողամասով 600քմ։ Տան նակերես 230քմ։ Վերանորոգված բնակելի լավ վիճակ։ Տանիքը գտնվում է իդեալական վիճակում։ Լուսամուտները եվրոպական արտադրության։ Առկա է բաց պատշգամբ։ Մեծ եւ ընդարձակ ավտոտնակ։ Նկուղային հարկ։ Ջեռուցման համակարգ։ Վաճառվում է ողջ գույքով։ Ունի շատ արեւոտ եւ լուսավոր աշխարհագրական դիրք։ Տարածքում առկա են անհրաժեշտ ենթակառուցվածքներ բնակության համար խանութներ, ուսումնական հաստատություններ եւ այլն… Ասֆալտապատ ճանապարհից ընդհամենը 10մ հեռ. վրա։ Առկա կոմունիկացիաներ (Էլեկտրաեներգիա, Ջուր, Գազ)։'
      }
    }
  },
  {
    id: 'stepanavan_alea_park_plot_2800',
    category: 'land',
    status: 'sale',
    price: '$180,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img923/6194/VDxb5E.jpg',
        'https://imagizer.imageshack.com/img922/1588/bZEFKm.jpg',
        'https://imagizer.imageshack.com/img923/9617/ra74Nr.jpg',
        'https://imagizer.imageshack.com/img924/1408/6csyyg.jpg',
        'https://imagizer.imageshack.com/img922/3352/SPx3t8.jpg',
        'https://imagizer.imageshack.com/img923/8094/CrB3ck.jpg'
    ],
    locales: {
      en: {
        title: 'Stepanavan, right in nature (Alea Park)',
        address: 'Stepanavan, Alea Park',
        size: '2,800 sqm',
        rooms: 'Land/Plot',
        description: 'Plot area 2,800 sqm. 70 m frontage. Suitable for starting new construction works — the land is flat. Great opportunity to implement new business ideas. Utilities available (Electricity, Water, Gas).'
      },
      ru: {
        title: 'Степанаване, прямо в объятиях природы (парк «Алея»)',
        address: 'Степанаван, парк Алея',
        size: '2 800 м²',
        rooms: 'Земельный участок',
        description: 'Площадь участка 2 800 м². Фасад 70 м. Подходит для начала новых строительных работ — участок ровный. Отличная возможность для реализации новых бизнес‑идей. Коммуникации в наличии (Электроэнергия, Вода, Газ).'
      },
      hy: {
        title: 'Ստեփանավանում վաճառվում է հողամաս հենց բնության գրկում',
        address: 'Ստեփանավան, Ալեա այգում',
        size: '2800 քմ',
        rooms: 'Հողամաս',
        description: 'Հողամասի մակերես 2800քմ։ 70մ ճակատ։ Հարմար է նոր շինարարական աշխատանքներ սկսելու համար հողամասը հարթ է։ Լավ հնարավորություն նոր բիզնես գաղափարներ կյանքի կոչելու համար։ Առկա կոմունիկացիաներ (Հոսանք, Ջուր, Գազ)։'
      }
    }
  },
  {
    id: 'lori_region_agarak_semi_built_plot',
    category: 'land',
    status: 'sale',
    price: '$30,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/8569/zP3pdf.jpg',
        'https://imagizer.imageshack.com/img923/5356/ZszJ5o.jpg',
        'https://imagizer.imageshack.com/img923/533/ryRHkK.jpg',
        'https://imagizer.imageshack.com/img924/8789/YgVuqz.jpg',
        'https://imagizer.imageshack.com/img924/9505/EmzJWx.jpg',
        'https://imagizer.imageshack.com/img923/451/0TYM30.jpg',
        'https://imagizer.imageshack.com/img924/3396/8pJFiK.jpg',
        'https://imagizer.imageshack.com/img923/1926/xzOzqu.jpg'
    ],
    locales: {
      en: {
        title: 'For Sale — Semi-built House with Land (Agarak)',
        address: 'Lori Region (Agarak village)',
        size: 'Land 980 sqm · House 178 sqm',
        rooms: 'Land/Plot',
        description: 'Distinct offer. In one of Armenia’s greenest and most nature-rich places — Agarak village — a semi-built house with its own land is for sale. Land 980 sqm. House area 178 sqm. Adjacent to Stepanavan. First line — about 30 m frontage along the main road. View towards Lori’s magnificent nature. The land is fully fenced. All necessary infrastructure for living is available in the area. Also suitable for a private house or hotel/guesthouse purposes. Many picturesque places nearby (Tormakavank, Hnevank, Arevatsag Gorge, Vardablur Lakes, Lori Fortress, etc.). Utilities available (Electricity, Water, Gas).'
      },
      ru: {
        title: 'Продаётся полудостроенный дом со своим земельным участком в одном из самых зелёных и богатых природой мест Армении — в селе Агаряк',
        address: 'Лорийский регион (село Агаряк)',
        size: 'Участок 980 м² · Дом 178 м²',
        rooms: 'Земельный участок',
        description: 'Табличка: Особое предложение. В одном из самых зелёных и богатых природой мест Армении — в селе Агаряк — продаётся полудостроенный дом со своим земельным участком. Участок 980 м². Площадь дома 178 м². Рядом со Степанаваном. Первая линия — около 30 м фасад вдоль главной дороги. Вид на живописную природу Лори. Участок полностью ограждён. В районе есть вся необходимая инфраструктура для проживания. Также подходит для частного дома или для гостиничных/гостевых целей. Рядом множество живописных мест (Тормекаванк, Хневанк, ущелье Аревацаг, озёра Вардаблур, крепость Лори и др.). Коммуникации в наличии (Электроэнергия, Вода, Газ).'
      },
      hy: {
        title: 'Ագարակ գյուղում վաճառվում է կիսակառույց տուն իր սեփական հողամասով',
        address: 'Լոռու տարածաշրջանում (Ագարակ գյուղ)',
        size: 'Հող 980 քմ · Տուն 178 քմ',
        rooms: 'Հողամաս',
        description: 'Տարբերվող առաջարկ։ Հայաստանի ամենա կանաչապատ եւ բնությամբ հարուստ վայրերից մեկում Ագարակ գյուղում վաճառվում է կիսակառույց տուն իր սեփական հողամասով։ Հողամաս 980քմ։ Տան մակերես 178քմ։ Հարակից է Ստեփանավանին։ Առաջի գիծ մոտ 30մ ճակատ գլխավոր ճանապարհի հետ։ Տեսարան դեպի լոռվա չնաշխարհիկ բնություն։ Հողամասը ամբողջությամբ պարսպապատ է։ Տարածքում առկա են անհրաժեշտ ենթակառուցվածքները բնակության համար։ Հարմար է նաեւ առանձնատուն կամ հյուրանոցային նպատակներին ծառայեցնելու համար։ Տարածքում կան բազմաթիվ գեղատեսիլ վայրեր (Տորմակավանք, Հնեվանք, Արեւածագի ձոր, Վարդաբլուրի լճեր, Լոռի բերդ եւ այլն…)։ Առկա կոմունիկացիաներ (Էլեկտրաեներգիա, Ջուր, Գազ)։'
      }
    }
  },
  {
    id: 'stepanavan_center_2room_house_lease',
    category: 'residential',
    status: 'long_term',
    price: '֏60,000',
    featured: false,
    images: [
    'https://imagizer.imageshack.com/img923/4695/g1lLov.jpg',
'https://imagizer.imageshack.com/img922/4524/IiGp4C.jpg',
'https://imagizer.imageshack.com/img923/7932/kI2Ryh.jpg',
'https://imagizer.imageshack.com/img923/1223/EAeM1M.jpg',
'https://imagizer.imageshack.com/img923/1238/sDnXhv.jpg',
'https://imagizer.imageshack.com/img922/1291/FvZk1Z.jpg',
'https://imagizer.imageshack.com/img923/548/UdquFK.jpg'


    ],
    locales: {
      en: {
        title: '2-room private house for rent in the city center of Stepanavan',
        address: 'Stepanavan (City Center)',
        rooms: '1 Bedroom · 1 Living Room',
        description: 'Available furniture and appliances. 1 bedroom, 1 living room.'
      },
      ru: {
        title: 'В центре Степанавана сдаётся 2‑комнатный частный дом',
        address: 'Степанаван (Центр)',
        rooms: '1 спальня · 1 гостиная',
        description: 'Имеющаяся мебель и техника. 1 спальня, 1 гостиная.'
      },
      hy: {
        title: 'Ստեփանավան քաղաքի կենտրոնում վարձակալությապ է տրվում 2 սենյականոց սեփական տուն',
        address: 'Ստեփանավան (Քաղաքի կենտրոն)',
        rooms: '1 ննջարան · 1 հյուրասենյակ',
        description: 'Առկա գույք եւ տեխնիկա։ 1 ննջարան, 1 հյուրասենյակ։'
      }
    }
  },
  {
    id: 'stepanavan_city_center_1room_42sqm_lease',
    category: 'residential',
    status: 'long_term',
    price: '֏40,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/6229/IFzqqs.jpg',
        'https://imagizer.imageshack.com/img924/7369/Rq6agZ.jpg',
        'https://imagizer.imageshack.com/img923/2750/ElTMm6.jpg',
        'https://imagizer.imageshack.com/img922/3845/ypWfy3.jpg'
    ],
    locales: {
      en: {
        title: 'For Rent — 1-room apartment (City Center)',
        address: 'Stepanavan (City Center)',
        size: '42 sqm',
        rooms: '1 Room',
        description: 'Sunny side. Baxi heating system. 3rd floor.'
      },
      ru: {
        title: 'Аренда — 1-комнатная квартира (Центр)',
        address: 'Степанаван (Центр)',
        size: '42 м²',
        rooms: '1 комната',
        description: 'Солнечная сторона. Система Baxi. 3-й этаж.'
      },
      hy: {
        title: 'Վարձույթ — 1 սենյականոց բնակարան (Քաղաքի կենտրոն)',
        address: 'Ստեփանավան (Քաղաքի կենտրոն)',
        size: '42 քմ',
        rooms: '1 սենյակ',
        description: 'Արեւկող։ Baxi համակարգ։ 3-րդ հարկ։'
      }
    }
  },
  {
    id: 'stepanavan_center_2room_renovated_apartment_lease',
    category: 'residential',
    status: 'long_term',
    price: '֏100,000',
    featured: false,
    images: [
       'https://imagizer.imageshack.com/img924/6554/0Emk30.jpg',
        'https://imagizer.imageshack.com/img923/5125/Y3zAWC.jpg',
        'https://imagizer.imageshack.com/img924/6213/SIdl33.jpg',
        'https://imagizer.imageshack.com/img923/5676/b5RVLZ.jpg',
        'https://imagizer.imageshack.com/img922/1827/In64PL.jpg',
        'https://imagizer.imageshack.com/img922/3581/xcTw26.jpg',
        'https://imagizer.imageshack.com/img924/3381/ff4rDh.jpg',
        'https://imagizer.imageshack.com/img922/6585/yVCpFn.jpg'

    ],
    locales: {
      en: {
        title: 'For Rent — 2-room renovated apartment in the city center of Stepanavan',
        address: 'Stepanavan (City Center)',
        rooms: '2 Rooms',
        description: 'With furniture and appliances. 2nd floor. Sunny and bright. All necessary infrastructure nearby.'
      },
      ru: {
        title: 'В центре Степанавана сдаётся 2‑комнатная хорошо отремонтированная квартира',
        address: 'Степанаван (Центр)',
        rooms: '2 комнаты',
        description: 'С мебелью и техникой. 2-й этаж. Солнечная и светлая. Рядом вся необходимая инфраструктура.'
      },
      hy: {
        title: 'Ստեփանավան քաղաքի կենտրոնում վարձակալության է տրվում 2 սենյականոց լավ վերանորոգված բնակարան',
        address: 'Ստեփանավան (Քաղաքի կենտրոն)',
        rooms: '2 սենյակ',
        description: 'Գույքով եւ տեխնիկայով։ 2-րդ հարկ։ Արեւոտ եւ լուսավոր։ Մոտ են բոլոր անհրաժեշտ ենթակառուցվածքները։'
      }
    }
  },
  {
    id: 'stepanavan_charents_3room_house_lease',
    category: 'residential',
    status: 'long_term',
    price: '֏60,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img924/1750/9nkMjY.jpg',
      'https://imagizer.imageshack.com/img923/1364/oebQi1.jpg',
      'https://imagizer.imageshack.com/img922/3426/216kQ9.jpg',
      'https://imagizer.imageshack.com/img923/3091/bzLd0l.jpg',
      'https://imagizer.imageshack.com/img922/426/jl6fvv.jpg',
      'https://imagizer.imageshack.com/img922/994/TZQJ1U.jpg',
      'https://imagizer.imageshack.com/img922/4328/BUPtim.jpg'
    ],
    locales: {
      en: {
        title: '3-room house with garden',
        address: 'Stepanavan, Charents St.',
        rooms: '3 Rooms',
        description: 'With furniture and appliances. Large garden. Barn. Open balcony.'
      },
      ru: {
        title: '3-комнатная квартира',
        address: 'Степанаван, ул. Чаренца',
        rooms: '3 комнаты',
        description: 'С мебелью и техникой. Большой сад. Сарай. Открытый балкон.'
      },
      hy: {
        title: '3 սենյականոց բնակարան',
        address: 'Ստեփանավան, Չարենցի փողոց',
        rooms: '3 սենյականոց',
        description: 'Գույքով եւ տեխնիկայով։ Մեծ այգի։ Անասնագոմ։ Բաց պատշգամբ։'
      }
    }
  },
  {
    id: 'gyulagarak_dendropark_luxury_daily_lease',
    category: 'residential',
    status: 'rent',
    price: 'Price on request',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img923/707/5usBl4.jpg',
      'https://imagizer.imageshack.com/img922/5687/a3Mt7s.jpg',
      'https://imagizer.imageshack.com/img924/4629/688Pdn.jpg',
      'https://imagizer.imageshack.com/img922/3484/dZgL6W.jpg',
      'https://imagizer.imageshack.com/img924/4945/T6vBEo.jpg',
      'https://imagizer.imageshack.com/img922/3525/sBYhKr.jpg'
  
    ],
    locales: {
      en: {
        title: 'Daily Rent — Luxury Private House in Gyulagarak (near Dendropark)',
        address: 'Gyulagarak (near Dendropark)',
        rooms: 'Up to 7 persons',
        description: 'Comfortable and luxurious house. The house consists of 3 bedrooms and 1 large living room. Fully furnished and equipped with the necessary appliances. In the heart of nature. Large and beautiful garden with fir trees. Located on the river bank and next to the Dendropark. Relaxation area. Special barbecue oven and a large open balcony available. The house can accommodate up to 7 persons. Price may vary depending on the number of days and guests. Unique look. The house has a unique position and appearance.',
      price:'Price on request'
      },
      ru: {
        title: 'Посуточно — роскошный частный дом в Гюлагараке (рядом с Дендропарком)',
        address: 'Гюлагарак (рядом с Дендропарком)',
        rooms: 'До 7 человек',
        description: 'Уютный и роскошный дом. Дом состоит из 3 спален и 1 большой гостиной. Полностью меблирован и оснащён необходимой техникой. В окружении природы. Большой и красивый сад с елями. Расположен на берегу реки и рядом с Дендропарком. Зона отдыха. Есть специальная печь для барбекю и большой открытый балкон. Дом вмещает до 7 человек. Стоимость может меняться в зависимости от количества дней и гостей. Уникальный вид. Дом имеет уникальное расположение и внешний вид.',
      price: 'Цена по запросу'
      },
      hy: {
        title: 'Օրավարձով է տրվում գերշքեղ առանձնատուն Գյուլագարակ համայնքում Դենդրոպարկի հարեւանությամբ',
        address: 'Գյուլագարակ, Դենդրոպարկի հարեւանությամբ',
        rooms: 'Մինչեւ 7 անձ',
        description: 'Հարմարավետ և շքեղ տուն։ Տունը կազմված է 3 ննջասենյակից և 1 մեծ հյուրասենյակից։ Ամբողջությամբ կահավորված է և ապահովված անհրաժեշտ տեխնիկայով։ Բնության գրկում։ Ունի մեծ և գեղեցիկ այգի՝ եղևնիներով։ Գտնվում է գետի ափին և Դենդրոպարկի հարևանությամբ։ Հանգստի գոտի։ Առկա է խորովածի համար նախատեսված հատուկ վառարան և մեծ, բաց պատշգամբ։ Տունը կարող է տեղավորել մինչև 7 անձ։ Գինը կարող է փոփոխվել՝ կախված օրերի և անձանց քանակից։ Ունիկալ տեսք։ Տունն ունի յուրօրինակ դիրք և տեսք։',
      price: 'Գինը ըստ հարցման'
      }
    }
  },

  {
    id: 'stepanavan_leftbank_4room_longterm',
    category: 'residential',
    status: 'long_term',
    price: '֏80,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/9451/cnyeTh.jpg',
        'https://imagizer.imageshack.com/img923/6599/xP3M1I.jpg',
        'https://imagizer.imageshack.com/img923/5655/RZtuuT.jpg',
        'https://imagizer.imageshack.com/img922/8059/OQC2pq.jpg',
        'https://imagizer.imageshack.com/img922/1549/xMcj5v.jpg'
    ],
    locales: {
      en: {
        title: 'Long-term Rent — 4-room Apartment',
        address: 'Stepanavan, Left Bank',
        rooms: '4 Rooms',
        description: 'Floor 4/4. Fully furnished. Renovated. Baxi heating system. Open balcony.'
      },
      ru: {
        title: 'Долгосрочная аренда — 4‑комнатная квартира',
        address: 'Степанаван, Левый берег',
        rooms: '4 комнаты',
        description: 'Этаж 4/4. Со всей мебелью. Отремонтирована. Система отопления Baxi. Открытый балкон.'
      },
      hy: {
        title: 'Երկարաժամկետ վարձակալության է տրվում 4 սենյականոց բնակարան',
        address: 'Ստեփանավան, Ձախափում',
        rooms: '4 սենականոց',
        description: '4/4 հարկ։ Ամբողջ գույքով։ Վերանորոգված։ Baxi ջեռուցման համակարգ։ Բաց պատշմգամբ։'
      }
    }
  },
  {
    id: 'stepanavan_gorge_large_house_sale',
    category: 'residential',
    status: 'sale',
    price: '$40,000',
    featured: false,
    images: [
        'https://i.imgur.com/zyn9poc.jpeg',
        'https://i.imgur.com/wbLlvJP.jpeg',
        'https://i.imgur.com/ZBPjtbu.jpeg',
        'https://i.imgur.com/dVBypZA.jpeg',
        'https://i.imgur.com/6EnuSAN.jpeg'
    ],
    locales: {
      en: {
        title: 'In one of the most beautiful and picturesque places of Stepanavan, near the gorge, a large private house is for sale',
        address: 'Stepanavan',
        description: 'About 30 m frontage along the gorge. Fantastically beautiful view. A great option for living or for use as a recreation area. Private land plot 800 sqm. House area 180 sqm. Requires renovation. Roof is in good condition. European-made windows. Open balcony available. Large and spacious garage. All necessary infrastructure for living is available in the area (shops, educational institutions, etc.). Only 50 m from the asphalted road.'
      },
      ru: {
        title: 'В одном из самых красивых и живописных мест Степанавана, рядом с ущельем, продаётся большой частный дом',
        address: 'Степанаван',
        description: 'Около 30 м фасада вдоль ущелья. Фантастически красивый вид. Отличный вариант для проживания или использования как зону отдыха. Собственный земельный участок 800 м². Площадь дома 180 м². Требует ремонта. Крыша в хорошем состоянии. Окна европейского производства. Есть открытый балкон. Большой и просторный гараж. В районе имеется необходимая инфраструктура для проживания (магазины, учебные заведения и т. д.). Всего в 50 м от асфальтированной дороги.'
      },
      hy: {
        title: 'Ստեփանավանի ամենա գեղեցիկ եւ գեղատեսիլ վայրերից մեկում, ձորի մոտ վաճառվում է մեծ առանձնատուն',
        address: 'Ստեփանավան',
        description: 'Մոտ 30մ ճակատ ձորի հետ։ Ֆանտաստիկ գեղեցիկ տեսարան։ Հիանալի տարբերակ է բնակություն հաստատելու կամ որպես հանգստի գոտի օգտագործելու համար։ Սեփական հողամասով 800քմ։ Տան նակերես 180քմ։ Վերանորոգման ենթակա։ Տանիքը լավ վիճակում։ Լուսամուտները եվրոպական արտադրության։ Առկա է բաց պատշգամբ։ Մեծ եւ ընդարձակ ավտոտնակ։ Տարածքում առկա են անհրաժեշտ ենթակառուցվածքներ բնակության համար (խանութներ, ուսումնական հաստատություններ եւ այլն…)։ Ասֆալտապատ ճանապարհից ընդամենը 50մ հեռ. վրա։'
      }
    }
  },
  {
    id: 'gyulagarak_exclusive_house_2600sqm_plot',
    category: 'commercial',
    status: 'sale',
    price: '$65,000',
    featured: false,
    images: [
        'https://i.imgur.com/SEcceiZ.jpeg',
        'https://i.imgur.com/wlhPltu.jpeg',
        'https://i.imgur.com/a7IkdRh.jpeg'
    ],
    locales: {
      en: {
        title: 'Private House with 2,600 sqm Land',
        address: 'Gyulagarak (near Dendropark)',
        description: 'Exclusive right to sell. Two-storey. Has about 45 m frontage along the main road. View towards Pushkin Pass. Suitable for implementing new business ideas. The land is flat and suitable for construction works. Documents verified. Located in one of the busiest places of the community.'
      },
      ru: {
        title: 'Частный дом с участком 2 600 м²',
        address: 'Гюлагарак (рядом с Дендропарком)',
        description: 'Эксклюзивное право продажи. Двухэтажный. С главным шоссе имеет около 45 м фасада. Вид на перевал Пушкина. Подходит для реализации новых бизнес‑идей. Участок ровный и подходит для строительных работ. Документы проверены. Находится в одном из самых оживлённых мест общины.'
      },
      hy: {
        title: 'Սեփական տուն 2600քմ հողամասով',
        address: 'Գյուլագարակ (Դենդրոպարկի մոտ)',
        description: 'Վաճառքի բացառիկ իրավունքով։ Երկհարկանի։ Գլխավոր ճանապարհի հետ ունի մոտ 45մ ճակատ։ Տեսարան դեպի Պուշկինի լեռնանցք։ Հարմար է նոր բիզնես գաղափարներ կյանքի կոչելու համար։ Հողամասը հարթ է եւ հարմար շինարարական աշխատանքների համար։ Թղթերը ստուգված։ Գտնվում է համայնքի ամենա բանուկ վայրհրից մեկում։'
      }
    }
  },
  {
    id: 'stepanavan_alea_beautiful_house_sale',
    category: 'residential',
    status: 'sale',
    price: '$75,000',
    featured: false,
    images: [
        'https://i.imgur.com/eDgmfGp.jpeg',
        'https://i.imgur.com/QK2n9Tf.jpeg',
        'https://i.imgur.com/paabEIJ.jpeg',
        'https://i.imgur.com/2ab7TUv.jpeg',
        'https://i.imgur.com/7k18w0O.jpeg',
        'https://i.imgur.com/i47hDBs.jpeg'
    ],
    locales: {
      en: {
        title: 'Beautiful Private House for Sale — Near Alea Park',
        address: 'Stepanavan (near Alea Park)',
        description: 'Beautiful yard. Adjacent to the forest. Designer renovation. Open balcony.'
      },
      ru: {
        title: 'Продаётся красивый частный дом — рядом с парком «Алея»',
        address: 'Степанаван (рядом с парком «Алея»)',
        description: 'Красивый двор. Прилегает к лесу. Дизайнерский ремонт. Открытый балкон.'
      },
      hy: {
        title: 'Վաճառվում է գեղեցիկ առանձնատուն Ալեա այգու հարեւանությամբ',
        address: 'Ստեփանավան (Ալեա այգու հարեւանությամբ)',
        description: 'Գեղեցիկ բակ։ Անտառին կից։ Դիզայներական վերանորոգում։ Բաց պատշգամբ։'
      }
    }
  },
  {
    id: 'stepanavan_two_storey_exclusive_sale',
    category: 'residential',
    status: 'sale',
    price: '$27,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img922/682/NdbSEC.jpg',
        'https://imagizer.imageshack.com/img922/7932/XeHHBJ.jpg',
        'https://imagizer.imageshack.com/img923/8254/uctIpJ.jpg',
        'https://imagizer.imageshack.com/img923/7465/kZ7Bcu.jpg',
        'https://imagizer.imageshack.com/img924/8494/32Rcug.jpg',
        'https://imagizer.imageshack.com/img923/1995/okP4zs.jpg',
        'https://imagizer.imageshack.com/img924/2083/7Uaz52.jpg',
        'https://imagizer.imageshack.com/img923/7424/wn1SnP.jpg'
    ],
    locales: {
      en: {
        title: 'Two-storey Private House for Sale in Stepanavan city',
        address: 'Stepanavan',
        rooms: '4 Rooms',
        description: 'Exclusive right to sell. Two-storey. 4 rooms (consists of one living room and 3 bedrooms). Roof is in good condition. Bathroom and toilet are separate. On the 2nd floor there is one more bathroom. Basement floor available. Floor is partially tiled. Documents verified. Has a small garden. The territory is fenced. Utilities: Gas, Electricity, Water, Sewer.'
      },
      ru: {
        title: 'Продаётся двухэтажный частный дом в городе Степанаван',
        address: 'Степанаван',
        rooms: '4 комнаты',
        description: 'Эксклюзивное право продажи. Двухэтажный. 4-комнатный (состоит из одной гостиной и 3 спален). Крыша в хорошем состоянии. Санузел и ванная раздельные. На 2-м этаже есть ещё одна ванная комната. Есть подвальный этаж. Пол частично выложен плиткой. Документы проверены. Также есть небольшой сад. Территория огорожена. Коммуникации: Газ, Электричество, Вода, Канализация.'
      },
      hy: {
        title: 'Վաճառվում է երկհարկանի սեփական տուն Ստեփանավան քաղաքում',
        address: 'Ստեփանավան',
        rooms: '4 սենականոց',
        description: 'Վաճառքի բացառիկ իրավունք։ Երկհարկանի։ 4 սենյականոց (Բաղկացած է մեկ հյուրասենյակային հատվածից եւ 3 ննջասենյակից)։ Տանիքը գտնվում է լավ վիճակում։ Սանհանգույցը եւ լոգարանը առանձին են։ 2-րդ հարկում առկա է լոգարանային եւս մեկ հատված։ Առկա է նկուղային հարկ։ Հատակը մասնակի սալիկապատված։ Փաստաթղթերը ստուգված։ Ունի նաեւ փոքրիկ այգի։ Տարածքը պարսպապատ է։ Կոմունիկացիաներ՝ Գազ, Հոսանք, Ջուր, Կոյուղի։'
      }
    }
  },
  {
    id: 'stepanavan_leftbank_semi_built_house_land_sale',
    category: 'land',
    status: 'sale',
    price: '$25,500',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img924/4149/QfQO7N.jpg',
      'https://imagizer.imageshack.com/img924/8614/toxqqx.jpg',
      'https://imagizer.imageshack.com/img923/9027/wse6HP.jpg',
      'https://imagizer.imageshack.com/img923/3373/YMV9IP.jpg',
      'https://imagizer.imageshack.com/img922/7576/KEhHAR.jpg',
      'https://imagizer.imageshack.com/img924/7937/2qxBRL.jpg'
    ],
    locales: {
      en: {
        title: 'Semi-built Private House for Sale in Stepanavan (Left Bank)',
        address: 'Stepanavan (Left Bank)',
        description: 'Exclusive right to sell. Two-storey semi-built large and spacious private house (120 sqm). The house position is very dry and favorable for living. Very strong foundation. Has a small land plot. Adjacent wall available. All necessary infrastructure for living is available in the area. Only 80–100 m from the asphalted road.'
      },
      ru: {
        title: 'Продаётся недостроенный частный дом в Степанаване (Левый берег)',
        address: 'Степанаван (Левый берег)',
        description: 'Эксклюзивное право продажи. Двухэтажный недостроенный, большой и просторный частный дом (120 м²). Очень сухое и благоприятное для проживания расположение. Очень прочный фундамент. Есть небольшой земельный участок. Есть прилегающая стена. В районе есть вся необходимая для проживания инфраструктура. Находится всего в 80–100 м от асфальтированной дороги.'
      },
      hy: {
        title: 'Վաճառվում է կիսակառույց սեփական տուն Ստեփանավանում (Ձախափում)',
        address: 'Ստեփանավան (Ձախափում)',
        description: 'Վաճառքի բացառիկ իրավունք։ Երկհարկանի կիսակառույց մեծ եւ ընդարձակ սեփական տուն (120քմ)։ Տան դիրքը շատ չոր է եւ բարենպաստ բնակության համար։ Տան հիմքը շատ ամուր է։ Ունի փոքրիկ հողակտոր։ Առկա է կից պատ։ Տարածքում առկա են բոլոր ենթակառուցվածքները բնակության համար։ Ասֆալտապատ ճանապարհից հեռու է ընդամենը 80-100 մ։'
      }
    }
  },
  {
    id: 'lori_berd_3room_house_4500_plot_sale',
    category: 'residential',
    status: 'sale',
    price: '$38,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img922/8940/p2AhrS.jpg',
        'https://imagizer.imageshack.com/img923/8724/LMvdQU.jpg',
        'https://imagizer.imageshack.com/img923/9180/3F72BR.jpg',
        'https://imagizer.imageshack.com/img924/3404/P1zmd5.jpg',
        'https://imagizer.imageshack.com/img922/6808/ZOkxsn.jpg',
        'https://imagizer.imageshack.com/img922/2302/Pxg92s.jpg',
        'https://imagizer.imageshack.com/img924/6290/aTUEyR.jpg',
        'https://imagizer.imageshack.com/img923/443/7pq3B9.jpg'
    ],
    locales: {
      en: {
        title: '3-room House in Lori Berd with 4,500 sqm Development Land — Exclusive Right',
        address: 'Lori Berd',
        size: 'Living area N/A · Land 4,500 sqm',
        rooms: '3 Rooms',
        description: 'The territory is partially fenced. On the land there are additional structures: a garage and a summer zone. The house needs renovation inside and outside. The location of the land and house is very convenient and favorable for starting new construction works. The territory can serve as a recreation area and hotel complex. The territory has a wide frontage towards the gorge. Very beautiful view towards nature.'
      },
      ru: {
        title: 'Продаётся 3‑комнатный дом в Лори Берд с участком 4 500 м² под застройку — эксклюзивное право',
        address: 'Лори Берд',
        size: 'Жилая площадь N/A · Участок 4 500 м²',
        rooms: '3 комнаты',
        description: 'Территория частично огорожена. На участке есть другие постройки: гараж и летняя зона. Дом нуждается в ремонте снаружи и внутри. Расположение участка и дома очень удобное и благоприятное для начала новых строительных работ. Территория может служить зоной отдыха и гостиничным комплексом. Территория имеет широкий фасад с видом на ущелье. Очень красивый вид на природу.'
      },
      hy: {
        title: 'Վաճառվում է 3 սենյականոց Տուն Լոռի Բերդում 4500քմ բնակելի կառոցապատման հողամասով',
        address: 'Լոռի Բերդ',
        size: 'Բնակելի մակերես N/A · Հողամաս 4500 քմ',
        rooms: '3 սենյականոց',
        description: 'Տարածքը մասամբ պարսպապատ է։ Հողամասում առկա է նաեւ այլ շինություններ՝ ավտոտնակ եւ ամառոնացային հատված։ Տունը ունի վերանորոգման կարիք դրսից եւ ներսից։ Հողամասի եւ տան աշխարհագրական դիրքը շատ հարմար է եւ բարենպաստ նոր շինարարական աշխատանքներ սկսելու համար։ Տարածքը կարող է ծառայել որպես հանգստյան գոտի եւ հյուրանոցային համալիր։ Տարածքը ունի լայն ճակատ դեպի ձորակ։ Ունի շատ գեղեցիկ տեսարան դեպի բնություն։'
      }
    }
  },
  {
    id: 'stepanavan_two_storey_commercial_building_sale',
    category: 'commercial',
    status: 'sale',
    price: '$150,000',
    featured: false,
    images: [
        'https://imagizer.imageshack.com/img924/6492/SQFbLf.jpg',
        'https://imagizer.imageshack.com/img922/6112/eMM7Ka.jpg',
        'https://imagizer.imageshack.com/img923/2650/DrQIWW.jpg',
        'https://imagizer.imageshack.com/img922/1199/SdosIx.jpg',
        'https://imagizer.imageshack.com/img924/9272/6mFP8h.jpg',
        'https://imagizer.imageshack.com/img922/2011/rr1xS8.jpg',
        'https://imagizer.imageshack.com/img923/5309/e1ZYha.jpg',
        'https://imagizer.imageshack.com/img922/9688/EejxvB.jpg',
        'https://imagizer.imageshack.com/img924/4015/mKkrTR.jpg',
        'https://imagizer.imageshack.com/img922/7536/3GQ09p.jpg'
    ],
    locales: {
      en: {
        title: 'Two-storey Building for Sale in Stepanavan — Exclusive Right',
        address: 'Stepanavan (on the road)',
        description: 'The building can serve as a commercial space. Exclusive right to sell. Ground floor consists of 3 parts. Many prerequisites and opportunities for business. Located on the road leading to Lori Berd (first line). Open and spacious parking lot. On the ground floor there are 2 car service points equipped with all necessary equipment. The third part can serve as another commercial space. The second floor is residential and consists of 3 bedrooms (also for rent). Has 5 open balconies. Roof and electrical wiring are in excellent condition. The area is considered one of the best tourist places in Armenia.'
      },
      ru: {
        title: 'Продаётся двухэтажное здание в Степанаване — эксклюзивное право',
        address: 'Степанаван (на дороге)',
        description: 'Здание может служить коммерческим помещением. Эксклюзивное право продажи. Первый этаж состоит из 3 частей. Есть много возможностей для бизнеса. Находится на дороге, ведущей в Лори-Берд (первая линия). Имеется открытая и просторная парковка. На первом этаже есть 2 пункта автосервиса, оснащённые всем оборудованием. Третья часть может служить другим коммерческим помещением. Второй этаж жилой и состоит из 3 спален (также сдаётся в аренду). Имеет 5 открытых балконов. Крыша и электропроводка в идеальном состоянии. Район считается одним из лучших туристических мест Армении.'
      },
      hy: {
        title: 'Վաճառվում է երկհարկանի շինություն Ստեփանավանում',
        address: 'Ստեփանավան (ճանապարհի վրա)',
        description: 'Շինությունը կարող է ծառայել որպես բիզնես տարածք։ Առաջին հարկը բաղկացած է 3 մասից։ Առկա են բիզնեսի համար բազմաթիվ նախադրյալներ։ Գտնվում է Լոռի բերդ տանող ճանապարհի վրա (Առաջին գիծ)։ Ունի բաց եւ ընդարձակ ավտոկայանատեղի։ Շինության առաջին հարկում առկա է 2 ավտոտեխսպասարկման համար նախատեսված կետ, հագեցած բոլոր սարքավորումներով։ Երրորդ մասը կարող է ծառայել որպես այլ բիզնես տարածք։ Երկրորդ հարկը բնակելի է եւ բաղկացած է 3 ննջասենյակից (Տրվում է նաեւ վարձով)։ Ունի 5 բաց պատշգամբ։ Տանիքը եւ հոսանքալարերը գտնվում են անթերի վիճակում։ Տարածաշրջանը համարվում է Հայաստանի լավագույն տուրիստական վայրերից մեկը։'
      }
    }
  },
  {
    id: 'stepanavan_renovated_two_storey_luxury_sale',
    category: 'residential',
    status: 'sale',
    price: '$85,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img923/1227/v5P1LL.jpg',
      'https://imagizer.imageshack.com/img922/1246/6eAjnU.jpg',
      'https://imagizer.imageshack.com/img923/6554/RbO604.jpg',
      'https://imagizer.imageshack.com/img922/7730/2Cb6fe.jpg',
      'https://imagizer.imageshack.com/img924/422/npza34.jpg',
      'https://imagizer.imageshack.com/img923/6568/XEETG4.jpg',
      'https://imagizer.imageshack.com/img924/8800/AlW9LB.jpg',
      'https://imagizer.imageshack.com/img924/8089/kpG6E6.jpg',
      'https://imagizer.imageshack.com/img923/6092/akOvlw.jpg',
      'https://imagizer.imageshack.com/img922/9536/F4LfWk.jpg',
      'https://imagizer.imageshack.com/img922/4215/UrZmnO.jpg'
    ],
    locales: {
      en: {
        title: 'Renovated Two-storey Luxury Private House for Sale — Stepanavan',
        address: 'Stepanavan',
        size: 'House 239 sqm · Land 800 sqm',
        rooms: '3 bedrooms + 1 large living room',
        description: 'Italian Baxi heating system. House floor fully tiled. European-made windows. Renovated bathroom and toilet. Furniture by agreement. Second floor is in good condition and ready for use. Large and spacious storage room. Large open balcony. Roof and electrical wiring are in perfect condition. The geographical position of the house is very dry and sunny. Finishing done with quality building materials. Located 30 m from the central Bagramyan Street.'
      },
      ru: {
        title: 'Продаётся отремонтированный двухэтажный роскошный частный дом — Степанаван',
        address: 'Степанаван',
        size: 'Дом 239 м² · Участок 800 м²',
        rooms: '3 спальни + 1 большая гостиная',
        description: 'Итальянская система отопления Baxi. Пол дома полностью выложен плиткой. Окна европейского производства. Санузел и ванная отремонтированы. Мебель по договорённости. Второй этаж в хорошем состоянии и пригоден для использования. Большая и просторная кладовая. Большой открытый балкон. Крыша и электропроводка в идеальном состоянии. Географическое положение дома очень сухое и солнечное. Отделка выполнена качественными стройматериалами. Находится в 30 м от центральной улицы (Баграмяна).'
      },
      hy: {
        title: 'Վաճառվում է Վերանորոգված երկհարկանի սեփական շքեղ տուն Ստեփանավանում',
        address: 'Ստեփանավան',
        size: 'Տան մակերեսը 239քմ · Հողամաս 800քմ',
        rooms: 'Բաղկացած է 3 ննջասենյակից եւ մեկ մեծ հյուրասենյակից',
        description: 'Առկա է Իտալական Baxi համակարգ։ Տան հատակը ամբողջությամբ սալիկապատված է։ Լուսամուտները եվրոպական արտադրության։ Սանհանգույցը եւ լոգարանը վերանորոգված են։ Գույքը համաձայնությամբ։ Տան 2-րդ հարկը գտնվում է բարվոք եւ ենթակա է օգտագործման։ Ունի մեծ եւ ընդարձակ խորդանոց։ Առկա է մեծ բաց պատշգամբ։ Տանիքը եւ հոսանքալարերը գտնվում են իդեալական վիճակում։ Տան աշխարհագրական դիրքը շատ չոր է եւ արեւկող։ Իրականացված է որակյալ շինանյութերի հարդարում։ Գտնվում է կենտրոնական փողոցից (Բաղրամյան) 30 մ հեռավորության վրա։'
      }
    }
  },
  {
    id: 'stepanavan_two_storey_private_house_45k',
    category: 'residential',
    status: 'sale',
    price: '$45,000',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img924/8881/cSQ4yo.jpg',
      'https://imagizer.imageshack.com/img923/563/37Hpt4.jpg',
      'https://imagizer.imageshack.com/img924/306/LIXBgJ.jpg',
      'https://imagizer.imageshack.com/img923/8550/bU0ugd.jpg',
      'https://imagizer.imageshack.com/img924/4164/nX4qap.jpg',
      'https://imagizer.imageshack.com/img924/5150/IHsE6M.jpg',
      'https://imagizer.imageshack.com/img922/548/Uz0V0b.jpg',
      'https://imagizer.imageshack.com/img924/358/Flvrmy.jpg'
    ],
    locales: {
      en: {
        title: 'Two-storey Private House for Sale in Stepanavan — Exclusive Right',
        address: 'Stepanavan',
        size: 'Living area 370 sqm · Land 400 sqm',
        description: 'Fully habitable condition. Garage. Open and large balconies. Partially with furniture. European-made windows. The house is very bright and dry. Only 20 m from the asphalted road. Nearby there are school and shops.'
      },
      ru: {
        title: 'Продаётся двухэтажный частный дом в городе Степанаван — эксклюзивное право',
        address: 'Степанаван',
        size: 'Жилая площадь 370 м² · Участок 400 м²',
        description: 'Полностью жилое состояние. Гараж. Открытые и большие балконы. Частично с мебелью. Европейские окна. Дом очень светлый и сухой. Всего в 20 м от асфальтированной дороги. Рядом есть школа и магазины.'
      },
      hy: {
        title: 'Վաճառվում է երկհարկանի սեփական առանձնատուն Ստեփանավան քաղաքում',
        address: 'Ստեփանավան',
        size: 'Բնակելի տարածք՝ 370 քմ · Հողատարածք՝ 400 քմ',
        description: 'Լիարժեք բնակելի վիճակում։ Ավտոտնակ։ Բաց եւ մեծ պատշգամբներ։ Մասնակի գույքի հետ միասին։ Եվրոպական արտադրության պատուհաններ։ Տունը շատ լուսավոր է եւ չոր։ Գտնվում է ասֆալտապատ ճանապարհից ընդամենը 20 մ հեռավորության վրա։ Կողքին կա դպրոց եւ խանութներ։'
      }
    }
  },
  {
    id: 'stepanavan_leftbank_large_house_below_market',
    category: 'residential',
    status: 'sale',
    price: '$45,000',
    featured: false,
    images: [
        'https://i.imgur.com/j6RtOGH.jpeg',
        'https://i.imgur.com/oSmIoIo.jpeg',
        'https://i.imgur.com/eZSrYem.jpeg',
        'https://i.imgur.com/t41SazI.jpeg',
        'https://i.imgur.com/ALdNSA3.jpeg',
        'https://i.imgur.com/a0vxayi.jpeg',
        'https://i.imgur.com/ZIyPHpK.jpeg',
        'https://i.imgur.com/KWK9U2T.jpeg',
        'https://i.imgur.com/CwT2PMQ.jpeg',
        'https://i.imgur.com/ZsZFGl8.jpeg',
        'https://i.imgur.com/YCfLsRl.jpeg'
    ],
    locales: {
      en: {
        title: 'Large Private House for Sale in Stepanavan (Left Bank) — Below Market Price',
        address: 'Stepanavan (Left Bank)',
        size: 'Living area 140 sqm',
        description: 'Below market price. With a large land plot. Living area 140 sqm. 4 rooms. Basement floor. Roof in good condition. 4 balconies. Solid stone construction. Warm and sunny. Habitable condition. All communications available. Fruit trees.'
      },
      ru: {
        title: 'Продаётся большой частный дом в Степанаване (Левый берег) — ниже рыночной цены',
        address: 'Степанаван (Левый берег)',
        size: 'Жилая площадь 140 м²',
        description: 'Доступнее рыночной цены. С большим земельным участком. Жилая площадь 140 м². 4 комнаты. Подвальный этаж. Крыша в хорошем состоянии. 4 балкона. Прочная каменная постройка. Теплый и солнечный. Жилое состояние. Со всеми коммуникациями. Фруктовые деревья.'
      },
      hy: {
        title: 'Վաճառվում է մեծ սեփական տուն Ստեփանավան քաղաքում',
        address: 'Ստեփանավան (Ձախափում)',
        size: 'Բնակելի մակերես 140քմ',
        description: 'Շուկայականից մատչելի։ Մեծ հողամասով։ Բնակելի մակերես 140քմ։ 4 սենյակ։ Նկուղային հարկ։ Տանիքը լավ վիճակում։ 4 պատշգամբ։ Ամուր քարե շինություն։ Տաք եւ արեւոտ։ Բնակելի վիճակ։ Առկա բոլոր կոմունիկացիաներով։ Պտղատու ծառեր։'
      }
    }
  },
  {
    id: 'stepanavan_leftbank_1000sqm_business_land',
    category: 'land',
    status: 'sale',
    price: 'Price on request',
    featured: false,
    images: [
      'https://imagizer.imageshack.com/img923/7392/DHGqFu.jpg',
      'https://imagizer.imageshack.com/img923/4682/u1pA2D.jpg',
      'https://imagizer.imageshack.com/img922/218/wZDKAS.jpg',
      'https://imagizer.imageshack.com/img922/1748/ibooda.jpg',
      'https://imagizer.imageshack.com/img923/2977/xKH0ok.jpg'
    ],
    locales: {
      en: {
        title: '1000 sqm Land Plot for Sale in Stepanavan',
        address: 'Stepanavan (Left Bank)',
        size: '1000 sqm',
        price: 'Price on request',
        description: '1000 sqm land plot for sale in Stepanavan (Left Bank). Located in the busiest and most populated part of the district. Suitable for business purposes. Has 15-20m frontage along the main road. The geographic position is very convenient for construction works. Utilities available (Electricity, Water, Gas). Exclusive right to sell.',
        amenities: ['1000 sqm', 'Busy area', '15-20m frontage', 'Utilities available', 'Business potential']
      },
      ru: {
        title: 'Продаётся земельный участок 1000 м² в Степанаване',
        address: 'Степанаван (Левый берег)',
        size: '1000 м²',
        price: 'Цена по запросу',
        description: 'Продаётся земельный участок 1000 м² в городе Степанаван (Левый берег). Расположен в самом оживлённом и людном месте района. Подходит для реализации бизнес-целей. Имеет 15-20 м фасадной части с главной дорогой. Географическое положение участка очень удобно для строительных работ. Коммуникации в наличии (Электроэнергия, Вода, Газ). Эксклюзивное право продажи.',
        amenities: ['1000 м²', 'Оживленное место', '15-20 м фасад', 'Коммуникации', 'Для бизнеса']
      },
      hy: {
        title: 'Վաճառվում է 1000քմ հողամաս Ստեփանավան քաղաքում',
        address: 'Ստեփանավան (Ձախափ)',
        size: '1000 քմ',
        price: 'Գինը ըստ հարցման',
        description: 'Վաճառվում է 1000քմ հողամաս Ստեփանավան քաղաքում (Ձախափում)։ Գտնվում է տեղամասի ամենա բանուկ եւ մարդաշատ վայրում։ Հարմար է բիզնես նպատակներ կյանքի կոչելու համար։ Ունի 15-20մ ճակատային մաս գլխավոր ճանապարհի հետ։ Հողամասի աշխարհագրական դիրքը շատ հարմար է շինարարական աշխատանքների համար։ Առկա կոմունիկացիաներ (Էլեկտրաեներգիա, Ջուր, Գազ)։ Վաճառքի բացառիկ իրավունքով։',
        amenities: ['1000 քմ', 'Բանուկ վայր', '15-20մ ճակատ', 'Կոմունիկացիաներ', 'Բիզնեսի համար']
      }
    }
  }
];