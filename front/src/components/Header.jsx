import React from 'react'
import '../assets/header.css'
import { BiSearch } from 'react-icons/bi';
//salam
const Header = () => {
    return (
        <div className='Header'>
            <div className="my-container">
                <div className="row">
                    <div className="col-lg-2">
                        <img style={{ width: '70%' }} src="https://global-uploads.webflow.com/6241bcd9e666c1d615014606/6241bd08b22d0af074a9fb1b_Nft-Mint-Radar.png" alt="" />
                    </div>
                    <div className="col-lg-8 header_center ">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Collectors</a>
                                <ul className='header_Collectors'>
                                    <li><br /><div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a><p>7 items</p></div> <br />
                                        <div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a><p>7 items</p></div>  <br />
                                        <div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a><p>7 items</p> </div>  <br /></li>
                                    <li><br /><div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a> <p>7 items</p></div> <br />
                                        <div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a> <p>7 items</p></div>  <br />
                                        <div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a> <p>7 items</p> </div>  <br /></li>
                                    <li><br /><div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a> <p>7 items</p></div> <br />
                                        <div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a> <p>7 items</p></div>  <br />
                                        <div className='seid'> <img src="https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png-70x70.png" alt="" /><a href="#">Web Development</a> <p>7 items</p> </div>  <br /></li>
                                </ul>
                            </li>
                            <li><a href="#">NFT Marketplace</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <div className="Header_right">
                            <BiSearch className='Header_search' />
                            <span>Sign in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header