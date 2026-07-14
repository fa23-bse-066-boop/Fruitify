(function () {
  "use strict";

  /* Product Card Template */
  function createProductCard(product, showOrganic) {
    const badge = showOrganic
      ? '<span class="organic-badge">Organic</span>'
      : '<span class="product-category-badge">' + product.category + "</span>";

    return (
      '<div class="col-lg-3 col-md-4 col-sm-6 mb-4 product-item" data-category="' + product.category + '">' +
      '<div class="product-card">' +
      '<div class="product-image">' +
      '<img src="' + product.image + '" alt="' + product.name + '">' +
      badge +
      "</div>" +
      '<div class="product-info">' +
      "<h5>" + product.name + "</h5>" +
      "<p>" + product.description + "</p>" +
      '<div class="product-footer">' +
      '<span class="product-price">$' + product.price.toFixed(2) + " / " + product.unit + "</span>" +
      '<a href="#" class="add-to-cart" data-product="' + product.name + '">' +
      '<i class="fa fa-shopping-bag me-1"></i> Add to cart</a>' +
      "</div></div></div></div>"
    );
  }

  function renderProducts(containerId, products, showOrganic) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = products.map(function (p) {
      return createProductCard(p, showOrganic);
    }).join("");
  }

  function renderBestsellers() {
    const container = document.getElementById("bestsellerGrid");
    if (!container) return;

    const columns = [[], [], [], []];
    BESTSELLERS.forEach(function (item, index) {
      columns[index % 4].push(item);
    });

    container.innerHTML = columns.map(function (col) {
      return (
        '<div class="col-lg-3 col-md-6 mb-4">' +
        col.map(function (item) {
          return (
            '<div class="bestseller-item">' +
            '<img src="' + item.image + '" alt="' + item.name + '">' +
            '<div class="bestseller-info">' +
            "<h6>" + item.name + "</h6>" +
            '<span class="price">$' + item.price.toFixed(2) + "</span>" +
            '<a href="#" class="add-to-cart d-block mt-1" data-product="' + item.name + '">' +
            '<i class="fa fa-shopping-bag me-1"></i> Add to cart</a>' +
            "</div></div>"
          );
        }).join("") +
        "</div>"
      );
    }).join("");
  }

  function renderTestimonials() {
    const container = document.getElementById("testimonialsGrid");
    if (!container) return;

    container.innerHTML = TESTIMONIALS.map(function (t) {
      return (
        '<div class="col-lg-6 mb-4">' +
        '<div class="testimonial-card fade-in">' +
        '<p class="testimonial-text">"' + t.text + '"</p>' +
        '<div class="testimonial-author">' +
        '<img src="' + t.image + '" alt="' + t.name + '">' +
        "<div>" +
        "<h6>" + t.name + "</h6>" +
        "<span>" + t.role + "</span>" +
        '<div class="testimonial-stars">' +
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' +
        '<i class="fas fa-star"></i><i class="fas fa-star"></i>' +
        "</div></div></div>" +
        '<i class="fas fa-quote-right quote-icon"></i>' +
        "</div></div>"
      );
    }).join("");
  }

  function renderStats() {
    const container = document.getElementById("statsGrid");
    if (!container) return;

    container.innerHTML = STATS.map(function (stat) {
      return (
        '<div class="col-lg-3 col-md-6 mb-4">' +
        '<div class="stat-item fade-in">' +
        '<div class="stat-icon"><i class="fas ' + stat.icon + '"></i></div>' +
        '<div class="stat-number" data-target="' + stat.value + '" data-suffix="' + stat.suffix + '">0' + stat.suffix + "</div>" +
        '<div class="stat-label">' + stat.label + "</div>" +
        "</div></div>"
      );
    }).join("");
  }

  function renderHeroSlides() {
    const container = document.getElementById("heroCarouselInner");
    if (!container) return;

    container.innerHTML = HERO_SLIDES.map(function (slide, index) {
      return (
        '<div class="carousel-item' + (index === 0 ? " active" : "") + '">' +
        '<img src="' + slide.image + '" alt="' + slide.alt + '">' +
        '<span class="hero-badge">' + slide.badge + "</span>" +
        "</div>"
      );
    }).join("");
  }

  function renderVegetableCarousel() {
    const container = document.getElementById("vegetableCarouselInner");
    if (!container) return;

    const slides = [];
    for (let i = 0; i < VEGETABLES.length; i += 4) {
      const chunk = VEGETABLES.slice(i, i + 4);
      slides.push(
        '<div class="carousel-item' + (i === 0 ? " active" : "") + '">' +
        '<div class="row">' +
        chunk.map(function (product) {
          return (
            '<div class="col-lg-3 col-md-6 mb-3">' +
            '<div class="product-card">' +
            '<div class="product-image">' +
            '<img src="' + product.image + '" alt="' + product.name + '">' +
            '<span class="organic-badge">Organic</span>' +
            "</div>" +
            '<div class="product-info">' +
            "<h5>" + product.name + "</h5>" +
            "<p>" + product.description + "</p>" +
            '<div class="product-footer">' +
            '<span class="product-price">$' + product.price.toFixed(2) + " / " + product.unit + "</span>" +
            '<a href="#" class="add-to-cart" data-product="' + product.name + '">' +
            '<i class="fa fa-shopping-bag me-1"></i> Add to cart</a>' +
            "</div></div></div></div>"
          );
        }).join("") +
        "</div></div>"
      );
    }
    container.innerHTML = slides.join("");
  }

  function renderProductTabs() {
    const container = document.getElementById("productTabs");
    if (!container) return;

    container.innerHTML = CATEGORIES.map(function (cat, index) {
      return (
        '<button class="product-tab' + (index === 0 ? " active" : "") + '" data-filter="' + cat.id + '">' +
        cat.label +
        "</button>"
      );
    }).join("");
  }

  function renderTeam() {
    const container = document.getElementById("teamGrid");
    if (!container) return;

    container.innerHTML = TEAM.map(function (member) {
      return (
        '<div class="col-lg-3 col-md-6 mb-4">' +
        '<div class="team-card fade-in">' +
        '<img src="' + member.image + '" alt="' + member.name + '">' +
        "<h5>" + member.name + "</h5>" +
        "<span>" + member.role + "</span>" +
        "</div></div>"
      );
    }).join("");
  }

  /* Product Tab Filtering */
  function initProductTabs() {
    const tabs = document.querySelectorAll(".product-tab");
    const items = document.querySelectorAll(".product-item");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");

        const filter = tab.dataset.filter;
        items.forEach(function (item) {
          if (filter === "all" || item.dataset.category === filter) {
            item.style.display = "";
            item.classList.add("fade-in", "visible");
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  /* Counter Animation */
  function initCounters() {
    const counters = document.querySelectorAll(".stat-number");
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function animateCounter(element) {
    const target = parseInt(element.dataset.target, 10);
    const suffix = element.dataset.suffix || "";
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(function () {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, 16);
  }

  /* Back to Top */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Fade In on Scroll */
  function initFadeIn() {
    const elements = document.querySelectorAll(".fade-in");
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Add to Cart */
  function initAddToCart() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".add-to-cart");
      if (!btn) return;
      e.preventDefault();

      const badge = document.querySelector(".cart-badge");
      if (badge) {
        const count = parseInt(badge.textContent, 10) + 1;
        badge.textContent = count;
      }

      showToast("Added " + btn.dataset.product + " to cart!");
    });
  }

  /* Toast Notification */
  function showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(function () {
      toast.remove();
    }, 3000);
  }

  /* Form Handling */
  function initForms() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('[name="name"]');
        const email = contactForm.querySelector('[name="email"]');
        const message = contactForm.querySelector('[name="message"]');
        let valid = true;

        [name, email, message].forEach(function (field) {
          if (!field.value.trim()) {
            field.classList.add("is-invalid");
            valid = false;
          } else {
            field.classList.remove("is-invalid");
          }
        });

        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          email.classList.add("is-invalid");
          valid = false;
        }

        if (valid) {
          showToast("Message sent successfully!");
          contactForm.reset();
        }
      });
    }

    const heroSubscribe = document.getElementById("heroSubscribeForm");
    if (heroSubscribe) {
      heroSubscribe.addEventListener("submit", function (e) {
        e.preventDefault();
        showToast("Thank you for subscribing!");
        heroSubscribe.reset();
      });
    }

    document.addEventListener("submit", function (e) {
      if (e.target.id === "footerSubscribeForm") {
        e.preventDefault();
        showToast("Thank you for subscribing!");
        e.target.reset();
      }
    });
  }

  /* Vegetable Carousel Controls */
  function initVegetableCarouselControls() {
    const prevBtn = document.getElementById("vegPrev");
    const nextBtn = document.getElementById("vegNext");
    const carousel = document.getElementById("vegetableCarousel");

    if (!prevBtn || !nextBtn || !carousel) return;

    prevBtn.addEventListener("click", function () {
      bootstrap.Carousel.getOrCreateInstance(carousel).prev();
    });

    nextBtn.addEventListener("click", function () {
      bootstrap.Carousel.getOrCreateInstance(carousel).next();
    });
  }

  /* Shop Page Rendering */
  function renderShopProducts() {
    const container = document.getElementById("shopProductsGrid");
    if (!container) return;
    renderProducts("shopProductsGrid", PRODUCTS, false);
  }

  /* Initialize Page Content */
  function initPageContent() {
    renderHeroSlides();
    renderProductTabs();
    renderProducts("productsGrid", PRODUCTS.slice(0, 8), false);
    renderVegetableCarousel();
    renderBestsellers();
    renderStats();
    renderTestimonials();
    renderTeam();
    renderShopProducts();
  }

  /* Main Init */
  function init() {
    initPageContent();
    initProductTabs();
    initCounters();
    initBackToTop();
    initFadeIn();
    initAddToCart();
    initForms();
    initVegetableCarouselControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
