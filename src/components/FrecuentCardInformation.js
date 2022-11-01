import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function FrecuentCardInformation({ personalInformation }) {
  return (
    <div className="user-information-container">
      {personalInformation.map((items, index) => {
        return (
          <div className="container-fluid text-center"  key={items.id}>
            <div className="row">
              <div className="col-3">
                <img
                  src={items.profilePicture}
                  alt="Patito Pic"
                  width={115}
                  className="img-fluid"
                />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col">
                    <h2 className="user-name" style={{color: "#406e73"}}>
                      <p>
                        {items.name} {items.lastName}
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="row" style={{textAlign: "left", alignItems: "center"}}>
                  <div className="col col-lg-3 col-sm-4">
                    <i style={{paddingRight: "1rem"}}>
                      <BsFillTelephoneFill style={{color: "406e73"}}/>
                    </i>
                    <span style={{fontWeight: "600"}}>{items.phoneNumber}</span>
                  </div>
                  <div className="col col-lg-3 col-sm-4">
                    <i style={{paddingRight: "1rem"}}>
                      <HiMail style={{color: "406e73"}}/>
                    </i>
                    <span style={{fontWeight: "600"}}>{items.email}</span>
                  </div>
                  <div className="col col-lg-3 col-sm-4">
                    <i style={{paddingRight: "1rem"}}>
                      <BsLink45Deg style={{color: "406e73"}}/>
                    </i>
                    <span style={{fontWeight: "600"}}>{items.facebookLink}</span>
                  </div>
                  <div className="col col-lg-3 col-sm-4"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
