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
                    <h2 className="user-name">
                      <p>
                        {items.name} {items.lastName}
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <i>
                      <BsFillTelephoneFill />
                    </i>
                    {items.phoneNumber}
                  </div>
                  <div className="col-3">
                    <i>
                      <HiMail />
                    </i>
                    {items.email}
                  </div>
                  <div className="col-3">
                    <i>
                      <BsLink45Deg />
                    </i>
                    {items.facebookLink}
                  </div>
                  <div className="col-3"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
