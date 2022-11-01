import Accordion from "react-bootstrap/Accordion";
export default function FrecuentAccordion({ notifications }) {
  return (
    <>
      {notifications.map((items, index) => {
        return (
          <Accordion defaultActiveKey="0" key={index}>
            <Accordion.Item eventKey="1" style={{ backgroundColor: "#eeeeee" }}>
              <Accordion.Header>
                <h5>
                  {index + 1}. Notificación -{" "}
                  {new Date(items.date).toLocaleString() ?? "N/A"}
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "bold" }}>Mensaje enviado: </span>
                <span>{items.message}</span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
}
