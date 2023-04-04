import React from 'react'
import './HelpData.css'
import {Link} from 'react-router-dom'
const HelpData = () => {
    return (
        <div>
            <div className='HelpData_controls'>
                <div className='mb-3'>
                    <Link to='#' className='color_helpdata_content'>Creating an Account</Link>
                    <Link href='#' className='color_helpdata_content'>
                        Your Profile</Link>
                    <Link to="#" className='color_helpdata_content'>
                        Friending</Link>
                    <Link to="#" className='color_helpdata_content'>
                        Facebook Dating</Link>
                    <Link to="#" className='color_helpdata_content'>
                        Your Home Page</Link>
                    <Link to="#" className='color_helpdata_content'>
                        Messaging</Link>
                    <Link to="#" className='color_helpdata_content'>
                        Stories</Link>
                    <Link to="#" className='color_helpdata_content'>
                        Your Photos and Videos</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Videos on Watch</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Gaming</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Pages</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Groups</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Events</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Fundraisers and Donations</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Payments</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Marketplace</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Apps</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Facebook Mobile Apps</Link>
                        <Link to="#" className='color_helpdata_content'>
                        Accessibility</Link>
                </div>
            </div>
        </div>
    )
}

export default HelpData
