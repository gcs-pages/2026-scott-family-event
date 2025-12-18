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

                                page_1_title_1: "<span id='page-1-title-1-text'><strong><i>2025</i></strong></span>",
                               
                                page_1_title_2: "<span id='page-1-title-2-text'><strong><i>Merry Christmas</i></strong></span>",

                                page_1_image: "images/2025-christmas-photo-1.jpg",

                                page_1_caption: "<span id='page-1-figcaption-text'><strong><i>From All of Us . . . </i></strong></span>",

                                page_2_title_1: "<span id='page-2-title-1-text'><strong><i>2026</i></strong></span>",
                                
                                page_2_title_2: "<span id='page-2-title-2-text'><strong><i>Happy New Year</i></strong></span>",

                                page_2_image: "images/2025-new-year-photo-1.jpg",

                                page_2_caption: "<span id='page-2-figcaption-text'><i><strong>Celebrate Safely & Responsibly . . .</i></strong></span>",

                                page_3_title_1: "<br><br><p><span class='christmas-red-color'><strong><i>Christmas?</i></strong></span></p>",

                                page_3_title_2: "<br><p><span class='christmas-green-color'><strong><i>God's Gifts?</i></strong></span></p>",
                                
                                page_3_title_3: "<br><p><span class='christmas-red-color'><strong><i>The New Year?</i></strong></span></p>",                           
                                page_3_content_1: "<p>It's the most wonderful time of the year! &nbsp;With children jingle belling and everyone telling you, be of good cheer<strong>!</strong> &nbsp;My wife Christine and me wish everyone Merry Christmas and that everyone be of good cheer. &nbsp;We pray our families have <strong><i>Peace</i></strong> and <strong><i>goodwill</i></strong> &nbsp;towards one another.</span></p><p>Take a moment to remember past Chrismases and our dearly departed loved ones . . .</p>",

                                page_3_content_2: "<p><strong><i>Galatians 5: [22-23]</i></strong> &nbsp;But the fruits of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,  meekness, temperance: against such there is no law.</p> <p>Our families should accept God's gifts and practice them daily . . .</p>",

                                page_3_content_3: "<p><strong><i>1 Thessalonians 5: [18]</i></strong> &nbsp;In every thing give thanks: for this is the will of God in Christ Jesus concerning you. &nbsp;Take nothing for granted! &nbsp;It's a blessing to be part of God's plans.  &nbsp;Praise and thank God, and claim God's prosperity for your family. </p><p>Celebrate safely and responsibly. . . . </p><br><br><br><br><br><br><br><br><br><p><strong><i>Sincerely</i></strong>,<br><br><strong><i>Gregory Sr and Christine</i></strong></p><div id='parent-photo-container'><img id='dad-photo' src='images/g02s06gregory.jpg'alt='Dad Photo'><img id='mom-photo' src='images/g02s07christine.jpg'alt='Mom Photo'></div><div class='logo-container'><ol class='logo-list'><li class='logo-li-item'><a href='' ><img class='logo-image'></a></li><li class='logo-li-item logo-tagline-bot'></li></ol></div>",

                                page_4_qr_code: "<p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><p class=dummy-content>lorem ipsum</p><img id='qr-code' src='images/qr-code.png' alt='QR Code Image'><div class='logo-container'><ol class='logo-list'><li class='logo-li-item'><a href='' ><img class='logo-image'></a></li><li class='logo-li-item logo-tagline-bot'></li></ol></div>",

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
    $("#page-2-figcaption").html(tributeData[0].tributee[i].parameters.page_2_caption);

    $("#page-3-title-1").html(tributeData[0].tributee[i].parameters.page_3_title_1);
    
    $("#page-3-title-2").html(tributeData[0].tributee[i].parameters.page_3_title_2);
   
    $("#page-3-title-3").html(tributeData[0].tributee[i].parameters.page_3_title_3);

    $("#page-3-content-1").html(tributeData[0].tributee[i].parameters.page_3_content_1);

    $("#page-3-content-2").html(tributeData[0].tributee[i].parameters.page_3_content_2);

    $("#page-3-content-3").html(tributeData[0].tributee[i].parameters.page_3_content_3);
    
    $("#page-4-content").html(tributeData[0].tributee[i].parameters.page_4_qr_code);

    $("title").text("GCS - " + $("#page-1-title-2").text() + " " + $("#title-2").text());
    $("#main-content").html(tributeData[0].tributee[i].parameters.author_salutation);
}; // end build_tribute . . .

$(document).ready(() => {
    var today = new Date();
    $("#copyright-1").html("&copy; Copyright " + today.getFullYear());

    build_tribute ();
    
    $(".logo-image").attr("src","icon/favicon-red.png");
    $(".logo-tagline-top").text("Greeting Card Creations . . .");
    $(".logo-tagline-bot").text("Greeting Card Creations . . .");

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
