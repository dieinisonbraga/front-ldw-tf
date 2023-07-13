import { useState } from "react";
import products from '../lista-produtos.json';
import banner from '../assets/banner.png'

// Cada componente é um função JS, que pode conter atributo, métodos e um retorno
export default function Products() {
    // atributo
    const [productList, setProductList] = useState(products.bottles);
    
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
            
            <section className='main-products'>
                {
                    productList.map((item) => {
                        return JSON.stringify(item)
                    })
                }
            </section>

            <footer></footer>
        </div>
    )
}
