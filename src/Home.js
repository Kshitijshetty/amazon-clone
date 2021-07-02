import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home_img"  src="https://www.dqindia.com/wp-content/uploads/2019/09/amazon-840x354.jpg" alt=" " />
            <div className="home_row">
              <Product id="123" title="hand mixer"  price={400}  rating={4}  image="https://m.media-amazon.com/images/I/31ZILczhZHL.__AC_SY200_.jpg"  />
              <Product id="123" title="kafka on the shore"  price={240}  rating={5}  image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429638085l/4929.jpg"  />         
              <Product id="123" title="kafka on the shore"  price={240}  rating={5}  image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429638085l/4929.jpg"  />         
            </div>
            <div className="home_row">
              <Product id="123" title="hand mixer"  price={400}  rating={5}  image="https://m.media-amazon.com/images/I/31ZILczhZHL.__AC_SY200_.jpg"  />
            </div>
            
        </div>
        )
}

export default Home
