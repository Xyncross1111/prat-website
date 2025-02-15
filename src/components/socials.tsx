"use client";
import { SocialPost } from "@/components/social-post"
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

export const Socials = () => {

  return (
    <>


      <div className="py-12 px-6 border-white">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Rbu_Src"
      />
      {/* <TwitterTweetEmbed tweetId="1889911898382147889" /> */}

      </div>
    </>
  )
}

