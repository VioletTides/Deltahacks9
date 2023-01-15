import fruitvegpng from '../assets/fruitveg.png'
import grainspng from '../assets/grains.png'
import meatalt from '../assets/meatalt.png'
import milkalt from '../assets/milkalt.png'

import { auth, db } from "../firebase-config"
import { onValue, set, ref } from "firebase/database"


export default function InventoryItem({foodGroupTitle, desc, foodGroupDb}) { // pass title for the card, description for card,  the name it is referred to in the db
    let image;
    let uid;
    const updateCounter = (event) => {
        uid = auth.currentUser.uid
        console.log(foodGroupDb)
        set(ref(db, `${uid}/inventory/${foodGroupDb}`), event.target.value).catch((error)=> {
            console.log(error)
        })
    }
    if (foodGroupDb == "fruitsveg") {
        image = fruitvegpng
    } else if (foodGroupDb =="grains") {
        image = grainspng 
    } else if (foodGroupDb =="meatalt") {
        image = meatalt
    } else {
        image = milkalt
    }
    return (
        <div className="card" style={{padding:"5%"}}>
            <img className="card-img-top" src={image} style={{width:"50%"}}></img>
            <div className="card-body">
                <h5 className="card-title">{foodGroupTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{desc}</h6>
                <div class="form-outline">
                    <input type="number" id="typeNumber" class="form-control" onChange={updateCounter}/>
                </div>
            </div>
        </div>
    )
}
