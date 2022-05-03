import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const IDState = atom({ key: "ID", default: [] });
export const PASSState = atom({ key: "PASSWORD", default: [] });

export const LoginState = atom({
  key: "isLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
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
export const selectedItemNumber = atom({
  key: "selectedItemNumber",
  default: 0,
});

export const selectedReportNumber = atom({
  key: "selectedReportNumber",
  default: 0,
});

export const ReportDataState = atom({
  key: "ReportData",
  default: [],
});

export const PageNumber = atom({
  key: "number",
  default: 0,
});
