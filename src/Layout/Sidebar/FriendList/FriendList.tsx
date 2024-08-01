import { IFriendList } from "./FriendList.props"

export const FriendList = ({friends, isOpen}: IFriendList) => {
    return (
        isOpen && (
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
        )
    )
} 