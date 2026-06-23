import MenuItemCard from "./MenuItemCard.jsx";

export default function MenuSectionList({ sections, onAdd }) {
  if (sections.length === 0) {
    return (
      <p className="text-body-lg font-body-lg text-on-surface-variant text-center py-12">
        No hay productos en esta categoría todavía.
      </p>
    );
  }

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id}>
          <h2 className="text-headline-sm font-headline-sm text-primary mb-4 pb-2 border-b border-outline-variant">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-gutter">
            {section.items.map((item) => (
              <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}