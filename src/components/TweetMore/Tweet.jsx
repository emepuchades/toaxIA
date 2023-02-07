import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Tweet.style.css'

function Tweet({ tweet, profileURL }) {
  const confidences = tweet[0].tweetMore
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div class="mb-5">
      <Slider {...settings}>
        {confidences.Positivo.confidence !== 0 ?
          <div>
            <p class='flex w-screen mb-3'>Tweet de carácter más  positivo:</p>
            <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="tweet-header">
                <img className='image-tweet rounded-full' src={profileURL} alt="timeline" />
              </div>
              <div className="tweet-content">{confidences.Positivo.input}</div>
            </div>
          </div> : null}
        {confidences.Toxico.confidence !== 0 ?
          <div>
            <p class='flex w-screen mb-3'>Tweet de carácter más Tóxico:</p>
            <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="tweet-header">
                <img className='image-tweet rounded-full' src={profileURL} alt="timeline" />
              </div>
              <div className="tweet-content">{confidences.Toxico.input}</div>
            </div>
          </div> : null}
        {confidences.Developer.confidence !== 0 ?
          <div>
            <p class='flex w-screen mb-3'>Tweet de carácter más  Developer:</p>
            <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="tweet-header">
                <img className='image-tweet rounded-full' src={profileURL} alt="timeline" />
              </div>
              <div className="tweet-content">{confidences.Developer.input}</div>
            </div> </div> : null}
        {confidences.Gamer.confidence !== 0 ?
          <div>
            <p class='flex w-screen mb-3'>Tweet de carácter más  Gamer:</p>
            <div class="tweet w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="tweet-header">
                <img className='image-tweet rounded-full' src={profileURL} alt="timeline" />
              </div>
              <div className="tweet-content">{confidences.Gamer.input}</div>
            </div>
          </div> : null}
      </Slider>
    </div>

  )
}

export default Tweet