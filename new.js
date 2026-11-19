
// MANIKANTA TRAVELS - JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------
    // 1. Navigation links
    // --------------------------------

    const menuItems = document.querySelectorAll(".menu_area li");

    const sections = {
        "Home": ".main_content",
        "Services": ".service",
        "About us": ".about_us",
        "Gallery": ".gallery"
    };

    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const sectionName = item.textContent.trim();
            const target = document.querySelector(sections[sectionName]);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // --------------------------------
    // 2. Welcome heading animation
    // --------------------------------

    const heading = document.querySelector(".main_heading");

    if (heading) {

        heading.style.opacity = "0";
        heading.style.transform = "translate(-50%, -30%)";

        setTimeout(function () {

            heading.style.transition = "all 1.2s ease";

            heading.style.opacity = "1";
            heading.style.transform = "translate(-50%, -50%)";

        }, 300);
    }


    // --------------------------------
    // 3. Gallery image viewer
    // --------------------------------

    const galleryImages = document.querySelectorAll(
        ".ima1, .ima2, .ima3"
    );

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            // Create background
            const viewer = document.createElement("div");

            viewer.style.position = "fixed";
            viewer.style.top = "0";
            viewer.style.left = "0";
            viewer.style.width = "100%";
            viewer.style.height = "100%";
            viewer.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            viewer.style.display = "flex";
            viewer.style.justifyContent = "center";
            viewer.style.alignItems = "center";
            viewer.style.zIndex = "9999";
            viewer.style.cursor = "pointer";

            // Create large image
            const largeImage = document.createElement("img");

            largeImage.src = image.src;

            largeImage.style.maxWidth = "90%";
            largeImage.style.maxHeight = "85%";
            largeImage.style.objectFit = "contain";
            largeImage.style.borderRadius = "10px";

            // Close button
            const closeButton = document.createElement("span");

            closeButton.innerHTML = "&times;";

            closeButton.style.position = "absolute";
            closeButton.style.top = "20px";
            closeButton.style.right = "35px";
            closeButton.style.color = "white";
            closeButton.style.fontSize = "50px";
            closeButton.style.cursor = "pointer";

            viewer.appendChild(largeImage);
            viewer.appendChild(closeButton);

            document.body.appendChild(viewer);

            // Close viewer
            viewer.addEventListener("click", function () {
                viewer.remove();
            });

        });

    });


    // --------------------------------
    // 4. Phone number click
    // --------------------------------

    const contact = document.querySelector(".contact");

    if (contact) {

        contact.style.cursor = "pointer";

        contact.addEventListener("click", function () {

            alert(
                "Thank you for contacting Manikanta Travels!\n\n" +
                "Phone: 9832411132\n" +
                "Email: Travel@gmail.com"
            );

        });

    }


    // --------------------------------
    // 5. Scroll-to-top button
    // --------------------------------

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.style.position = "fixed";
    topButton.style.bottom = "25px";
    topButton.style.right = "25px";
    topButton.style.width = "45px";
    topButton.style.height = "45px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.backgroundColor = "red";
    topButton.style.color = "white";
    topButton.style.fontSize = "25px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.zIndex = "1000";

    document.body.appendChild(topButton);


    // Show button when scrolling
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });


    // Scroll to top
    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // --------------------------------
    // 6. Service card animation
    // --------------------------------

    const cards = document.querySelectorAll(
        ".card1, .card2, .card3"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transition = "transform 0.3s ease";
            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });


    // --------------------------------
    // 7. Gallery keyboard support
    // --------------------------------

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const viewer = document.querySelector(
                'div[style*="z-index: 9999"]'
            );

            if (viewer) {
                viewer.remove();
            }

        }

    });

});