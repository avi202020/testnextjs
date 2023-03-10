import react ,{useState}from "react";
import Card from "@/components/Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{

            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
    }
    return(
        <>
            <div className="main mt-5">
                <div className="text-center mt-10">
                    <h1 className="font-extrabold text-4xl text-tahiti sm:text-5xl">
                    <span className="block text-blue-500">"A room without books is like</span>
                    <span className="block text-blue-500">a body without a soul."</span>
                    </h1>
                </div>
                <div className="sm:text-center lg:text-center m-10">
                      <h2>
                        <div>
                        <input type="text" className="text-dark font-bold text-3xl p-3 mt-5" placeholder="Enter Your Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                        </div> 
                        <div>
                        <button className="text-white bg-indigo-500 p-3 mt-5" onClick={searchBook}>Search Book</button>
                        </div>
                      </h2>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="p-4">
                <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {
                    <Card book={bookData}/>
              }  
            </div>
            </div>
            </div>
        </>
    )
}
export default Main;