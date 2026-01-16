"use strict";

let build_tribute = () => {
let tributeData =
/*--------------------------*/
/*- Honorary Tribute Data  -*/
/*--------------------------*/
    [
        {
            tributee:
                [
                    {
                        id: "000",
                        fname: "Gregory",
                        mname: "",
                        lname: "Scott",
                        suffix: "Jr",
                        bdate: "10/02/1959",
                        bcountry: "United States",
                        bcity: "Chicago",
                        bstate: "Illinois",
                        lock: "n",
                        parameters:
                            {   color: 0,

                                page_1_title_1: "<span id='page-1-title-1-text'><strong><i>2026</i></strong></span>",
                               
                                page_1_title_2: "<span id='page-1-title-2-text'><strong><i>Scott Family Fishing Trip</i></strong></span>",

                                page_1_image: "",

                                page_1_caption: "<p><strong><span class='christmas-black-color'><small><i>Possible Dates:</i></small></span></strong></p><ol><li></li><li><span class='page-1-figcaption-text'><strong>Friday, May 22 &nbsp;<small><i>thru</i></small>&nbsp; Tuesday, May 26</i></strong></span></li><li><span class='page-1-figcaption-text'><strong>Friday, May 29 &nbsp;<small><i>thru</i></small>&nbsp; Tuesday, June 02</i></strong></span></li></ol>",

                                page_2_title_1: "<span id='page-2-title-1-text'><strong><i>City?</i></strong></span>",
                                
                                page_2_title_2: "<span id='page-2-title-2-text'><strong><i>Winona, Minnesota</i></strong></span>",

                                page_2_image: "images/inside-photo-1.jpg",

                                page_2_caption_1: "<span id='page-2-figcaption-1-text'><strong><i>Spot?</i></strong></span>",
                                page_2_caption_2: "<span id='page-2-figcaption-2-text'><strong><i>Chinese Spillway</i></strong></span>",
                                page_3_title_1: "<p><span class='christmas-red-color'><strong><i>Hotels</i></strong></span></p>",

                                page_3_title_2: "<p><span class='christmas-red-color'><strong><i>Activities</i></strong></span></p>",
                                
                                page_3_title_3: "<p><span class='christmas-red-color'><strong><i>Excursions</i></strong></span></p>",                           
                                page_3_content_1: "<ul><li><strong>Winona Super 8</strong></li><li><strong>Winona Holiday Inn Express</strong></li><li><strong>Winona Days Inn</strong></li></ul><br>",

                                page_3_content_2: "<ul><li><strong>Fishing</strong> (Winona Chinese Spillway)</li><li><strong>Prizes</strong> (Most Fish <small>and</small> Biggest Fish) <span class='christmas-black-color'><strong><small>*</small></strong></span></li><li><strong>Shopping</strong> (Walmart, Target, Fleet Farm)</li><li><strong>Fast Food</strong> (KFC, Arby's, TACO BELL, Burger King)</li><li><strong>Fishing</strong> (Red Wing Colvill Park)</li><li><strong>Prizes</strong> (Most Fish <small>and</small> Biggest Fish) <span class='christmas-black-color'><strong><small>*</small></strong></span></li><li><strong>Sports</strong> (Basketball, Softball, Volley Ball, Horse Shoes)</li><li><strong>Prizes</strong> (Free Throws <small>and</small> Home Runs) <span class='christmas-black-color'><strong><small>*</small></strong></span></li></ul><br>",

                                page_3_content_3: "<ul><li><strong>Onalaska Spillway</li><li><strong>Winona Lake Park</strong></li><li><strong>Winona Galvin Heights (scenic overlook)</strong></li><li><strong>Red Wing Colvill Park</strong></li></ul><br><br><span class='christmas-black-color'><strong><small>*</small></strong></span> &nbsp;<strong><small><span class='christmas-black-color'><i>$5.00 Entry Fee</i></span></small></strong><br><br>",

                                page_4_qr_code: "<p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p> <span><strong><i>Gregory Sr and Christine</i></strong></span><div id='parent-photo-container'><img id='dad-photo' src='images/g02s06gregory.jpg'alt='Dad Photo'><img id='mom-photo' src='images/g02s07christine.jpg'alt='Mom Photo'><img id='qr-code' src='images/qr-scott-family-event.png' alt='QR Code'></img></div><div class='logo-container'><ol class='logo-list'><li class='logo-li-item'><a href='' ><img class='logo-image'></a></li><li class='logo-li-item logo-tagline-bot'></li></ol><br></div>",

                                author_salutation: "<div class='author-signature'><p>Created By:</p><img class='author-photo' src='images/g02s06gregory.jpg' alt='Author Photo'><p><i><span class='author'>Gregory Scott Sr.</i></span></p></div>"
                            }

                    }
                ]
        }
    ];

    let colorSchemes = [
        "css/colorscheme/black-black-gold.css",
        "css/colorscheme/black-red-gold.css",
        "css/colorscheme/black-red-red.css",
        "css/colorscheme/black-red-blue.css",
        "css/colorscheme/green-red-gold.css"
    ];
    
    let i = 0;

    let colorIndex = tributeData[0].tributee[i].parameters.color; // set tributee color . . .
    $("#color-switcher").attr("href", colorSchemes[colorIndex]);

    $("#page-1-title-1").html(tributeData[0].tributee[i].parameters.page_1_title_1);
    $("#page-1-title-2").html(tributeData[0].tributee[i].parameters.page_1_title_2);

    $("#page-1-image").attr("src",tributeData[0].tributee[i].parameters.page_1_image);
    $("#page-1-figcaption").html(tributeData[0].tributee[i].parameters.page_1_caption);

    $("#page-2-title-1").html(tributeData[0].tributee[i].parameters.page_2_title_1);
    $("#page-2-title-2").html(tributeData[0].tributee[i].parameters.page_2_title_2);    

    $("#page-2-image").attr("src",tributeData[0].tributee[i].parameters.page_2_image);
    $("#page-2-figcaption-1").html(tributeData[0].tributee[i].parameters.page_2_caption_1);

    $("#page-2-figcaption-2").html(tributeData[0].tributee[i].parameters.page_2_caption_2);

    $("#page-3-title-1").html(tributeData[0].tributee[i].parameters.page_3_title_1);
    
    $("#page-3-title-2").html(tributeData[0].tributee[i].parameters.page_3_title_2);
   
    $("#page-3-title-3").html(tributeData[0].tributee[i].parameters.page_3_title_3);

    $("#page-3-content-1").html(tributeData[0].tributee[i].parameters.page_3_content_1);

    $("#page-3-content-2").html(tributeData[0].tributee[i].parameters.page_3_content_2);

    $("#page-3-content-3").html(tributeData[0].tributee[i].parameters.page_3_content_3);
    
    $("#page-4-content").html(tributeData[0].tributee[i].parameters.page_4_qr_code);

    $("title").text("GCS " + $("#page-1-title-2").text() + " . . .");

    $("#main-content").html(tributeData[0].tributee[i].parameters.author_salutation);
}; // end build_tribute . . .

$(document).ready(() => {
    var today = new Date();
    $("#copyright-1").html("&copy; Copyright " + today.getFullYear());
    build_tribute ();

/*--------------*/
/*- Build Logo -*/
/*--------------*/    
    $(".logo-image").attr("src","icon/favicon-red.png");
    $(".logo-tagline-top").text($("#page-1-title-2").text() + " . . .");
    $(".logo-tagline-bot").text($("#page-1-title-2").text() + " . . . ");
/*--------------*/
/*- Build Logo -*/
/*--------------*/

    $("#page").show(2000);
    $("#copyright-1").show(2500);
    $("#copyright-2").show(3000);
    $("#email-contact-us").show(3500);
    $("#company-name").show(4000);
    
    $("footer").hover(function() {
        $("#copyright-1").effect("shake");
        }, function() {
        $("#email-contact-us").effect("shake");
    });
//--------------------//
//- Set Browser Keys -//
//--------------------//
$(document).on("contextmenu", ()=> {return false;});

document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'cfnjvxspwuatyz'.indexOf(event.key) !== -1) {
      event.preventDefault()
    }

    if (event.ctrlKey && event.shiftKey && 'CIJKPNV'.indexOf(event.key) !== -1) {
        event.preventDefault()
    }

    if (event.altlKey && 'EF'.indexOf(event.key) !== -1) {
        event.preventDefault()
    }

    if (event.shiftKey && event.code == "F10") {
        event.preventDefault()
    }

    if (event.code == "F12") {
        event.preventDefault()
    }
})


});
