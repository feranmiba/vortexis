import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <>
    The project uses app router not pages router

You don't have to create app.tsx or use index.tsx you need to use page.tsx as your entry point and layout.tsx as main project entry point


    </>
  );
}

export default MyApp;