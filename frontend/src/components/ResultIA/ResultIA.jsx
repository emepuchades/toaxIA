import React, { useState, useEffect } from "react"
import Tweet from "../TweetMore/Tweet"
import Characteristics from "../Characteristics/Characteristics"
import { TwitterShareButton, TwitterIcon} from 'react-share';

function ResultIA({ data }) {
    const percentageTotal = useState(data.timelineUser.totalPercentage)
    const tweetMore = useState(data.timelineUser)

    return (
        <div className="self-center">
            <div className="relative">
                <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="relative">
                        <div className="flex">
                            <img className='rounded-full w-20 h-20' src={data.profileURL} alt="timeline" />
                            <p className="self-center ml-10">{data.username}</p>
                            <TwitterShareButton
                                url={'https://twitter.com/'}
                                title={'Toax'}
                                //imageURL={props.data.product_info.image_path}
                                children={<TwitterIcon size={32} round={true} />}
                            />
                        </div>
                    </div>
                    <Characteristics 
                        percentageTotal={percentageTotal} />
                    <Tweet
                        tweet={tweetMore}
                        profileURL={data.profileURL}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResultIA
