export default function FloatingCart({ itemCount }) {
  return (
    <button className="fixed bottom-24 right-6 bg-primary-container text-on-primary-container p-4 rounded-full fab-shadow flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 z-40">
      <span className="material-symbols-outlined">shopping_basket</span>
      <span className="font-label-bold text-label-bold">Ver Carrito</span>
      <span className="bg-secondary-container text-on-secondary-container text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
        {itemCount}
      </span>
    </button>
  );
}
