import Accordion from "react-bootstrap/Accordion";
export default function FrecuentDetailAccordion({ buyDetail }) {
  return (
    <>
      {buyDetail.map((items, index) => {
        return (
          <Accordion defaultActiveKey="0" key={items.id}>
            <Accordion.Item
              eventKey="1"
              style={{ backgroundColor: "#eeeeee" }}
            >
              <Accordion.Header>
                <div className="row">
                  <div className="col">{index + 1} Venta -</div>
                  <div className="col">{items.date}</div>
                  <div className="col">Cantidad: {items.orderQuantity}</div>
                  <div className="col">SUB TOTAL: {items.total}</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col">
                    <strong>Cantidad</strong>
                  </div>
                  <div className="col">
                    <strong>Producto</strong>
                  </div>
                  <div className="col">
                    <strong>Precio Unitario</strong>
                  </div>
                  <div className="col">
                    <strong>Total</strong>
                  </div>
                </div>
                {items.lines.map((nestedItem, index) => {
                  return (
                    <div className="row" key={nestedItem.id}>
                      <div className="col">{nestedItem.quantity}</div>
                      <div className="col">{nestedItem.product}</div>
                      <div className="col">Bs. {nestedItem.price}</div>
                      <div className="col">Bs. {nestedItem.total}</div>
                    </div>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
}
