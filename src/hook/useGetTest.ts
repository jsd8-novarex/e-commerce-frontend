import { useEffect } from "react";
import { useGetTestStore } from "../store/getTest.store";

function useGetTest() {
  const { data, error, fetchData } = useGetTestStore();
  useEffect(() => {
    // console.log("useEffect fetchData called");
    fetchData();
  }, []);

  console.log("Data in useGetTest:", data);
  // console.log("Error in useGetTest:", error);


  return {data, error};
}

export default useGetTest;
