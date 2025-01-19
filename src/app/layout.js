import {AppProvider} from "@/context/AppContext";
import '@/../public/global.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AppProvider>
          {children}
      </AppProvider>
      </body>
    </html>
  );
}
