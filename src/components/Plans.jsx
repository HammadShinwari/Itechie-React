import React from 'react'

import '../style/plans.css'

function Plans() {
  return (
    <>
        <div className="plan-container">

            <div className="plan-top-text">

                <div className="plan-l-text">
                    <h3>Pricing Plan</h3>
                    <h1>Let's check our latest price</h1>
                    <p>Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed consequat</p>
                </div>

                <div className="plan-r-text">
                    <button>Discover More Sevices</button>
                </div>

            </div>

            <div className="plan-cards">
                
                <div className="plan-card">

                    <div className="card-header">
                        <h3>Basic Plan</h3>
                        <div className="price">
                            <sub>$</sub>
                            <h2>12</h2>
                            <p>per month build <br /> anually</p>
                        </div>
                    </div>

                    <div className="card-info">
                        <ul>
                            <li>30 Days Trial Features</li>
                            <li>Synced To Cloud Database</li>
                            <li>10 Hours Of Support</li>
                            <li>Social Media Integration</li>
                            <li>Social Media Integration</li>
                        </ul>
                    </div>

                    <div className="card-button">
                        <button>Get Started</button>
                    </div>

                </div>

                <div className="plan-card">

                    <div className="card-header">
                        <h3>Gold Plan</h3>
                        <div className="price">
                            <sub>$</sub>
                            <h2>59</h2>
                            <p>per month build <br /> anually</p>
                        </div>
                    </div>

                    <div className="card-info">
                        <ul>
                            <li>30 Days Trial Features</li>
                            <li>Synced To Cloud Database</li>
                            <li>10 Hours Of Support</li>
                            <li>Social Media Integration</li>
                            <li>Social Media Integration</li>
                        </ul>
                    </div>

                    <div className="card-button">
                        <button>Get Started</button>
                    </div>

                </div>

                <div className="plan-card">

                    <div className="card-header">
                        <h3>Platinum Plan</h3>
                        <div className="price">
                            <sub>$</sub>
                            <h2>99</h2>
                            <p>per month build <br /> anually</p>
                        </div>
                    </div>

                    <div className="card-info">
                        <ul>
                            <li>30 Days Trial Features</li>
                            <li>Synced To Cloud Database</li>
                            <li>10 Hours Of Support</li>
                            <li>Social Media Integration</li>
                            <li>Social Media Integration</li>
                        </ul>
                    </div>

                    <div className="card-button">
                        <button>Get Started</button>
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default Plans