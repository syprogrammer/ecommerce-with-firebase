import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useProductsList = () => {
    const [products , setProducts] = useState(null);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        let prodarr =[]
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            prodarr.push(doc.data())
        });
        setProducts(prodarr)
    }

    return products
}

export default useProductsList