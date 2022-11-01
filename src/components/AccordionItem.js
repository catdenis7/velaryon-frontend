export default function AccordionItem({accordionItem}) {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
    {accordionItem.map((accordionItem, index) => {
        let heading = "panelsStayOpen-heading" +JSON.stringify(index);
        let collapseOne = "panelsStayOpen-collapse" +JSON.stringify(index);
        let collapseTwo = "#panelsStayOpen-collapse" +JSON.stringify(index);
        return (  
            <div className="accordion-item">
            <h2 className="accordion-header" id={heading}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={collapseTwo} aria-expanded="true" aria-controls={collapseOne}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {index + 1} Venta - 
                    </div>
                    <div className="col">
                        {new Date(accordionItem.date).toLocaleString()}
                    </div>
                    <div className="col">
                        Cantidad: {accordionItem.orderQuantity}
                    </div>
                    <div className="col">
                        SUB TOTAL: {accordionItem.total}
                    </div>
                </div>
            </div>
            </button>
            </h2>
            <div id={collapseOne} className="accordion-collapse collapse show" aria-labelledby={heading}>
                <div className="accordion-body">
                    <div className="container">
                        <div className="row">
                            <div className="col"><strong>Cantidad</strong></div>
                            <div className="col"><strong>Producto</strong></div>
                            <div className="col"><strong>Precio Unitario</strong></div>
                            <div className="col"><strong>Total</strong></div>
                        </div>
                        {accordionItem.lines.map((item, key) => {
                            return (
                                <div className="row">
                                    <div className="col">{item.quantity}</div>
                                    <div className="col">{item.product}</div>
                                    <div className="col">Bs. {item.price}</div>
                                    <div className="col">Bs. {item.total}</div>
                                </div>
                            );
                        })}                
                  </div> 
                </div>
            </div>
        </div>

        );
    })}
    </div>
  );
}
