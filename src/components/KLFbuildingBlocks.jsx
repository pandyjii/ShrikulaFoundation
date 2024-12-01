
import gallerBg from "../assets/gallery/galleryBg.png";
import news1 from "../assets/gallery/Galleryimage1.png";
import news2 from "../assets/gallery/gallertimage2.png";
import news3 from "../assets/gallery/galleryimage3.png";
import news4 from "../assets/gallery/galleryimage4.png";
export function KlfBuildingBloks() {
  const images = [news1, news2, news3,news1, news2, news3,news1, news2, news3];

    return (
      <div className=" grid grid-cols-3">
    
    {
      images.map((item)=>
       <div className=" flex justify-center items-center
       ">
        <img src={item} className=" w-[75%]"/>
       </div>
      )
    }
      
      </div>
    );
  }
  