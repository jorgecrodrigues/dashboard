const hasSupport = () => typeof Storage !== "undefined";

export type MenuMode = "expanded" | "not-expanded"
export type MaybeMenuMode = MenuMode | undefined

export interface StorageManager {
  get(init?: MenuMode): MaybeMenuMode
  set(value: MenuMode): void
}

/**
 * Simple object to handle read-write to localStorage
 */
export const sidebarMenuModeStorageManager: StorageManager = {
  get(init?) {
    if (!hasSupport()) return init
    try {
      const value = localStorage.getItem("dashboard-sidebar-menu-mode") as MaybeMenuMode
      return value ?? init
    } catch (error) {
        console.log(error);
        return init;
    }
  },
  set(value) {
    if (!hasSupport()) return
    try {
     localStorage.setItem("dashboard-sidebar-menu-mode", value)
    } catch (error) {
        console.log(error);
    }
  },
}
