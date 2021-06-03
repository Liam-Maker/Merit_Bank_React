import React from 'react';
import '../App.css';

class Footer extends React.Component {

    render() {
        return (
            <footer className="page-footer font-small bg-dark text-light pt-5">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase font-weight-bold">Text 1</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus erat urna. Ut scelerisque
                            scelerisque nunc sed lobortis.
              </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">Text 2</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus erat urna. Ut scelerisque
                            scelerisque nunc sed lobortis.
              </p>
                        </div>

                    </div>

                </div>

                <div className="footer-copyright text-center py-3">© 2021 Copyright: <a href="#">Merit Bank</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
