import { useEffect, useState } from 'react';
import Select from 'react-select';
import { ClipLoader } from 'react-spinners';
import { useQueryParams } from 'contexts/QueryParamsContext';
import { Button, MenuItem, Subheading } from 'components';
import { fetchDrinkMenu } from 'util/requests';
import SortDownSVG from 'assets/sort_down.svg';
import SortUpSVG from 'assets/sort_up.svg';
import { sortSelectOptions, sortSelectTheme } from './helpers';
import { menuViewStyle } from './style';

export const MenuView = ({ onSelect }) => {
  const [drinkTypes, setDrinkTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    searchString,
    sortType,
    sortDirection,
    filters,
    changeSort,
    reverseSort,
  } = useQueryParams();

  useEffect(() => {
    setIsLoading(true);
    fetchDrinkMenu(searchString, sortType, sortDirection, filters)
      .then((types) => {
        if (types) setDrinkTypes(types);
        setIsLoading(false);
      })
      .catch(() => {});
  }, [searchString, sortType, sortDirection, filters]);

  const renderMenuItems = () => {
    return isLoading ? (
      <div className='flex w-full'>
        <ClipLoader loading={isLoading} className='m-auto' />
      </div>
    ) : (
      drinkTypes.map((type) => (
        <div key={type.name}>
          <Subheading label={type.name} size='lg' bg='white' line />
          <div className={style.section}>
            {type.Drinks.map((drink) => (
              <MenuItem
                key={drink.id}
                name={drink.name}
                tags={drink.Tags}
                thumbnailKey={drink.thumbnailKey}
                onSelect={() => onSelect(drink.id)}
              />
            ))}
          </div>
        </div>
      ))
    );
  };

  const renderSortIcon = () => (
    <img
      src={sortDirection === 'asc' ? SortDownSVG : SortUpSVG}
      alt='sort-direction'
    />
  );
  const getCurrentSortType = () =>
    sortSelectOptions.find((type) => type['value'] === sortType);
  
  const style = menuViewStyle();
  return (
    <div className={style.outer}>
      <div className={style.sort}>
        <Button icon={renderSortIcon()} onClick={reverseSort} />
        <Select
          options={sortSelectOptions}
          defaultValue={getCurrentSortType()}
          onChange={(type) => changeSort(type.value)}
          theme={sortSelectTheme}
          isSearchable={false}
        />
      </div>
      {renderMenuItems()}
    </div>
  );
};
