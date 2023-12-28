import s from "./style.module.css";
import "../../assets/Variables.css"
import { IoIosArrowDown } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export function Boutton({ label, isDropdown, isPrimary }) {
  if (isDropdown) {
    // Dropdown
    return (
      <button className={s.Boutton}>
        <>{label}</>
        <IoIosArrowDown />
      </button>
    );
  } else {
    if(isPrimary){
      // Boutton primaire en fond rouge
      return (
        <button className={s.Boutton} style={{background: "var(--primary-red)", color: "var(--primary-white)"}}>
          {label}
        </button>
      );
    }else{
      return (
        // Boutton secondaire a fond blanc
        <button className={s.Boutton}>
          {label}
        </button>
      );

    }
  }
}
