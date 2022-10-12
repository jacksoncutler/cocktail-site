export const headerStyle = () => {
    return {
        outer: 'relative flex flex-col',
        mainheader: 'absolute left-0 right-0 h-header-mobile flex flex-row bg-primary md:py-4 md:pl-5 md:drop-shadow-lg md:h-header',
        title: 'm-auto text-white text-xl md:mx-0 md:text-2xl',
        separator: 'hidden border border-grey-100 mx-8 md:block',
        searchbar: 'hidden h-3/5 w-search-bar my-auto p-2 text-sm rounded-lg md:block',
        controlbar: 'relative top-header-mobile h-text-base text- bg-grey-300 drop-shadow md:hidden',
        hamburgerIcon:  'absolute left-0 md:hidden',
        searchIcon: 'absolute right-0 md:hidden'
    }
}