import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen">
      <Header />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
      <SanityLive />
      <Footer />
    </section>
  );
}
