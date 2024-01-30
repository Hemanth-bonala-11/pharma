import requestMaker from "../lib";

export const fetchPagedProducts = (data) => {
    const { page , subCategoryName, subCategoryId } = data;
    console.log(data,"data");
    if(!page) page=1
    const url = `/shop/products/Pagination/`;
    const params = {data};
    const payload = {};
    return requestMaker(url, "get", { params, payload });
  }