import "./styles.css";

const Carousel = (sections) => {
  return (
    <div className="carousel">
      {sections?.sections?.sections.map((item) => (
        <div className="carousel__items" key={item.id}>
          <div className="carousel__container">
            <div className="carousel__img-container">
              <img
                src={item.images?.[0]?.image}
                alt=""
                className="carousel__img"
              />
            </div>
          </div>
          <span className="carousel__txt carousel__ative">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
