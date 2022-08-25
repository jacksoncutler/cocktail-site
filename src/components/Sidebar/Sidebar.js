import { FilterItem } from "components";
import { sidebarStyle } from "./style";

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
      <h2 className={style.subheading}>Liquor</h2>
      <div className={style.separator} />
      { liquors.map(liquor => <FilterItem name={liquor} />) }
    </div>
  );
}