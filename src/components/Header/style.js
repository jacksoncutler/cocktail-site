export const headerStyle = () => {
    return {
        outer: 'relative flex flex-col',
        mainheader: 'absolute left-0 right-0 h-header-mobile flex flex-row bg-primary sm:h-header-tablet md:py-4 md:pl-5 md:drop-shadow-lg md:h-header',
        title: 'm-auto text-white text-xl md:mx-0 md:text-2xl',
        separator: 'hidden border border-grey-100 mx-8 md:block',
        searchbar: 'hidden h-3/5 w-search-bar my-auto p-2 text-sm rounded-lg md:block',
        controlbar: 'relative top-header-mobile h-controlbar text- bg-grey-100 drop-shadow sm:top-header-tablet sm:h-controlbar-tablet md:hidden',
        hamburgerIcon:  'absolute left-0 h-full md:hidden',
        searchIcon: 'absolute right-0 h-full md:hidden'
    }
}