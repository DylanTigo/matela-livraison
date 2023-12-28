import s from "./style.module.css"

// eslint-disable-next-line react/prop-types
export function NavIcon({icon}){
    return <button type="button" className={s.navIcon}>{icon}</button>
}