import { Roboto } from "next/font/google";
import styles from "./layout.module.scss"; // Archivo CSS/Sass para los estilos
import AuthGuard from "./guard/AuthGuard";
import AsideContainer from "@/ui/organisms/AsideContainer.tsx/AsideContainer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"] 
});

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.layoutContainer}`}>
        <div className={styles.mainContainer}>
          <AuthGuard><div className={styles.content}>{children}</div></AuthGuard>
          <AsideContainer />
          
        </div>
      </body>
    </html>
  );
}