import Accordion from "react-bootstrap/Accordion";
export default function FrecuentAccordion({ notifications }) {
  return (
    <>
      {notifications.map((items, index) => {
        return (
          <Accordion defaultActiveKey="0" key={index}>
            <Accordion.Item eventKey="1" style={{ backgroundColor: "#eeeeee" }}>
              <Accordion.Header>{index + 1}. Notificación - {items.date}</Accordion.Header>
              <Accordion.Body>
                <span style={{fontWeight:"bold"}}>Mensaje enviado:  </span>
                <span>
                 {items.message}
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
}
