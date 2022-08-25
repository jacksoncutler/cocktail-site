import { filterItemStyle } from './style'

export const FilterItem = ({ label }) => {
    const style = filterItemStyle()
    return (
        <label className={style.outer}>
            <input type='checkbox' />
            <span className={style.label}>{ label }</span>
        </label>
    )
}