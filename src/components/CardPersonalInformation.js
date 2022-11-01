import capibaraPic from "../assets/images/Capibara formal-modified.png";
import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
// import "bootstrap/dist/css/bootstrap.min.css";
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
                                    <h2 className="user-name">{cardItem.name} {cardItem.lastName}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <i><BsFillTelephoneFill /></i>
                                    {cardItem.phoneNumber}
                                </div>
                                <div className="col-4">
                                    <i><HiMail /></i>
                                    {cardItem.email}
                                </div>
                                <div className="col-4">
                                    <i><BsLink45Deg /></i>
                                    {cardItem.url}
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
