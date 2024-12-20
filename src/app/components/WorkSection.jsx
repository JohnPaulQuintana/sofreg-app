import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const WorkSection = ({openModal}) => {
  const galleryRef = useRef(null); // Ref for the gallery container
  const [isotopeInstance, setIsotopeInstance] = useState(null); // Store the Isotope instance
  const [activeFilter, setActiveFilter] = useState("*"); // Track active filter
  const location = useLocation(); // Access URL location

  useEffect(() => {
    if (galleryRef.current && !isotopeInstance) {
      // Initialize Isotope only if the galleryRef is ready
      const instance = new window.Isotope(galleryRef.current, {
        itemSelector: ".items", // Class for items in the gallery
        layoutMode: "fitRows",        // Use the fitRows layout mode
      });
      setIsotopeInstance(instance);
    }
  }, [galleryRef, isotopeInstance]);

  useEffect(() => {
    if (isotopeInstance) {
      // Apply filter when activeFilter changes
      isotopeInstance.arrange({ filter: activeFilter });
    }
  }, [activeFilter, isotopeInstance]);

  const handleFilterClick = (filterValue) => {
    // setHoveredFilter(filterValue);
    setActiveFilter(filterValue); // Update the active filter
  };

 
  // Handle URL query parameters to set the initial filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterFromUrl = params.get("filter"); // Get the "filter" query parameter
    if (filterFromUrl) {
      setActiveFilter(`.${filterFromUrl}`);
    } else {
      setActiveFilter("*"); // Default to show all if no filter parameter
    }
  }, [location.search]);

  
  
  const categories = [
    { id: 1, category: 'graphic', imgSrc: ['assets/imgs/amazon_listings/AMAZON_A1.jpg', 'assets/imgs/amazon_listings/AMAZON_A1.jpg'], title: 'Amazon Listings', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 2, category: 'graphic', imgSrc: ['assets/imgs/amazon_listings/DragonFire_1.jpg', 'assets/imgs/amazon_listings/DragonFire_1.jpg'], title: 'Amazon Listings', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 3, category: 'graphic', imgSrc: ['assets/imgs/amazon_listings/Headphones_1.jpg', 'assets/imgs/amazon_listings/Headphones_1.jpg'], title: 'Amazon Listings', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 4, category: 'graphic', imgSrc: ['assets/imgs/amazon_listings/KaleidoGlow_1.jpg', 'assets/imgs/amazon_listings/KaleidoGlow_1.jpg'], title: 'Amazon Listings', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 5, category: 'graphic', imgSrc: ['assets/imgs/amazon_listings/Renovare_1.jpg', 'assets/imgs/amazon_listings/Renovare_1.jpg'], title: 'Amazon Listings', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 6, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_A1.jpg','assets/imgs/ui_ux/UI_A2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 7, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_B1.jpg','assets/imgs/ui_ux/UI_B2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 8, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_C1.jpg','assets/imgs/ui_ux/UI_C2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 9, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_D1.jpg','assets/imgs/ui_ux/UI_D2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 10, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_E1.jpg','assets/imgs/ui_ux/UI_E2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 11, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_F1.jpg','assets/imgs/ui_ux/UI_F2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 12, category: 'graphic', imgSrc: ['assets/imgs/social_media/BikeShop_1.jpg','assets/imgs/social_media/BikeShop_2.jpg'], title: 'Social Media Ads', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 13, category: 'graphic', imgSrc: ['assets/imgs/social_media/Gym_1.jpg','assets/imgs/social_media/Gym_2.jpg'], title: 'Social Media Ads', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 14, category: 'graphic', imgSrc: ['assets/imgs/social_media/Ramen_1.jpg','assets/imgs/social_media/Ramen_1.jpg'], title: 'Social Media Ads', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 15, category: 'graphic', imgSrc: ['assets/imgs/branding/BRANDING_FROH_1.jpg','assets/imgs/branding/BRANDING_FROH_2.jpg'], title: 'Branding & Visual Identity', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 16, category: 'graphic', imgSrc: ['assets/imgs/branding/BRANDING_H_1.jpg','assets/imgs/branding/BRANDING_H_2.jpg'], title: 'Branding & Visual Identity', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 17, category: 'graphic', imgSrc: ['assets/imgs/branding/BRANDING_REFUAH_1.jpg','assets/imgs/branding/BRANDING_REFUAH_2.jpg'], title: 'Branding & Visual Identity', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 18, category: 'graphic', imgSrc: ['assets/imgs/branding/BRANDING_SWR_1.jpg','assets/imgs/branding/BRANDING_SWR_2.jpg'], title: 'Branding & Visual Identity', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 19, category: 'graphic', imgSrc: ['assets/imgs/motion/Motion_Animation/d_1.jpg','assets/imgs/motion/Motion_Animation/d_2.mp4'], title: 'Motion Graphics & Animation', categoryLabel: 'Graphic Design', type: 'video' },
    { id: 20, category: 'graphic', imgSrc: ['assets/imgs/motion/Motion_Animation/e_1.jpg','assets/imgs/motion/Motion_Animation/e_2.mp4'], title: 'Motion Graphics & Animation', categoryLabel: 'Graphic Design', type: 'video' },
    { id: 21, category: 'graphic', imgSrc: ['assets/imgs/motion/Motion_Animation/p_1.jpg','assets/imgs/motion/Motion_Animation/p_2.mp4'], title: 'Motion Graphics & Animation', categoryLabel: 'Graphic Design', type: 'video' },
    { id: 22, category: 'graphic', imgSrc: ['assets/imgs/motion/Motion_Animation/t_1.jpg','assets/imgs/motion/Motion_Animation/t_2.mp4'], title: 'Motion Graphics & Animation', categoryLabel: 'Graphic Design', type: 'video' },
    { id: 23, category: 'graphic', imgSrc: ['assets/imgs/packaging/AVENUE_1.jpg','assets/imgs/packaging/AVENUE_2.jpg'], title: 'Packaging Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 24, category: 'graphic', imgSrc: ['assets/imgs/packaging/CHOCO_1.jpg','assets/imgs/packaging/CHOCO_1.jpg'], title: 'Packaging Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 25, category: 'graphic', imgSrc: ['assets/imgs/packaging/FLASH_1.jpg','assets/imgs/packaging/FLASH_1.jpg'], title: 'Packaging Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 26, category: 'graphic', imgSrc: ['assets/imgs/packaging/LOTUS_1.jpg','assets/imgs/packaging/LOTUS_1.jpg'], title: 'Packaging Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 27, category: 'graphic', imgSrc: ['assets/imgs/print/Events_1.jpg','assets/imgs/print/Events_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 28, category: 'graphic', imgSrc: ['assets/imgs/print/OutdoorAd_1.jpg','assets/imgs/print/OutdoorAd_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 29, category: 'graphic', imgSrc: ['assets/imgs/print/pe_1.jpg','assets/imgs/print/pe_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 30, category: 'graphic', imgSrc: ['assets/imgs/print/petron_1.jpg','assets/imgs/print/petron_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 31, category: 'graphic', imgSrc: ['assets/imgs/print/pq_2.jpg','assets/imgs/print/pq_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 32, category: 'graphic', imgSrc: ['assets/imgs/print/pr_1.jpg','assets/imgs/print/pr_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 33, category: 'graphic', imgSrc: ['assets/imgs/print/pt_1.jpg','assets/imgs/print/pt_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 34, category: 'graphic', imgSrc: ['assets/imgs/print/pw_1.jpg','assets/imgs/print/pw_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 35, category: 'graphic', imgSrc: ['assets/imgs/print/STANDEE_1.jpg','assets/imgs/print/STANDEE_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 36, category: 'graphic', imgSrc: ['assets/imgs/print/Stationery_1.jpg','assets/imgs/print/Stationery_2.jpg'], title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 37, category: 'graphic', imgSrc: ['assets/imgs/ai/aie_1.jpg','assets/imgs/ai/aie_2.jpg'], title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 38, category: 'graphic', imgSrc: ['assets/imgs/ai/aiq_1.jpg','assets/imgs/ai/aiq_2.jpg'], title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 39, category: 'graphic', imgSrc: ['assets/imgs/ai/air_1.jpg','assets/imgs/ai/air_2.jpg'], title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 40, category: 'graphic', imgSrc: ['assets/imgs/ai/ait_1.jpg','assets/imgs/ai/ait_2.jpg'], title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 41, category: 'graphic', imgSrc: ['assets/imgs/ai/aiw_1.jpg','assets/imgs/ai/aiw_2.jpg'], title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 42, category: 'graphic', imgSrc: ['assets/imgs/ai/aiy_1.jpg','assets/imgs/ai/aiy_2.jpg'], title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 43, category: 'graphic', imgSrc: ['assets/imgs/sticker/TRAILER_1.jpg','assets/imgs/sticker/TRAILER_2.jpg'], title: 'Sticker Wrap', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 44, category: 'graphic', imgSrc: ['assets/imgs/sticker/VAN_1.jpg','assets/imgs/sticker/VAN_2.jpg'], title: 'Sticker Wrap', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 45, category: 'graphic', imgSrc: ['assets/imgs/sticker/WRAP_A1.jpg','assets/imgs/sticker/WRAP_A2.jpg'], title: 'Sticker Wrap', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 46, category: 'web', imgSrc: ['assets/imgs/web/web_961motorsport.jpg', 'https://961motorsport.com/'], title: '961 Motor Sport', categoryLabel: 'Website Development', type: 'web' },
    { id: 47, category: 'web', imgSrc: ['assets/imgs/web/web_motors.jpg', 'https://motorsportgrowth.com/'], title: 'Motor Sport Growth', categoryLabel: 'Website Development', type: 'web' },
    { id: 48, category: 'web', imgSrc: ['assets/imgs/web/web_S4T.jpg', 'https://stage4tuning.com/'], title: 'Stage4tuning', categoryLabel: 'Website Development', type: 'web' },
    { id: 49, category: 'web', imgSrc: ['assets/imgs/web/web_AMATARA.jpg', 'https://amatara.com/welleisure/'], title: 'Amatara', categoryLabel: 'Website Development', type: 'web' },
    { id: 50, category: 'web', imgSrc: ['assets/imgs/web/web_hotelskophiph.jpg', 'https://tapear-resort.hotelskophiphi.com/en/'], title: 'Tapear Resort', categoryLabel: 'Website Development', type: 'web' },
    { id: 51, category: 'web', imgSrc: ['assets/imgs/web/web_PARADOX.jpg', 'https://www.paradoxhotels.com/phuket'], title: 'Paradox Hotels', categoryLabel: 'Website Development', type: 'web' },
    { id: 52, category: 'web', imgSrc: ['assets/imgs/web/web_SUNSET_BEACH.jpg', 'https://sunsetbeach.vn/'], title: 'Sunset Beach', categoryLabel: 'Website Development', type: 'web' },
    { id: 53, category: 'web', imgSrc: ['assets/imgs/web/web_EASTWOODS.jpg','https://gradebook.epcst.edu.ph/login'], title: 'Gradebook', categoryLabel: 'System Development', type: 'web' },
    { id: 54, category: 'web', imgSrc: ['assets/imgs/web/web_BATAAN_DTS.jpg','https://procurement.bataan.gov.ph/auth'], title: 'Procurement', categoryLabel: 'System Development', type: 'web' },
    { id: 55, category: 'video', imgSrc: ['assets/imgs/video/BMW.jpg', 'https://www.youtube.com/embed/S_t-EnEK_PM'], title: 'Social Media', categoryLabel: 'Video Production', type: 'video' },
    { id: 56, category: 'video', imgSrc: ['assets/imgs/video/Brasil.jpg', 'https://www.youtube.com/embed/4-BAXCaRVIY'], title: 'Social Media', categoryLabel: 'Video Production', type: 'video' },
    { id: 57, category: 'video', imgSrc: ['assets/imgs/video/Client_1.jpg', 'https://www.youtube.com/embed/bUJOjdUK_9g'], title: 'Social Media', categoryLabel: 'Video Production', type: 'video' },
    { id: 58, category: 'video', imgSrc: ['assets/imgs/video/S4T.jpg', ''], title: 'Social Media', categoryLabel: 'Video Production', type: 'video' },
    { id: 59, category: 'video', imgSrc: ['assets/imgs/video/Laptop_advertisement.jpg',''], title: 'YouTube', categoryLabel: 'Video Production', type: 'video' },
    { id: 60, category: 'video', imgSrc: ['assets/imgs/video/thumbnail/CorporateVideoEditing_1.jpg',''], title: 'Corporate Video', categoryLabel: 'Video Production', type: 'video' },
    { id: 61, category: 'video', imgSrc: ['assets/imgs/video/thumbnail/EventVideoEditing_1.jpg',''], title: 'Event Video', categoryLabel: 'Video Production', type: 'video' },
    { id: 62, category: 'video', imgSrc: ['assets/imgs/video/Exige.jpg','https://youtube.com/embed/WgOLf8zl1Kw'], title: 'Film/Documentary', categoryLabel: 'Video Production', type: 'video' },
    { id: 63, category: 'video', imgSrc: ['assets/imgs/video/Cosmetics.jpg','https://youtube.com/embed/-CBQXzdPlAU'], title: 'Product & Tutorial', categoryLabel: 'Video Production', type: 'video' },
    { id: 64, category: 'video', imgSrc: ['assets/imgs/video/Clothing.jpg',''], title: 'Product & Tutorial', categoryLabel: 'Video Production', type: 'video' },
    { id: 65, category: 'video', imgSrc: ['assets/imgs/video/Vitamins.jpg',''], title: 'Product & Tutorial', categoryLabel: 'Video Production', type: 'video' },
    { id: 66, category: 'video', imgSrc: ['assets/imgs/video/Coastline.jpg',''], title: 'AI-Powered', categoryLabel: 'Video Production', type: 'video' },
    { id: 67, category: 'video', imgSrc: ['assets/imgs/video/Scoot.jpg',''], title: 'AI-Powered', categoryLabel: 'Video Production', type: 'video' },
    { id: 68, category: 'video', imgSrc: ['assets/imgs/video/cinematic_alarm.jpg','https://youtube.com/embed/fICLPQJhHO0'], title: 'Cinematic', categoryLabel: 'Video Production', type: 'video' },
    
  ]


  return (
    <section className="work-stand section-padding sub-bg desktop:px-40">
      <div className="container-xxl">
        <div className="row">
          {/* filter links */}
          <div className="filtering col-12 mb-50 text-center">

            <div className="filter mb-4">
              <span className="text">Filter By :</span>
              <span data-filter="*" className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleFilterClick("*")}

              >
                Show All
              </span>
              <span
                data-filter=".graphic" className={activeFilter === ".graphic" ? "active" : "relative"}
                onClick={() => handleFilterClick(".graphic")}
                // onMouseEnter={() => handleMouseEnterCategory("graphic")}
                // onMouseLeave={handleMouseLeaveCategory}
                >
                Graphic Design

                {/* {hoveredCategory === "graphic" && (
                  <div onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown} className="dropdown absolute left-[-20px] mt-2 rounded-md z-[99] bg-[#1e1b1b] min-w-[250px] max-w-[500px] p-2 flex flex-col gap-2 items-start">
                   <div className="flex justify-between items-center border-b border-[#e5e7eb] w-full py-2">
                      <span className="">Sub-categories</span>
                      <span onClick={() => closeSubCategory()} className="transform transition-transform duration-300 hover:scale-110">X</span>
                   </div>
                    <span onClick={() => handleFilterClick(".graphic.sub1")} className="transform transition-transform duration-300 hover:scale-110">
                      Amazon Listings
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      UI/UX
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      Graphics & Animation
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      Social Media
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      AI-Assisted
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      Packaging
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      Printing
                    </span>
                    <span onClick={() => handleFilterClick(".graphic.sub2")} className="transform transition-transform duration-300 hover:scale-110">
                      Sticker Wrap
                    </span>
                  </div>
                )} */}

              </span>
              <span
                data-filter=".web" className={activeFilter === ".web" ? "active" : ""}
                onClick={() => handleFilterClick(".web")}
              >
                Web Solutions
              </span>
              <span
              data-filter=".video" className={activeFilter === ".video" ? "active" : ""}
              onClick={() => handleFilterClick(".video")}
                // onClick={() => handleFilterChange('.video')}
              >
                Video Production
              </span>
              
            </div>

          </div>
        </div>

        <div className="gallery row stand-marg" ref={galleryRef}>
          {categories.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 transition-transform transform scale-100 hover:scale-110 duration-300 items ${item.category}`}>
              <div className="item mb-40">
                <a onClick={() => openModal(item.imgSrc[1], item.type)} className="img">
                  <img src={`${item.imgSrc[0]}`} alt={item.title} />
                </a>
                <div className="cont mt-2">
                  <h5 className="fz-12 text-center">
                    Tags: <span className="text-xs">{item.title} | {item.categoryLabel} </span>
                  </h5>
                  {/* <p>
                    <a onClick={() => openModal(item.imgSrc[1], item.type)}>{item.categoryLabel} <span className="icon ti-arrow-top-right text-xl tablet:text-xl"></span></a>
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      
    </section>
  );
};

export default WorkSection;
