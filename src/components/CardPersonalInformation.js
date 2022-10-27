import capibaraPic from "../assets/images/Capibara formal-modified.png";
import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
// import "bootstrap/dist/css/bootstrap.min.css";
import { HiMail } from "react-icons/hi";
export default function CardPersonalInformation({CardPersonalInformation}) {
    return (
        <div className="user-information-container">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-3">         
                            <img
                            src="https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=5367504253330521&width=1024&ext=1669488186&hash=AeTFJDupVu3NuKkmmjU"
                            alt="Patito Pic"
                            width={115}
                            className="img-fluid"
                            />                        
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col">
                            <h2 className="user-name">Catherine Gomez</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <i><BsFillTelephoneFill/></i>
                                78945612
                            </div>
                            <div className="col-3">
                                <i><HiMail/></i>
                                cat@gmail.com
                            </div>
                            <div className="col-3">
                                <i><BsLink45Deg/></i>
                                facebook/catherine27.com
                            </div>
                            <div className="col-3">
                                 <button type="submit" className="btn btn-primary btn-submit">
                                    Agregar Detalle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </div>     
    );
  }
  