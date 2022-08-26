export const subheadingStyle = (size) => {
    const sizeClass = size === 'md' ? 'text-xl ' : 'text-2xl '
    const colorClass = size === 'md' ? '' : 'text-grey-800 '
    const lineColorClass = size === 'md' ? 'border-grey-400 ' : 'border-grey-300 '
    return {
        label: 'pb-1 ' + sizeClass + colorClass,
        separator: 'border border-solid ' + lineColorClass,
    }
}