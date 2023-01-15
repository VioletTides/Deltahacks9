import React, { useRef, useEffect, useState, useContext } from "react"
import { auth, db } from "../firebase-config";

const latRef = useRef();
const longRef = useRef();

async function getLatLong(uid) {
    let uid = auth.currentUser.uid
    let lat, long;
    await get(ref(db, ${uid}))
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


function tsp(foodbank) {
    // function to calculate total distance of a path
    function totalDistance(path) {
        var distance = 0;
        for(var i = 0; i < path.length - 1; i++) {
            distance +=distanaceBetween(path[i], path[i+1]);
        }
        return distance;
    }

    //function to calculte the distance of two cities
    function distnaceBetween(foodbank1, foodbank2) {
        var dlat = foodbank1.lat - foodbank2.lat;
        var dlong = foodbank1.long - foodbank2.long;
        return Math.sqrt(dlatdlat + dlongdlong);
    }

    //Generate all possible permutations of foodbanks
    var permutations = permute(foodbank);

    //Find the permutation with the shortest total distance
    var shortestPath = permutation[0]
    var shortestDistance = totalDistance(shortestPath);
    for (var i = 1; i < permutation.length; i++) {
        var distance = totalDistance(permutation[i]);
        if(distance < shortestDistance) {
            shortestPath = permutation[i];
            shortestDistance = distance;
        }
    }

    //Return the shortest path
    return shortestPath;
}