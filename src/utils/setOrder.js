import { collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

// Add a new document in collection "cities"

const setOrder = async (paymentMethod) => {
    const cartItems = useSelector((store)=>store.cart.items)
    const uid = useSelector((store)=>store.auth.userAuth.uid)
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "cities"), {
       orderItems:cartItems,
       uid:uid,
       paymentMethod:paymentMethod
    });
    console.log("Document written with ID: ", docRef.id);
}

export default setOrder