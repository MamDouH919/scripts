// ==UserScript==
// @name CompleteYourAppointment
// @namespace BLS SCRIPT TEAM
// @version 2024-09-26
// @author Mamdouh
// @match        https://egypt.blsspainglobal.com/Global/blsAppointment/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @grant       window
// ==/UserScript==

(function () {
    "use strict";

    // Use `window` directly instead of `unsafeWindow`
    const global = window;

    // Ensure jQuery is loaded
    if (typeof jQuery === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        document.head.appendChild(script);
        script.onload = startBot;
    } else {
        startBot();
    }

    var doneTimer = null;

    function startBot() {
        class SlotSelectionBot {
            start() {
                console.log(`${this.constructor.name} started`);

                this.#hidePreloader();
                this.#makeLoaderDismissable();
                this.#removeRandomnessFromUi();
                this.#selectSlot();
                // this.#getAvailableSlotTimes();
                // this.#clickVerificationButton();
            }

            #hidePreloader() {
                $('.preloader').hide();
            }

            #makeLoaderDismissable() {
                $(`
                <button class="btn btn-secondary position-absolute top-50 start-50 translate-middle-x mt-5"
                        onclick="window.HideLoader();">
                  Hide Loader</button>
              `).appendTo('.global-overlay-loader');
            }

            #removeRandomnessFromUi() {
                // Center main content
                $('#div-main > :is(:first-child, :last-child)').removeClass().hide();
                $('#div-main > :has(form)').addClass('mx-auto');

                // Remove random vertical margin
                $('form > div:nth-child(2)')
                    .addClass('gap-4')
                    .children('div')
                    .removeClass((_, className) => className.match(/m[tb]-\d/g));

                $('div:has(> #btnSubmit)').addClass('mt-5');
            }

            #selectSlot() {
                $(() => {
                    const allowedDates = global.availDates.ad.filter(it => it.AppointmentDateType === 0);
                    const selectedDate = shuffleArray(allowedDates).at(random(0, allowedDates.length - 1));
                    if (selectedDate) {
                        const datePicker = $('.k-datepicker:visible .k-input').data('kendoDatePicker');
                        datePicker.value(selectedDate.DateText);
                        datePicker.trigger('change');
                        this.#getAvailableSlotTimes();
                    }
                });
            }



            #getAvailableSlotTimes() {
                const apptDate = $('.k-datepicker:visible .k-input').val();
                console.log(apptDate);
                const slotDropDown = $('.k-dropdown:visible > .form-control').data('kendoDropDownList');
                if (!apptDate) {
                    slotDropDown.value(undefined);
                    slotDropDown.setDataSource([]);
                    return false;
                }
                global.ShowLoader();
                const that = this;

                const form = document.getElementById('myForm');

                // Loop through all form elements and modify the last character of the name
                const formElements = form.elements;
                const prefixes = [
                    "AppointmentDate",
                    "LocationId",
                    "CategoryId",
                    "VisaType",
                    "VisaSubType",
                    "ApplicantCount",
                    "DataSource",
                    "MissionId",
                    "AppointmentCategoryId"
                ];

                const formValues = {
                    applicantCount: 1,
                };

                const selectedElements = Array.from(formElements).filter(element =>
                    prefixes.some(prefix => element.name.startsWith(prefix))
                );

                selectedElements.forEach(element => {
                    formValues[element.name] = element.value;
                });

                const queryString = Object.entries(formValues)
                    .filter(([_, value]) => value !== "") // filter out empty string values
                    .map(([key, value]) => {
                        if (key === "AppointmentCategoryId") {
                            return `categoryId=${encodeURIComponent(value)}`;
                        }
                        if (key === "VisaSubTypeId") {
                            return `visaSubType=${encodeURIComponent(value)}`;
                        }
                        const cleanKey = key.replace(/\d+$/, ''); // remove trailing numbers
                        const lowerKey = cleanKey.charAt(0).toLowerCase() + cleanKey.slice(1); // lowercase first char
                        return `${lowerKey}=${encodeURIComponent(value)}`;
                    })
                    .join('&');

                const fullRequestData = `${queryString}`;
                const requestBody = new URLSearchParams(fullRequestData).toString();

                $.ajax({
                    type: 'POST',
                    url: `/Global/blsappointment/GetAvailableSlotsByDate?${requestBody}`,
                    dataType: 'json',
                    success(data) {
                        console.log(data);
                        if (data) {

                            setTimeout(() => {
                                that.#selectSlotTime(data);
                            }, 1000);

                        } else {
                            global.ShowError(data.err);
                            data.ru && global.confirm(`You will be redirected to: ${data.ru}`) && global.location.replace(data.ru);
                        }
                    },
                    complete(data) {
                        console.log(data);

                        global.HideLoader();
                    }
                });
            }

            #selectSlotTime(slots) {
                console.log(slots);
                const availableSlots = slots.filter(s => s.Count > 0)
                let selectedSlot = shuffleArray(availableSlots).at(random(0, availableSlots.length - 1))
                availableSlots.forEach(s => s.Count > selectedSlot.Count && (selectedSlot = s))
                if (selectedSlot) {
                    speechSynthesis.speak(new SpeechSynthesisUtterance('تم الحجز بنجاح يسطاااا !!!'))

                    // // const slotDropDown = $('.k-dropdown:visible > .form-control').data('kendoDropDownList')

                    // const slotDropDown = $('.k-dropdown')
                    //     .filter(function () {
                    //         return $(this).parent().css('display') !== 'none';
                    //     })
                    //     .find('> .form-control')
                    //     .data('kendoDropDownList');


                    // const ids = $('[id^="AppointmentSlot"]').filter(function () {
                    //     const $parent = $(this).closest('.col-md-3');
                    //     return $parent.length && $parent.css('display') !== 'none';
                    // }).map(function () {
                    //     return this.id;
                    // }).get();

                    // console.log(ids); // Array of matching IDs


                    // // const slotDropDown = $('.k-dropdown:visible > .form-control').data('kendoDropDownList')

                    // slotDropDown.setDataSource(slots)
                    // slotDropDown.value(selectedSlot.Id)

                    // $('[aria-owns^="AppointmentSlot"]').each(function () {
                    //     const dropDown = $(this).data('kendoDropDownList');

                    //     if (dropDown) {
                    //         // Example: log or set value
                    //         console.log('Dropdown found:', dropDown);
                    //         // dropDown.value('your-value-here');
                    //         // dropDown.trigger('change');
                    //     }
                    // });

                    const ids = $('[id^="AppointmentSlot"]').filter(function () {
                        const $parent = $(this).closest('.col-md-3');
                        return $parent.length && $parent.css('display') !== 'none';
                    }).map(function () {
                        return this.id;
                    }).get(); // Example result: ["AppointmentSlot4"]


                    // Set dropdown data for each matching ID
                    ids.forEach(id => {
                        const $input = $('#' + id);
                        const $dropdownContainer = $input.closest('.k-dropdown');
                        const dropdown = $input.data('kendoDropDownList');

                        if (dropdown) {
                            dropdown.setDataSource(slots);
                            dropdown.value(selectedSlot.Id);
                        }
                    });



                    setTimeout(() => {
                        this.#clickVerificationButton();
                        this.#fillForm();
                    }, 500);

                }

            }

            #fillForm() {

                const uploadImageFromUrl = async (
                    imageUrl,
                    uploadEndpoint,
                    fieldName = "file"
                ) => {
                    try {
                        // 1. Get the image blob
                        const response = await fetch(imageUrl, { mode: 'cors' });
                        if (!response.ok) {
                            throw new Error(`⚠️ Failed to fetch image. Status: ${response.status}`);
                        }

                        const contentType = response.headers.get("content-type") || "";
                        if (!contentType.startsWith("image/")) {
                            throw new Error("⚠️ The fetched resource is not an image.");
                        }

                        setTimeout(() => {
                            tttt(response)
                        }, 500);

                        const jjjj = async (formData) => {
                            // 3. Upload
                            const uploadResponse = await fetch(uploadEndpoint, {
                                method: "POST",
                                body: formData,
                            });

                            console.log(uploadResponse);


                            if (!uploadResponse.ok) {
                                throw new Error(`⚠️ Failed to upload image. Status: ${uploadResponse.status}`);
                            }

                            await uploadResponse.json().then(res => {
                                console.log(res);
                                // const $oldInput = $('#uploadfile-1');
                                // const $newInput = $('<input type="text" id="uploadfile-1" name="uploadfile-1" class="' + $oldInput.attr('class') + '" />');
                                // $newInput.val(res.fileId);
                                // $oldInput.replaceWith($newInput);
                                $('#uploadfile-1-preview').attr('src', `/Global/query/getfile?fileid=${res.fileId}`)
                                //     // $('#_profilePhoto').attr('src', `/DZA/query/getfile?fileid=${result.fileId}`)
                            });
                            // console.log("✅ Image uploaded successfully:", result);
                            // if (result.success) {
                            //     // id="uploadfile-1-preview"
                            //     $('#uploadfile-1').val(result.fileId)
                            //     $('#uploadfile-1-preview').attr('src', `/Global/query/getfile?fileid=${result.fileId}`)
                            //     // $('#_profilePhoto').attr('src', `/DZA/query/getfile?fileid=${result.fileId}`)
                            // } else {
                            //     global.ShowError(result.err)
                            // }
                            // return result;
                        }

                        const tttt = async (response) => {
                            const blob = await response.blob();

                            const mimeType = blob.type || 'image/png';
                            const file = new File([blob], 'image.png', { type: mimeType });

                            // console.log(file);

                            // const oldInput = $('#uploadfile-1');
                            // const dataTransfer = new DataTransfer();
                            // dataTransfer.items.add(file);
                            // oldInput.files = dataTransfer.files;

                            // // Optionally trigger change event
                            // oldInput.dispatchEvent(new Event('change', { bubbles: true }));


                            // 2. Create FormData
                            const formData = new FormData();
                            formData.append(fieldName, file);

                            setTimeout(() => {
                                jjjj(formData)
                            }, 500);

                        }


                    } catch (error) {
                        console.error("❌ Error uploading image:", error);
                        throw error;
                    }
                };

                const imageUrl = "https://i.imgur.com/hbmduHt.jpeg"; // Replace if this is broken
                const uploadUrl = "https://egypt.blsspainglobal.com/Global/query/UploadProfileImage";

                uploadImageFromUrl(imageUrl, uploadUrl)
                    .then((res) => {
                        console.log("🎉 Upload response:", res);
                    })
                    .catch((err) => {
                        console.error("❌ Upload failed:", err.message);
                    });


            }

            #clickVerificationButton() {
                $(() => {
                    const button = $('#btnSenderificationCode');
                    button.click();
                });


                // const interval = setInterval(() => {
                //     const modal = document.querySelector('#commonModal');
                //     const okButton = document.querySelector('#commonModal .modal-footer .btn.btn-success');

                //     // const isModalOpen = modal && modal.style.display === 'block';
                //     // const isButtonEnabled = okButton && !okButton.disabled;

                //     if (modal && okButton) {
                //         okButton.click();
                //         clearInterval(interval); // Stop checking after click
                //     }
                // }, 300); // check every 300ms

                // setTimeout(() => {
                //     $('.upload-photo-btn')?.click();
                // }, 2000);

                // const img = document.getElementById('uploadfile-1-preview');

                // const observer = new MutationObserver((mutationsList) => {
                //     for (const mutation of mutationsList) {
                //         if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                //             photoUploadModal
                //             setTimeout(() => {
                //                 $('#photoUploadModal .modal-footer .btn.btn-primary').click();
                //             }, 200);
                //         }
                //     }
                // });

                // observer.observe(img, {
                //     attributes: true,
                //     attributeFilter: ['src']
                // });


            }
        }

        $(document).ready(function () {
            const bot = new SlotSelectionBot();
            bot.start();

            const init = async function () {
                creatBTN("Hide Loader", ".global-overlay-loader", () => {
                    HideLoader();
                    $('#payConfirmModal').modal('hide');
                    document.getElementById("payConfirm").disabled = false;
                }, "#f41d18");
            };
            init();

            const modalElement = document.getElementById('commonModal');
            modalElement.addEventListener('shown.bs.modal', function () {
                $('#commonModal .modal-footer .btn.btn-success').click();
                // $('.upload-photo-btn')?.click();
            });

            const modalElement2 = document.getElementById('photoUploadModal');
            modalElement2.addEventListener('shown.bs.modal', function () {
                $('#photoUploadModal .modal-footer .btn.btn-primary').click();
            });

            const img = document.getElementById('uploadfile-1-preview');
            const emailInput = document.getElementById('EmailVerificationCode');

            const observer = new MutationObserver(() => {
                // Check if both conditions are met: image src changed and email input has value
                if (img.src !== img.getAttribute('data-src') && emailInput.value.trim() !== '') {
                    // Update the data-src to current src to prevent multiple triggers
                    img.setAttribute('data-src', img.src);

                    setTimeout(() => {
                        // Do something when both conditions are true
                        console.log('Image source changed and email input has value:', emailInput.value);
                        // Example action:
                        $('#btnVerifyEmail').click();
                    }, 200);
                }
            });

            // Observe image src changes (using 'attributes') and email input value changes
            if (img) observer.observe(img, { attributes: true, attributeFilter: ['src'] });
            if (emailInput) observer.observe(emailInput, { attributes: true, childList: true, subtree: false });


            const validationSummary = document.getElementById('btnVerifyAppointment'); // No '#' needed

            const observerSummary = new MutationObserver(() => {
                const displayStyle = window.getComputedStyle(validationSummary).display;

                // Check if the display is not 'none'
                if (displayStyle !== 'none') {
                    // Trigger click event
                    $('#btnVerifyAppointment').click();

                    // Do something when the validation summary is visible
                    console.log('Validation summary is visible');
                    // You can trigger an action here like showing a message, etc.
                }
            });

            // Observe the 'style' attribute for changes
            if (validationSummary) {
                observerSummary.observe(validationSummary, {
                    attributes: true,
                    attributeFilter: ['style'],  // Observe style changes
                });
            }

            const btnSubmit = document.getElementById('btnSubmit'); // No '#' needed

            const observerBtnSubmit = new MutationObserver(() => {
                const displayStyle = window.getComputedStyle(btnSubmit).display;

                // Check if the display is not 'none'
                if (displayStyle !== 'none') {
                    // Trigger click event
                    $('#btnSubmit').click();

                    // Do something when the validation summary is visible
                    console.log('Validation summary is visible');
                    // You can trigger an action here like showing a message, etc.
                }
            });

            // Observe the 'style' attribute for changes
            if (btnSubmit) {
                observerBtnSubmit.observe(btnSubmit, {
                    attributes: true,
                    attributeFilter: ['style'],  // Observe style changes
                });
            }

            // Create the button dynamically
            const $button = $('<button>', {
                id: 'startBotBtn',
                text: 'Start Bot',
                click: function () {
                    bot.start();
                }
            }).css({
                position: 'fixed', // Optional: ensures it's on top of other elements
                alignItems: 'center',
                backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
                border: '0',
                borderRadius: '8px',
                boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                display: 'flex',
                fontFamily: 'Phantomsans, sans-serif',
                fontSize: '20px',
                justifyContent: 'center',
                lineHeight: '1em',
                maxWidth: '100%',
                minWidth: '140px',
                padding: '19px 24px',
                textDecoration: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                touchAction: 'manipulation',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                top: '50px',
                left: '20px',
                zIndex: 9999

            });

            // Append the button to the body or a specific container
            $('body').append($button);
            // $('body').append($buttonBrowse);
        });
    }

})();

// Helper function to shuffle an array (could be implemented if not already available)
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Helper function to generate a random number between min and max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}