/** Developed by Dmytro Symonov
 * {s} symonov.com
 * 2018
 */
/*
* PAGE POSITION
*/
/* Example

import pagePosition from 'init_position';

pagePosition.init({
    scrTopHeight: 0.5, // number; 0.1 <= range <= 1; default: 0.75
    scrBottomHeight: 0.5, // number; 0.1 <= range <= 1; default: 0.75
    //* callback functions - optional
    topCallback() {
        console.log('page top');
    },
    middleCallback() {
        console.log('page middle');
    },
    bottomCallback() {
        console.log('page bottom');
    }
});

*/
const pagePosition = () => {

    const $win = $(window),
        $html = $('html'),
        EL_CLASS_TOP = 'page_top',
        EL_CLASS_MIDDLE = 'page_middle',
        EL_CLASS_BOTTOM = 'page_bottom';

    const init = (setProp) => {
        setProp.scrTopHeight = setProp !== undefined && setProp.scrTopHeight !== undefined && typeof setProp.scrTopHeight === 'number' && setProp.scrTopHeight >= 0.1 && setProp.scrTopHeight <= 1 ? setProp.scrTopHeight : 0.1;
        setProp.scrBottomHeight = setProp !== undefined && setProp.scrBottomHeight !== undefined && typeof setProp.scrBottomHeight === 'number' && setProp.scrBottomHeight >= 0.1 && setProp.scrBottomHeight <= 1 ? setProp.scrBottomHeight : 0.1;

        const initPosition = () => {
            const $winHeight = $win.height(),
                $winScrollTop = $win.scrollTop(),
                $htmlHeight = $html.height();

            if ($winHeight * setProp.scrTopHeight > $winScrollTop) {
                if (!$html.hasClass(`${EL_CLASS_TOP}`)) {
                    $html.addClass(`${EL_CLASS_TOP}`).removeClass(`${EL_CLASS_MIDDLE} ${EL_CLASS_BOTTOM}`);
                    if (setProp.topCallback) setProp.topCallback();
                }
            } else if ($htmlHeight - $winHeight * setProp.scrBottomHeight < $winScrollTop + $winHeight) {
                if (!$html.hasClass(`${EL_CLASS_BOTTOM}`)) {
                    $html.addClass(`${EL_CLASS_BOTTOM}`).removeClass(`${EL_CLASS_TOP} ${EL_CLASS_MIDDLE}`);
                    if (setProp.bottomCallback) setProp.bottomCallback();
                }
            } else {
                if (!$html.hasClass(`${EL_CLASS_MIDDLE}`)) {
                    $html.addClass(`${EL_CLASS_MIDDLE}`).removeClass(`${EL_CLASS_TOP} ${EL_CLASS_BOTTOM}`);
                    if (setProp.middleCallback) setProp.middleCallback();
                }
            }
        }

        initPosition();
        $win.scroll(initPosition);
        $win.resize(initPosition);
    }

    return {
        init
    }
}

export default pagePosition();