import mainQueryFetch from "../mainQueryFetch";
import mainQueryPost from "../mainQueryPost";

const getAllDepartmentsAxios = <TData>() => {
  return mainQueryFetch<TData>(`/Department`,["all-departments"],{
    enabled: true
  });
};

const createDepartmentAxios = <TData>() => {
  return mainQueryPost<TData>(`/Department`,["create-department"]);
};

export {
  getAllDepartmentsAxios,
  createDepartmentAxios
}