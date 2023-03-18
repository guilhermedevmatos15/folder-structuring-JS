/* Como usar? How to use? 
- Assim como a library "AOS", aqui temos animações de Scroll, fica a seu criterio qual usar...
*/

export default function initScrollReveal(duration) {
   window.sr = ScrollReveal({ reset: true });
   sr.reveal('[data-reveal="true"]', { duration: duration });
}