// ==UserScript==
// @name         bing_escape_from_cn
// @namespace    bing_escape_from_cn
// @version      2025-05-21
// @description  Clear region whenever you search while your bing region is CN.
// @author       Kmaj
// @match        https://www.bing.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // find
    var element = document.querySelector("div.est_selected[aria-label='国内版']");

    // exists?
    if (element) {
        // get text
        var searchBox = document.querySelector('.b_searchbox');
        var text = searchBox ? searchBox.value : "";

        //clear
        window.location.href = `https://www.bing.com/account/action?scope=web&cc=clear&ru=/search?q=${encodeURIComponent(text)}&qs=n`;
    }
})();
