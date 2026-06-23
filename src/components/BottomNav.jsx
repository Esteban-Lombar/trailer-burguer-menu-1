const navItems = [
  { key: "home", label: "Home", icon: "home" },
  { key: "menu", label: "Menu", icon: "restaurant_menu" },
  { key: "cart", label: "Cart", icon: "shopping_basket" },
];

export default function BottomNav({ active = "menu", onSelect }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface shadow-[0_-4px_20px_rgba(33,33,33,0.08)] rounded-t-xl">
      {navItems.map(({ key, label, icon }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onSelect?.(key)}
            className={`flex flex-col items-center justify-center px-4 py-1.5 active:scale-95 transition-transform duration-150 ${
              isActive
                ? "bg-primary-container text-on-primary-container rounded-xl"
                : "text-on-surface-variant hover:bg-surface-container-low transition-colors"
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="font-label-bold text-label-bold">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
