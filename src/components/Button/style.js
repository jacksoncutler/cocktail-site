export const buttonStyle = (label, className) => {
    const type = !label ? 'aspect-square' : ''
    return {
        outer: ['flex flex-row justify-center gap-x-4 font-bold', type, className].join(' '),
        icon: 'my-auto',
        label: 'my-auto'
    }
}