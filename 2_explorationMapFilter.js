// Input data
let books = [
  {
      publisher: "Media Born",
      title: "Lion Of The Solstice",
      price: 553262,
      genre: "Children",
  },
  {
      publisher: "Printentic",
      title: "Boy Of Tomorrow",
      price: 804488,
      genre: "Drama",
  },
  {
      publisher: "Printentic",
      title: "Gangsters Of Greatness",
      price: 565877,
      genre: "Drama",
  },
  {
      publisher: "Dynapress",
      title: "Humans Of Earth",
      price: 252135,
      genre: "Mystery",
  },
  {
      publisher: "Dynapress",
      title: "Rise Of Insanity",
      price: 293917,
      genre: "Horror",
  },
  {
      publisher: "Media Born",
      title: "Child Of The East",
      price: 892102,
      genre: "Adventure",
  },
  {
      publisher: "TopPress",
      title: "Murder Of The Mountain",
      price: 814417,
      genre: "Horror",
  },
  {
      publisher: "Printentic",
      title: "Blinded By The Ocean",
      price: 577837,
      genre: "Horror",
  },
  {
      publisher: "Printentic",
      title: "Laughter In The Antique Shop",
      price: 174363,
      genre: "Horror",
  },
  {
      publisher: "Printentic",
      title: "Breaking The Future",
      price: 265419,
      genre: "Sci-Fi",
  },
  {
      publisher: "Dynapress",
      title: "Woman At The Hospital",
      price: 671348,
      genre: "Horror",
  },
  {
      publisher: "Media Born",
      title: "Trapped in Time",
      price: 716216,
      genre: "Fantasy",
  },
  {
      publisher: "Media Born",
      title: "Heroes Of Fortune",
      price: 244031,
      genre: "Fantasy",
  },
  {
      publisher: "HallPress",
      title: "Avoiding Secrets",
      price: 716805,
      genre: "Mystery",
  },
  {
      publisher: "HallPress",
      title: "Little Princess In The River",
      price: 583723,
      genre: "Children",
  },
  {
      publisher: "Media Born",
      title: "Mice Of Fantasy",
      price: 685601,
      genre: "Children",
  },
  {
      publisher: "Dynapress",
      title: "Guests In My Town",
      price: 359124,
      genre: "Mystery",
  }
];

// Array with map and filter
// >> Map
const mappedPublishers = books.map(book => book.publisher); // Mengambil semua harga buku
console.log(mappedPublishers);

const mappedTitles = books.map(book => book.title); // Mengambil semua judul buku
console.log(mappedTitles);

const mappedGenres = books.map(book => book.genre); // Mengambil semua genre buku
console.log(mappedGenres);

// >> Filter
const filteredPublishers = books.filter (book => book.publisher === "Printentic");
console.log(filteredPublishers);

const filteredGenres = books.filter(book => book.genre === "Horror");  // Menyaring buku-buku dengan genre "Horror"
console.log(filteredGenres);
