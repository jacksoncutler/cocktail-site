import { useState, useEffect } from 'react';
import { getImageURL } from 'util/firebase';
import { ClipLoader } from 'react-spinners';
import { drinkImageStyle } from './style';

export const DrinkImage = ({
  drinkImageKey,
  ingredientsImageKey,
  className,
}) => {
  const [drinkImageUrl, setDrinkImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(drinkImageKey) getImageURL(drinkImageKey).then((url) => {
      setDrinkImageUrl(url);
      setIsLoading(false);
    });
  }, [drinkImageKey, ingredientsImageKey]);

  const renderImage = () => <img src={drinkImageUrl} alt='drink' />;

  const style = drinkImageStyle(className);
  return (
    <>
      {isLoading ? (
        <div className={style.outerLoading}>
          <div className='m-auto'>
            <ClipLoader loading={isLoading} />
          </div>
        </div>
      ) : (
        <div className={style.outer}>{renderImage()}</div>
      )}
    </>
  );
};
