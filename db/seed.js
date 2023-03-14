require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require('../models/Show');

const shows = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  },
  {
    title: "Breaking Bad",
    creator: " Vince Gilligan",
    launched: 2008,
    genre: "drama",
    image: "https://m.media-amazon.com/images/M/MV5BN2VjOTkwMjgtYWEyMy00MzNmLTllMjktNDI1ZmRhYTAwYTg1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    description: "Chemist teacher becomes a drug dealer"
  },
  {
    title: "The Sopranos",
    creator: "David Chase",
    launched: 1999,
    genre: "drama",
    image: "https://pics.filmaffinity.com/Los_Soprano_Serie_de_TV-196243243-large.jpg",
    description: "The story revolves around Tony Soprano, a New Jersey-based Italian-American mobster portraying his difficulties as he tries to balance family life with his role as the leader of a criminal organization. "
  },
  {
    title: "Dark",
    creator: "Baran bo Odar and Jantje Friese",
    launched: 2017,
    genre: "Thriller, Science fiction",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81oWDX24u+L._SL1200_.jpg",
    description: "The story follows characters from the fictional town of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations"
  }
]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Show.create(shows)
  })
  .then((created) => {
    console.log(`Inserted ${created.length} shows in the database`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })