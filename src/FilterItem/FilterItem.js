import { filterItemStyle } from './style'

export const FilterItem = ({name}) => {
    const style = filterItemStyle()
    return (
        <label className={style.outer}>
            <input type='checkbox' />
            <span className={style.label}>{name}</span>
        </label>
    )
}