import { headerStyle } from "./style";

export const Header = () => {  
  const style = headerStyle()
  return (
    <div className={style.outer}>
      <h1 className={style.title}>Enter Title Here</h1>
    </div>
  );
}