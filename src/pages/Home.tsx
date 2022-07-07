import ProductCard from "@/components/base/ProductCard"
import Slick from "@/components/global/Slick"
import MultipleSlider from "@/components/sliders/multipleSlider"
import BestSellers from "@data/bestSlellers.json"



type Props = {}

const Home = ( props: Props ) =>
{


    return (
        <div>

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