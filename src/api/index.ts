import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
  },
});
//Login
export const authApi = {
  login(email: string, password: string): Promise<AxiosResponse<any>> {
    return api.post("/api/v2/user/authentication", {
      email,
      password,
    });
  },
};
//get user infomation
export const userApi = {
  getUserList(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/admin/user?page=${idx}`);
  },
};

//get one User information
export const oneUserApi = {
  getOneUserList(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/admin/user/${idx}`);
  },
};

//get item infomation
export const itemApi = {
  getItemList(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/admin/items?page=${idx}`);
  },
};

//get one item information
export const oneItemApi = {
  getOneItemList(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/admin/items/${idx}`);
  },
};

//{`${number}`}

//get category infomation
export const categoryApi = {
  getCategoryList(): Promise<AxiosResponse<any>> {
    return api.get("/api/v2/items/categories");
  },
};

//put new category
export const saveCategoryApi = {
  setCategory(name: string): Promise<AxiosResponse<any>> {
    return api.post("/api/v2/items/categories", {
      name,
    });
  },
};

//delete category
export const deleteCategoryApi = {
  delCategory(idx: number): Promise<AxiosResponse<any>> {
    return api.delete(`/api/v2/items/categories/${idx}`);
  },
};

//get report infomation
export const reportApi = {
  getReportList(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/item/reports?page=${idx}`);
  },
};
//get one report infomation
export const oneReportApi = {
  getOneReport(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/item/reports/${idx}`);
  },
};

//get support infomation
export const boardApi = {
  getBoardList(idx: number): Promise<AxiosResponse<any>> {
    return api.get(`/api/v2/admin/boards/1/posts?page=${idx}`);
  },
};

//item activate
export const activateItemApi = {
  activateItem(idx: number): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/items/${idx}/activation`);
  },
};
//item deactivate
export const deactivateItemApi = {
  deactivateItem(idx: number): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/items/${idx}/deactivation`);
  },
};
//item refund
export const refundItemApi = {
  refundItem(idx: number): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/items/${idx}/refund`);
  },
};
//item deposit return
export const returnDepositItemApi = {
  returnDepositItem(idx: number): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/items/${idx}/returnDeposit`);
  },
};

//user activate
export const activateUserApi = {
  activateUser(idx: number): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/user/${idx}/activation`);
  },
};
//user deactivate
export const deactivateUserApi = {
  deactivateUser(idx: number): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/user/${idx}/deactivation`);
  },
};

//item search Api
//page: 페이지번호
//mode: (all / itemName / category)
//query: 검색어
//itemName 선택시, 검색어 역할
//categoryIdx
//category 선택시, category idx번호 입력
export const itemSearchToQueryApi = {
  itemSearchToQuery(
    idx: number,
    itemname: string
  ): Promise<AxiosResponse<any>> {
    return api.get(
      `/api/v2/admin/items?page=${idx}&mode=itemName&query=${itemname}`
    );
  },
};

export const itemSearchToIdxApi = {
  itemSearchToIdx(
    idx: number,
    categoryIdx: string
  ): Promise<AxiosResponse<any>> {
    return api.get(
      `/api/v2/admin/items?page=${idx}&mode=category&categoryIdx=${categoryIdx}`
    );
  },
};

//user owner/registrant item search Api
//page: 페이지번호
//mode: 검색모드 (registrant / owner)

//user Item Search Api
export const userItemSearchApi = {
  userItem(idx: number, mode: string): Promise<AxiosResponse<any>> {
    return api.get(
      `/api/v2/admin/users/${idx}/items?page=total_page&mode=${mode}`
    );
  },
};

//reply on post
export const replyPostApi = {
  replyPost(idx: number, content: string): Promise<AxiosResponse<any>> {
    return api.put(`/api/v2/admin/boards/posts/${idx}`, {
      content,
    });
  },
};

//on post
export const postBoardApi = {
  postBoard(title: string, content: string): Promise<AxiosResponse<any>> {
    return api.post(`/api/v2/boards/1/posts`, {
      title,
      content,
    });
  },
};
