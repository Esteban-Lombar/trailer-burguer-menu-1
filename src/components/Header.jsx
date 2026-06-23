export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm h-16 flex justify-between items-center px-margin-mobile">
      <div className="flex items-center gap-3">
        <img
          alt="TRAILER BURGER"
          className="h-10 w-auto"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeLeMaT1J0r4WHjvBt3QZVNyG3WVTsEersLePZi7TfMqXqadIv3fEu9V_WU2XEy_eBEx6FrPT30a4peRNeSYXBLMGgn3wuiqRGbGteVtEF3l_6aNj3Bg7MGE82_pnrBK7Onlrg6j__P4XAc8IopPark2wkAd9Y_1P2kZdfGJ5zRveVkg-XRF_rUl5WWc9oSYhB5kXd7L9y31ly7n2BEfCHT70JrV6n1EKtqmGuvGT1XesCdt_BAQr8H8z7pIB7_5GzCeZdXLcJ0rg"
          style={{ borderRadius: "30%" }}
        />
        <span className="text-headline-sm font-headline-sm font-extrabold text-primary tracking-tight">
          TRAILER BURGER
        </span>
      </div>
      
    </header>
  );
}
