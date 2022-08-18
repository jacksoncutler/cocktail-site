import { filterItemStyle } from './style'

export const FilterItem = () => {
    const style = filterItemStyle()
    return (
        <label>
            <input type='checkbox' />
            <span className={style.label}>Bourbon</span>
        </label>
    )
}