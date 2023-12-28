import { Logo } from "../Logo/Logo";
import { NavIcon } from "../NavIcon/NavIcon";
import { Boutton } from "../Boutton/Boutton";
import { SearchBar } from "../SearchBar/SearchBar";
import { LuMenu, LuShoppingCart, LuHeart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import s from "./style.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <nav className={s.firstNav}>
        <Logo />
        <SearchBar />
        <div className={s.iconContainer}>
          <NavIcon icon={<LuMenu />} />
          <NavIcon icon={<LuHeart />} />
          <NavIcon icon={<LuShoppingCart />} />
          <NavIcon icon={<CgProfile />} />
        </div>
      </nav>
      <nav className={s.secondNav}>
        <Boutton label={"Matelas"} isDropdown={true} />
        <Boutton label={"Salle a Manger"} isDropdown={true} />
        <Boutton label={"Tables"} isDropdown={true} />
        <Boutton label={"Bureau"} isDropdown={true} />
        <Boutton label={"Lits"} isDropdown={true} />
        <Boutton label={"Equipements Mixtes"} isDropdown={true} />
        <Boutton label={"Promotions"} isPrimary={true}/>
      </nav>
    </header>
  );
}
