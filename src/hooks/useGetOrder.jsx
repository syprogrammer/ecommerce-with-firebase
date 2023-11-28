import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const useGetOrder = (orderid) => {
  const [order, setOrder] = useState(null);
  console.log("usegetorder called")
  useEffect(() => {
    getOrder(orderid);
  }, []);

  const getOrder = async (orderid) => {
    console.log("getorder function called")
    const docRef = doc(db, "orders", orderid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("order data:", docSnap.data());
      setOrder(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("Invalid Order id ");
    }
  };

  return order;
};

export default useGetOrder;
