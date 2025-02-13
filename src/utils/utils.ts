import { supabase } from "./supabaseClient";

/**
 * Scrolls to a specific element on the page smoothly and adjusts for a fixed navbar.
 * Optionally closes a mobile menu.
 *
 * @param {string} id - The ID of the element to scroll to.
 * @param {() => void} [closeMenu] - Optional function to close the mobile menu.
 */
export const handleScroll = (id: string, closeMenu?: () => void) => {
  const element = document.getElementById(id);
  
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 10, // Adjustment for fixed Navbar
      behavior: "smooth"
    });
    
    window.history.pushState(null, "", `#${id}`);
    
    // Close mobile menu if the function is provided
    if (closeMenu) closeMenu();
  }
};

//metodo addVisit que no recive parametros, no retorna nada y se encarga de agregar una visita a la base de datos, mete la info que se pueda extraer del navegador sin necesidad de que el usuario la proporcione permisos
export const addVisit = async (visitData: { userAgent: string, pageUrl: string, referer: string, visited_at: string }) => {
  const { data } = await supabase
    .from("visits")
    .insert([{
      visited_at: visitData.visited_at,
      user_agent: visitData.userAgent,
      page_url: visitData.pageUrl,
      referer: visitData.referer
    }]);

  return data;
};
