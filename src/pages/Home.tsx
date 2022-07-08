import ProductCard from "@/components/base/ProductCard"
import Slick from "@/components/global/Slick"
import MultipleSlider from "@/components/sliders/multipleSlider"

import slider from "../data/slider.json"

import BestSellers from "../data/bestSlellers.json"




type Props = {
   
}

function Home ( props: Props )
{


    return (
        <div className="overflow-hidden	">


            <Slick>
            {
              slider.data.map( (sliderItem:any) =>

                (
               <div className="mb-5 w-100 h-100 ">
                    <img className="max-w-full h-auto"  key={sliderItem.id} src={sliderItem.img} alt="" />
           
                    </div>
                     

                ) )
              }
           
            </Slick>

            <MultipleSlider itemsToScroll={ 1 } itemsToShow={ 4 } >
                
                { BestSellers.data.map( sliderItem => (
                    <div key={sliderItem.id}>
                        <ProductCard {...sliderItem} />
                    </div>
                )) }

               
                
            </MultipleSlider>



        </div>
    )
}

export default Home