import react , {useState} from "react";
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    return (
        <>{
                book.map((item, i) => {
                    
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <div key={i} className="flex flex-1 flex-col justify-between">
                                <img className="object-object-none object-center m-auto w-flex" src={thumbnail} alt="" />
                                <div className=" m-3 text-center wrap-text">
                                    <div>{item.volumeInfo.title}</div>
                                </div>
                                <div className="m-3 text-center">
                                    <span>${amount}</span>    
                                 </div> 
                                 <div className="object-object-none object-center text-center">
                                    <button className="text-white bg-indigo-500 p-3 m-3 align-self-end">View Details</button>
                                    <button className="text-white bg-indigo-500 m-3 p-3 align-self-end">Add to Cart</button>
                                 </div>
                     
                             </div>
                        )
                    }
                    
                })
              }
            </>
    )
}
export default Card;