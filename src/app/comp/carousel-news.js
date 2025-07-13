"use client";
import "./carousel.css";
import { useRef } from "react";
import { HiOutlineCube } from "react-icons/hi2";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineStairs } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import posts from '../database/posts.json'

export default function Carosuel1() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="slider-item">
        <div className="item-header">
          <p>ახალი დამატებული</p>
          <div className="dotebi">
          <a href="#">ყვეალს ნახავ</a>
         <button onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
          </div>
        </div>
        <div className="carousel-items"  ref={scrollRef}>
           {posts && posts.map((i, index) => (
                      <div className="item" key={index} >
                      <div className="item-img">
                        <img
                          src={i.image}
                          alt={i.title}
                        />
                        <div className="item-img-details">
                          <span>
                            <HiOutlineCube /> {i.details.size} მ²
                          </span>
                          <span>
                            <LuBedDouble /> {i.details.bedrooms}
                          </span>
                          <span>
                            <MdOutlineStairs /> {i.details.floor}
                          </span>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="hour">
                          <p>3 საათი</p>
                          <b>{i.prices.price1} ₾</b>
                        </div>
                        <div className="hour">
                          <p>6 საათი</p>
                          <b>{i.prices.price2} ₾</b>
                        </div>
                        <div className="hour">
                          <p>24 საათი</p>
                          <b>{i.prices.price3} ₾</b>
                        </div>
                      </div>
                      <div className="item-title">
                        <p>{i.title}</p>
                      </div>
                      <div className="item-loc">
                        <a href="#">
                          <FaLocationDot /> {i.loc}
                        </a>
                      </div>
                    </div>
                    ))}
  
        </div>
      </div>
    </>
  );
}
