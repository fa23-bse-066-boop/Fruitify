(function () {
  "use strict";

  const NAV_LINKS = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "shop.html", label: "Shop", page: "shop" },
    { href: "about.html", label: "About Us", page: "about" },
    { href: "pages.html", label: "Pages", page: "pages" },
    { href: "contact.html", label: "Contact", page: "contact" }
  ];

  function getActivePage() {
    return document.body.dataset.page || "home";
  }

  function renderNavLinks(activePage) {
    return NAV_LINKS.map(function (link) {
      const activeClass = link.page === activePage ? " active" : "";
      return '<li class="nav-item"><a class="nav-link' + activeClass + '" href="' + link.href + '">' + link.label + "</a></li>";
    }).join("");
  }

  function renderHeader() {
    const activePage = getActivePage();
    return (
      '<div class="top-bar">' +
      '<div class="container">' +
      '<div class="row align-items-center">' +
      '<div class="col-lg-4 col-md-4 col-12 text-lg-start text-center mb-2 mb-md-0">' +
      '<span><i class="fas fa-leaf me-2"></i>100% Organic Foods</span>' +
      "</div>" +
      '<div class="col-lg-4 col-md-4 col-12 text-center mb-2 mb-md-0">' +
      "<span>Free shipping on all orders over $99</span>" +
      "</div>" +
      '<div class="col-lg-4 col-md-4 col-12 text-lg-end text-center">' +
      '<span><i class="fas fa-phone-alt me-2"></i>Call Us: +01 234 567 890</span>' +
      "</div>" +
      "</div></div></div>" +
      '<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">' +
      '<div class="container">' +
      '<a class="navbar-brand" href="index.html">Fruitables</a>' +
      '<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">' +
      '<span class="navbar-toggler-icon"></span></button>' +
      '<div class="collapse navbar-collapse" id="mainNavbar">' +
      '<ul class="navbar-nav mx-auto mb-2 mb-lg-0">' +
      renderNavLinks(activePage) +
      "</ul>" +
      '<div class="header-icons d-flex align-items-center">' +
      '<a href="#" class="header-icon" aria-label="Search"><i class="fas fa-search"></i></a>' +
      '<a href="#" class="header-icon" aria-label="Account"><i class="fas fa-user"></i></a>' +
      '<a href="shop.html" class="header-icon cart-icon" aria-label="Cart">' +
      '<i class="fas fa-shopping-bag"></i>' +
      '<span class="cart-badge">0</span></a>' +
      "</div></div></div></nav>"
    );
  }

  function renderFooter() {
    return (
      '<footer class="site-footer">' +
      '<div class="footer-top">' +
      '<div class="container">' +
      '<div class="row align-items-center g-4">' +
      '<div class="col-lg-3 col-md-12">' +
      '<a href="index.html" class="footer-logo">Fruitables</a>' +
      "</div>" +
      '<div class="col-lg-6 col-md-8">' +
      '<form class="footer-subscribe" id="footerSubscribeForm">' +
      '<input type="email" class="form-control" placeholder="Your Email" required aria-label="Email for subscription">' +
      '<button type="submit" class="btn btn-primary">Subscribe</button>' +
      "</form></div>" +
      '<div class="col-lg-3 col-md-4">' +
      '<div class="social-icons">' +
      '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
      '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
      '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
      '<a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
      "</div></div></div></div>" +
      '<div class="footer-main">' +
      '<div class="container">' +
      '<div class="row g-4">' +
      '<div class="col-lg-3 col-md-6">' +
      "<h5>Why People Like us!</h5>" +
      "<p>Why People Like us! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in volutpat lorem, eu ornare dui.</p>" +
      '<a href="about.html" class="read-more-link">Read More</a>' +
      '<div class="app-badges mt-4">' +
      '<a href="#" class="app-badge"><i class="fab fa-apple me-2"></i>App Store</a>' +
      '<a href="#" class="app-badge"><i class="fab fa-google-play me-2"></i>Play Store</a>' +
      "</div></div>" +
      '<div class="col-lg-3 col-md-6">' +
      "<h5>Shop Info</h5>" +
      '<ul class="footer-links">' +
      '<li><a href="about.html">About Us</a></li>' +
      '<li><a href="contact.html">Contact Us</a></li>' +
      '<li><a href="#">Privacy Policy</a></li>' +
      '<li><a href="#">Terms & Condition</a></li>' +
      '<li><a href="#">Return Policy</a></li>' +
      '<li><a href="#">FAQs & Help</a></li>' +
      "</ul></div>" +
      '<div class="col-lg-3 col-md-6">' +
      "<h5>Account</h5>" +
      '<ul class="footer-links">' +
      '<li><a href="#">My Account</a></li>' +
      '<li><a href="shop.html">Shop Details</a></li>' +
      '<li><a href="#">Shopping Cart</a></li>' +
      '<li><a href="#">Wishlist</a></li>' +
      '<li><a href="#">Order History</a></li>' +
      '<li><a href="#">International Orders</a></li>' +
      "</ul></div>" +
      '<div class="col-lg-3 col-md-6">' +
      "<h5>Contact</h5>" +
      '<p class="contact-item"><i class="fas fa-map-marker-alt me-2"></i>Address: 1429 Netus Rd, NY 48247</p>' +
      '<p class="contact-item"><i class="fas fa-envelope me-2"></i>Email: info@fruitables.com</p>' +
      '<p class="contact-item"><i class="fas fa-phone me-2"></i>Phone: +012 345 67890</p>' +
      '<p class="contact-item mb-2">Payment Accepted</p>' +
      '<div class="payment-icons">' +
      '<i class="fab fa-cc-visa"></i>' +
      '<i class="fab fa-cc-mastercard"></i>' +
      '<i class="fab fa-cc-paypal"></i>' +
      '<i class="fab fa-cc-amex"></i>' +
      "</div></div></div></div></div>" +
      '<div class="footer-bottom">' +
      '<div class="container">' +
      '<div class="row align-items-center">' +
      '<div class="col-md-6 text-center text-md-start">' +
      "<span>Designed by HTML Codex</span>" +
      "</div>" +
      '<div class="col-md-6 text-center text-md-end">' +
      "<span>&copy; Fruitables, All right reserved.</span>" +
      "</div></div></div></div></footer>" +
      '<button id="backToTop" class="back-to-top" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>'
    );
  }

  function renderPageHeader(title, breadcrumb) {
    return (
      '<section class="page-header">' +
      '<div class="container">' +
      '<h1 class="page-title">' + title + "</h1>" +
      '<nav aria-label="breadcrumb">' +
      '<ol class="breadcrumb justify-content-center">' +
      breadcrumb +
      "</ol></nav></div></section>"
    );
  }

  function initComponents() {
    const headerEl = document.getElementById("site-header");
    const footerEl = document.getElementById("site-footer");

    if (headerEl) {
      headerEl.innerHTML = renderHeader();
    }
    if (footerEl) {
      footerEl.innerHTML = renderFooter();
    }
  }

  window.FruitablesComponents = {
    init: initComponents,
    renderPageHeader: renderPageHeader
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComponents);
  } else {
    initComponents();
  }
})();
