import "./App.css";
import movies from "./assets/movies.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="container">
      <img
        className="logo"
        src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
        alt="logo netflix"
      />
      {movies.map((movie) => {
        return (
          <Section category={movie.category} images={movie.images} />
          // <section key={movie.category}>
          //   <h1>{movie.category}</h1>

          //   <div className="slider">
          //     {movie.images.map((image) => {
          //       return (
          //         <div key={image}>
          //           <img src={image} alt="affiche du film" />
          //         </div>
          //       );
          //     })}
          //   </div>
          // </section>
        );
      })}
    </div>
  );
}

export default App;
