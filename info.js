// ==UserScript==
// @name         Family 5 APPLICANT DETAILS
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       Hashem
// @match        https://egypt.blsspainglobal.com/Global/blsAppointment/ManageAppointment*
// @match        https://spain.blscn.cn/CHN/blsAppointment/ManageAppointment*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainglobal.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let isCodeExecuted = false;
    function runCode() {
        const progressPer = document.getElementById("progress-percent");
        /////////////  EDIT HERE  /////////////
        ////////////
        //////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////// APPLICANT 1 DATA ////////////////////////////////
        //////////////////////////////////////////////////////////////////////////
        ///////////
        const SurnameAtBirth_0 = "AWAD";
        const DateOfBirth_0 = '1986-05-25'; // YYYY-MM-DD
        const Gender = 'Male'; //male - female
        const MartialStatus = "Married";
        const CountryBirth = "Egypt";
        const TravelDate_0 = "2025-06-20";
        const HomeAddressState_0 = "KALYOBIYA";
        const FingerPrint = "NO REASON FOR EXEMPTION";
        const PreviousFingerPrintDate_0 = "2023-03-15";
        const IntendedDateOfArrival_0 = "2025-06-20";
        const IntendedDateOfDeparture_0 = "2025-06-25";
        const InvitingCountryId_0 = "spain";
        const PlaceOfBirth_0 = "KALYOBIYA";
        const NationalIdentityNumber_0 = "28605251401459";
        const NationalityAtBirthId_0 = "Egypt";

        /////////////////////////////////////
        /// Address & Contact Details ///////
        /////////////////////////////////////
        const HomeAddressLine1_0 = "KALYOBIYA";
        const HomeCountry = "Egypt";
        const HomeAddressCity = "KALYOBIYA";
        const HomeAddressPostalCode = '13511';
        const HomeAddressContactNumber = '021065649227';
        /////////////////////////////
        /// Employer Details ////////
        /////////////////////////////
        const EmployerName_0 = "NONE";
        const EmployerPhone_0 = "021065649227";
        const EmployerAddress_0 = 'NONE';
        const Occupation = 'Other';
        /////////////////////////////
        /// Travel Information //////
        /////////////////////////////
        const purposeOfJourney = 'tourism';
        const MemberStateDestination_0 = 'Spain';
        const MemberStateFirstEntry_0 = 'SPAIN';
        const NumberOfEntries = 'SINGLE ENTRY'; // multiple Entries , two Entries
        const IntendedStayDuration = '5' //1 2 3 .... Number
        ///////////////////////////
        ///  details of hotel//////
        ////////////////////////////
        const InvitingAuthorityName = 'Fenix hotel';
        const InvitingCity = "Barcelona";
        const InvitingZipCode = '08024';
        const InvitingAddress = 'Carrer de larrard , Gracia , 08024 , Barcelona Spain';
        const InvitingEmail = 'fenix.hotel.reservas@hotmail.com';
        const InvitingContactNo = '0034665668795';
        ///////////////////////////
        ///  details of hotel//////
        ////////////////////////////
        const CostCoveredById_0 = 'By the Applicant himself / herself';
        const MeansOfSupportId_0 = 'Cash';
        //////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////// APPLICANT 2 DATA ////////////////////////////////
        //////////////////////////////////////////////////////////////////////////
        const SurnameAtBirth_1 = "APPLICANT 2 FIRST NAME"; //
        const Firstname1 = "APPLICANT 2 FIRST NAME";
        const Lastname1 = "APPLICANT 2 LAST NAME"
        const surname1 = "Hashem";
        const Relationship_With_Applicant1_ = "husband"
        const DateOfBirth_1 = '2003-03-30'; // YYYY-MM-DD
        const TravelDate_1 = "2023-03-20";
        const HomeAddressState_1 = "Alexandria";
        const FingerPrint1 = "no";
        const PreviousFingerPrintDate_1 = "2023-03-15";
        const IntendedDateOfArrival_1 = "2023-05-18";
        const IntendedDateOfDeparture_1 = "2023-05-16";
        const NationalIdentityNumber_1 = "30303300467958"
        const InvitingCountryId_1 = "spain";
        //Passport Details //
        const PassportType = 'ordinary passport';
        const Passport_Number1 = "A123456789";
        const IssuePlace_1 = "30";
        const IssueCountryId_1 = "Egypt";
        const PassportIssueDate1 = "2020-10-15";
        const PassportExpiryDate1 = '2027-10-14';
        const PlaceOfBirth_1 = "Alexandria";
        const CountryBirth1 = "Egypt";
        /////////////////////////////////////
        /// Address & Contact Details ///////
        /////////////////////////////////////
        const HomeAddressLine1_1 = "SomeWhere";
        const MartialStatus1 = "Married";
        const HomeCountry1 = "Egypt";
        const HomeAddressCity1 = "Alexandria";
        const HomeAddressPostalCode1 = '21515';
        const HomeAddressContactNumber1 = '021231231';
        const Gender1 = 'Male';
        /////////////////////////////
        /// Employer Details ////////
        /////////////////////////////
        const EmployerName_1 = "Hashem";
        const EmployerPhone_1 = '0123456789';
        const EmployerAddress_1 = 'Smouha - Alexandria';
        const Occupation1 = 'OTHER';
        const purposeOfJourney1 = 'tourism';
        const MemberStateDestination_1 = 'Spain';
        const MemberStateFirstEntry_1 = 'Egypt';
        const NumberOfEntries1 = 'multiple entries'; // multiple Entries , two Entries
        const IntendedStayDuration1 = '2' //1 2 3 .... Number
        ///////////////////////////
        ///  details of hotel//////
        ////////////////////////////
        const InvitingAuthorityName1 = 'Name';
        const InvitingCity1 = "Madrid";
        const InvitingZipCode1 = '01231';
        const InvitingAddress1 = 'Address';
        const InvitingEmail1 = 'something@gmail.com';
        const InvitingContactNo1 = '0123456677';
        const CostCoveredById_1 = 'By the Applicant himself / herself';
        const MeansOfSupportId_1 = 'Cash';
        ////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////// APPLICANT 3 DATA ///////////////////////////////
        /////////////////////////////////////////////////////////////////////////
        const Firstname2 = "APPLICANT 3 FIRST NAME";
        const Lastname2 = "APPLICANT 3 LAST NAME"
        const surname2 = "Hashem";
        const PassportType2 = 'ordinary passport';
        const Relationship_With_Applicant1__ = "son"
        const Passport_Number2 = "A123456789";
        const IssuePlace_2 = "30";
        const PassportIssueDate2 = "2020-11-15";
        const PassportExpiryDate2 = "2027-11-14";
        const NationalIdentityNumber_2 = "30303300467958"
        const DateOfBirth_2 = '2003-03-30'; // YYYY-MM-DD
        const TravelDate_2 = "2023-03-20";
        const HomeAddressState_2 = "Alexandria";
        const FingerPrint2 = "yes";
        const PreviousFingerPrintDate_2 = "2023-03-15";
        const IntendedDateOfArrival_2 = "2023-05-18";
        const IntendedDateOfDeparture_2 = "2023-05-16";
        const InvitingCountryId_2 = "spain";
        const PlaceOfBirth_2 = "Alexandria";
        const CountryBirth2 = "Egypt";
        /////////////////////////////////////
        /// Address & Contact Details ///////
        /////////////////////////////////////
        const HomeAddressLine1_2 = "SomeWhere";
        const MartialStatus2 = "Married";
        const HomeCountry2 = "Egypt";
        const HomeAddressCity2 = "Alexandria";
        const HomeAddressPostalCode2 = '21515';
        const HomeAddressContactNumber2 = '021231231';
        const Gender2 = 'Male';
        /////////////////////////////
        /// Employer Details ////////
        /////////////////////////////
        const EmployerName_2 = "Hashem";
        const EmployerPhone_2 = '0123456789';
        const EmployerAddress_2 = 'Smouha - Alexandria';
        const Occupation2 = 'OTHER';
        const purposeOfJourney2 = 'tourism';
        const MemberStateDestination_2 = 'Spain';
        const MemberStateFirstEntry_2 = 'Egypt';
        const NumberOfEntries2 = 'multiple entries'; // multiple Entries , two Entries
        const IntendedStayDuration2 = '2' //1 2 3 .... Number
        ///////////////////////////
        ///  details of hotel//////
        ////////////////////////////
        const InvitingAuthorityName2 = 'Name';
        const InvitingCity2 = "Madrid";
        const InvitingZipCode2 = '01231';
        const InvitingAddress2 = 'Address';
        const InvitingEmail2 = 'something@gmail.com';
        const InvitingContactNo2 = '0123456677';
        /////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ///////////////////////// APPLICANT 4 DATA ////////////////////////////////
        //////////////////////////////////////////////////////////////////////////
        const Firstname3 = "APPLICANT 4 FIRST NAME";
        const Lastname3 = "APPLICANT 4 LAST NAME"
        const surname3 = "Hashem";
        const PassportType3 = 'ordinary passport';
        const Relationship_With_Applicant1___ = "daughter" // son Wife husband
        const Passport_Number3 = "A123456789";
        const IssuePlace_3 = "30";
        const PassportIssueDate3 = "2020-11-15";
        const PassportExpiryDate3 = "2027-11-14";
        const NationalIdentityNumber_3 = "30303300467958"
        const DateOfBirth_3 = '2003-03-30'; // YYYY-MM-DD
        const TravelDate_3 = "2023-03-20";
        const HomeAddressState_3 = "Alexandria";
        const FingerPrint3 = "yes";
        const PreviousFingerPrintDate_3 = "2023-03-15";
        const IntendedDateOfArrival_3 = "2023-05-18";
        const IntendedDateOfDeparture_3 = "2023-05-16";
        const InvitingCountryId_3 = "spain";
        const PlaceOfBirth_3 = "Alexandria";
        const CountryBirth3 = "Egypt";
        /////////////////////////////////////
        /// Address & Contact Details ///////
        /////////////////////////////////////
        const HomeAddressLine1_3 = "SomeWhere";
        const MartialStatus3 = "Married";
        const HomeCountry3 = "Egypt";
        const HomeAddressCity3 = "Alexandria";
        const HomeAddressPostalCode3 = '21515';
        const HomeAddressContactNumber3 = '021231231';
        const Gender3 = 'Male';
        /////////////////////////////
        /// Employer Details ////////
        /////////////////////////////
        const EmployerName_3 = "Hashem";
        const EmployerPhone_3 = '0123456789';
        const EmployerAddress_3 = 'Smouha - Alexandria';
        const Occupation3 = 'OTHER';
        const purposeOfJourney3 = 'tourism';
        const MemberStateDestination_3 = 'Spain';
        const MemberStateFirstEntry_3 = 'Egypt';
        const NumberOfEntries3 = 'Single entry'; // multiple Entries , two Entries
        const IntendedStayDuration3 = '2' //1 2 3 .... Number
        ///////////////////////////
        ///  details of hotel//////
        ////////////////////////////
        const InvitingAuthorityName3 = 'Name';
        const InvitingCity3 = "Madrid";
        const InvitingZipCode3 = '01231';
        const InvitingAddress3 = 'Address';
        const InvitingEmail3 = 'something@gmail.com';
        const InvitingContactNo3 = '0123456677';

        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ///////////////////////// APPLICANT 5 DATA ////////////////////////////////
        //////////////////////////////////////////////////////////////////////////
        const Firstname4 = "APPLICANT 5 FIRST NAME";
        const Lastname4 = "APPLICANT 5 LAST NAME"
        const surname4 = "Hashem";
        const PassportType4 = 'ordinary passport';
        const Relationship_With_Applicant1____ = "wife"
        const Passport_Number4 = "A123456789";
        const IssuePlace_4 = "30";
        const PassportIssueDate4 = "2020-11-15";
        const PassportExpiryDate4 = "2027-11-14";
        const NationalIdentityNumber_4 = "30303300467958"
        const DateOfBirth_4 = '2003-03-30'; // YYYY-MM-DD
        const TravelDate_4 = "2023-03-20";
        const HomeAddressState_4 = "Alexandria";
        const FingerPrint4 = "Yes";
        const PreviousFingerPrintDate_4 = "2023-03-15";
        const IntendedDateOfArrival_4 = "2023-05-18";
        const IntendedDateOfDeparture_4 = "2023-05-16";
        const InvitingCountryId_4 = "spain";
        const PlaceOfBirth_4 = "Alexandria";
        const CountryBirth4 = "Egypt";
        /////////////////////////////////////
        /// Address & Contact Details ///////
        /////////////////////////////////////
        const HomeAddressLine1_4 = "SomeWhere";
        const MartialStatus4 = "Married";
        const HomeCountry4 = "Egypt";
        const HomeAddressCity4 = "Alexandria";
        const HomeAddressPostalCode4 = '21515';
        const HomeAddressContactNumber4 = '021231231';
        const Gender4 = 'Male';
        /////////////////////////////
        /// Employer Details ////////
        /////////////////////////////
        const EmployerName_4 = "Hashem";
        const EmployerPhone_4 = '0123456789';
        const EmployerAddress_4 = 'Smouha - Alexandria';
        const Occupation4 = 'OTHER';
        const purposeOfJourney4 = 'tourism';
        const MemberStateDestination_4 = 'Spain';
        const MemberStateFirstEntry_4 = 'Egypt';
        const NumberOfEntries4 = 'multiple entries'; // multiple Entries , two Entries
        const IntendedStayDuration4 = '2' //1 2 3 .... Number
        ///////////////////////////
        ///  details of hotel//////
        ////////////////////////////
        const InvitingAuthorityName4 = 'Name';
        const InvitingCity4 = "Madrid";
        const InvitingZipCode4 = '01231';
        const InvitingAddress4 = 'Address';
        const InvitingEmail4 = 'something@gmail.com';
        const InvitingContactNo4 = '0123456677';


        ////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////DONT TOUCH $$ DONT TOCUH $$ DONT TOUCH $$////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////

        if (progressPer.innerHTML === "25%" && !isCodeExecuted) {
            $("#SurnameAtBirth_0").val(SurnameAtBirth_0);
            $("#DateOfBirth_0").val(DateOfBirth_0);
            $("#PlaceOfBirth_0").val(PlaceOfBirth_0);
            $("#NationalIdentityNumber_0").val(NationalIdentityNumber_0)
            $("#HomeAddressState_0").val(HomeAddressState_0)
            const countryLi = document.querySelectorAll("#CountryOfBirthId_0_listbox li");
            countryLi.forEach((li) => {
                if (li.innerHTML.toLowerCase() === CountryBirth.toLowerCase()) {
                    li.click();
                }
            });

            const nationality = document.querySelectorAll("#NationalityId_0_listbox li");
            nationality.forEach((li) => {
                if (li.innerHTML.toLowerCase() === CountryBirth.toLowerCase()) {
                    li.click();
                }
            });

            const nationalityAtBirth = document.querySelectorAll("#NationalityAtBirthId_0_listbox li");
            nationalityAtBirth.forEach((li) => {
                if (li.innerHTML.toLowerCase().includes(NationalityAtBirthId_0.toLowerCase())) {
                    li.click();
                }
            });

            const martialStatus = document.querySelectorAll("#MaritalStatusId_0_listbox li");
            martialStatus.forEach((li) => {
                if (li.innerHTML.toLowerCase() === MartialStatus.toLowerCase()) {
                    li.click();
                }
            });

            const hadc = document.querySelectorAll("#HomeAddressCountryId_0_listbox li");
            hadc.forEach((li) => {
                if (li.innerHTML.toLowerCase() == HomeCountry.toLowerCase()) {
                    li.click()
                }

            });
            $("#HomeAddressLine1_0").val(HomeAddressLine1_0);
            $("#HomeAddressCity_0").val(HomeAddressCity);
            $("#HomeAddressPostalCode_0").val(HomeAddressPostalCode);
            $("#HomeAddressContactNumber_0").val(HomeAddressContactNumber);

            const genderbox = document.querySelectorAll("#GenderId_0_listbox li");
            genderbox.forEach((li) => {
                if (li.innerHTML.toLowerCase() == Gender.toLowerCase()) {
                    li.click();
                }
            });


            //
            const InvitingCountryId = document.querySelectorAll("#InvitingCountryId_0_listbox li")
            InvitingCountryId.forEach((li) => {
                if (li.innerHTML.toLowerCase().includes(InvitingCountryId_0.toLowerCase())) {
                    li.click();
                }
            })
            const MemberStateSecondDestinationId = document.querySelectorAll("#MemberStateSecondDestinationId_0_listbox li");
            MemberStateSecondDestinationId.forEach((li) => {
                if (li.innerHTML.toLowerCase() == 'spain') {
                    li.click()
                }
            })
            const MemberStateFirstEntryId = document.querySelectorAll("#MemberStateFirstEntryId_0_listbox li");
            MemberStateFirstEntryId.forEach((li) => {
                if (li.innerHTML.toLowerCase() == 'spain') {
                    li.click()
                }
            })
            //


            $("#EmployerName_0").val(EmployerName_0);
            $("#EmployerPhone_0").val(EmployerPhone_0);
            $("#EmployerAddress_0").val(EmployerAddress_0);
            $("#TravelDate_0").val(TravelDate_0);


            const Occupbox = document.querySelectorAll("#CurrentOccupationId_0_listbox li");
            Occupbox.forEach((li) => {
                if (li.innerHTML.toLowerCase() == Occupation.toLowerCase()) {
                    li.click();
                }
            });

            const purposebox = document.querySelectorAll("#PurposeOfJourneyId_0_listbox li");
            purposebox.forEach((li) => {
                if (li.innerHTML.toLowerCase() == purposeOfJourney.toLowerCase()) {
                    li.click();
                }
            });

            const memberDest = document.querySelectorAll("#MemberStateDestinationId_0_listbox li");
            memberDest.forEach((li) => {
                if (li.innerHTML.toLowerCase().includes(MemberStateDestination_0.toLowerCase())) {
                    li.click();
                }
            });

            const MemberStateFirstEntry = document.querySelectorAll("#MemberStateFirstEntryId_0_listbox li");
            MemberStateFirstEntry.forEach((li) => {
                if (li.innerHTML.toLowerCase().includes(MemberStateFirstEntry_0.toLowerCase())) {
                    li.click();
                }
            });

            const NoEntriesbox = document.querySelectorAll("#NumberOfEntriesRequested_0_listbox li");
            NoEntriesbox.forEach((li) => {
                if (li.innerHTML.toLowerCase() == NumberOfEntries.toLowerCase()) {
                    li.click();
                }
            });
            const CostCovered = document.querySelectorAll("#CostCoveredById_0_listbox li");
            CostCovered.forEach((li) => {
                if (li.innerHTML.toLowerCase().includes(CostCoveredById_0.toLowerCase())) {
                    li.click();
                }
            });
            const MeansOfSupport = document.querySelectorAll("#MeansOfSupportId_0_listbox li");
            MeansOfSupport.forEach((li) => {
                if (li.innerHTML.toLowerCase().includes(MeansOfSupportId_0.toLowerCase())) {
                    li.click();
                }
            });
            if (FingerPrint.toLowerCase() == 'yes') {
                $("#PreviousFingerPrintDate_0").val(PreviousFingerPrintDate_0)
            } else {
                $("#PreviousFingerPrintStatus_2_0").click();
            }
            $("#IntendedStayDuration_0").val(IntendedStayDuration);
            $("#IntendedDateOfDeparture_0").val(IntendedDateOfDeparture_0);
            $("#IntendedDateOfArrival_0").val(IntendedDateOfArrival_0)
            $("#InvitingAuthorityName_0").val(InvitingAuthorityName);
            $("#InvitingCity_0").val(InvitingCity);
            $("#InvitingZipCode_0").val(InvitingZipCode);
            $("#InvitingAddress_0").val(InvitingAddress);
            $("#InvitingEmail_0").val(InvitingEmail);
            $("#InvitingContactNo_0").val(InvitingContactNo);
            //////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////
            if (document.getElementById('FirstName_1') !== null) {
                $("#SurnameAtBirth_1").val(SurnameAtBirth_1);
                $("#FirstName_1").val(Firstname1);
                $("#LastName_1").val(Lastname1);
                $("#SurName_1").val(surname1);
                $("#DateOfBirth_1").val(DateOfBirth_1);
                $("#PlaceOfBirth_1").val(PlaceOfBirth_1);
                $("#PassportNo_1").val(Passport_Number1);
                $("#IssueDate_1").val(PassportIssueDate1);
                $("#ExpiryDate_1").val(PassportExpiryDate1);
                $("#TravelDate_1").val(TravelDate_1);
                $("#HomeAddressState_1").val(HomeAddressState_1)
                $("#NationalIdentityNumber_1").val(NationalIdentityNumber_1)
                const PassTypee = document.querySelectorAll("#PassportType_1_listbox li");
                PassTypee.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === PassportType.toLowerCase()) {
                        li.click();
                    }
                })

                const IssueCountry = document.querySelectorAll("#IssueCountryId_1_listbox li");
                IssueCountry.forEach((li) => {
                    if (li.innerHTML.toLowerCase().includes(IssueCountryId_1.toLowerCase())) {
                        li.click();
                    }
                })

                const relbox = document.querySelectorAll("#Relationship_1_listbox li");
                relbox.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Relationship_With_Applicant1_.toLowerCase()) {
                        li.click()
                    }
                })

                if (FingerPrint1.toLowerCase() == 'yes') {
                    $("#PreviousFingerPrintDate_1").val(PreviousFingerPrintDate_1)
                } else {
                    $("#PreviousFingerPrintStatus_2_1").click();
                }

                const countryLii = document.querySelectorAll("#CountryOfBirthId_1_listbox li");
                countryLii.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth1.toLowerCase()) {
                        li.click();
                    }
                });

                const nationalityy = document.querySelectorAll("#NationalityId_1_listbox li");
                nationalityy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth1.toLowerCase()) {
                        li.click();
                    }
                });

                const martialStatuss = document.querySelectorAll("#MaritalStatusId_1_listbox li");
                martialStatuss.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === MartialStatus1.toLowerCase()) {
                        li.click();
                    }
                });

                const hadcc = document.querySelectorAll("#HomeAddressCountryId_1_listbox li");
                hadcc.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == HomeCountry1.toLowerCase()) {
                        li.click()
                    }

                });
                $("#HomeAddressLine1_1").val(HomeAddressLine1_1);
                $("#HomeAddressCity_1").val(HomeAddressCity1);
                $("#HomeAddressPostalCode_1").val(HomeAddressPostalCode1);
                $("#HomeAddressContactNumber_1").val(HomeAddressContactNumber1);
                $("#IssuePlace_1").val(IssuePlace_1)

                const genderboxx = document.querySelectorAll("#GenderId_1_listbox li");
                genderboxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Gender1.toLowerCase()) {
                        li.click();
                    }
                });

                $("#EmployerName_1").val(EmployerName_1);
                $("#EmployerPhone_1").val(EmployerPhone_1);
                $("#EmployerAddress_1").val(EmployerAddress_1);


                const Occupboxx = document.querySelectorAll("#CurrentOccupationId_1_listbox li");
                Occupboxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Occupation1.toLowerCase()) {
                        li.click();
                    }
                });


                const InvitingCountryIdd = document.querySelectorAll("#InvitingCountryId_1_listbox li")
                InvitingCountryIdd.forEach((li) => {
                    if (li.innerHTML.toLowerCase().includes(InvitingCountryId_1.toLowerCase())) {
                        li.click();
                    }
                })
                const MemberStateSecondDestinationIdd = document.querySelectorAll("#MemberStateSecondDestinationId_1_listbox li");
                MemberStateSecondDestinationIdd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })
                const MemberStateFirstEntryIdd = document.querySelectorAll("#MemberStateFirstEntryId_1_listbox li");
                MemberStateFirstEntryIdd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })





                const purposeboxx = document.querySelectorAll("#PurposeOfJourneyId_1_listbox li");
                purposeboxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == purposeOfJourney1.toLowerCase()) {
                        li.click();
                    }
                });

                const memberDestt = document.querySelectorAll("#MemberStateDestinationId_1_listbox li");
                memberDestt.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateDestination_1.toLowerCase()) {
                        li.click();
                    }
                });

                const MemberStateFirstEntryy = document.querySelectorAll("#MemberStateFirstEntryId_1_listbox li");
                MemberStateFirstEntryy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateFirstEntry_1.toLowerCase()) {
                        li.click();
                    }
                });

                const NoEntriesboxx = document.querySelectorAll("#NumberOfEntriesRequested_1_listbox li");
                NoEntriesboxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == NumberOfEntries1.toLowerCase()) {
                        li.click();
                    }
                });

                const CostCovered_1 = document.querySelectorAll("#CostCoveredById_1_listbox li");
                CostCovered_1.forEach((li) => {
                    if (li.innerHTML.toLowerCase().includes(CostCoveredById_1.toLowerCase())) {
                        li.click();
                    }
                });
                const MeansOfSupport_1 = document.querySelectorAll("#MeansOfSupportId_1_listbox li");
                MeansOfSupport_1.forEach((li) => {
                    if (li.innerHTML.toLowerCase().includes(MeansOfSupportId_1.toLowerCase())) {
                        li.click();
                    }
                });

                $("#IntendedStayDuration_1").val(IntendedStayDuration1);
                $("#IntendedDateOfArrival_1").val(IntendedDateOfArrival_1)
                $("#IntendedDateOfDeparture_1").val(IntendedDateOfDeparture_1);
                $("#InvitingAuthorityName_1").val(InvitingAuthorityName1);
                $("#InvitingCity_1").val(InvitingCity1);
                $("#InvitingZipCode_1").val(InvitingZipCode1);
                $("#InvitingAddress_1").val(InvitingAddress1);
                $("#InvitingEmail_1").val(InvitingEmail1);
                $("#InvitingContactNo_1").val(InvitingContactNo1);

            }

            /////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////

            if (document.getElementById('FirstName_2') !== null) {
                $("#FirstName_2").val(Firstname2);
                $("#LastName_2").val(Lastname2);
                $("#SurName_2").val(surname2);
                $("#DateOfBirth_2").val(DateOfBirth_2);
                $("#PlaceOfBirth_2").val(PlaceOfBirth_2);
                $("#PassportNo_2").val(Passport_Number2);
                $("#IssueDate_2").val(PassportIssueDate2);
                $("#ExpiryDate_2").val(PassportExpiryDate2);
                $("#IssuePlace_2").val(IssuePlace_2);
                $("#TravelDate_2").val(TravelDate_2);
                $("#HomeAddressState_2").val(HomeAddressState_2)
                $("#NationalIdentityNumber_2").val(NationalIdentityNumber_2)
                const PassTypeee = document.querySelectorAll("#PassportType_2_listbox li");
                PassTypeee.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === PassportType2.toLowerCase()) {
                        li.click();
                    }
                })

                const relboxx = document.querySelectorAll("#Relationship_2_listbox li");
                relboxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Relationship_With_Applicant1__.toLowerCase()) {
                        li.click()
                    }
                })


                const InvitingCountryIddd = document.querySelectorAll("#InvitingCountryId_2_listbox li")
                InvitingCountryIddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == InvitingCountryId_2.toLowerCase()) {
                        li.click();
                    }
                })
                const MemberStateSecondDestinationIddd = document.querySelectorAll("#MemberStateSecondDestinationId_2_listbox li");
                MemberStateSecondDestinationIddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })
                const MemberStateFirstEntryIddd = document.querySelectorAll("#MemberStateFirstEntryId_2_listbox li");
                MemberStateFirstEntryIddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })



                if (FingerPrint2.toLowerCase() == 'yes') {
                    $("#PreviousFingerPrintDate_2").val(PreviousFingerPrintDate_2)
                } else {
                    $("#PreviousFingerPrintStatus_2_2").click();
                }
                const countryLiii = document.querySelectorAll("#CountryOfBirthId_2_listbox li");
                countryLiii.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth2.toLowerCase()) {
                        li.click();
                    }
                });
                const nationalityyy = document.querySelectorAll("#NationalityId_2_listbox li");
                nationalityyy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth2.toLowerCase()) {
                        li.click();
                    }
                });
                const martialStatusss = document.querySelectorAll("#MaritalStatusId_2_listbox li");
                martialStatusss.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === MartialStatus2.toLowerCase()) {
                        li.click();
                    }
                });
                const hadccc = document.querySelectorAll("#HomeAddressCountryId_2_listbox li");
                hadccc.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == HomeCountry2.toLowerCase()) {
                        li.click()
                    }
                });
                $("#HomeAddressLine1_2").val(HomeAddressLine1_2);
                $("#HomeAddressCity_2").val(HomeAddressCity2);
                $("#HomeAddressPostalCode_2").val(HomeAddressPostalCode2);
                $("#HomeAddressContactNumber_2").val(HomeAddressContactNumber2);
                const genderboxxx = document.querySelectorAll("#GenderId_2_listbox li");
                genderboxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Gender2.toLowerCase()) {
                        li.click();
                    }
                });
                $("#EmployerName_2").val(EmployerName_2);
                $("#EmployerPhone_2").val(EmployerPhone_2);
                $("#EmployerAddress_2").val(EmployerAddress_2);
                const Occupboxxx = document.querySelectorAll("#CurrentOccupationId_2_listbox li");
                Occupboxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Occupation2.toLowerCase()) {
                        li.click();
                    }
                });
                const purposeboxxx = document.querySelectorAll("#PurposeOfJourneyId_2_listbox li");
                purposeboxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == purposeOfJourney2.toLowerCase()) {
                        li.click();
                    }
                });
                const memberDesttt = document.querySelectorAll("#MemberStateDestinationId_2_listbox li");
                memberDesttt.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateDestination_2.toLowerCase()) {
                        li.click();
                    }
                });
                const MemberStateFirstEntryyy = document.querySelectorAll("#MemberStateFirstEntryId_2_listbox li");
                MemberStateFirstEntryyy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateFirstEntry_2.toLowerCase()) {
                        li.click();
                    }
                });
                const NoEntriesboxxx = document.querySelectorAll("#NumberOfEntriesRequested_2_listbox li");
                NoEntriesboxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == NumberOfEntries2.toLowerCase()) {
                        li.click();
                    }
                });
                $("#IntendedStayDuration_2").val(IntendedStayDuration2);
                $("#IntendedDateOfArrival_2").val(IntendedDateOfArrival_2)
                $("#IntendedDateOfDeparture_2").val(IntendedDateOfDeparture_2);
                $("#InvitingAuthorityName_2").val(InvitingAuthorityName2);
                $("#InvitingCity_2").val(InvitingCity2);
                $("#InvitingZipCode_2").val(InvitingZipCode2);
                $("#InvitingAddress_2").val(InvitingAddress2);
                $("#InvitingEmail_2").val(InvitingEmail2);
                $("#InvitingContactNo_2").val(InvitingContactNo2);

            }



            //////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////

            if (document.getElementById('FirstName_3') !== null) {
                $("#FirstName_3").val(Firstname3);
                $("#LastName_3").val(Lastname3);
                $("#SurName_3").val(surname3);
                $("#DateOfBirth_3").val(DateOfBirth_3);
                $("#PlaceOfBirth_3").val(PlaceOfBirth_3);
                $("#PassportNo_3").val(Passport_Number3);
                $("#IssueDate_3").val(PassportIssueDate3);
                $("#ExpiryDate_3").val(PassportExpiryDate3);
                $("#IssuePlace_3").val(IssuePlace_3);
                $("#TravelDate_3").val(TravelDate_3);
                $("#HomeAddressState_3").val(HomeAddressState_3)

                $("#NationalIdentityNumber_3").val(NationalIdentityNumber_3)

                const PassTypeeee = document.querySelectorAll("#PassportType_3_listbox li");
                PassTypeeee.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === PassportType.toLowerCase()) {
                        li.click();
                    }
                })

                const relboxxx = document.querySelectorAll("#Relationship_3_listbox li");
                relboxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Relationship_With_Applicant1___.toLowerCase()) {
                        li.click()
                    }
                })


                const InvitingCountryIdddd = document.querySelectorAll("#InvitingCountryId_3_listbox li")
                InvitingCountryIdddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == InvitingCountryId_3.toLowerCase()) {
                        li.click();
                    }
                })
                const MemberStateSecondDestinationIdddd = document.querySelectorAll("#MemberStateSecondDestinationId_3_listbox li");
                MemberStateSecondDestinationIdddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })
                const MemberStateFirstEntryIdddd = document.querySelectorAll("#MemberStateFirstEntryId_3_listbox li");
                MemberStateFirstEntryIdddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })



                if (FingerPrint3.toLowerCase() == 'yes') {
                    $("#PreviousFingerPrintDate_3").val(PreviousFingerPrintDate_3)
                } else {
                    $("#PreviousFingerPrintStatus_2_3").click();
                }
                const countryLiiii = document.querySelectorAll("#CountryOfBirthId_3_listbox li");
                countryLiiii.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth3.toLowerCase()) {
                        li.click();
                    }
                });
                const nationalityyyy = document.querySelectorAll("#NationalityId_3_listbox li");
                nationalityyyy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth3.toLowerCase()) {
                        li.click();
                    }
                });
                const martialStatussss = document.querySelectorAll("#MaritalStatusId_3_listbox li");
                martialStatussss.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === MartialStatus3.toLowerCase()) {
                        li.click();
                    }
                });
                const hadcccc = document.querySelectorAll("#HomeAddressCountryId_3_listbox li");
                hadcccc.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == HomeCountry3.toLowerCase()) {
                        li.click()
                    }
                });
                $("#HomeAddressLine1_3").val(HomeAddressLine1_3);
                $("#HomeAddressCity_3").val(HomeAddressCity3);
                $("#HomeAddressPostalCode_3").val(HomeAddressPostalCode3);
                $("#HomeAddressContactNumber_3").val(HomeAddressContactNumber3);
                const genderboxxxx = document.querySelectorAll("#GenderId_3_listbox li");
                genderboxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Gender3.toLowerCase()) {
                        li.click();
                    }
                });
                $("#EmployerName_3").val(EmployerName_3);
                $("#EmployerPhone_3").val(EmployerPhone_3);
                $("#EmployerAddress_3").val(EmployerAddress_3);
                const Occupboxxxx = document.querySelectorAll("#CurrentOccupationId_3_listbox li");
                Occupboxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Occupation3.toLowerCase()) {
                        li.click();
                    }
                });
                const purposeboxxxx = document.querySelectorAll("#PurposeOfJourneyId_3_listbox li");
                purposeboxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == purposeOfJourney3.toLowerCase()) {
                        li.click();
                    }
                });
                const memberDestttt = document.querySelectorAll("#MemberStateDestinationId_3_listbox li");
                memberDestttt.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateDestination_3.toLowerCase()) {
                        li.click();
                    }
                });
                const MemberStateFirstEntryyyy = document.querySelectorAll("#MemberStateFirstEntryId_3_listbox li");
                MemberStateFirstEntryyyy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateFirstEntry_3.toLowerCase()) {
                        li.click();
                    }
                });
                const NoEntriesboxxxx = document.querySelectorAll("#NumberOfEntriesRequested_3_listbox li");
                NoEntriesboxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == NumberOfEntries3.toLowerCase()) {
                        li.click();
                    }
                });
                $("#IntendedStayDuration_3").val(IntendedStayDuration3);
                $("#IntendedDateOfArrival_3").val(IntendedDateOfArrival_3)
                $("#IntendedDateOfDeparture_3").val(IntendedDateOfDeparture_3);
                $("#InvitingAuthorityName_3").val(InvitingAuthorityName3);
                $("#InvitingCity_3").val(InvitingCity3);
                $("#InvitingZipCode_3").val(InvitingZipCode3);
                $("#InvitingAddress_3").val(InvitingAddress3);
                $("#InvitingEmail_3").val(InvitingEmail3);
                $("#InvitingContactNo_3").val(InvitingContactNo3);


                if (FingerPrint3.toLowerCase() == 'yes') {
                    $("#PreviousFingerPrintDate_3").val(PreviousFingerPrintDate_3)
                } else {
                    $("#PreviousFingerPrintStatus_2_3").click();
                }


            }




            //////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////

            if (document.getElementById('FirstName_4') !== null) {
                $("#FirstName_4").val(Firstname4);
                $("#LastName_4").val(Lastname4);
                $("#SurName_4").val(surname4);
                $("#DateOfBirth_4").val(DateOfBirth_4);
                $("#PlaceOfBirth_4").val(PlaceOfBirth_4);
                $("#PassportNo_4").val(Passport_Number4);
                $("#IssueDate_4").val(PassportIssueDate4);
                $("#ExpiryDate_4").val(PassportExpiryDate4);
                $("#IssuePlace_4").val(IssuePlace_4);
                $("#TravelDate_4").val(TravelDate_4);
                $("#HomeAddressState_4").val(HomeAddressState_4)
                $("#NationalIdentityNumber_4").val(NationalIdentityNumber_4)

                const PassTypeeeee = document.querySelectorAll("#PassportType_4_listbox li");
                PassTypeeeee.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === PassportType.toLowerCase()) {
                        li.click();
                    }
                })
                if (FingerPrint3.toLowerCase() == "yes") {
                    $("#PreviousFingerPrintDate_4").val(PreviousFingerPrintDate_4);
                } else {
                    $("#PreviousFingerPrintStatus_2_4").click();
                }
                const countryLiiiii = document.querySelectorAll(
                    "#CountryOfBirthId_4_listbox li"
                );
                countryLiiiii.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth4.toLowerCase()) {
                        li.click();
                    }
                });
                const InvitingCountryIddddd = document.querySelectorAll("#InvitingCountryId_4_listbox li")
                InvitingCountryIddddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == InvitingCountryId_4.toLowerCase()) {
                        li.click();
                    }
                })

                const relboxxxx = document.querySelectorAll("#Relationship_4_listbox li");
                relboxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Relationship_With_Applicant1____.toLowerCase()) {
                        li.click()
                    }
                })

                const MemberStateSecondDestinationIddddd = document.querySelectorAll("#MemberStateSecondDestinationId_4_listbox li");
                MemberStateSecondDestinationIddddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })
                const MemberStateFirstEntryIddddd = document.querySelectorAll("#MemberStateFirstEntryId_4_listbox li");
                MemberStateFirstEntryIddddd.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == 'spain') {
                        li.click()
                    }
                })
                const nationalityyyyy = document.querySelectorAll("#NationalityId_4_listbox li");
                nationalityyyyy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === CountryBirth4.toLowerCase()) {
                        li.click();
                    }
                });
                const martialStatusssss = document.querySelectorAll(
                    "#MaritalStatusId_4_listbox li"
                );
                martialStatusssss.forEach((li) => {
                    if (li.innerHTML.toLowerCase() === MartialStatus4.toLowerCase()) {
                        li.click();
                    }
                });
                const hadccccc = document.querySelectorAll("#HomeAddressCountryId_4_listbox li");
                hadccccc.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == HomeCountry4.toLowerCase()) {
                        li.click();
                    }
                });
                $("#HomeAddressLine1_4").val(HomeAddressLine1_4);
                $("#HomeAddressCity_4").val(HomeAddressCity4);
                $("#HomeAddressPostalCode_4").val(HomeAddressPostalCode4);
                $("#HomeAddressContactNumber_4").val(HomeAddressContactNumber4);
                const genderboxxxxx = document.querySelectorAll("#GenderId_4_listbox li");
                genderboxxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Gender4.toLowerCase()) {
                        li.click();
                    }
                });
                $("#EmployerName_4").val(EmployerName_4);
                $("#EmployerPhone_4").val(EmployerPhone_4);
                $("#EmployerAddress_4").val(EmployerAddress_4);
                const Occupboxxxxx = document.querySelectorAll(
                    "#CurrentOccupationId_4_listbox li"
                );
                Occupboxxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == Occupation4.toLowerCase()) {
                        li.click();
                    }
                });

                const purposeboxxxxx = document.querySelectorAll(
                    "#PurposeOfJourneyId_4_listbox li"
                );
                purposeboxxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == purposeOfJourney4.toLowerCase()) {
                        li.click();
                    }
                });

                const memberDesttttt = document.querySelectorAll(
                    "#MemberStateDestinationId_4_listbox li"
                );
                memberDesttttt.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateDestination_4.toLowerCase()) {
                        li.click();
                    }
                });

                const MemberStateFirstEntryyyyy = document.querySelectorAll(
                    "#MemberStateFirstEntryId_4_listbox li"
                );
                MemberStateFirstEntryyyyy.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == MemberStateFirstEntry_4.toLowerCase()) {
                        li.click();
                    }
                });

                const NoEntriesboxxxxx = document.querySelectorAll(
                    "#NumberOfEntriesRequested_4_listbox li"
                );
                NoEntriesboxxxxx.forEach((li) => {
                    if (li.innerHTML.toLowerCase() == NumberOfEntries4.toLowerCase()) {
                        li.click();
                    }
                });
                $("#IntendedStayDuration_4").val(IntendedStayDuration4);
                $("#IntendedDateOfArrival_4").val(IntendedDateOfArrival_4);
                $("#IntendedDateOfDeparture_4").val(IntendedDateOfDeparture_4);
                $("#InvitingAuthorityName_4").val(InvitingAuthorityName4);
                $("#InvitingCity_4").val(InvitingCity4);
                $("#InvitingZipCode_4").val(InvitingZipCode4);
                $("#InvitingAddress_4").val(InvitingAddress4);
                $("#InvitingEmail_4").val(InvitingEmail4);
                $("#InvitingContactNo_4").val(InvitingContactNo4);

                if (FingerPrint4.toLowerCase() == 'yes') {
                    $("#PreviousFingerPrintDate_4").val(PreviousFingerPrintDate_4)
                } else {
                    $("#PreviousFingerPrintStatus_2_4").click();
                }

            }
            for (let i = 0; i <= 6; i++) {
                let radio = document.getElementById(`BlsInvitingAuthority_1_${i}`);
                if (radio !== null) {
                    radio.click()
                } else {
                    console.log(i)
                }
            }
            // Set the flag to true to indicate that the code has been executed
            isCodeExecuted = true;
        }
    }
    runCode();
    // Set an interval to run the code every 1000 milliseconds (1 second)
    if (!isCodeExecuted) {
        setInterval(runCode, 2000);
    }
})();
