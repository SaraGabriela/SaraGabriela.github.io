var nkn = {
    modals: []
};


// nkn.hide hides HTML content by adding class name "nkn-hide" or replacing class name "nkn-show" with "nkn-hide".
// This function accepts either a string (the HTML id) or the actual DOM node you want to hide.
nkn.hide = function(someHTML) {

    var myHTML = null;

    if (typeof(someHTML) == "string") {
        myHTML = document.getElementById(someHTML);
    }
    else {
        myHTML = someHTML;
    }

    if (myHTML) {
        if (myHTML.classList.contains('nkn-show')) {
            myHTML.classList.remove("nkn-show");
        } 
        myHTML.classList.add("nkn-hide");
    }
}


// nkn.show displays hidden HTML content by replacing class name "nkn-hide" with "nkn-show".
// This function accepts either a string (the HTML id) or the actual DOM node you want to show.
nkn.show = function(someHTML) {

    var myHTML = null;

    if (typeof(someHTML) == "string") {
        myHTML = document.getElementById(someHTML);
    }
    else {
        myHTML = someHTML;
    }

    if (myHTML) {
        if (myHTML.classList.contains('nkn-hide')) {
            myHTML.classList.remove("nkn-hide");
        } 
        myHTML.classList.add("nkn-show");
    }
}


// nkn.showParentElement finds someElement's nearest parent with class name "nkn-hide" and calls nkn.show with this element.
// If a parent element with classname "nkn-show" instead of "nkn-hide" is encountered, we do nothing (element already shown).
nkn.showParentElement = function(someElement){

    function findHiddenElement(el) {
        while ((el = el.parentElement) && !(el.classList.contains("nkn-hide") || el.classList.contains("nkn-show"))) ;
        return el;
    }

    var myHiddenElement = findHiddenElement(someElement);
    if (myHiddenElement){
        nkn.show(myHiddenElement);
    }
};


// nkn.hideParentElement finds someElement's nearest parent with classname "nkn-show" and calls nkn.hide with this element.
// If a parent element with classname "nkn-hide" instead of "nkn-show" is encountered, we do nothing (element already hidden).
nkn.hideParentElement = function(someElement){

    function findShownElement(el) {
        while ((el = el.parentElement) && !(el.classList.contains("nkn-hide") || el.classList.contains("nkn-show"))) ;
        return el;
    }

    var myShownElement = findShownElement(someElement);
    if (myShownElement){
        nkn.hide(myShownElement);
    }
};


//
nkn.toggleShowMore = function(toggle) {

    var targetId = toggle.getAttribute("data-nkn-target");
    var targetContent = document.getElementById(targetId);

    if (targetContent.classList.contains('nkn-active')) {
        targetContent.classList.remove("nkn-active");
    } else {
        targetContent.classList.add("nkn-active");
    }
}


// nkn.findNavbar returns el's parent element with CSS class .nkn-navbar.
nkn.findNavbar = function(el) {
    while ((el = el.parentElement) && !el.classList.contains("nkn-navbar"));
    return el;
}


// nkn.hideMenu hides a responsive menu by removing CSS class nkn-open.
nkn.hideMenu = function(e) {
    var myMenu = nkn.findNavbar(e.target);
    if (myMenu) {
        myMenu.classList.remove("nkn-open");
    }
}


// nkn.toggleMenu opens a responsive menu by adding CSS class nkn-open to the UL element with class nkn-navbar.
// toggle is the element which was clicked to trigger this function, ie. any element with data-nkn-role = menu-toggle.
nkn.toggleMenu = function(toggle) {

    var myMenu = nkn.findNavbar(toggle);
    //console.log(myMenu);
    if (myMenu) {

        // Display menu by adding CSS class nkn-open to UL element.
        if (myMenu.classList.contains('nkn-open')) {
            myMenu.classList.remove("nkn-open");
        } else {
            myMenu.classList.add("nkn-open");
        }

        // Add click handlers to <A> elements in this menu to close the menu when any <A> element in the menu is clicked.
        myLinks = myMenu.querySelectorAll("A");
        for (var indx = 0; indx < myLinks.length; indx++) {
            if (myLinks[indx].getAttribute("data-nkn-role") != "menu-toggle") {
                myLinks[indx].addEventListener("click", nkn.hideMenu);
            }
        }
    } console.log(myMenu);
}


// nkn.findNavbar returns el's parent element with CSS class .nkn-navbar.
nkn.findHorizontalMenu = function(el) {
    var parentContainer = el.parentElement;
    return parentContainer.querySelectorAll("[data-mj8-role='resource-nav']")[0];
};


nkn.scrollMenu = function(element){
    var left = element.parentElement.querySelectorAll("[data-nkn-role='left-scroll']")[0];
    var right = element.parentElement.querySelectorAll("[data-nkn-role='right-scroll']")[0];

    if(element.scrollLeft == element.scrollWidth - element.clientWidth){
        nkn.hide(right);
    }else{
        nkn.show(right);
    }
    if(element.scrollLeft != 0){
        nkn.show(left);
    }else {
        nkn.hide(left);
    }
}


// nkn.leftScroll goes to left side in menu
nkn.leftScroll = function(btn){
    horizontalMenu = nkn.findHorizontalMenu(btn);
    horizontalMenu.scrollLeft -= 20;
};


// nkn.rightScroll goes to right side in menu
nkn.rightScroll = function(btn){
    horizontalMenu = nkn.findHorizontalMenu(btn);
    horizontalMenu.scrollLeft +=  20;
};


// nkn.toggleAccordionSection opens or closes a section in an accordion.
nkn.toggleAccordionSection = function(toggle) {

    function findAccordion(el) {
        while ((el = el.parentElement) && !el.classList.contains("nkn-accordion"));
        return el;
    }

    function findAccordionSection(el) {
        while ((el = el.parentElement) && !el.classList.contains("nkn-accordion-section"));
        return el;
    }

    var myAccordion = findAccordion(toggle);
    var mySection = findAccordionSection(toggle);
    if (mySection) {
        if (mySection.classList.contains('nkn-open')) {
            mySection.classList.remove("nkn-open");
        } else {
            mySection.classList.add("nkn-open");
        }
    }
}


// nkn.toggleVerticalTR opens or closes a table row in a reduced/responsive table.
nkn.toggleVerticalTR = function(myTarget) {

    // findTR finds the <tr> element which contains the click target.
    // The returned element is the table row we need to open or close.
    function findTR(el) {
        while (el.tagName != 'TR') {
            if (el.parentElement) {
                el = el.parentElement;
            } else {
                return null;
            }
        }
        return el;
    }

    // Find HTML <tr> element and add or remove class name "nkn-open"
    var myTR = findTR(myTarget);
    if (myTR) {
        if (myTR.classList.contains('nkn-open')) {
            myTR.classList.remove("nkn-open");
        } else {
            myTR.classList.add("nkn-open");
        }
    }
}


// nkn.clickHandler is a global click handler which checks if event.target or
// any of event.target's parent elements has a defined data-nkn-role attribute.
// If an nkn-role is defined we call the corresponding handler function.
// IMPORTANT: if a client application attaches a custom click handler to an
// element with nkn-role or a parent element thereof, custom JavaScript may be required.
nkn.clickHandler = function(event) {

    // findNKNTarget returns el if el has a defined data-nkn-role attribute
    // or the nearest parent element which has a defined data-nkn-role attribute.
    function findNKNTarget(el) {
        while (!el.dataset.nknRole) {
            if (el.parentElement) {
                el = el.parentElement;
            } else {
                return null;
            }
        }
        return el;
    }

    // Find nkn-role of click target, if any.
    var nknRole = null;
    var nknTarget = findNKNTarget(event.target);
    if (nknTarget) {
        nknRole = nknTarget.getAttribute("data-nkn-role");
    }

    // If click target has a defined nkn-role, call corresponding handler function.
    switch (nknRole) {
        case "accordion-toggle":
            nkn.toggleAccordionSection(nknTarget);
            break;
        case "show-more":
            nkn.toggleShowMore(nknTarget);
            break;
        case "menu-toggle":
            nkn.toggleMenu(nknTarget);
            break;
        case "left-scroll":
            nkn.leftScroll(nknTarget);
            break;
        case "right-scroll":
            nkn.rightScroll(nknTarget);
            break;
        case "vertical-tr-toggle":
            nkn.toggleVerticalTR(nknTarget);
            break;
    }

    return false;
}


// nkn.newModal creates a single modal.
// By convention, the parent HTML element of a modal has CSS class .nkn-modal.
// Any HTML element inside a modal with data-nkn-role "close-modal" closes the modal.
nkn.newModal = function(myHTML) {

    var myModal = { DOMElement: myHTML,
                    id: myHTML.id,
                    closeModalCallback: null,
                    openModalCallback: null
                  };

    // Close modal function.
    myModal.close = function(callback) {
        this.DOMElement.classList.remove("nkn-modal-open");
        if (this.closeModalCallback) {
            this.closeModalCallback();
        }
    }

    myModal.resize = function() {
        /*footer*/
        var footerEl = this.DOMElement.querySelectorAll(".nkn-modal footer")[0];
        var modalBody = this.DOMElement.querySelectorAll(".nkn-modal-body")[0];
        modalBody.style.bottom = footerEl.offsetHeight +"px";

        /*header*/
        var headerEl = this.DOMElement.querySelectorAll(".nkn-modal header")[0];
        var modalBody = this.DOMElement.querySelectorAll(".nkn-modal-body")[0];
        modalBody.style.top = headerEl.offsetHeight +"px";
    }

    // Open modal function.
    myModal.open = function() {
        this.DOMElement.classList.add("nkn-modal-open");
        this.resize();
        if (this.openModalCallback) {
            this.openModalCallback();
        }
    }

    // Assign onclick events to all HTML elements inside the modal HTML that close this modal.
    var elementsWithRoles = myHTML.querySelectorAll('[data-nkn-role]') || [];
    for (var indx = 0; indx < elementsWithRoles.length; indx++) {
        if (elementsWithRoles[indx].getAttribute("data-nkn-role") == "close-modal") {
            elementsWithRoles[indx].addEventListener("click", function() { myModal.close(); });
        }
    }

    // Add modal to nkn.modals array if the parent HTML element has an HTML id.
    if (myModal.id) {
        this.modals[myModal.id] = myModal;
    }
};


// nkn.initialize() initializes unkuna components in our page as needed.
nkn.initialize = function() {

    // Add click event listener to HTML body.
    // If the event target has a data-nkn-role attribute, we'll do something with the event.
    document.body.addEventListener("click", this.clickHandler);

    // Find all HTML elements with CSS class .nkn-modal and initialize functionality.
    // Modals are initiated on page load and added to nkn.modals array.
    var myModals = document.querySelectorAll('.nkn-modal');
    for (var indx = 0; indx < myModals.length; indx++) {
        this.newModal(myModals[indx]);
    }


    //scrollMenu

    // Mutation handler function.
    function scrollMenuMutationHandler(someHTML) {
        return function(mutations) {
                mutations.forEach(function(mutation) { nkn.scrollMenu(someHTML); });
            };
    }


    var myScrollMenus = document.querySelectorAll('.nkn-scroll-menu');

    for (var indy = 0; indy < myScrollMenus.length; indy++) {
        nkn.scrollMenu(myScrollMenus[indy]);
        myScrollMenus[indy].onscroll = function(e){
            nkn.scrollMenu(this);
        };
        var observer = new MutationObserver(scrollMenuMutationHandler(myScrollMenus[indy]));  
        // Configuration of the observer:
        var config = { childList: true };
 
        // Pass in the target node, as well as the observer options.
        observer.observe(myScrollMenus[indy], config);  
    }

}


// Call nkn.initialize() to initialize unkuna components in the page.
nkn.initialize();

