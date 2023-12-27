import { useState, useEffect } from 'react'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const useProductDescription = (prodId) => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProduct(prodId)
    }, [prodId])

   
    async function getProduct(prodId) {
        console.log(prodId)
        const docRef = doc(db, "products", prodId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setProduct(docSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such product");
        }
    }

    return product

}

export default useProductDescription