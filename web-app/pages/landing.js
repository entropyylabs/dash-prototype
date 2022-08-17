/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blob1 from "../assets/Blob1.png";
import Blob2 from "../assets/Blob2.png";
import Blob3 from "../assets/Blob3.png";
import exploreArrow from "../assets/explore-arrow.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="moving-images">
        <div className="box">
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0x3fe1a4c1481c8351e91b64d5c398b159de07cbc5:3803" />
          </span>
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:653493" />
          </span>
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1124709" />
          </span>
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:635149" />
          </span>
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:943057" />
          </span>
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:637607" />
          </span>
          <span>
            <img src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1134916" />
          </span>
          <span>
            <img src="https://lh3.googleusercontent.com/lL9ZsPfeOrGyiO6W82bwPb6A_pZwueVaR1QmTVy6ErTqZzO9SFN5MC9y_uit8J2UDRF0-MnUBtgk9t_aLm4MjyWb3cbRlhHWMo9r=s250" />
          </span>
        </div>
      </div>
      <h4 className="left-text">Create. Mint. Sell.</h4>
      {/* <div className='featured'>
        <h4>Featured Creators</h4>
        <ul>
          <li>John Doe</li>
          <li>Sara9823</li>
          <li>Unique1234</li>
          <li>9856Hello</li>
        </ul>
      </div> */}
      <div className="explore">
        <div className="explore-text">
          <Link passHref href="/homepage">
            <a>
              <h4>Explore</h4>
            </a>
          </Link>
        </div>
        <div className="blob2">
          <Image src={Blob2} alt="blob" />
        </div>
        <div className="explore-arrow">
          <Image src={exploreArrow} alt="arrow" />
        </div>
      </div>
      <div className="blob1">
        <Image src={Blob1} alt="blob" />
      </div>
      <div className="blob3">
        <Image src={Blob3} alt="blob" />
      </div>
    </div>
  );
}

export default LandingPage;
