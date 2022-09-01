import React from "react";
import "./Userreview.css";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
export default function Userreview() {
  return (
    <div className="py-4 py-sm-5">
      <div className="container">
        <h2 className="h4 mb-4">Over 200,000 user recommendations</h2>
        <div className="user-review">
          <article className="shadow-sm p-3 pb-4 article-card">
            <ul className="list-unstyled d-flex">
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
            </ul>
            <q className=" d-block pe-2">
              Great platform, very efficient and works really well on both phone
              and web. I think this is the most easiest way of booking
              appointments in Pakistan as it has made the whole process much
              more efficient.
            </q>
            <cite>
              <figure className="m-0 rounded-circle d-block overflow-hidden ">
                <img src="/umer.png" alt="" className="img-fluid " />
              </figure>
              Umer Fayyaz
            </cite>
          </article>

          <article className="shadow-sm p-3 pb-4 article-card">
            <ul className="list-unstyled d-flex">
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
            </ul>
            <q className=" d-block pe-2">
              Great platform, very efficient and works really well on both phone
              and web. I think this is the most easiest way of booking
              appointments in Pakistan as it has made the whole process much
              more efficient.
            </q>
            <cite>
              <figure className="m-0 rounded-circle d-block overflow-hidden ">
                <img src="/umer.png" alt="" className="img-fluid " />
              </figure>
              Umer Fayyaz
            </cite>
          </article>

          <article className="shadow-sm p-3 pb-4 article-card">
            <ul className="list-unstyled d-flex">
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
            </ul>
            <q className=" d-block pe-2">
              Great platform, very efficient and works really well on both phone
              and web. I think this is the most easiest way of booking
              appointments in Pakistan as it has made the whole process much
              more efficient.
            </q>
            <cite>
              <figure className="m-0 rounded-circle d-block overflow-hidden ">
                <img src="/umer.png" alt="" className="img-fluid " />
              </figure>
              Umer Fayyaz
            </cite>
          </article>

          <article className="shadow-sm p-3 pb-4 article-card ">
            <ul className="list-unstyled d-flex">
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
            </ul>
            <q className=" d-block pe-2">
              Great platform, very efficient and works really well on both phone
              and web. I think this is the most easiest way of booking
              appointments in Pakistan as it has made the whole process much
              more efficient.
            </q>
            <cite>
              <figure className="m-0 rounded-circle d-block overflow-hidden ">
                <img src="/umer.png" alt="" className="img-fluid " />
              </figure>
              Umer Fayyaz
            </cite>
          </article>

          <article className="shadow-sm p-3 pb-4 article-card">
            <ul className="list-unstyled d-flex">
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
              <li className="me-1 text-warning">
                <AiFillStar />
              </li>
            </ul>
            <q className=" d-block pe-2">
              Great platform, very efficient and works really well on both phone
              and web. I think this is the most easiest way of booking
              appointments in Pakistan as it has made the whole process much
              more efficient.
            </q>
            <cite>
              <figure className="m-0 rounded-circle d-block overflow-hidden ">
                <img src="/umer.png" alt="" className="img-fluid " />
              </figure>
              Umer Fayyaz
            </cite>
          </article>
        </div>
      </div>

      <div className="google-rating-area pt-3 pt-md-4 pb-md-3 pe-md-5">
        <div className="rating-holder d-flex justify-content-md-end align-items-center justify-content-center">
          <FcGoogle className="w-15" />
          <span className="mx-2 text-warning">4.9</span>
          <div className="rating d-inline-block position-relative">
            <span className="text-warning">
              {" "}
              <AiFillStar />
            </span>
            <span className="text-warning">
              {" "}
              <AiFillStar />
            </span>
            <span className="text-warning">
              {" "}
              <AiFillStar />
            </span>
            <span className="text-warning">
              {" "}
              <AiFillStar />
            </span>
            <span className="text-warning">
              {" "}
              <AiFillStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
