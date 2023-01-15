//todo

exports page
    - gets current lat/long
    - asks for UID of another food bank and gets lat/long
    - maybe up to 5 if time permits
    - dijkstra if time permits

fix food pictures

routing function

inventory page
    - private routing
    - add and subtract
    - button to link to exports page

getting lat/long

const latRef = useRef();
    const longRef = useRef();

    async function getLatLong(uid) {
        let lat, long;
        await get(ref(db, `${uid}`))
            .then(snapshot => {
                const userData = snapshot.val();
                lat = userData.lat;
                long = userData.long;
            })
            .catch(error => {
                console.log(error);
            });
        return { lat, long };
    }

    useEffect(() => {
        if (currentUser) {
            getLatLong(currentUser.uid)
                .then(({ lat, long }) => {
                    latRef.current.value = lat;
                    longRef.current.value = long;
                });
        }
    }, [currentUser]);