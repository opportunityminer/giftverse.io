import Image from "next/image";
import React from "react";
import Link from "next/link";
import { gifts } from "../home-two/top-rated-gifts";
import { formatString } from "@/app/(common)/gift-review/[title]/page";

const BestGifts = () => {
  return (
    <section className="best-gifts overflow-x-hidden">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div data-aos="fade-in" className="col-lg-6">
            <div className="box-lg">
              <h4 className="fw-semibold bb-dashed">Top Gift list</h4>
              <div className="gift-list overflow-x-auto">
                <table className="w-100 whitespace-nowrap">
                  <tbody>
                    {brokers.slice(0, 5).map(({ image, rating, title }) => (
                      <tr key={title}>
                        <td>
                          <div className="px-2">01</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3 px-3 px-lg-4 py-2 py-lg-3">
                            <Image src={image} className="img-fluid" alt="" />
                            <p className="m-text fw-medium">{title}</p>
                          </div>
                        </td>
                        <td>
                          <div className="f-center gap-2 px-4">
                            <span className="text-secondary fs-4 f-center">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="m-text fw-medium">{rating}</p>
                          </div>
                        </td>
                        <td>
                          <Link href={`/gift-review/${formatString(title)}`} className="btn-sm btn btn-outline-secondary rounded-5 py-2 px-4">
                            View Link
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-lg-6 col-xl-5 offset-xl-1">
            <h2 className="display-4 mb-3 mb-xl-4 fw-bold">Discover the Best Gifts in the Universe</h2>
            <p className="mb-4 mb-xl-5">Giftverse helps you find unique, thoughtful, and trending gifts loved by people everywhere — all in one magical place.</p>
            <Link href="/best-gifts-2026" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              See All Gifts <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestGifts;
