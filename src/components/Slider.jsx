// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="showcase">
            <img
              src="https://images.unsplash.com/photo-1505410603994-c3ac6269711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/travel-agent-hearing-customer-desires-portrait-good-looking-european-businesswoman-blue-blouse-glasses-holding-hands-pockets-smiling-being-friendly-polite-gray-wall_176420-25025.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/amazing-blonde-woman-trendy-summer-outfit-posing-outdoors_273443-3070.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/elegant-black-couple_1157-21683.jpg?size=626&ext=jpg&ga=GA1.1.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/studio-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1118.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/stunning-tanned-model-with-voluminous-curly-hairstyle-shiny-golden-dress-satin-blazer-sitting-beige-floor_273443-4356.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/surprised-white-woman-striped-pants-sitting-purple-wall-with-mouth-open-indoor-photo-amazed-curly-girl-fur-jacket-posing-chair_197531-5164.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/young-back-woman-holding-her-phone-twisting-end-bit-her-hair_181624-45803.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="showcase">
            <img
              src="https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
              alt="Picture"
            />
            <div className="overlay">
              <h2>Background Overlay</h2>
              <p>
                It's just a simple overlay without using the background-image
                property in CSS
              </p>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
