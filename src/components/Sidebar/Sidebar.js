import { Subheading } from 'components';
import { FilterItem } from 'components';
import { sidebarStyle } from './style';

export const Sidebar = () => {  
  const style = sidebarStyle()
  const liquors = [
    'Cognac/Brandy',
    'Gin',
    'Mezcal',
    'Rum',
    'Tequila',
    'Whiskey',
    'Vodka',
  ]
    return (
    <div className={style.outer}>
      <Subheading label='Liquor' size='md' />
      { liquors.map(liquor => <FilterItem label={liquor} />) }
    </div>
  );
}