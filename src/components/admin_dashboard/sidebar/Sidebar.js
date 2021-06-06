import "./Sidebar.css";
import logo from "../assets/MA_logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Merit Bank</h1>
                </div>
                <i
                    onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>USER MANAGEMENT</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                    <a href="#">Create User</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Create Account Holder</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Delete Account Holder</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Show Account Holders</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>CD ACCOUNTS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Add CD Offerings</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Show CD Offerings</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Get Best CD Offering</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Clear CD Offerings</a>
                </div>
                <h2>CHECKING & SAVINGS & IRA</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Create Savings Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Create Checking Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Create CD Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Create IRA Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Delete Checking Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Delete Savings Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Delete CD Account</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Delete IRA Account</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>


            </div>
        </div>
    );
};

export default Sidebar;