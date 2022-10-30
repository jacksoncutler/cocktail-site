export const sidebarStyle = (showSidebar) => {
    const position = 'z-30 absolute top-header-mobile bottom-0 sm:top-header-tablet'
    const animation = 'transition duration-350 ease-out'
    const showBar = showSidebar ? 'translate-x-full' : ''
    const showBackground = showSidebar ? 'opacity-80 translate-x-sidebar-mobile sm:translate-x-sidebar-tablet' : 'opacity-0 pointer-events-none'
    return {
        sidebar: [position, '-left-sidebar-mobile w-sidebar-mobile overflow-scroll px-7 py-8 text-grey-900 shadow-lg bg-sidebar-mobile backdrop-blur sm:-left-sidebar-tablet sm:w-sidebar-tablet md:translate-x-0 md:duration-200 md:ease-linear md:top-header md:w-sidebar md:bg-grey-100 md:left-0', animation, showBar].join(' '),
        background: [position, 'left-0 right-0 p-2 bg-black md:translate-x-0 md:invisible', animation, showBackground].join(' '),
    }
}