import { headerStyle } from "./style";

export const Header = () => {  
  const style = headerStyle()
  return (
    <div className={style}>
      Enter Title Here
    </div>
  );
}