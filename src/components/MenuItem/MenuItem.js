import { useState, useEffect } from 'react';
import { getImageURL } from 'util/firebase';
import { ClipLoader } from 'react-spinners';
import { menuItemStyle } from './style';

export const MenuItem = ({ name, tags, thumbnailKey, onSelect }) => {
  const [imgUrl, setImgUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImageURL(thumbnailKey).then((url) => {
      setImgUrl(url);
      setIsLoading(false);
    });
  }, [thumbnailKey]);

  const renderDescription = () => tags.map((tag) => tag.name).join(' - ');
  const style = menuItemStyle();
  return (
    <div onClick={onSelect} className={style.outer}>
      <div className={style.img}>
        {isLoading ? (
          <div className='m-auto'>
            <ClipLoader loading={isLoading} />
          </div>
        ) : (
          <img src={imgUrl} className='rounded-full' alt={name} />
        )}
      </div>
      <div className={style.inner}>
        <p className={style.name}>
          <b>{name}</b>
        </p>
        <p className={style.desc}>{renderDescription()}</p>
      </div>
    </div>
  );
};
