import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import sports from '../../assets/sports.png'
import entertaiment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import megan from '../../assets/megan.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ?" ":"small-sidebar"}`}>
        
        <div className="sortcut-links">
            <div className={`side-link ${category===0 ? "active":" "}`} onClick={()=>setCategory(0)}>
                <img src={home} /> <p>Home</p>
            </div>
            <div className={`side-link ${category===20 ? "active":" "}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} /> <p>Gaming</p>
            </div>
            <div className={`side-link ${category===17 ? "active":" "}`} onClick={()=>setCategory(17)}>
                <img src={sports} /> <p>Sports</p>
            </div>
            <div className={`side-link ${category===24 ? "active":" "}`} onClick={()=>setCategory(24)}>
                <img src={entertaiment} /> <p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28 ? "active":" "}`} onClick={()=>setCategory(28)}>
                <img src={tech} /> <p>Tech</p>
            </div>
            <div className={`side-link ${category===10 ? "active":" "}`} onClick={()=>setCategory(10)}>
                <img src={music} /> <p>Music</p>
            </div>
            <div className={`side-link ${category===25 ? "active":" "}`} onClick={()=>setCategory(25)}>
                <img src={news} /> <p>News</p>
            </div>
            <hr />      
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} /> <p>Unsigned</p>
            </div>
            <div className="side-link">
                <img src={simon } /> <p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={megan} /> <p>5-Minute Crafts</p>
            </div>

        </div>
      
    </div>
  )
}

export default Sidebar
