import React from 'react'

const Slider = () => {
    return (
        <div>
            <div class="card ">
                <img src="https://img.freepik.com/premium-photo/young-woman-doing-healthcare-indian-traditional-treatment-ayurveda-body-constitution-centre_175356-9400.jpg?w=740" class="card-img" alt="..." />
                <div class="card-img-overlay d-flex  flex-column justify-content-around">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bold ">Ayurvedic</h5>
                        <p class="card-text ">This is a wider card with supporting text</p>
                        <p class="card-text ">Last updated 3 mins ago</p>
                        <button className='btn btn-outline-dark'>Countact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider