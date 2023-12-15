import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy, startAfter, limit, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";

const useProductsList = () => {
    const [products, setProducts] = useState(null);
    const [limitData, setLimitData] = useState(8)
    const [lastDocument, setLastDocument] = useState();

    useEffect(() => {
        getProducts()

    }, [limitData]);

    useEffect(() => {
        getTotalProducts()
    }, [])
    const getTotalProducts = async () => {
        const coll = collection(db, "products");
        const snapshot = await getCountFromServer(coll);
        console.log('count: ', snapshot.data().count);
    }

    const getProducts = async () => {
        // const querySnapshot = await getDocs(collection(db, "products"));

        let prodarr = []
        // Query the first page of docs
        let first = query(collection(db, "products"), limit(8));
        if (lastDocument !== undefined) {
            first = query(collection(db, "products"), startAfter(lastDocument), limit(8));
            // fetch data following the last document accessed
        }
        const querySnapshot = await getDocs(first);

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            prodarr.push(doc.data())
            console.log(doc.id, " => ", doc.data());
        });
        setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1]);
        if (products) {
            setProducts([...products, ...prodarr])
        }
        else {
            setProducts(prodarr)
        }
    }

    return { products, limitData, setLimitData }
}

export default useProductsList