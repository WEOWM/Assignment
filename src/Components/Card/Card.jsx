import React from 'react'
import "./Card.css"
import Data from '../../Data.json'

const Card = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row d-flex  ">



                    {
                        Data.map((data) => {
                            return (
                              <div className='col-12 col-md-4'>
                                <img className='w-100' src={data.image} alt="" />
                                <p>{data.title}</p>
                              </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Card