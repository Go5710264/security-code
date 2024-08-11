import { useState } from "react";
import style from "./EmployeeItem.module.scss";
import { FriendList } from "../FriendList/FriendList"
import { IEmployeeItem } from "./EmployeeItem.props";

export const EmployeeItem = ({name, friends}: IEmployeeItem) => {
    const [isOpen, setOpenFriend] = useState(false);

    return (
        <li 
            className={style.employeeItem}
            onClick={() => setOpenFriend(preState => !preState)}
        >
            <p className={style.employeeItem__name}>{name}</p>
            {isOpen && (
                <>
                    {/* <p className={style.employeeItem__titleList}>Друзья сотрудника:</p> */}
                    <FriendList friends={friends} isOpen={isOpen}/>
                </>
            )}
        </li>
    )
}