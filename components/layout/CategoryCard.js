import React from "react";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <div className="container hero-categories">
      <div className="row">
        <div className="col-xl-8 col-lg-9 hero-sm">
          <div className="card card-shadow rounded-lg">
            <div className="card-body bg-light" style={{ padding: "30px" }}>
              <div className="row mt-2">
                <div className="col-sm-4">
                  <Link href="/shop/categories/mens">
                    <a className="text-decoration-none text-center text-muted">
                      <img
                        src="/categories/lifestylemens.jpg"
                        className="img-fluid rounded-lg"
                      />
                      <h3 className="pt-3">Men</h3>
                    </a>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link href="/shop/categories/womens">
                    <a className="text-decoration-none text-center text-muted">
                      <img
                        src="/categories/lifestylewomens.jpg"
                        className="img-fluid rounded-lg"
                      />
                      <h3 className="pt-3">Women</h3>
                    </a>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link href="/shop/categories/accessory">
                    <a
                      href=""
                      className="text-decoration-none text-center text-muted"
                    >
                      <img
                        src="/categories/lifestylemasks.jpg"
                        className="img-fluid rounded-lg"
                      />
                      <h3 className="pt-3">Masks</h3>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
