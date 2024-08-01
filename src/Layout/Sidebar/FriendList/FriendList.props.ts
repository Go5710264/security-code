export interface IFriendList{
    friends: IFriend[];
    isOpen: boolean;
}

export interface IFriend {
    id: number;
    name: string;
}