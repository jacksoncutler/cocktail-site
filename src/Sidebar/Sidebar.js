import { sidebarStyle } from "./style";

export const Sidebar = () => {  
  const style = sidebarStyle()
  return (
    <div className={style.outer}>
      <h1 className={style.subheading}>Liquor</h1>
      <div className={style.separator} />
      <label>
        <input type='checkbox' className='bg-grey-400' />
        <span className='bg-grey-400'></span>
        Bourbon
      </label>
    </div>
  );
}