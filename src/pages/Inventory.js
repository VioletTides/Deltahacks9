import InventoryItem from "../components/InventoryItem"
// firebase package
import { getInventory } from "./Dashboard"
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
//

// This is the home page of the website, write all the code for the home page here
export default function Inventory(){
    return(
        <div>
            <h1>Inventory</h1>
            {/* <p>{getInventory()}</p> */}
            <div className="container">
                <div className="row" style={{display:"inline-block;"}}>
                    <div className="col-sm">
                        <InventoryItem foodGroupTitle="Fruits & Vegetables" desc="e.g Apples, oranges..." foodGroupDb="fruitsveg" imgSrc="./assets/fruitveg.png"/>
                    </div>
                    <div className="col-sm">
                        <InventoryItem foodGroupTitle="Meats & Alternatives" desc="e.g Canned beans, fish..." foodGroupDb="meatalt" imgSrc="./assets/fruitveg.png"/>
                    </div>
                    <div className="col-sm">
                        <InventoryItem foodGroupTitle="Dairy & Alternatives" desc="e.g Cheese, milk..." foodGroupDb="dairyalt"/>
                    </div>
                    <div className="col-sm">
                        <InventoryItem foodGroupTitle="Grains" desc="e.g Cereals, pasta..." foodGroupDb="grains"/>
                    </div>
                </div>
            </div>
            <Link to="/">Back to dashboard</Link>
            
        </div>
    )
}