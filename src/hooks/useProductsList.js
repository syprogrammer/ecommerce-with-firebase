import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy, startAfter, limit, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";

const useProductsList = () => {
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(1)
    const [lastDocument, setLastDocument] = useState();
    const [totalProductsCount, setTotalProductsCount] = useState(0)
    const [productPerPage, setProductPerPage] = useState(8)

    useEffect(() => {
        getProducts()

    }, [page]);

    useEffect(() => {
        getTotalProducts()
    }, [])

    const getTotalProducts = async () => {
        console.log("total products called")
        const coll = collection(db, "products");
        const snapshot = await getCountFromServer(coll);
        console.log('count: ', snapshot.data().count);
        setTotalProductsCount(snapshot.data().count)
    }

    const getProducts = async () => {
        // const querySnapshot = await getDocs(collection(db, "products"));
        if (products && totalProductsCount < (page * 8)) {
            let pcount = totalProductsCount - ((page - 1) * 8)
            if (pcount <= 0) {
                console.log("---all Products are being showed----", pcount)
                return
            }
            setProductPerPage(pcount)
        }
        console.log("getProducts called productPerPage", productPerPage)
        let prodarr = []
        try {
            // Query the first page of docs
            let first = query(collection(db, "products"), limit(productPerPage));
            if (lastDocument !== undefined) {
                first = query(collection(db, "products"), startAfter(lastDocument), limit(productPerPage));
                // fetch data following the last document accessed
            }
            const querySnapshot = await getDocs(first);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                prodarr.push(doc.data())
                // console.log(doc.id, " => ", doc.data());
            });
            setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1]);
            if (products) {
                setProducts([...products, ...prodarr])
            }
            else {
                setProducts(prodarr)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return { products, totalProductsCount, page, setPage }
}


export default useProductsList