// components/navbar.js
const navbarHtml = `
  <header class="fixed inset-x-0 top-0 z-50">
    <div id="nav-inner" class="bg-transparent backdrop-blur-md transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3">
          <!-- LOGO -->
          <img src="medi-logo/medi-logo.jpeg"
               alt="Medidorm Limited Logo"
               id="nav-logo"
               class="h-10 w-auto object-contain transition-all duration-300">
          <span class="font-semibold text-gray-800">Medidorm Limited</span>
        </a>

        <nav class="hidden md:flex gap-8 items-center text-gray-700">
          <a href="index.html" class="hover:text-medblue transition">Home</a>
          <a href="about.html" class="hover:text-medblue transition">About</a>
          <a href="services.html" class="hover:text-medblue transition">Services</a>
          <a href="policies.html" class="hover:text-medblue transition">Policies</a>
          <a href="contact.html" class="hover:text-medblue transition">Contact</a>
        </nav>

        <div class="flex items-center gap-3">
          <a href="tel:01162072068" class="hidden md:inline-flex items-center gap-2 bg-secondary text-white px-3 py-2 rounded-md">
            <i data-feather="phone" class="w-4 h-4"></i>
            0116 207 2068
          </a>
          <button id="mobile-toggle" class="md:hidden p-2 rounded border">
            <i data-feather="menu"></i>
          </button>
        </div>
      </div>

      <!-- MOBILE MENU -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200 shadow-sm">
        <div class="px-6 py-4 space-y-2">
          <a href="index.html" class="block text-gray-700">Home</a>
          <a href="about.html" class="block text-gray-700">About</a>
          <a href="services.html" class="block text-gray-700">Services</a>
          <a href="policies.html" class="block text-gray-700">Policies</a>
          <a href="contact.html" class="block text-gray-700">Contact</a>
        </div>
      </div>
    </div>
  </header>
`;

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navbarHtml;

    // re-render feather icons after navbar loads
    if (window.feather) {
      window.feather.replace();
    }

    const toggle = this.querySelector('#mobile-toggle');
    const mobile = this.querySelector('#mobile-menu');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => mobile.classList.toggle('hidden'));
    }

    const navInner = this.querySelector('#nav-inner');
    const logo = this.querySelector('#nav-logo');

    function onScroll() {
      if (window.scrollY > 60) {
        navInner.classList.remove('bg-transparent');
        navInner.classList.add('bg-white', 'shadow-md');
        logo.classList.replace('h-10', 'h-8');
      } else {
        navInner.classList.remove('bg-white', 'shadow-md');
        navInner.classList.add('bg-transparent');
        logo.classList.replace('h-8', 'h-10');
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll);
  }
}

customElements.define('custom-navbar', CustomNavbar);
