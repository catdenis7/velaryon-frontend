import React from "react";
import capibaraPic from "../../assets/images/Capibara formal-modified.png"

import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";


export default function(props) {
    let data = props.props;
    return (
        <div className="row align-items-center" style={{ display: 'flex' }}>
            <div style={{display : 'flex'}}>
                <img
                    src={data.profilePicture}
                    alt="Patito Pic"
                    className="img-card"
                />
                <div style={{marginLeft : 'auto'}}>
                    <span
                        style={{
                            color: "#406e73",
                            fontWeight: "800",
                        }}
                    >
                        <small>{data.facebookName ?? (data.name + " " + (data.lastname ?? data.lastName) )}</small>
                    </span>
                    <br></br>
                    <BsFillTelephoneFill style={{ marginRight: 5 }} color={"#406e73"} />
                    <small style={{ color: 'black' }}>{data.phone ?? data.phoneNumber ?? 'N/A'}</small>
                    <br></br>
                    <HiMail color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>{data.email ?? 'N/A'}</small>
                    <br></br>
                    <BsLink45Deg color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>{data.link ?? 'N/A'}</small>
                </div>
            </div>
        </div>
    );
}
