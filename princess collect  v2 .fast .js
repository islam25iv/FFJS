// ==UserScript==
// @name         princess collect v2 fast
// @namespace    https://github.com/ELJoOker2004
// @version      1.0
// @description  princess collect
// @author       ELJoOker
// @match        *://farm-us.centurygames.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=centurygames.com
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    function print(type, ...args) {
        console[type](`%c Family Farm Script `, `background: #5865f2; color: black; font-weight: bold; border-radius: 5px; `, ...args);
    }

    function whenDefined(object, prop, callback) {
        if (object[prop]) callback();
        else {
            Object.defineProperty(object, prop, {
                configurable: true,
                enumerable: true,
                get: function () {
                    return this['_' + prop];
                },
                set: async function (val) {
                    this['_' + prop] = val;
                    await callback();
                }
            });
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    print("log", `Init`);

    var requestElm = unsafeWindow.document.getElementById("message_nav");
    var parent = requestElm.parentNode;

    //-------------------------------------------------------------------------------------------------------
    var harvPrBtn = unsafeWindow.document.createElement("BUTTON");
    harvPrBtn.innerHTML = "|PC⭐|";
    harvPrBtn.onclick = harvPrObj;
    parent.appendChild(harvPrBtn);
    async function harvPrObj() {
        alert("Start collect Princess Product 70^2 block ");
        var unique = 1;
        for (let x = 0; x<=70 ; x=x+3){
            for (let y = 0; y<=70 ; y=y+3){
                await unsafeWindow.GF.loginController.loginProxy.send("collect_product.save_data",{unique_id:++unique, id: 220416, x: x, y: y, collect_mode: 1, itemid: 203722, num:1 , to: "gift",});
         }}
        unsafeWindow.ConfirmView.Show(" ==>> fb.me/islam25iv \n Done ⭐ " );
            }
})();






