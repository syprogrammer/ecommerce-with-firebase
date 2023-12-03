import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy, startAfter, limit } from "firebase/firestore";
import { db } from "../firebase";

const useProductsList = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        // const querySnapshot = await getDocs(collection(db, "products"));
        let prodarr = []
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     prodarr.push(doc.data())
        // });

        // Query the first page of docs
        const first = query(collection(db, "products"),limit(8));
        const querySnapshot = await getDocs(first);
     
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            prodarr.push(doc.data())
            console.log(doc.id, " => ", doc.data());
        });
        // Get the last visible document
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        console.log("last", lastVisible);

        // Construct a new query starting at this document,
        // get the next 25 cities.
        const next = query(collection(db, "products"),
            startAfter(lastVisible),
            limit(8));

        setProducts(prodarr)
    }

    return products
}

export default useProductsList