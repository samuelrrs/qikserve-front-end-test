import "./styles.css";

interface Section {
  id: number;
  name: string;
  images?: { image: string }[];
}

interface Props {
  sections: Section[];
  handleCollapseMenu: (id: number) => void;
}

const Carousel = ({ sections, handleCollapseMenu }: Props) => {
  return (
    <div className="carousel">
      {sections?.map((item) => (
        <div
          className="carousel__items"
          key={item.id}
          onClick={() => handleCollapseMenu(item.id)}
        >
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
