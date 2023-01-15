import fruitvegpng from '../assets/fruitveg.png'
import grainspng from '../assets/grains.png'
import meataltpng from '../assets/meatalt.png'
import milkaltpng from '../assets/milkalt.png'

import { auth, db } from "../firebase-config"
import { onValue, set, ref, get } from "firebase/database"
import React, { useRef, useEffect, useState } from "react"


export default function InventoryItem({foodGroupTitle, desc, foodGroupDb}) { // pass title for the card, description for card,  the name it is referred to in the db
    let image;
    let uid;

    // getting stock start
    const [fruitsveg, setFruitsveg] = useState(null);
    const [grains, setGrains] = useState(null);
    const [dairyalt, setDairyalt] = useState(null);
    const [meatalt, setMeatalt] = useState(null);
    let quantity;

    async function getQuantities(uid=auth.currentUser.uid) {
        console.log(uid)
        let fruitsveg, grains, dairyalt, meatalt;
        await get(ref(db, `${uid}/inventory`))
            .then(snapshot => {
                const userData = snapshot.val();
                console.log(userData)
                fruitsveg = userData.fruitsveg;
                grains = userData.grains;
                dairyalt = userData.dairyalt;
                meatalt = userData.meatalt;
            })
            .catch(error => {
                console.log(error);
            });
        return { fruitsveg, grains, dairyalt, meatalt };
    }
    
    useEffect(() => { 
        getQuantities(uid)
            .then(({ fruitsveg: fruitsvegValue, grains: grainsValue, dairyalt:dairyaltValue, meatalt:meataltValue }) => {
                setFruitsveg(fruitsvegValue);
                setGrains(grainsValue);
                setDairyalt(dairyaltValue);
                setMeatalt(meataltValue);
            });
        
    }, [])

    // getting stock end
    async function displayCounter() {
        get(ref(db, `${uid}/inventory/${foodGroupDb}`), (snapshot)=>{
            console.log(snapshot.val())
        })
    }
    displayCounter()
    const updateCounter = (event) => {
        uid = auth.currentUser.uid
        console.log(foodGroupDb)
        set(ref(db, `${uid}/inventory/${foodGroupDb}`), event.target.value).catch((error)=> {
            console.log(error)
        })
    }
    if (foodGroupDb == "fruitsveg") {
        image = fruitvegpng
        quantity = fruitsveg
    } else if (foodGroupDb =="grains") {
        image = grainspng 
        quantity = grains
    } else if (foodGroupDb =="meatalt") {
        image = meataltpng
        quantity = meatalt
    } else {
        image = milkaltpng
        quantity = dairyalt
    }
    return (
        <div className="card" style={{padding:"5%"}}>
            <img className="card-img-top" src={image} style={{width:"50%"}}></img>
            <div className="card-body">
                <h5 className="card-title">{foodGroupTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{desc}</h6>
                <div className="form-outline">
                    <input type="number" id="typeNumber" className="form-control" onChange={updateCounter} defaultValue={quantity}/>
                </div>
            </div>
        </div>
    )
}   
