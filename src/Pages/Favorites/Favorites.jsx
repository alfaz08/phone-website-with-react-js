import { useEffect, useState } from "react";


import FavoriteCard from "./FavoriteCard";

const Favorites = () => {

  const [favorites,setFavorites] = useState([]) 

  const  [noFound,setNoFound] =useState(false)

  const [isShow,setIsShow] =useState(false)

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
    const favoriteItem = JSON.parse(localStorage.getItem('favorites'))
    if(favoriteItem){
      setFavorites(favoriteItem);

      const total = favoriteItem.reduce((preValue,currentItem)=>preValue+currentItem.price,0)
      console.log(total);
      setTotalPrice(total)
    }
    else{
      setNoFound('No data found')
    }
    
  },[])
  console.log(favorites);
  
  const handleRemove =()=>{
    localStorage.clear();
    setFavorites([])
    setNoFound('No data found')
  }

  return (
    <div>
      
         {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
         : 
         <div>

          {favorites.length > 0 && (
          <div>
            <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto">
            Deleted all favorites</button> 
            <h1>TOtal Price: {totalPrice}</h1>
          </div>
          

          )}



          <div className="grid grid-cols-2 gap-5">

          {
              isShow? favorites.map((phone)=> (<FavoriteCard key={phone.id} phone={phone}></FavoriteCard> ))
              :favorites.slice(0,2).map((phone)=> (<FavoriteCard key={phone.id} phone={phone}></FavoriteCard> ))
          } 
         </div>


         {favorites.length>2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
          {isShow?"See less":"See more"}
          </button>}
         </div>
        }
     
    </div>
  );
};

export default Favorites;