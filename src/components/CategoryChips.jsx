export default function CategoryChips({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 pb-2">
      {categories.map(({ id, label }) => {
        const isActive = id === activeCategory;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`px-6 py-2 rounded-full font-label-bold text-label-bold whitespace-nowrap transition-colors ${
              isActive
                ? "active-chip"
                : "border border-outline/20 hover:bg-surface-container-low"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}