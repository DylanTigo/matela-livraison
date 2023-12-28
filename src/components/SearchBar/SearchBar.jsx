import { LuSearch } from "react-icons/lu"
import s from "./style.module.css"


export function SearchBar(){
    return(
        <div className={s.inputContainer}>
            <input type="search" name="search" id="search" className={s.searchInput} placeholder="Que recherchez-vous?"/>
            <button type="button" className={s.searchBtn}><LuSearch/></button>
        </div>
    )
}