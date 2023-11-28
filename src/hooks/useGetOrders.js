import { useEffect, useState } from 'react'
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from '../firebase';


const useGetOrders = (uid) => {
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        getOrders(uid)
    }, [])

    const getOrders = async (uid) => {
        const ordersRef = collection(db, "orders");
        console.log("orderhook",uid)
        // Create a query against the collection.
        const q = query(ordersRef, where("uid", "==", uid))
        const querySnapshot = await getDocs(q);
        const orderdata=[]
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            orderdata.push(doc.data())
            console.log(doc.id, " => ", doc.data());
        });
        setOrders(orderdata)
    }

    return orders

}

export default useGetOrders