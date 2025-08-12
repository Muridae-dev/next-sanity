import ClientSceneWrapper from "@/components/ClientSceneWrapper";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import TransitionElement from "@/components/TransitionElement";
import { SanityLive } from "@/sanity/lib/live";
import { notFound } from "next/navigation";

const locales = ["en", "no"];

export default async function FrontendLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="relative text-blue bg-blue md:overflow-hidden w-full">
        <TransitionElement />
        <ClientSceneWrapper scene="gradients" key="scene" />
        <section className="min-h-screen">
          <Header />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <SanityLive />
          <Footer />
        </section>
      </body>
    </html>
  );
}
