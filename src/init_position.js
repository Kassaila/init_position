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
                if ($('html')[0] != $('.page_top')[0]) {
                    $('html').addClass('page_top').removeClass('page_bottom');
                    if (setProp.topCallback !== undefined) setProp.topCallback();
                }
            } else if ($('html').height() - screen.availHeight * setProp.initScrHeight < scrollBottom()) {
                if ($('html')[0] != $('.page_bottom')[0]) {
                    $('html').addClass('page_bottom').removeClass('page_top');
                    if (setProp.bottomCallback !== undefined) setProp.bottomCallback();
                }
            } else {
                if ($('html').attr('class') !== undefined) {
                    $('html').removeAttr('class');
                    if (setProp.middleCallback !== undefined) setProp.middleCallback();
                }
            }
        }
    // init page position on events
    $(document).ready(() => initPosition());
    $(window).scroll(() => initPosition());
    $(window).resize(() => initPosition());
}