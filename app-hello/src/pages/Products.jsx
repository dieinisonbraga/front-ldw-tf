import { useState, useEffect } from "react";
import banner from '../assets/banner.png';
import Item from '../components/Item';
import axios from 'axios';

// Cada componente é um função JS, que pode conter atributo, métodos e um retorno
export default function Products() {
    // atributo
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/produtos/buscar-produtos')
            .then(response => setProductList(response.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="content-product">
            <header> 
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>
            
            <section className="banner">
                <img src={banner} alt="Banner"/>
            </section>
            
            <section className="main-products">
                {
                    productList.map((productItr, id) => (
                            <Item key={id} infosProduct={productItr}/>
                        )
                    )
                }
            </section>

            <footer></footer>
        </div>
    )
}
