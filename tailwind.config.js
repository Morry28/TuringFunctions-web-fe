/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}",    './pages/**/*.{html,js,ts}',
        './components/**/*.{html,js,ts,tsx}',],
    theme: {
      extend: {
        colors: {
          // Primárna farba (grayscale základ)
          PM: "#374151", // primárna hlavná (dark gray)
          PMS: "#6b7280", // primárna sekundárna (light gray)
  
          // Sekundárna farba (grayscale jemnejšia)
          SC: "#9ca3af", // sekundárna hlavná (mid gray)
          SCS: "#d1d5db", // sekundárna svetlejšia (soft gray)
  
          // Tertiary (jemnejší grayscale, doplnkový)
          TC: "#e5e7eb", // terciárna hlavná (pale gray)
          TCS: "#f3f4f6", // terciárna sekundárna (very light gray)
  
          // Accent (aquamarine)
          AC: "#7FFFD4", // accent hlavná (aquamarine)
          ACS: "#60E1B9", // accent sekundárna (tmavší aquamarine)

          SA: "#FF8C00", // fiery accent hlavná
          SAS: "#FF7518", // fiery accent sekundárna
        },
      },
    },
    plugins: [],
  };
  