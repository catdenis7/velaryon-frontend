import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
export default function CardPersonalInformation({ personalInformation }) {
    return (
        <div className="user-information-container">
            {personalInformation.map((cardItem, index) => {
                return(
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-3">
                            <img
                                src={cardItem.profilePicture}
                                alt="Patito Pic"
                                className="img-card"
                            />
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col">
                                    <h2 className="user-name" style={{color: "#406e73"}}>{cardItem.name} {cardItem.lastName}</h2>
                                </div>
                            </div>
                            <div className="row" style={{textAlign: "left", alignItems: "center"}}>
                                <div className="col col-lg-3 col-sm-4">
                                    <i style={{paddingRight: "1rem"}}><BsFillTelephoneFill style={{color: "406e73"}}/></i>
                                    <span style={{fontWeight: "600"}}>{cardItem.phoneNumber}</span>
                                </div>
                                <div className="col col-lg-3 col-sm-4">
                                    <i style={{paddingRight: "1rem"}}><HiMail style={{color: "406e73"}}/></i>
                                    <span style={{fontWeight: "600"}}>{cardItem.email}</span>
                                </div>
                                <div className="col col-lg-3 col-sm-4">
                                    <i style={{paddingRight: "1rem"}}><BsLink45Deg style={{color: "406e73"}}/></i>
                                    <span style={{fontWeight: "600"}}>{cardItem.url}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    );
}
