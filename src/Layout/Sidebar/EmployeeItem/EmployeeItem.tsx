import { useState } from "react"
import { FriendList } from "../FriendList/FriendList"
import { IEmployeeItem } from "./EmployeeItem.props";

export const EmployeeItem = ({name, friends}: IEmployeeItem) => {
    const [isOpen, setOpenFriend] = useState(false);

    return (
        <li 
            onClick={() => setOpenFriend(preState => !preState)}
        >
            <p>{name}</p>
            {isOpen && 
                <FriendList friends={friends} isOpen={isOpen}/>
            }
        </li>
    )
}