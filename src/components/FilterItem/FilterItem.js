import { filterItemStyle } from './style'

export const FilterItem = ({ id, label }) => {
  const style = filterItemStyle()
  return (
    <label className={style.outer}>
      <input type='checkbox' className={style.checkbox} />
      <span className={style.label}>{ label }</span>
    </label>
  )
}