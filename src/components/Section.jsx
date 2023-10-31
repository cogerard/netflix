const Section = (props) => {
  return (
    <section key={props.category}>
      <h1>{props.category}</h1>

      <div className="slider">
        {props.images.map((image) => {
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
