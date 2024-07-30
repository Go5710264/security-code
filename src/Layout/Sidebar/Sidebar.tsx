import style from "./Sidebar.module.scss";

export const Sidebar = ({...props}) => {
    return (
        <aside {...props} className={style.hierarchicalTree}>
            <ul>
                <li className={style.hierarchicalTree__item}>
                    First item
                </li>
            </ul>
        </aside>
    )
} 