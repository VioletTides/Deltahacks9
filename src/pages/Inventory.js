import InventoryItem from "../components/InventoryItem"
// This is the home page of the website, write all the code for the home page here
export default function Inventory(){
    return(
        <div>
            <h1>Inventory</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <InventoryItem foodGroupTitle="Fruits & Vegetables" desc="e.g Apples, oranges..." foodGroupDb="fruitsveg" imgSrc="./assets/fruitveg.png"/>
                    </div>
                    <div className="col">
                        <InventoryItem foodGroupTitle="Meats & Alternatives" desc="e.g Canned beans, fish..." foodGroupDb="meatalt"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <InventoryItem foodGroupTitle="Dairy & Alternatives" desc="e.g Cheese, milk..." foodGroupDb="dairyalt"/>
                    </div>
                    <div className="col">
                        <InventoryItem foodGroupTitle="Grains" desc="e.g Cereals, pasta..." foodGroupDb="grains"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}