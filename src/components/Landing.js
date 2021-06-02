import React from 'react';
import '../App.css';

class Landing extends React.Component {

    render() {
        return (
            <div className="App">

                <div className="mb-3 b12" >
                    <div className="b13"></div>
                </div>

                <div className="container b14" >
                    <div className="d-flex flex-column text-white py-3 align-items-center">
                        <h3 className="h5 text-center">Stay in control of <br />your finances any time.</h3>
                        <h1 className="font-weight-bold text-center pb-3">Open The Account's You Need</h1>
                        <a className="font-weight-bold btn btn-dark btn-lg mb-1 px-5 shadow" href="#">Get Started</a>
                    </div>
                </div>

                <div className="container">
                    <div class="row py-4">
                        <div class="col-md-3 col-sm-6 pb-3 px-2 card-mobile">
                            <div class="card card-body text-center shadow rounded-lg">
                                <p><i class="grey-text fab fa-cc-visa fa-3x"></i></p>
                                <h4 className="grey-text">Credit Cards</h4>
                                <p className="grey-text">Lorem ipsum</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 pb-3 px-2 card-mobile">
                            <div class="card card-body text-center shadow rounded-lg">
                                <p><i class="grey-text fas fa-dollar-sign fa-3x"></i></p>
                                <h4 class="grey-text">Competative Interest Rates</h4>
                                {/* <p className="grey-text">Lorem ipsum</p> */}
                                <i class=""></i>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 pb-3 px-2 card-mobile">
                            <div class="card card-body text-center shadow rounded-lg">
                                <p><i class="grey-text fas fa-tachometer-alt fa-3x"></i></p>
                                <h4 class="grey-text">Free Credit Score</h4>
                                <p className="grey-text">Lorem ipsum</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 pb-3 px-2 card-mobile">
                            <div class="card card-body text-center shadow rounded-lg">
                                <p><i class="grey-text fas fa-mobile-alt fa-3x"></i></p>
                                <h4 class="grey-text">Access</h4>
                                <p className="grey-text">Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-center">
                    <div class="jumbotron">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                </div>

                <div className="container">

                </div>
            </div>
        );
    }
}

export default Landing;
