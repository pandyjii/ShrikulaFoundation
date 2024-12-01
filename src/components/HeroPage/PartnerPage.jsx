import academy from "../../assets/partner/academy.png";
import sangam from "../../assets/partner/sangamTalks.png";
import smart from "../../assets/partner/smart4bharat.png";
import risingKashmir from "../../assets/partner/risingKasmir.png";
import rishi from "../../assets/partner/rishiUniversity.png";
import prachyam from "../../assets/partner/PrachyamTV.png";
import delhiUniversity from "../../assets/partner/DULitFest.png";
import urbanPandit from "../../assets/partner/UrbanPandit.png";
import gulshanBook from "../../assets/partner/gulshanBook.png";
import sabere from "../../assets/partner/SabreandQuill.png";

const festivalPartners = [
  {
    name: "J&K Academy of Art, Culture & language",
    logo: academy,
    link: "http://jkaacl.jk.gov.in/Main/Default.aspx",
  },
  {
    name: "Sangam",
    logo: sangam, 
    link: "https://sangamtalks.org/",
  },
  {
    name: "Smart4Bharat",
    logo: smart,
    link: "https://smart4bharat.com", 
  },
  {
    name: "Rising Kashmir",
    logo: risingKashmir,
    link: "https://risingkashmir.com/",
  },
  {
    name: "Rishi Hood University",
    logo: rishi, 
    link: "https://rishihood.edu.in/",
  },
  {
    name: "Prachyam TV",
    logo: prachyam,
    link: "https://prachyam.com/", 
  },
  {
    name: "Delhi University Lit. Fest",
    logo: delhiUniversity,
    link: "https://dulitfest.org/",
  },
  {
    name: "The Urban Pandit Show",
    logo: urbanPandit, 
    link: "https://youtube.com/@urbanpandits?si=ksw2kFqCyNzfxo-v",
  },
  {
    name: "Gulshan Books Kashmir",
    logo: gulshanBook,
    link: "https://www.instagram.com/gulshan_books_kashmir?igsh=N21hc3o2bTZkcHB4", 
  },
  {
    name: "Sabere and Quill Publisher",
    logo: sabere,
    link: "https://www.sabreandquill.com/", 
  },

];

export const FestivalPartners = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Festival Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {festivalPartners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-14 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

