import { render } from "@testing-library/react";

export default function Card(props){
    return <>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className={props.data.classname}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                {props.data.topic}</div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.value}</div>
                                       
                                                </div> 
                                     
                                                <div class="col">
                                                {props.data.hasprogressbar ? 
                                                    
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100">

                                                        </div>
                                                    </div>
                                                    : "" }
                                                </div> 
                                            </div>
                                        </div>   
                                        <div className="col-auto">
                                            <i className= {props.data.icon}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
}