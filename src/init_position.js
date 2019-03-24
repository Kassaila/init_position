/**Developed by Dmytro Symonov
 * {s} symonov.com
 * 2018
 */
// page position
function pagePosition(setProp) {
    // Default options | Настройки по умолчанию
    setProp.initScrHeight = setProp.initScrHeight !== undefined && typeof setProp.initScrHeight === 'number' && setProp.initScrHeight >= 0.1 && setProp.initScrHeight <= 1 ? setProp.initScrHeight : 0.75;
    // page position (top or bottom)
    let scrollBottom = () => $(window).scrollTop() + screen.availHeight,
        initPosition = () => {
            if (screen.availHeight * setProp.initScrHeight > $(window).scrollTop()) {
                $('html').addClass('page_top').removeClass('page_bottom');
            } else if ($('html').height() - screen.availHeight * setProp.initScrHeight < scrollBottom()) {
                $('html').addClass('page_bottom').removeClass('page_top');
            } else {
                $('html').removeClass('page_top page_bottom').removeAttr('class');
            }
        }
    // init page position on events
    $(document).ready(() => initPosition());
    $(window).scroll(() => initPosition());
    $(window).resize(() => initPosition());
}