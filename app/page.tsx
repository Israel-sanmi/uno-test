import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Hero from "@/components/Hero";
import CategoriesList from "@/components/CategoriesList";
import Products from "@/components/Products";
import TopCategories from "@/components/TopCategories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-poppins text-black bg-white">
      <TopBar />
      <Header />
      {/* <NavMenu /> */}
      <Hero />
      {/* <CategoriesList /> */}
      <Products />
      <TopCategories />
      <Features />
      <Footer />
    </div>
  );
}
