import { useEffect, useState } from 'react';
import { useQueryParams } from 'contexts/QueryParamsContext';
import { filterItemStyle } from './style';

export const FilterItem = ({ id, label }) => {
  const [checked, setChecked] = useState(false);
  const { filters, addFilter, removeFilter } = useQueryParams();

  useEffect(() => {
    setChecked(filters.includes(id));
  }, [filters]);

  const toggleFilter = () => {
    if (!checked) {
      addFilter(id);
    } else {
      removeFilter(id);
    }
    setChecked(!checked);
  };

  const style = filterItemStyle();
  return (
    <label className={style.outer}>
      <input
        type='checkbox'
        checked={checked}
        onChange={toggleFilter}
        className={style.checkbox}
      />
      <span className={style.label}>{label}</span>
    </label>
  );
};
