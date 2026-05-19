

function ship (length){
    let isSunk = false;
    let hits = 0;

    const getLength = () => length;
    
    const getHits = () => hits;

    const shipHit = () =>{
        hits++; 
    }

    const isShipSunk = () => hits >= length;

   return { getLength, getHits, shipHit, isShipSunk }
}