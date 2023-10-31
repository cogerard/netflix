const Section = (movie) => {
  return (
    <section key={movie.category}>
      <h1>{movie.category}</h1>

      <div className="slider">
        {movie.images.map((image) => {
          return (
            <div key={image}>
              <img src={image} alt="affiche du film" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
