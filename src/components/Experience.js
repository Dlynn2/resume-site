import React from 'react';
import 'bootstrap'
import '../css/Experience.css'
import ampdLogo from '../logo_original.png'
import MSULogo from '../Montana_State_Bobcats_logo.svg.png'
import GapFillersLogo from '../gap-fillers-flathead-logo.png'
function Experience() {
    return (
        <div className="Experience">
            <h1 className="top-header">What I'm doing</h1>
            <ul class="list-unstyled">
                <li class="media">
                    <img class="align-self-center mr-3 col-md-4" src={ampdLogo}alt="Generic placeholder image" />
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">AMPD Engagement</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li class="media my-4">
                    <img class="align-self-center mr-3 col-md-4" src={GapFillersLogo} alt="Generic placeholder image" />
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">Gap Fillers Flathead</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li class="media">
                    <img class="align-self-center mr-3 col-md-4" src={MSULogo} alt="Generic placeholder image" />
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">Montana State University</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Experience;