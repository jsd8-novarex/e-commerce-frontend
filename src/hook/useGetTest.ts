import { useEffect } from "react";
import { useGetTestStore } from "../store/getTest.store";

function useGetTest() {
  const { data, error, fetchData } = useGetTestStore();
  useEffect(() => {
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error };
}

export default useGetTest;
