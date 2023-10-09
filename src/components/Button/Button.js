import { buttonStyle } from './style';

export const Button = ({ icon, label, onClick, className }) => {
  const renderChildren = () => (
    <>
      {icon ? <div className={style.icon}>{icon}</div> : <></>}
      {label ? <p className={style.label}>{label}</p> : <></>}
    </>
  );

  const style = buttonStyle(label, className);
  return (
    <button onClick={onClick} className={style.outer}>
      {renderChildren()}
    </button>
  );
};
