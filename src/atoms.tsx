import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const IDState = atom({ key: "ID", default: [] });
export const PASSState = atom({ key: "PASSWORD", default: [] });

export const LoginState = atom({
  key: "isLogin",
  default: false,
  //effects_UNSTABLE: [persistAtom],
});

const LoginSelector = selector({
  key: "login",
  get: ({ get }) => {
    const trueFalse = get(LoginState);
    return trueFalse;
  },
  set: ({ set }) => {
    set(LoginState, (prev) => !prev);
  },
});

export const DetailState = atom({ key: "selectDetail", default: false });

export const UserDetailState = atom({
  key: "selectUserDetail",
  default: false,
});
export const ItemDetailState = atom({
  key: "selectItemDetail",
  default: false,
});
