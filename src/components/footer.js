import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer class="page-footer font-small bg-dark text-light pt-5">
                    <div class="container text-center text-md-left">
                        <div class="row">
                            <div class="col-md-6 mt-md-0 mt-3">
                                <h5 class="text-uppercase font-weight-bold">Text 1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus erat urna. Ut
                                scelerisque
                    </p>
                            </div>

                            <hr class="clearfix w-100 d-md-none pb-3" />
                            <div class="col-md-6 mb-md-0 mb-3">
                                <h5 class="text-uppercase font-weight-bold">Text 2</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus erat urna. Ut
                                scelerisque

                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3"> © 2021 Copyright:
            <a href="#"> Merit Bank</a>
                    </div>


                </footer>
            </div>
        )
    }
}

export default footer
