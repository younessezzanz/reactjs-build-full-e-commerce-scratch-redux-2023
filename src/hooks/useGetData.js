import instance from "../api/baseURL";

const useGetData = async (url, parmas) => {
  const res = await instance.get(url, parmas);
  return res.data;
};

export default useGetData;
