import { IFriendList } from "./FriendList.props"
import style from "./FriendList.module.scss";


export const FriendList = ({friends, isOpen}: IFriendList) => {
    return (
        isOpen && (
            <ul className={style.friendList}>
                {friends.map(friend => (
                    <li 
                        key={friend.id}
                        className={style.friendList__item}   
                    >{friend.name}</li>
                ))}
            </ul>
        )
    )
} 