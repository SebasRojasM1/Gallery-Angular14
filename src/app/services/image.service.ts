import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private imagesData: Image[] = [
    { id: 1, url: 'https://viajes.nationalgeographic.com.es/medio/2023/05/02/table-mountain_0c9679bd_1585258312_230502130312_1000x667.jpg', title: 'Cape town, South Africa', description: 'A coastal city surrounded by mountains and famous for its multiculturalism and natural beauty.', longDescription: 'Cape Town, located on the southern tip of Africa, is a coastal gem with breathtaking scenery ranging from white sandy beaches to the iconic Table Mountain. It is a melting pot of cultures with African, European and Asian influences reflected in its vibrant city life and delicious cuisine. With activities such as hiking, surfing and visits to nearby vineyards, Cape Town is an ideal destination for nature and adventure lovers.', category: 'Africa', date: '2024-09-07', favorite: false },
    { id: 2, url: 'https://annaeverywhere.com/wp-content/uploads/2017/04/Circular-Quay_Charlotte-Karp-1200x900.jpg', title: 'Sídney, Australia', description: 'The impressive city of Sydney with its famous Opera House and Harbour Bridge.', longDescription: 'Sydney, the jewel of Australia, is a coastal city that combines architectural wonders with natural beauty. In this image, the iconic Opera House with its distinctive white shell design stands next to the Harbour Bridge, creating a breathtaking view over Sydney Harbour. The city offers golden sandy beaches, such as Bondi and Manly, ideal for surfing and relaxing, as well as national parks and botanical gardens that invite exploration.', category: 'Oceania', date: '2024-09-07', favorite: false },
    { id: 3, url: 'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg', title: 'Rio de Janeiro, Brazil', description: 'Carioca city famous for its Carnival, beaches and Christ the Redeemer', longDescription: 'Rio de Janeiro, one of Brazils most iconic cities, is known for its iconic beaches such as Copacabana and Ipanema, and for the vibrant Carnival, which attracts millions of visitors each year. Nestled between green mountains and the Atlantic Ocean, Rio offers a mix of breathtaking natural scenery and dynamic urban life. Christ the Redeemer, one of the seven wonders of the modern world, watches over the city from Corcovado Hill.', category: 'America', date: '2024-09-07', favorite: false },
    { id: 4, url: 'https://stories.weroad.es/wp-content/uploads/2022/11/que-ver-en-tokio.jpg', title: 'Tokio, Japón', description: 'The futuristic city of Tokyo with skyscrapers, neon lights and ancient temples.', longDescription: 'okio, the capital of Japan, is a fascinating mix of tradition and modernity. The photo captures the vibrant nightlife of the Shibuya district, known for its neon lights, skyscrapers and the iconic Shibuya Crossing intersection, where thousands of people cross simultaneously. A few kilometers away, ancient temples and traditional gardens offer a quiet refuge from the hustle and bustle of the city.', category: 'Asia', date: '2024-09-07', favorite: false },
    { id: 5, url: 'https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/blog/tailandia_bangkok_templowatphrakaew__shutterstockrf_713822881_avigator_thailand_shutterstock.jpg?itok=s7aBb8CW', title: 'Bangkok, Tailandia', description: 'Thailanls capital, famous for its nightlife, golden temples and floating markets.', longDescription: 'Bangkok is a fascinating city where ancient meets modern. Golden temples such as Wat Arun and Wat Pho stand alongside futuristic skyscrapers and luxury shopping malls. Its vibrant night markets and floating markets, delicious street food, and lively nightlife in places like Khao San Road make it a captivating destination for visitors from all over the world.', category: 'Asia', date: '2024-09-07', favorite: false },
    { id: 6, url: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900', title: 'París, Francia', description: 'The romantic city of Paris with the Eiffel Tower at sunset and its charming streets.', longDescription: 'Is famous for its timeless elegance and charm. This image shows the majestic Eiffel Tower at sunset, illuminating the city with a golden glow as the sky is tinged with shades of pink and purple. The banks of the Seine and the quaint cafes of Montmartre invite visitors to enjoy Parisian life at leisure, strolling along cobblestone streets and exploring historic monuments.', category: 'Europe', date: '2024-09-07', favorite: false },
    { id: 7, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7HZPHDn7QPyqc0Krn466nrQRQIOUOwnQSg&s', title: 'Cairo, Egypt', description: 'The city of the pharaohs, famous for its pyramids and the Nile River.', longDescription: 'Cairo, the capital of Egypt, is one of the worlds oldest cities and the cultural heart of the Arab world. With a rich history dating back thousands of years, it is home to architectural wonders such as the Pyramids of Giza and the Sphinx, as well as archaeological treasures at the Egyptian Museum. Situated on the banks of the Nile, Cairo is a vibrant city with bustling bazaars, historic mosques, and a unique blend of ancient traditions and modern life.', category: 'Africa', date: '2024-09-07', favorite: false },
    { id: 8, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYNgBk_jEhJdF6LWCMAs9QCdtmxdyu3xpWg&s', title: 'Barcelona, Spain', description: 'Mediterranean city famous for its modernist architecture, beaches and gastronomy.', longDescription: 'Barcelona, located on the northeast coast of Spain, is a city overflowing with art, culture and natural beauty. Known for Antoni Gaudís architecture, such as the Sagrada Familia and Park Güell, Barcelona offers a unique blend of medieval history, modernism and vibrant city life. Its beaches, delicious Catalan cuisine and relaxed atmosphere attract millions of tourists each year.', category: 'Europe', date: '2024-09-07', favorite: false },
    { id: 9, url: 'https://career-advice.jobs.ac.uk/wp-content/uploads/United-Arab-Emirates-e1634207254994.jpg.optimal.jpg', title: 'Dubai, United Arab Emirates', description: 'Futuristic city in the desert, known for its skyscrapers and luxury shopping malls.', longDescription: 'Dubai, one of the seven emirates that make up the United Arab Emirates, is known for its ultra-modern architecture, such as the Burj Khalifa, the worlds tallest building, and its innovative artificial island developments such as Palm Jumeirah. It is a center of luxury with world-renowned shopping malls, resorts, and vibrant nightlife, offering a fascinating contrast between modernity and rich Arabian heritage.', category: 'Asia', date: '2024-09-07', favorite: false },
    { id: 10, url: 'https://resizer.glanacion.com/resizer/v2/QNPULSXS6ZAWLDVS3LR6YKZIM4.jpg?auth=8c813d608510255167f48ddf163305e17e9bba08c741362f13d9fed71ac1b92b&width=1920&height=1280&quality=70&smart=true', title: 'Auckland, New Zealand', description: 'The largest city in New Zealand, known for its volcanic landscapes and Maori culture.', longDescription: 'Auckland, known as the “City of Sails”, is New Zealands largest and most diverse city, surrounded by volcanic mountains, beaches and bays. It is a vibrant urban center with a rich Maori culture and Polynesian influence, reflected in its art, food and festivals. With an impressive mix of nature and modernity, Auckland offers a wide variety of outdoor activities, from sailing and hiking to exploring vineyards and museums.', category: 'Oceania', date: '2024-09-07', favorite: false },
    { id: 11, url: 'https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Oahu-Honolulu-Aerial-Hero-2_1.jpg?itok=XX4tTNBw', title: 'Honolulu, Hawái', description: 'Capital of the state of Hawaii, known for its paradisiacal beaches and rich Polynesian heritage.', longDescription: 'Honolulu, the capital of Hawaii, is a tropical paradise located on the island of Oahu, known for its dreamy beaches like Waikiki, year-round warm weather and unique culture. It offers a mix of Polynesian and modern history, with historic sites such as Pearl Harbor, the Iolani Palace, and a vibrant nightlife. Visitors enjoy surfing, diving, and hiking at Diamond Head, surrounded by volcanic landscapes and lush rainforests.', category: 'Oceania', date: '2024-09-07', favorite: false },
    { id: 12, url: 'https://www.travelandleisure.com/thmb/zvWBxyJ3Nj56uHYXH73NXXgC3iA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/world-class-design-buenos-aires-BAVISIT0418-5e990a610aab499bb9991771dac5fb54.jpg', title: 'Buenos Aires, Argentina', description: 'Argentinas vibrant capital city, known for tango, European architecture and nightlife.', longDescription: 'Buenos Aires is an exciting and multicultural city that combines the best of Latin America with a strong European influence. From the elegance of its neighborhoods such as Recoleta and Palermo, to the lively life in the colorful La Boca district, Buenos Aires is a cultural epicenter where tango, theater and gastronomy converge. Its history, traditional cafés and vibrant art scene make it a fascinating destination for travelers.', category: 'America', date: '2024-09-07', favorite: false },
    { id: 13, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIsoTTOQr9thq_u5vAOf8DCUXo8cqfzKm-A&s', title: 'Marrakech, Morocco', description: 'Moroccos vibrant city, known for its markets, gardens and Islamic architecture.', longDescription: 'Marrakech, nicknamed the “Red City” because of the color of its buildings, is one of the most fascinating cities in Morocco. Located at the foot of the Atlas Mountains, it is famous for its historic medina, a labyrinth of narrow streets filled with souks, palaces, and mosques. The Jemaa el-Fna square, with its snake charmers and food stalls, is a vibrant focal point, while gardens such as the Majorelle offer a respite of tranquility. Marrakech is a city where culture, history and modernity intertwine in a unique experience.', category: 'Africa', date: '2024-09-07', favorite: false },
    { id: 14, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVALvxP30ycdpAP8SvKfP9DbOr0BOJzAd1XQ&s', title: 'New York, United States', description: 'Vibrant New York City with its iconic skyline and the hustle and bustle of Times Square.', longDescription: 'New York, known as "the city that never sleeps", is a vibrant, multicultural destination full of unparalleled energy.  This metropolis is an epicenter of culture, arts and entertainment, where there is always something new to discover, from Broadway shows to world-class museums and a diverse dining scene. It is a city that constantly reinvents itself, offering visitors a unique and unforgettable experience.', category: 'America', date: '2024-09-07', favorite: false },
    { id: 15, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDxPJ83xAWp7lvnYcMN_QMyknm0qegfqaYQ&s', title: 'Amsterdam, The Netherlands', description: 'Capital of the Netherlands, famous for its canals, bicycles and art museums.', longDescription: 'Amsterdam, known as the “Venice of the North”, is a charming city with more than 100 kilometers of canals and hundreds of bridges. Famous for its relaxed atmosphere and bicycle-oriented lifestyle, it is a cultural center with world-renowned museums such as the Rijksmuseum and the Van Gogh Museum. Amsterdam also offers a vibrant nightlife, rich history and unique architecture, from 17th century houses to modern sustainable buildings, making it an unforgettable European destination.', category: 'Europe', date: '2024-09-07', favorite: false }
  ];
  
  private favorites: Image[] = []; // Nueva propiedad para almacenar las imágenes favoritas

  private selectedCategory: string = 'All Categories';

  getImages(): Image[] {
    return this.imagesData;
  }

  getImagesByCategory(): Image[] {
    if (this.selectedCategory === 'All Categories') {
      return this.imagesData;
    }
    if (this.selectedCategory === 'Favorites') {
      return this.favorites; // Devuelve solo las imágenes favoritas
    }
    return this.imagesData.filter(image => image.category === this.selectedCategory);
  }

  updateFavorite(id: number, isFavorite: boolean): void {
    const image = this.imagesData.find(img => img.id === id);
    if (image) {
      image.favorite = isFavorite;
      if (isFavorite) {
        this.addFavorite(image);
      } else {
        this.removeFavorite(image);
      }
    }
  }

  // Método para agregar una imagen a la lista de favoritos
  private addFavorite(image: Image): void {
    if (!this.favorites.includes(image)) {
      this.favorites.push(image);
    }
  }

  // Método para remover una imagen de la lista de favoritos
  private removeFavorite(image: Image): void {
    this.favorites = this.favorites.filter(img => img.id !== image.id);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }

  getCategory(): string {
    return this.selectedCategory;
  }

  getFavoriteImages(): Image[] {
    return this.favorites;
  }
}
