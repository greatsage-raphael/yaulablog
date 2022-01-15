import {axiosInstance} from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
          const res = await axiosInstance.get("/categories");
          setCats(res.data);
        };
        getCats();
      }, []);


    return (
    <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                   ABOUT ME 
                </span>
                <img src="https://images.unsplash.com/photo-1637092412403-339341decb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ea sed officia, vero saepe sint nulla ipsam sequi aut non!
                </p>
            </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                   CATEGORIES
            </span>
            <ul className="sidebarList">
            {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
            </ul> 
        </div>
        <div className="sidebarItem">FOLLOW US</div>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
    </div>
    )
}
