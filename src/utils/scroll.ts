// Smooth-scroll to a section. Sections below the fold are mounted progressively, so if the
// target isn't in the DOM yet we mount everything first, then scroll (and correct once layout settles).
export function scrollToId(id: string) {
  const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  if (document.getElementById(id)) {
    go();
    return;
  }
  window.dispatchEvent(new Event('portfolio:mount-all'));
  requestAnimationFrame(() => requestAnimationFrame(go));
  window.setTimeout(go, 450);
}
