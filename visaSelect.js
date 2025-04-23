// ==UserScript==
// @name VisaTypeAutoSelector
// @namespace BLS SCRIPT TEAM
// @version 2024-09-26
// @author Moaz
// @match        https://egypt.blsspainglobal.com/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// ==/UserScript==

(function () {
    "use strict";

    // Function to fill in AppointmentFor (Individual or Family)
    function RemplirAppointmentFor(isIndividual = true) {
        return new Promise((resolve) => {
            var AppointmentForElement;
            var isVisibleAppointmentFor;

            // Loop through possible values of "AppointmentForX" (adjust the range as needed)
            for (var i = 1; i < 10; i++) {
                // Search for the input element by dynamically changing the name and id based on 'i'
                AppointmentForElement = document.querySelector(`input[name="AppointmentFor${i}"][id="family${i}"]`);

                if (AppointmentForElement !== null) {
                    isVisibleAppointmentFor = AppointmentForElement.offsetParent !== null;

                    if (isVisibleAppointmentFor) {
                        console.log(`AppointmentFor ${i} is visible`);

                        // Check if we want to select "Family" or "Individual"
                        if (!isIndividual) {
                            // If Family is not already selected, select it
                            if (!AppointmentForElement.checked) {
                                AppointmentForElement.click();
                                console.log(`Selected: Family for AppointmentFor${i}`);
                            } else {
                                console.log(`Family is already selected for AppointmentFor${i}`);
                            }
                        } else {
                            // If Individual (the other option) is not selected, select it
                            var individualElement = document.querySelector(`input[name="AppointmentFor${i}"]:not(#family${i})`);

                            if (individualElement && !individualElement.checked) {
                                individualElement.click();
                                console.log(`Selected: Individual for AppointmentFor${i}`);
                            } else {
                                console.log(`Individual is already selected for AppointmentFor${i}`);
                            }
                        }

                        break; // Stop the loop once the visible AppointmentFor is found and clicked
                    } else {
                        console.log(`Element AppointmentFor${i} is not visible`);
                    }
                }
            }
            resolve();
        });
    }


    // Function to fill in Appointment Category
    function RemplirCategoryId() {
        return new Promise((resolve) => {
            var AppointmentCategoryIdElement;
            var isVisible;
            for (var i = 1; i < 10; i++) {
                AppointmentCategoryIdElement = document.querySelector(
                    '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
                );
                if (AppointmentCategoryIdElement !== null) {
                    isVisible = AppointmentCategoryIdElement.offsetParent !== null;
                    if (isVisible) {
                        console.log("Appointment " + i + " is visible");
                        var AppCategoryId = $("#AppointmentCategoryId" + i).data("kendoDropDownList");
                        AppCategoryId.select(1); // Example value for Normal ,'2' for Prime Time
                        AppCategoryId.trigger("change");
                    } else {
                        console.log("Element " + i + " is not visible");
                    }
                }
            }
            resolve();
        });
    }

    // Function to fill in Location
    function RemplirLocation() {
        return new Promise((resolve) => {
            var LocationElement;
            var isVisibleLocation;
            for (var i = 1; i < 10; i++) {
                LocationElement = document.querySelector(
                    '[aria-owns="Location' + i + '_listbox"]'
                );
                if (LocationElement !== null) {
                    isVisibleLocation = LocationElement.offsetParent !== null;
                    if (isVisibleLocation) {
                        console.log("Location " + i + " is visible");
                        var Location = $("#Location" + i).data("kendoDropDownList");
                        Location.select(2); // Value for Cairo
                        Location.trigger("change");
                    } else {
                        console.log("Element " + i + " is not visible");
                    }
                }
            }
            resolve();
        });
    }

    // Function to fill in Visa Type
    function RemplirVisaType() {
        return new Promise((resolve) => {
            var VisaTypeElement;
            var isVisibleVisa;
            for (var i = 1; i < 10; i++) {
                VisaTypeElement = document.querySelector(
                    '[aria-owns="VisaType' + i + '_listbox"]'
                );
                if (VisaTypeElement !== null) {
                    isVisibleVisa = VisaTypeElement.offsetParent !== null;
                    if (isVisibleVisa) {
                        console.log("VisaType " + i + " is visible");
                        var VisaType = $("#VisaType" + i).data("kendoDropDownList");
                        VisaType.select(2); // Example value for Egypt
                        VisaType.trigger("change");
                    } else {
                        console.log("VisaType " + i + " is not visible");
                    }
                }
            }
            resolve();
        });
    }

    // Function to fill in Visa Sub Type
    function RemplirVisaSubType() {
        return new Promise((resolve) => {
            var VisaSubTypeElement;
            var isVisibleSubVisa;
            for (var i = 1; i < 10; i++) {
                VisaSubTypeElement = document.querySelector(
                    '[aria-owns="VisaSubType' + i + '_listbox"]'
                );
                if (VisaSubTypeElement !== null) {
                    isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;
                    if (isVisibleSubVisa) {
                        console.log("VisaSubType " + i + " is visible");
                        var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
                        VisaSubType.select(2); // Example value for Egypt
                        VisaSubType.trigger("change");
                    } else {
                        console.log("VisaSubType " + i + " is not visible");
                    }
                }
            }
            resolve();
        });
    }

    // Function to fill in Family Members
    function RemplirFamilyMembers() {
        return new Promise((resolve) => {
            var familyMemberElement;
            var isVisibleFamily;
            for (var i = 1; i < 10; i++) {
                familyMemberElement = document.querySelector(
                    '[aria-owns="ApplicantsNo' + i + '_listbox"]' // Ensure this matches the correct attribute
                );
                if (familyMemberElement !== null) {
                    isVisibleFamily = familyMemberElement.offsetParent !== null;
                    if (isVisibleFamily) {
                        console.log("Family member " + i + " is visible");
                        var familyDropdown = $("#ApplicantsNo" + i).data("kendoDropDownList");
                        familyDropdown.select(1); // Change the index to select a specific family member
                        familyDropdown.trigger("change");
                    } else {
                        console.log("Family member " + i + " is not visible");
                    }
                }
            }
            resolve();
        });
    }

    // Function to press the "Accept" button with a delay to ensure the element is loaded
    function PressAcceptButton() {
        return new Promise((resolve) => {
            setTimeout(() => {
                var acceptButton = document.querySelector('button.btn-success[onclick="return OnFamilyAccept();"]');
                if (acceptButton) {
                    acceptButton.click();
                    console.log("Accept button clicked");
                } else {
                    console.log("Accept button not found. Trying another method...");

                    // Try to find the button using only the class
                    acceptButton = document.querySelector('button.btn-success');
                    if (acceptButton) {
                        acceptButton.click();
                        console.log("Accept button clicked using class selector.");
                    } else {
                        console.log("Accept button not found even with class selector.");
                    }
                }
                resolve();
            }, 500); // Wait for 500ms before looking for the button (adjust this if necessary)
        });
    }


    // Sequentially execute all functions
    RemplirAppointmentFor(true) // 'true' for Individual,'false' for Family
        .then(PressAcceptButton)
        .then(RemplirCategoryId)
        .then(RemplirLocation)
        .then(RemplirVisaType)
        .then(RemplirVisaSubType)
        .then(RemplirFamilyMembers)
        .catch((error) => console.error("Error occurred:", error));

})();
