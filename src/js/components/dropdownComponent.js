export function setupDropdownMenuComponent() {
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  const menuList = Array.from(dropdownMenus);

  for (let i = 0; i < menuList.length; i++) {
    const dropdownHeader = menuList[i].querySelector(".dropdown-header");
    const dropdownContent = menuList[i].querySelector(".dropdown-content");
    setupHeaderComponent(dropdownHeader, dropdownContent);
  }
}

/**
 *
 * @param {Element} header
 * @param {Element} content
 */
function setupHeaderComponent(header, content) {
  header.addEventListener("click", (e) => {
    content.classList.toggle("dropdown-visible");
  });
}
