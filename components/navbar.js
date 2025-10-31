// components/navbar.js
const navbarHtml = `
  <header class="fixed inset-x-0 top-0 z-50">
    <div id="nav-inner" class="backdrop-blur-md bg-white/80 border-b border-gray-200 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <!-- Logo + Name -->
        <a href="index.html" class="flex items-center gap-3">
          <img src="medi-logo/medi-logo.jpeg" alt="Medidorm Limited Logo" id="nav-logo"
               class="h-10 w-auto object-contain rounded-full shadow-sm ring-1 ring-gray-100">
          <span class="font-semibold text-gray-800 text-lg tracking-tight hover:text-medblue transition">Medidorm Limited</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex gap-6 items-center font-medium text-gray-700">
          <a href="index.html" class="hover:text-medblue hover:underline underline-offset-4 transition">Home</a>
          <a href="about.html" class="hover:text-medblue hover:underline underline-offset-4 transition">About</a>
          <a href="services.html" class="hover:text-medblue hover:underline underline-offset-4 transition">Services</a>
          <a href="policies.html" class="hover:text-medblue hover:underline underline-offset-4 transition">Policies</a>
          <a href="contact.html" class="hover:text-medblue hover:underline underline-offset-4 transition">Contact</a>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center gap-3">
          <a href="tel:01162072068" class="hidden md:inline-flex items-center gap-2 bg-medblue text-white px-3 py-2 rounded-lg shadow-sm hover:bg-blue-800 transition">
            <i data-feather="phone" class="w-4 h-4"></i>
            <span class="text-sm font-medium">0116 207 2068</span>
          </a>
          <button id="mobile-toggle" class="md:hidden p-2 rounded border border-gray-300 hover:bg-gray-100 transition">
            <i data-feather="menu"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md">
        <div class="px-6 py-4 space-y-3">
          <a href="index.html" class="block text-gray-700 hover:text-medblue transition">Home</a>
          <a href="about.html" class="block text-gray-700 hover:text-medblue transition">About</a>
          <a href="services.html" class="block text-gray-700 hover:text-medblue transition">Services</a>
          <a href="policies.html" class="block text-gray-700 hover:text-medblue transition">Policies</a>
          <a href="contact.html" class="block text-gray-700 hover:text-medblue transition">Contact</a>
        </div>
      </div>
    </div>
  </header>
`;

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navbarHtml;

    // Mobile toggle
    const toggle = this.querySelector('#mobile-toggle');
    const mobile = this.querySelector('#mobile-menu');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => mobile.classList.toggle('hidden'));
    }

    // Scroll style change
    const navInner = this.querySelector('#nav-inner');
    const logo = this.querySelector('#nav-logo');
    function onScroll() {
      if (window.scrollY > 60) {
        navInner.classList.add('bg-white/95', 'shadow-md', 'border-gray-300');
        logo.classList.replace('h-10', 'h-8');
      } else {
        navInner.classList.remove('shadow-md', 'border-gray-300');
        logo.classList.replace('h-8', 'h-10');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
  }
}

customElements.define('custom-navbar', CustomNavbar);
