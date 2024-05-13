import { cookies } from "next/headers";

function useServerDarkMode(defaultTheme = "dark") {
  return defaultTheme;
  // return cookies().get("theme")?.value ?? defaultTheme;
}

export default useServerDarkMode;
