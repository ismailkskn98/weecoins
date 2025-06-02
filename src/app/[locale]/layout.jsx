import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import "../globals.css";
import { ReactLenis } from "@/utils/lenis";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { getMessages } from "next-intl/server";

const inter = localFont({
  src: [
    { path: "../fonts/InterTight-Thin.ttf", weight: "200", style: "normal" },
    { path: "../fonts/InterTight-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/InterTight-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/InterTight-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/InterTight-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/InterTight-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/InterTight-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/InterTight-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
});

export const metadata = {
  title: "WeeCoins International",
  description: "WeeCoins International - Kripto para dünyasına açılan kapınız. WeeCoins ile dijital varlıklarınızı keşfedin, ticaret yapın ve güvenli bir şekilde saklayın.",
  keywords: "weeCoins, WeeCoins, weecoins, kripto para, dijital varlıklar, blok zinciri, ticaret, güvenli cüzdanlar",
  author: "WeeCoins International",
  robots: "index, follow",
  icons: {
    icon: [{ url: "/images/weecoins-icon.png", type: "image/png", sizes: "512x512" }],
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <ReactLenis root options={{ duration: 1.3, smooth: true, smoothTouch: false }}>
        <body className={`${inter.className} antialiased font-inter bg-main-black text-main-white !overflow-x-hidden`}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
