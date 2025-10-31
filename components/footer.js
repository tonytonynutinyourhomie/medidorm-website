// components/footer.js
const footerHtml = `
  <footer class="bg-gray-900 text-white mt-12">
    <div class="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
      <div>
        <h4 class="font-semibold text-lg mb-2">Medidorm Limited</h4>
        <p class="text-sm text-gray-300">Caring Support. Professional Standards. Personal Touch.</p>
        <p class="text-sm text-gray-400 mt-3">Registered office: 88 Mayfair Road, Dartford, DA1 5AQ</p>
      </div>
      <div>
        <h4 class="font-semibold text-lg mb-2">Contact</h4>
        <p class="text-sm text-gray-300">Phone: 0116 207 2068</p>
        <p class="text-sm text-gray-300">Mobile: 07359 248 178</p>
        <p class="text-sm text-gray-300 mt-2">Email: <a href="mailto:mediform@mail.com" class="underline">mediform@mail.com</a></p>
      </div>
      <div>
        <h4 class="font-semibold text-lg mb-2">Quick links</h4>
        <ul class="text-sm text-gray-300 space-y-2">
          <li><a href="about.html" class="hover:text-white">About</a></li>
          <li><a href="services.html" class="hover:text-white">Services</a></li>
          <li><a href="policies.html" class="hover:text-white">Policies</a></li>
          <li><a href="contact.html" class="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
        &copy; <span id="footer-year"></span> Medidorm Limited. All rights reserved.
      </div>
    </div>
  </footer>
`;

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerHtml;
    const y = this.querySelector('#footer-year');
    if (y) y.textContent = new Date().getFullYear();
  }
}

customElements.define('custom-footer', CustomFooter);
