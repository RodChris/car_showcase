import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Wheels on Demand",
  description: "Your Key to Hassle-Free Car Rentals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
