import React, { useState } from 'react';

const WorkSection = () => {
  const [filter, setFilter] = useState('*');

  // Handle the filter change
  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const categories = [
    { id: 1, category: 'graphic', imgSrc: 'assets/imgs/amazon_listings/AMAZON_A1.jpg', title: 'Amazon Listings', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 2, category: 'graphic', imgSrc: 'assets/imgs/ui_ux/UI_A1.jpg', title: 'UI-UX', categoryLabel: 'Graphic Design', categoryLink: 'assets/imgs/ui_ux/UI_A2.jpg' },
    { id: 3, category: 'graphic', imgSrc: 'assets/imgs/social_media/BikeShop_1.jpg', title: 'Social Media Ads', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 4, category: 'graphic', imgSrc: 'assets/imgs/brands/BRANDING_FROH_1.jpg', title: 'Branding & Visual Identity', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 5, category: 'graphic', imgSrc: 'assets/imgs/motion/creativeplay_1.jpg', title: 'Motion Graphics & Animation', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 6, category: 'graphic', imgSrc: 'assets/imgs/packaging/AVENUE_1.jpg', title: 'Packaging Design', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 7, category: 'graphic', imgSrc: 'assets/imgs/print/Printables_Thumbnail.jpg', title: 'Print Design', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 8, category: 'graphic', imgSrc: 'assets/imgs/ai/aie_1.jpg', title: 'AI-Assisted Design', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 9, category: 'graphic', imgSrc: 'assets/imgs/sticker/StickerWrap_Thumbnail.jpg', title: 'Sticker Wrap', categoryLabel: 'Graphic Design', categoryLink: '#' },
    { id: 10, category: 'web', imgSrc: 'assets/imgs/web/system_THUMBNAIL.jpg', title: 'Web Development', categoryLabel: 'Website Development', categoryLink: '#' },
    { id: 11, category: 'web', imgSrc: 'assets/imgs/web/wd_1.jpg', title: 'System Development', categoryLabel: 'System Development', categoryLink: '#' },
    { id: 12, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/SocialMediaVideoEditing_1.jpg', title: 'Social Media Video Editing', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 13, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/YouTubeVideoEditing_1.jpg', title: 'YouTube Video Editing', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 14, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/CorporateVideoEditing_1.jpg', title: 'Corporate Video Editing', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 15, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/EventVideoEditing_1.jpg', title: 'Event Video Editing', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 16, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/FilmDocumentaryEditing_1.jpg', title: 'Film/Documentary Editing', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 17, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/ProductDemo&TutorialVideos_1.jpg', title: 'Product Demo & Tutorial Videos', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 18, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/AI-PoweredVideoEditing_1.jpg', title: 'AI-Powered Video Editing', categoryLabel: 'Video Production', categoryLink: '#' },
    { id: 19, category: 'video', imgSrc: 'assets/imgs/video/thumbnail/CINEMATICVIDEOS_1.jpg', title: 'Cinematic Videos', categoryLabel: 'Video Production', categoryLink: '#' },
    
  ]

  return (
    <section className="work-stand section-padding sub-bg desktop:px-40">
      <div className="container-xxl">
        <div className="row">
          {/* filter links */}
          <div className="filtering col-12 mb-50 text-center">
            <div className="filter">
              <span className="text">Filter By :</span>
              <span data-filter="*" className='active'
              >
                Show All
              </span>
              <span
                data-filter=".graphic"
                >
                Graphic Design
              </span>
              <span
                data-filter=".web"
              >
                Web Solutions
              </span>
              <span
              data-filter=".video"
                // onClick={() => handleFilterChange('.video')}
              >
                Video Production
              </span>
              
            </div>
          </div>
        </div>

        <div className="gallery row stand-marg">
          {categories.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 items ${item.category}`}>
              <div className="item mb-40">
                <div className="img">
                  <img src={`${item.imgSrc}`} alt={item.title} />
                </div>
                <div className="cont mt-20">
                  <h5 className="fz-22">
                    <a href="#">{item.title}</a>
                  </h5>
                  <p>
                    <a href="#">{item.categoryLabel} <span class="icon ti-arrow-top-right text-xl tablet:text-xl"></span></a>
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
