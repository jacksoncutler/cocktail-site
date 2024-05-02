import { useState, useEffect } from 'react';
import { Button } from 'components';
import { getImageURL } from 'util/firebase';
import ingredientPic from 'assets/ingredients.png';
import LeftSVG from 'assets/left.svg';
import RightSVG from 'assets/right.svg';
import { drinkImageStyle } from './style';

export const DrinkImage = ({
  drinkImageKey,
  ingredientsImageKey,
  className,
}) => {
  const [drinkImageUrl, setDrinkImageUrl] = useState();
  const [ingredientsImageUrl, setIngredientsImageUrl] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(drinkImageKey) getImageURL(drinkImageKey).then((url) => setDrinkImageUrl(url));
    // getImageURL(ingredientsImageKey).then((url) => setIngredientsImageUrl(url));
  }, [drinkImageKey, ingredientsImageKey]);

  // CHANGE INGREDIENT PIC
  const images = [drinkImageUrl, ingredientPic];
  const changeImage = () => setIndex(index => (index + 1) % 2);

  const renderImage = () => <img src={images[index]} alt='drink' />;
  const leftIcon = <img src={LeftSVG} alt='left' />;
  const rightIcon = <img src={RightSVG} alt='left' />;

  const style = drinkImageStyle(className);
  return (
    <div className={style.outer}>
      {renderImage()}
      <Button onClick={changeImage} icon={leftIcon} className={style.left} />
      <Button onClick={changeImage} icon={rightIcon} className={style.right} />
    </div>
  );
};
