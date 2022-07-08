import Slick from "@/components/global/Slick"
import slider from "../data/slider.json"





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


        </div>
    )
}

export default Home