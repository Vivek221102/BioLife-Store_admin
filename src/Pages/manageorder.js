import React, { useState ,useEffect} from 'react';
import Axios from 'axios'

function Manageorder(){
const [list, setlist] = useState(['']);
useEffect(()=>{

    Axios.get("http://localhost:1121/api/fetchordervals").then((response)=>{
        setlist(response.data);
    })

},[])

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
    return(
    <>
        <section class="content">
    <div class="body_scroll">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Order's Details</h2>
                    
                    <button class="btn btn-primary btn-icon mobile_menu" type="button"><i class="zmdi zmdi-sort-amount-desc"></i></button>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">                
                    <button class="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i class="zmdi zmdi-arrow-right"></i></button>                                
                </div>
            </div>
        </div>

        <div class="container-fluid">
            
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-striped m-b-0">
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Oreder ID</th>
                                            <th>User Name</th>
                                            <th data-breakpoints="xs">when oredered</th>
                                            <th data-breakpoints="xs">Quantity</th>
                                            <th data-breakpoints="xs">View Invoice</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>


 { list.map((val,index)=>{
        return(
        <>
            <tbody>
                <tr>
                    <td>{index+1}</td>
                    <td>{val.book_id}</td>
                    <td>vivek</td>
                    <td>{formatDate(val.when_oredered)}</td>
                    {/* <td><img src={"http://localhost:1121/public/" +val.p_img } alt="dd" style={{width:"67px", height:"150px"  }}  class="product-thumnail"/></td>  */}
                    <td>{val.qty}</td>
                    <td></td>
                    <td><button  class="btn btn-primary btn-block"><i class="zmdi zmdi-hc-fw"></i> </button></td> 
                </tr>
                                       
                                        
            </tbody>
                                    
            </>
                )
                    })
 }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
    )
}export default Manageorder