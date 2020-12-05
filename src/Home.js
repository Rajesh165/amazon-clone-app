import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt=""></img>
            </div>
            <div className="home_product">
                {/* <Product id={1234}  title="jdasd sdhadm damdnkha hdisew,dkha" image="" price={29.8} rating={5}/> */}
                <Product id={4328} title="Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage) - 48MP Quad Camera & Full HD+ Display" image={process.env.PUBLIC_URL+'redmi note 9.jpg'} price={171.41} rating={5}/>
                <Product id={4327} title="Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" image={process.env.PUBLIC_URL+'note 10 lite.jpg'} price={576.22} rating={4}/>

                {/* <Product/> */}
            </div>
            <div className="home_product">
                <Product id={56644} title="AmazonBasics 13mm Extra Thick Yoga and Exercise Mat with Carrying Strap" image={process.env.PUBLIC_URL+'/mat.jpg'} price={14.21} rating={5}/>
                <Product id={46723} title="Amazon Brand - Symactive Men's Running Shoes" image={process.env.PUBLIC_URL+'/shose.jpg'} price={10.7} rating={4}/>
                <Product id={54872} title="Mediweave KN95 (Equivalent to N95) Mask/Respirator,CE certified, Pack of 5" image={process.env.PUBLIC_URL+'/mask.jpg'} price={5.41} rating={5}/>

            </div>
            <div className="home_product">
                <Product id={12012} title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver" image={process.env.PUBLIC_URL+'/tv.jpg'} price={199.98} rating={5}/>
                {/* <Product id={12016} title="jdasd sdhadm damdnkha hdisew,dkha" image="data:image/jpeg;base64,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" price={29.8} rating={5}/> */}
                {/* <Product id={1292198} title="" image={process.env.PUBLIC_URL+'/logo192.png'} price={45.9} rating={4}/> */}
            </div>
        </div>
    )
}

export default Home
