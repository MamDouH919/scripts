// ==UserScript==
// @name         LogiNs BLS 
// @namespace    http://tampermonkey.net/
// @version      2.5
// @author       bo3mmar
// @match        https://egypt.blsspainglobal.com/Global/account/login
// @match        https://egypt.blsspainglobal.com/Global/newcaptcha/*
// @grant        none
// ==/UserScript==

(function () {

    'use strict';
    const password = 'Mm102030@'
    console.log(password)
    const visiblePasswordInputs = Array.from(document.querySelectorAll('input[type="password"]'))
        .filter(input => input.offsetParent !== null); // Excludes display: none, visibility: hidden, etc.

    visiblePasswordInputs[0].value = password

    // if (location.href.indexOf("egypt.blsspainglobal.com") !== -1) {
    //     $("#btnSubmit").show();
    //     const inputs = document.querySelectorAll('input[type="text"]');
    //     let requiredInput = null;
    //     for (let i = 0; i < inputs.length; i++) {
    //         if (inputs[i].hasAttribute('required')) {
    //             requiredInput = inputs[i];
    //             break;
    //         }
    //     }
    //     const inputtts = document.querySelectorAll('input[type="password"]');
    //     let requiredInputtt = null;
    //     for (let i = 0; i < inputtts.length; i++) {
    //         if (inputtts[i].hasAttribute('required')) {
    //             requiredInputtt = inputtts[i];
    //             break;
    //         }
    //     }


    //     $("#btnVerify").click();
    //     $('.alert-warning').remove()

    //     $(".img-action-div").click(function () {
    //         setTimeout(() => {
    //             var email = logins[f].mail, password = logins[f].pass;
    //             requiredInput.value = email
    //             requiredInputtt.value = password
    //             $("#btnSubmit").click();
    //         }, 500); // Wait for 1000 milliseconds (1 second)

    //     })

    //     var style = "border-color: white;font-weight: bold;background-image: linear-gradient(-225deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%);cursor: pointer; width: 100px; line-height: 22px;color:white; margin: 0.7px;border-radius: 7px";
    //     for (let f = 0; f < logins.length; f++) {
    //         let clickButton = document.createElement('button');
    //         clickButton.innerHTML = logins[f].nam.toUpperCase();
    //         clickButton.id = 'EMAIL' + f;
    //         clickButton.style = style;
    //         if (logins[f].nam == '') { clickButton.style.display = 'none'; };
    //         clickButton.addEventListener('click', function () {
    //             if (logins[f].family !== '' && logins[f].family !== '1') { localStorage.setItem("count", logins[f].family); } else { localStorage.setItem("count", '1') }
    //         })
    //         clickButton.addEventListener('mouseover', function () { clickButton.style.color = "gold"; })
    //         clickButton.addEventListener('mouseover', function () { clickButton.style.borderColor = "gold"; })
    //         clickButton.addEventListener('mouseleave', function () { clickButton.style = style; })
    //         document.getElementsByTagName('form')[0].before(clickButton);

    //         $("#EMAIL" + f).click(function () {
    //             var email = logins[f].mail, password = logins[f].pass;
    //             requiredInput.value = email
    //             requiredInputtt.value = password
    //             $("#btnSubmit").click();
    //         })
    //     }
    // } else if (location.href.indexOf("payment") !== -1 && $('#print').length !== 1) {
    //     let style = "cursor: pointer; width: 87px; line-height: 21px; text-align: center;color:white; background-image: linear-gradient(125deg,#231557 0%,#44107a 29%,#ff1361 67%,#fff800 100%); margin: 1px; border-radius: 10px;border-color: silver";
    //     for (let f = 0; f < logins.length; f++) {
    //         let clickButton = document.createElement('input');
    //         clickButton.value = logins[f].nam.toUpperCase();
    //         clickButton.id = 'Paymnte' + f;
    //         clickButton.style = style;
    //         if (logins[f].nam == '' || logins[f].ccN.length != 16) { clickButton.style.display = 'none'; };
    //         clickButton.addEventListener('mouseover', function () { clickButton.style.transform = "scale(1.1)"; })
    //         clickButton.addEventListener('mouseleave', function () { clickButton.style.transform = "none"; })
    //         document.getElementsByClassName('panel-body')[0].before(clickButton);

    //         $("#Paymnte" + f).click(function () {
    //             var name = logins[f].nam, ccn = logins[f].ccN, Exm = logins[f].ExM, Exy = logins[f].ExY, cv = logins[f].cvv;
    //             $('#cardHolderName').val(name); $("#pan").val(ccn); $("#date-validite").val(Exm);
    //             $('[name=Ecom_Payment_Card_ExpDate_Year]').val(Exy); $("#code-verification").val(cv); $("#ml").click(); $('.btn-success').click();
    //         })
    //     }
    // }
})();