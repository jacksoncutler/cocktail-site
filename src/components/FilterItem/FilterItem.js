import { useEffect, useState } from 'react'
import { useQuery } from 'contexts/QueryContext'
import { filterItemStyle } from './style'

export const FilterItem = ({ id, label }) => {
  const [checked, setChecked] = useState(false)
  const { filters, addFilter, removeFilter } = useQuery()

  useEffect(() => {
    setChecked(filters.includes(id))
  }, [])

  const toggleFilter = () => {
    if (!checked) {
      addFilter(id)
    } else {
      removeFilter(id)
    }
    setChecked(!checked)
  }
  
  const style = filterItemStyle()
  return (
    <label className={style.outer}>
      <input 
        type='checkbox' 
        checked={checked} 
        onChange={toggleFilter}
        className={style.checkbox}  />
      <span className={style.label}>{ label }</span>
    </label>
  )
}