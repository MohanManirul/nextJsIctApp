"use client"
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>


        {children}

        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          
        />

      </body>
    </html>
  );
}
