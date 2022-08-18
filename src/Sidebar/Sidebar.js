import { FilterItem } from "FilterItem";
import { sidebarStyle } from "./style";

export const Sidebar = () => {  
  const style = sidebarStyle()
  return (
    <div className={style.outer}>
      <h1 className={style.subheading}>Liquor</h1>
      <div className={style.separator} />
      <FilterItem />
    </div>
  );
}