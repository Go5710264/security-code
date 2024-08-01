import { IFriend } from "../FriendList/FriendList.props";

export interface IEmployeeItem {
    readonly name: string;
    friends:IFriend[]
}