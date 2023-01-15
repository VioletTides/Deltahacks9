import { auth, db } from "../firebase-config";
import { set, ref } from "firebase/database";


// This is the home page of the website, write all the code for the home page here
export default function Exports(){
    // const latRef = useRef();
    // const longRef = useRef();

    // async function getLatLong(uid) {
    //     let lat, long;
    //     await get(ref(db, `${uid}`))
    //         .then(snapshot => {
    //             const userData = snapshot.val();
    //             lat = userData.lat;
    //             long = userData.long;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     return { lat, long };
    // }

    // useEffect(() => {
    //     if (currentUser) {
    //         getLatLong(currentUser.uid)
    //             .then(({ lat, long }) => {
    //                 latRef.current.value = lat;
    //                 longRef.current.value = long;
    //             });
    //     }
    // }, [currentUser]);

    return(
        <div>
            <h1>Exports</h1>

            <div className="container">
                <div className="col"> 

                </div>
                <div className="col">
                    <div className = "row">

                    </div>

                    <div className = "row">

                    </div>
                </div>
            </div>
        </div>
    )
}