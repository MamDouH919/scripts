// ==UserScript==
// @name         Skips BLS 
// @namespace    http://tampermonkey.net/
// @version      2.5
// @author       bo3mmar
// @match        https://egypt.blsspainglobal.com/Global/blsappointment/visaappointmentpaymentform*
// @grant        none
// ==/UserScript==

(function () {

    'use strict';

    console.log('Skips BLS');

    function skipAllVasAndClickVerify() {
        const vasElements = Array.from(document.querySelectorAll('[id^="vas_"]'))
            .filter(el => /^vas_\d+$/.test(el.id));

        console.log(vasElements);

        let index = 0;

        function skipNext() {
            if (index < vasElements.length) {
                const vasId = vasElements[index].id.split('_')[1];
                console.log(`Skipping VAS ${vasId}`);

                const parent = document.getElementById(`vas_${vasId}`);
                const skipButton = parent?.querySelector('button.btn-default');
                console.log(skipButton);

                if (skipButton) skipButton.click();
                index++;
                setTimeout(skipNext, 500);
                const validationSummary = document.getElementById('btnVerifyApplicant'); // No '#' needed

                console.log(validationSummary);
                console.log(validationSummary.offsetTop);
            }else{
                const validationSummary = document.getElementById('btnVerifyApplicant'); // No '#' needed
                if (validationSummary.offsetTop) {
                    setTimeout(() => {
                        $('#btnVerifyApplicant').click();
                    }, 1000);
                }
                
            }
        }

        skipNext();
    }

    // Run the function
    skipAllVasAndClickVerify();
})();