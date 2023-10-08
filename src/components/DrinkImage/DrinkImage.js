import { useState } from "react";
import { Button } from "components";
import LeftSVG from "assets/left.svg";
import RightSVG from "assets/right.svg";
import { drinkImageStyle } from "./style";

export const DrinkImage = ({ drink, ingredients, className }) => {
  const [imageKey, setImageKey] = useState("drink");
  const style = drinkImageStyle(className);

  const images = {
    drink: drink,
    ingredients: ingredients,
  };
  const leftIcon = <img src={LeftSVG} alt="left" />;
  const rightIcon = <img src={RightSVG} alt="left" />;

  const changeKey = () =>
    setImageKey(imageKey === "drink" ? "ingredients" : "drink");
  const renderImage = () => (
    <img src={images[imageKey]} className={style.img} alt="drink" />
  );

  return (
    <div className={style.outer}>
      {renderImage()}
      <Button onClick={changeKey} icon={leftIcon} className={style.left} />
      <Button onClick={changeKey} icon={rightIcon} className={style.right} />
    </div>
  );
};
