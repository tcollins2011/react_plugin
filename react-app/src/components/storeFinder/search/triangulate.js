// List of all of the locations lat and longitude. Import from storeJson
import storeInfo from "../locations/storeJson"

export default function triangulate(userLat, userLng){
        
    const storeDistances=[];
    
    const deg2Rad = (deg) => {
        return deg * Math.PI / 180;
    }

    const pythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
        lat1 = deg2Rad(lat1);
        lat2 = deg2Rad(lat2);
        lon1 = deg2Rad(lon1);
        lon2 = deg2Rad(lon2);
        // Radius of earth in miles
        const R = 3958.8;
        const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
        const y = (lat2 - lat1);
        const d = Math.sqrt(x * x + y * y) * R;
        return d;
    }

    for(let i = 0; i < storeInfo.length; i++){
        let storeLat = storeInfo[i].lat
        let storeLng = storeInfo[i].lng
        let distance = pythagorasEquirectangular(storeLat,storeLng,userLat,userLng)
        let id = storeInfo[i].id
        let storeDistance={}
        storeDistance['distance'] = distance
        storeDistance['id'] = id
        storeDistances.push(storeDistance)
    }

    storeDistances.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
    return storeDistances

}
