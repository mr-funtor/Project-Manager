import mainQueryFetch from "../mainQueryFetch";

const getAllTransactionsAxios = <TData>() => {
  return mainQueryFetch<TData>(`/Department`,["all-departments"],{
    enabled: true
  });
};

export {
  getAllTransactionsAxios
}