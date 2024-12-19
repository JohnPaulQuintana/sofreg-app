import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const WorkSection = ({openModal}) => {
  const galleryRef = useRef(null); // Ref for the gallery container
  const [isotopeInstance, setIsotopeInstance] = useState(null); // Store the Isotope instance
  const [activeFilter, setActiveFilter] = useState("*"); // Track active filter
  const location = useLocation(); // Access URL location
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image


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

  // const openModal = (imgSrc, event) => {
  //   event.preventDefault(); // Prevent the default behavior of the link
  //   const modal = document.getElementById("image-viewer");
  //   const fullImage = document.getElementById("full-image");
  //   modal.classList.remove("hidden"); // Show the modal
  //   fullImage.src = imgSrc; // Set the image source
  // };

  // const closeModal = (event) => {
  //   const modal = document.getElementById("image-viewer");
  //   modal.classList.add("hidden"); // Hide the modal
  //   event.stopPropagation(); // Prevent event bubbling up
  // };

  const categories = [
    { id: 1, category: 'graphic', imgSrc: ['assets/imgs/amazon_listings/AMAZON_A1.jpg', 'assets/imgs/amazon_listings/AMAZON_A1.jpg'], title: 'Amazon Listings', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 2, category: 'graphic', imgSrc: ['assets/imgs/ui_ux/UI_A1.jpg','assets/imgs/ui_ux/UI_A2.jpg'], title: 'UI-UX', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 3, category: 'graphic', imgSrc: ['assets/imgs/social_media/BikeShop_1.jpg','assets/imgs/social_media/BikeShop_2.jpg'], title: 'Social Media Ads', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 4, category: 'graphic', imgSrc: ['assets/imgs/brands/BRANDING_FROH_1.jpg','assets/imgs/brands/BRANDING_FROH_2.jpg'], title: 'Branding & Visual Identity', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 5, category: 'graphic', imgSrc: ['assets/imgs/motion/creativeplay_1.jpg','assets/imgs/motion/creativeplay_2.jpg'], title: 'Motion Graphics & Animation', categoryLabel: 'Graphic Design', type: 'video' },
    { id: 6, category: 'graphic', imgSrc: 'assets/imgs/packaging/AVENUE_1.jpg', title: 'Packaging Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 7, category: 'graphic', imgSrc: 'assets/imgs/print/Printables_Thumbnail.jpg', title: 'Print Design', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 8, category: 'graphic', imgSrc: 'assets/imgs/ai/aie_1.jpg', title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', type: '#' },
    { id: 9, category: 'graphic', imgSrc: 'assets/imgs/sticker/StickerWrap_Thumbnail.jpg', title: 'Sticker Wrap', categoryLabel: 'Graphic Design', type: 'image' },
    { id: 10, category: 'web', imgSrc: 'assets/imgs/web/system_THUMBNAIL.jpg', title: 'Web Development', categoryLabel: 'Website Development', type: 'web' },
    { id: 11, category: 'web', imgSrc: 'assets/imgs/web/wd_1.jpg', title: 'System Development', categoryLabel: 'System Development', type: 'web' },
    { id: 12, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/SocialMediaVideoEditing_1.jpg', title: 'Social Media Video Editing', categoryLabel: 'Video Production', type: 'video' },
    { id: 13, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/YouTubeVideoEditing_1.jpg', title: 'YouTube Video Editing', categoryLabel: 'Video Production', type: 'video' },
    { id: 14, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/CorporateVideoEditing_1.jpg', title: 'Corporate Video Editing', categoryLabel: 'Video Production', type: 'video' },
    { id: 15, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/EventVideoEditing_1.jpg', title: 'Event Video Editing', categoryLabel: 'Video Production', type: 'video' },
    { id: 16, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/FilmDocumentaryEditing_1.jpg', title: 'Film/Documentary Editing', categoryLabel: 'Video Production', type: 'video' },
    { id: 17, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/ProductDemo&TutorialVideos_1.jpg', title: 'Product Demo & Tutorial Videos', categoryLabel: 'Video Production', type: 'video' },
    { id: 18, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/AI-PoweredVideoEditing_1.jpg', title: 'AI-Powered Video Editing', categoryLabel: 'Video Production', type: 'video' },
    { id: 19, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/CINEMATICVIDEOS_1.jpg', title: 'Cinematic Videos', categoryLabel: 'Video Production', type: 'video' },
    
  ]

  return (
    <section className="work-stand section-padding sub-bg desktop:px-40">
      <div className="container-xxl">
        <div className="row">
          {/* filter links */}
          <div className="filtering col-12 mb-50 text-center">
            <div className="filter">
              <span className="text">Filter By :</span>
              <span data-filter="*" className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleFilterClick("*")}

              >
                Show All
              </span>
              <span
                data-filter=".graphic" className={activeFilter === ".graphic" ? "active" : ""}
                onClick={() => handleFilterClick(".graphic")}
                >
                Graphic Design
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
            <div key={item.id} className={`col-lg-4 col-md-6 items ${item.category}`}>
              <div className="item mb-40">
                <div className="img">
                  <img src={`${item.imgSrc[0]}`} alt={item.title} />
                </div>
                <div className="cont mt-20">
                  <h5 className="fz-22">
                    <a href="#">{item.title}</a>
                  </h5>
                  <p>
                    <a onClick={() => openModal(item.imgSrc[1])}>{item.categoryLabel} <span className="icon ti-arrow-top-right text-xl tablet:text-xl"></span></a>
                  </p>
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
