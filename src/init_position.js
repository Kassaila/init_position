/**Developed by Dmytro Symonov
 * {s} symonov.com
 * 2018
 */
/*
* page position
*/
function pagePosition(setProp) {
    // default options
    setProp.scrTopHeight = setProp.scrTopHeight !== undefined && typeof setProp.scrTopHeight === 'number' && setProp.scrTopHeight >= 0.1 && setProp.scrTopHeight <= 1 ? setProp.scrTopHeight : 0.1;
    setProp.scrBottomHeight = setProp.scrBottomHeight !== undefined && typeof setProp.scrBottomHeight === 'number' && setProp.scrBottomHeight >= 0.1 && setProp.scrBottomHeight <= 1 ? setProp.scrBottomHeight : 0.1;
    let scrollBottom = () => $(window).scrollTop() + $(window).height();
    // init page position (top, middle or bottom)
    let initPosition = () => {
        if ($(window).height() * setProp.scrTopHeight > $(window).scrollTop()) {
            if (!$('html').hasClass('page_top')) {
                $('html').addClass('page_top').removeClass('page_middle page_bottom');
                if (setProp.topCallback) setProp.topCallback();
            }
        } else if ($('html').height() - $(window).height() * setProp.scrBottomHeight < scrollBottom()) {
            if (!$('html').hasClass('page_bottom')) {
                $('html').addClass('page_bottom').removeClass('page_top page_middle');
                if (setProp.bottomCallback) setProp.bottomCallback();
            }
        } else {
            if (!$('html').hasClass('page_middle')) {
                $('html').addClass('page_middle').removeClass('page_top page_bottom');
                if (setProp.middleCallback) setProp.middleCallback();
            }
        }
    }
    // init on events
    $(document).ready(initPosition);
    $(window).scroll(initPosition);
    $(window).resize(initPosition);
}