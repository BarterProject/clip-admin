import { atom } from "recoil";

export const IDState = atom({ key: "ID", default: [] });
export const PASSState = atom({ key: "PASSWORD", default: [] });

export const LoginState = atom({ key: "isLogin", default: true });

export const CategoryState = atom({ key: "Category", default: "USER" });
export const DetailState = atom({ key: "selectDetail", default: false });
