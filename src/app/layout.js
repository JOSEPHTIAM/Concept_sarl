

import { Archivo, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500','700', '900'],
  variable: '--body-font',
});
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'INDIGO - Impression numérique',
    template: '%s | INDIGO - Impression numérique',
  },
  description: 'INDIGO - Impression numérique',
  openGraph: {
    title: 'INDIGO - Impression numérique',
    description: 'INDIGO - Impression numérique',
    image: '/openGraphImage.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/logo_indigo.ico" />
      </head>
      <body className={`${roboto.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
