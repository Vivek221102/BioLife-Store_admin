import React, {useState, useEffect} from 'react'
import Axios from 'axios';
function Home(){
const [user, setuser] = useState(0);
const [cat, setcat] = useState(0);
const [item, setitem] = useState(0);
const [oreder, setorder] = useState(0);
useEffect(()=>{
    // Axios.get("http://localhost:1121/api/getusersnums").then((response)=>{
    //         alert(response.data.Count);
    // })
})


    return(
            <>

           <section class="content">
    
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Dashboard</h2>
                    <button class="btn btn-primary btn-icon mobile_menu" type="button"><i class="zmdi zmdi-sort-amount-desc"></i></button>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">                
                    <button class="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i class="zmdi zmdi-arrow-right"></i></button>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card widget_2">
                        <div class="body">
                            <h6>total new Users</h6>
                            <h2>{user}</h2>
                            <small>2% higher than last month</small>
                            <div class="progress">
                                <div class="progress-bar l-amber" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card widget_2">
                        <div class="body">
                            <h6>Total Catagories</h6>
                            <h2>{cat}</h2>
                            <small>6% higher than last month</small>
                            <div class="progress">
                                <div class="progress-bar l-blue" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100" style={{width: "38%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card widget_2 ">
                        <div class="body">
                            <h6>Total Added Products</h6>
                            <h2>{item}</h2>
                            <small>Total Registered email</small>
                            <div class="progress">
                                <div class="progress-bar l-purple" role="progressbar" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{width: "38%"}}> </div>
                            </div>
                        </div>
                    </div>

                    
                       
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card widget_2   ">
                        <div class="body">
                            <h6>Total Orders</h6>
                            <h2>{oreder}</h2>
                            <small>Total Registered Domain</small>
                            <div class="progress">
                                <div class="progress-bar l-green" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: "39%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
            </>
    )
}export default Home