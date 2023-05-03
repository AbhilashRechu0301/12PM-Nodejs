import{useState, useEffect} from 'react';
import axios from 'axios';

function Product(){
    const [Products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9633/products").then(
            response=>{
            console.log("response", response);
            setProducts(response.data);
        },
        error=>{
            console.log("error", error)
        })
    }, [])

    const displaydata=()=>{
        const list = Products.map(product=>{
        
          return  <tr key={product.category}><td>{product.id}</td><td>{product.price}</td><td>{product.name}</td> </tr>
        })
       return list;
        }
        
    return (
        <div>
        <h1>Products are here</h1>
        <button onClick={displaydata}>get Items</button>
        <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Price</th>
                            <th>Product no.</th>
                            
                            
                        </tr>
                    </thead>

                    <tbody>
                    {displaydata()}
                    </tbody>

                </table>
        </div>
    )
}
export default Product;