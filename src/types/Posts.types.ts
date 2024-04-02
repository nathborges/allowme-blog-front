import IUserData from "./Users.types";

export default interface IPostData {
  id: number;
  title: string;
  body: string;
  created_date: Date;
  user: IUserData;
}
