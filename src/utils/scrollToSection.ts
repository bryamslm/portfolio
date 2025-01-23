export const handleScroll = (id: string, closeMenu?: () => void) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 10, // Adjustment for fixed Navbar
      behavior: "smooth"
    });
    window.history.pushState(null, "", `#${id}`);
    if (closeMenu) closeMenu(); // Close mobile menu if function exists
  }
};
