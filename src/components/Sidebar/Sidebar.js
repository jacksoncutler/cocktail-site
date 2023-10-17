import { useState, useEffect } from 'react';
import { Button, Subheading, FilterItem } from 'components';
import { useQueryParams } from 'contexts/QueryParamsContext';
import { fetchTagsByType } from 'api/tags';
import BackSVG from 'assets/back.svg';
import CloseSVG from 'assets/close.svg';
import { sidebarStyle } from './style';

export const Sidebar = ({
  view,
  returnToSelection,
  showSidebar,
  setShowSidebar,
}) => {
  const style = sidebarStyle(showSidebar);
  const [tagTypes, setTagTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { clearFilters } = useQueryParams();

  useEffect(() => {
    setIsLoading(true);
    fetchTagsByType()
      .then((types) => {
        if (types) setTagTypes(types);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  const sidebar = (
    <>
      <div className={style.clearButton}>
        <Button label='Clear All' onClick={clearFilters} />
      </div>
      {tagTypes.map((type) => {
        return (
          <div key={type.priority}>
            <Subheading label={type.name} size='md' bg='grey' line />
            {type.Tags.map((tag) => {
              return <FilterItem key={tag.id} id={tag.id} label={tag.name} />;
            })}
            <div key={type.id} className='mb-8' />
          </div>
        );
      })}
    </>
  );

  const returnButton = (
    <Button
      icon={<img src={BackSVG} alt='back' />}
      label='Return to Selection'
      onClick={returnToSelection}
      className='w-full'
    />
  );

  const renderSidebar = () => {
    return isLoading ? (
      <div>Loading...</div>
    ) : view === 'menu' ? (
      sidebar
    ) : (
      returnButton
    );
  };

  return (
    <>
      <div className={style.sidebar}>{renderSidebar()}</div>
      <div className={style.background} onClick={() => setShowSidebar(false)}>
        <Button icon={<img src={CloseSVG} alt='close' />} />
      </div>
    </>
  );
};
