import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FrecuentAccordion from "../components/FrecuentAccordion";
import FrecuentDetailAccordion from "./FrecuentDetailAccordion";
import AccordionItem from "./AccordionItem";
export default function FrecuentBody() {

let buyDetail = [
  {
    id: 0,
    date: '23/10/2022',
    orderQuantity: '2',
    total: '2400',
    lines: [
      {
        id: 0,
        quantity: '2',
        product: 'The Beatles - Let it Be - CD',
        price: '120',
        total: '240'
      }
    ]
  },
  {
    id: 1,
    date: '27/10/2022',
    orderQuantity: '3',
    total: '350',
    lines: [
      {
        id: 0,
        quantity: '1',
        product: 'The Beatles - Hey Jude - CD',
        price: '90',
        total: '90'
      },
      {
        id: 1,
        quantity: '2',
        product: 'Harry Styles - Fine Line - Vinilo',
        price: '130',
        total: '260'
      }
    ]
  }
]

  let notifications = [
    {
      id: 0,
      date: "23/10/2022",
      message: "Estás interesado en el nuevo álbum de Marco Antonio Solis",
    },
    {
      id: 1,
      date: "24/10/2022",
      message: "Estás interesado en el nuevo álbum de Harry Styles",
    },
    {
      id: 2,
      date: "23/11/2022",
      message: "Estás interesado en el nuevo álbum de The Killers",
    },
    {
      id: 3,
      date: "24/11/2022",
      message: "Estás interesado en el nuevo álbum de The Beatles",
    },
  ];

  return (
    <Tabs
      defaultActiveKey="Notificaciones"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Notificaciones" title="Notificaciones">
        <FrecuentAccordion notifications={notifications}></FrecuentAccordion>
      </Tab>
      <Tab eventKey="Detalle de compra" title="Detalle de compra">
        <FrecuentDetailAccordion buyDetail={buyDetail}></FrecuentDetailAccordion>
      </Tab>
    </Tabs>
  );
}
