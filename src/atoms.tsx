import { atom } from "recoil";

export const IDState = atom({ key: "ID", default: [] });
export const PASSState = atom({ key: "PASSWORD", default: [] });

export const LoginState = atom({ key: "isLogin", default: true });

export const DetailState = atom({ key: "selectDetail", default: false });

export const UserDetailState = atom({
  key: "selectUserDetail",
  default: true,
});
export const ItemDetailState = atom({
  key: "selectItemDetail",
  default: false,
});
