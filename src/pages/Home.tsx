import ProductCard from "@/components/base/ProductCard"
import Slick from "@/components/global/Slick"
<<<<<<< HEAD
import slider from "../data/slider.json"


=======
import MultipleSlider from "@/components/sliders/multipleSlider"
import BestSellers from "@data/bestSlellers.json"
>>>>>>> eba336490d7671f014ee2dea606e8057bd699e54



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
                <div className="">
                <div className="flex flex-col	">
                    <img style={{width:"200px",height:"200px"}} key={sliderItem.id} src={sliderItem.img} alt="" /></div>
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