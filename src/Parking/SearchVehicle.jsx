import React from 'react'
import ParkingNav from './ParkingNav'

const SearchVehicle = () => {
  return (
    <div>
        <ParkingNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">VEHICLE NO</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FROM</label>
                            <input type="time" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TO</label>
                            <input type="time" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">SEARCH</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchVehicle