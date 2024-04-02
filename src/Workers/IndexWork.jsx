import React from 'react'
import NavWorker from './NavWorker'

const IndexWork = () => {
    return (
        <div>
            <NavWorker/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://png.pngtree.com/background/20210717/original/pngtree-technology-glowing-lines-background-picture-image_1441111.jpg" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-corporate-culture-employee-style-poster-background-material-image_125216.jpg" class="d-block w-100" alt="..."/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://t4.ftcdn.net/jpg/03/11/50/71/360_F_311507184_0mErEL2kUw7z4AbXhsxPjFE7hQnY7BLy.jpg" class="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexWork