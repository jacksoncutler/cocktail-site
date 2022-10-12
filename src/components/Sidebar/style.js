export const sidebarStyle = (showSidebar) => {
    const show = showSidebar ? 'translate-x-full' : ''
    return {
        outer: ['z-30 absolute top-header bottom-0 -left-sidebar w-sidebar overflow-scroll px-7 py-8 text-grey-900 shadow-lg bg-mobile-sidebar backdrop-blur transition duration-350 ease-out md:bg-grey-100 md:left-0', show].join(' ')
    }
}