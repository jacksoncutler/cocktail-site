import { Subheading } from 'components';
import { FilterItem } from 'components';
import { sidebarStyle } from './style';

export const Sidebar = () => {  
  const style = sidebarStyle()
  const liquors = [
    'Bourbon',
    'Gin',
    'Rum',
    'Tequila',
    'Whiskey',
    'Vodka',
  ]
    return (
    <div className={style.outer}>
      <Subheading label='Liquor' />
      { liquors.map(liquor => <FilterItem label={liquor} />) }
    </div>
  );
}