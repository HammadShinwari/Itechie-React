import React from 'react'

// style
import '../style/workprocess.css';

// images
import img1 from '../images/Service/1.png';
import img2 from '../images/Service/2.png';
import img3 from '../images/Service/3.png';
import img4 from '../images/Service/4.png';


function Workprocess() {
  return (
    <>
        <div className="workProcess">

            <div className="work-top">
                <h2>---- Work Process ----</h2>
                <h1>How to work it</h1>
                <p>Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
            </div>

            <div className="work-cards">

                <div className="work-card">
                    <h2>Select a project</h2>
                    <p>Vestibulum ante ipsumusn eratultrices posu world</p>
                </div>

                <div className="work-card">
                    <h2>Project analysis</h2>
                    <p>Vestibulum ante ipsumusn eratultrices posu world</p>
                </div>

                <div className="work-card">
                    <h2>Execute</h2>
                    <p>Vestibulum ante ipsumusn eratultrices posu world</p>
                </div>

                <div className="work-card">
                    <h2>Deliver result</h2>
                    <p>Vestibulum ante ipsumusn eratultrices posu world</p>
                </div>

            </div>

            <div className="work-bottom">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
            </div>

        </div>
    </>
  )
}

export default Workprocess