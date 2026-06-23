import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CategoryChips from "./components/CategoryChips.jsx";
import MenuSectionList from "./components/MenuSectionList.jsx";
import { menuSections } from "./data/menu.js";

const filterOptions = [
  { id: "todas", label: "Todas" },
  ...menuSections.map((section) => ({ id: section.id, label: section.title })),
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [cartCount, setCartCount] = useState(0);

  const filteredSections = useMemo(() => {
    if (activeCategory === "todas") return menuSections;
    return menuSections.filter((section) => section.id === activeCategory);
  }, [activeCategory]);

  const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      <Header />

      <main className="pt-20 pb-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Hero />
        <CategoryChips
          categories={filterOptions}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <MenuSectionList sections={filteredSections} onAdd={handleAddToCart} />
      </main>

      
    </div>
  );
}