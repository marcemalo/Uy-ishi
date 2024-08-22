import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "../../api/axios";
import "./Single.css"




const Single = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    axios(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))

  }, [])

  return (
    <div className="singl">
      <div className="container">
        <div className="singl__wrapper">
          <div className="cvbnm">
            {
              product && <div className="dfghj">
                <div>
                  <img className="rdvjhfcg" src={product.thumbnail} alt="" />
                </div>
                <div>
                  <h2  className="hbszxbxs">Title:{product.title}</h2>
                  <p className="foxy">Description:{product.description}</p>
                  <h3 className="class">Price:{product.price}</h3>
                  <h1 className="nike">Rating:{product.rating}</h1>
                  <h2 className="loris">Brand:{product.brand}</h2>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single