export default function Page() {
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
  ];

  // Functions for retrieving books from the data array
  function getBooks() {
    return data;
  }

  function getBook(id: number) {
    return data.find((d) => d.id === id);
  }

  // Define the code snippet to display
  const codeSnippet = `
  const data = ${JSON.stringify(data, null, 2)};
        
  function getBooks() {
    return data;
  }
        
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  `;

  return (
    <div className="grid grid-cols-2 gap-4">
      <pre className="bg-black text-white p-4">
        <code className="text-sm">{codeSnippet}</code>
      </pre>
      <pre className="bg-black text-white p-4">
        {` 
    const book = getBook(2); 
    const { title, author } = book;
    console.log(author, title);

    // const primaryGenre = data[0].genres[0];
    // const secondaryGenre = data[0].genres[1];
    const [primaryGenre, secondaryGenre] = data[0].genres;
    console.log(primaryGenre, secondaryGenre);
  `}
      </pre>
    </div>
  );
}
