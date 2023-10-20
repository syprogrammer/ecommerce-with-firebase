import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const useProductDescription = () => {
    const {prodId} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProduct()
    }, [prodId])

   
    async function getProduct() {
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