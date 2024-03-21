import { useState } from "react";
import "./styles.css";

interface Section {
  id: number;
  name: string;
  images?: { image: string }[];
  activeSectionId: number;
}

interface Props {
  sections: Section[];
  handleCollapseMenu: (id: number) => void;
  activeSectionId: number;
}

const Carousel = ({ sections, handleCollapseMenu }: Props) => {
  const firstOption = sections[0]?.id;
  const [activeMenuId, setActiveMenuId] = useState(firstOption);

  return (
    <div className="carousel">
      {sections?.map((item) => (
        <div
          className="carousel__items"
          key={item.id}
          onClick={() => {
            handleCollapseMenu(item.id), setActiveMenuId(item.id);
          }}
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
          <span
            className={
              item.id === activeMenuId
                ? "carousel__txt carousel__ative"
                : "carousel__txt"
            }
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
