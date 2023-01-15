export default function InventoryItem({foodGroupTitle, desc, foodGroupDb, imgSrc}) { // pass title for the card, description for card,  the name it is referred to in the db
    return (
        <div className="card" style={{width: "18rem;"}}>
            <img class="card-img-top" src={imgSrc}></img>
            <div className="card-body">
                <h5 className="card-title">{foodGroupTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{desc}</h6>
            </div>
        </div>
    )
}
