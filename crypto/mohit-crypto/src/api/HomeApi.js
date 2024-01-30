import requestMaker from "../Lib";
export const fetchCategories = (data)=>{
    const url = `/shop/category/`;
    const payload = { ...data };
    const params = {};
    return requestMaker(url, "get", {params, payload})
}