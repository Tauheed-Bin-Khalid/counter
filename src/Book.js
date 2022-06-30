import React from 'react'
import Author from './Author'
import Image from './Image'
import Title from './Title'

function Book({ img, title, author,children }) {
    return (
        <article>
            <Image img={img} />
            <Title title={title} />
            <Author author={author} />
            {children}
        </article>
    )
}

export default Book

// import "./App.css"
// import Author from "./Author";
// import Book from "./Book";

// function App() {
//   const data = [
//     {
//      id: 1,
//      img:
//       'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
//      title: 'I Love You to the Moon and Back',
//      author: 'Amelia Hepworth',
//     },
//     {
//      id: 2,
//      img:
//       'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
//      title: 'Our Class is a Family',
//      author: 'Shannon Olsen',
//     },
//     {
//      id: 3,
//      img:
//       'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
//      title: 'The Vanishing Half: A Novel',
//      author: 'Brit Bennett',
//     },
//    ];
//   return (
//      <div>
//       {data.map((book) =>{
//         return(
//           <Book key={book.id} img={book.img} title={book.title} author={book.author}/>
//         )
//       } )}
//      </div>
  
//   );
// }


// export default App;