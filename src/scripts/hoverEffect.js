export function setupHoverEffect(nav, linkNav) {
    const padre = document.getElementById(nav);
    const hijo = document.getElementById(linkNav);
  
    if (!padre || !hijo) return;
  
    hijo.addEventListener('mouseenter', () => {
      padre.classList.add('bg-blue-200');
    });
  
    hijo.addEventListener('mouseleave', () => {
      padre.classList.remove('bg-blue-200');
    });
  }
  