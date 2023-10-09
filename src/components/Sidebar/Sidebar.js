import { useState, useEffect } from 'react';
import { Button, Subheading, FilterItem } from 'components';
import { useQuery } from 'contexts/QueryContext';
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
  const [tagTypes, setTagTypes] = useState([]);
  const { clearFilters } = useQuery();

  const loadTags = async () => {
    const types = await fetchTagsByType();
    if (types) setTagTypes(types);
  };

  useEffect(() => {
    loadTags();
  }, []);

  const renderSidebar = () => {
    return view === 'menu' ? (
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
    ) : (
      <>
        <Button
          icon={backIcon}
          label='Return to Selection'
          onClick={returnToSelection}
          className='w-full'
        />
      </>
    );
  };

  const backIcon = <img src={BackSVG} alt='back' />;
  const style = sidebarStyle(showSidebar);
  return (
    <>
      <div className={style.sidebar}>{renderSidebar()}</div>
      <div className={style.background} onClick={() => setShowSidebar(false)}>
        <Button icon={<img src={CloseSVG} alt='close' />} />
      </div>
    </>
  );
};
