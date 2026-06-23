const priceLabels = {
  sola: "Sola",
  conPapas: "Con papas",
  conBebida: "Con bebida",
  comboCompleto: "Combo completo",
};

export default function MenuItemCard({ item, onAdd }) {
  const { name, description, details, image, price, prices } = item;

  return (
    <article
      onClick={() => onAdd?.(item)}
      className="burger-card cursor-pointer flex flex-col md:flex-row bg-surface-container-lowest rounded-xl overflow-hidden card-shadow"
    >
      <div className="w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-surface-container-low flex items-center justify-center">
        {image ? (
          <img alt={name} className="w-full h-full object-cover object-[center_30%]" src={image} />
        ) : (
          <span className="material-symbols-outlined text-outline text-5xl">
            restaurant
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-headline-md font-headline-md text-on-surface mb-1">{name}</h3>
          {description && (
            <p className="text-label-bold font-label-bold text-on-surface-variant mb-2">
              {description}
            </p>
          )}
          {details && (
            <p className="text-body-md font-body-md text-on-surface-variant mb-4">
              {details}
            </p>
          )}
        </div>

        {prices ? (
          <div className="space-y-2">
            {Object.entries(prices).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center p-3 bg-surface-container-low rounded-lg"
              >
                <span className="text-label-bold font-label-bold text-on-surface-variant">
                  {priceLabels[key] ?? key}
                </span>
                <span className="text-price-display font-price-display text-primary">
                  ${value.toLocaleString("es-CO")}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-between items-center p-3 bg-surface-container-low rounded-lg">
            <span className="text-label-bold font-label-bold text-on-surface-variant">
              Precio
            </span>
            <span className="text-price-display font-price-display text-primary">
              ${price.toLocaleString("es-CO")}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}