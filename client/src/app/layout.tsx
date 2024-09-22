import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Kaban Board",
  description: "Kaban board for tracking project progress"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div className="flex min-h-screen w-full flex-col">
            {children}
            <Toaster  />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
