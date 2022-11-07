import React from 'react';
import { Card } from 'react-bootstrap';
import ProspectCard from './cards/ProspectCard';
import ContactCard from './cards/ContactCard';
import ClientCard from './cards/ClientCard';
import FrecuentCard from './cards/FrecuentCard';
export default function(props) {
    // console.log(props);
    const cards = props.props.map((item) => {
        switch (props.name) {
            case "PROSPECTOS":
                return <div><ProspectCard props={item} callback={props.callback} ></ProspectCard><br></br></div>
            case "CONTACTOS":
                return <div><ContactCard props={item} callback={props.callback}></ContactCard><br></br></div>
            case "CLIENTES":
                return <div><ClientCard props={item}></ClientCard><br></br></div>
            case "CLIENTES FRECUENTES":
                return <div><FrecuentCard props={item}></FrecuentCard><br></br></div>
        }
    })
    // console.log({ "DashboardColumn": "", props: props.name });
    return <Card style={{ background: '#bccac3', borderRadius: '25px' }}>
        <Card.Title style={{ textAlign: 'center', borderRadius: '25px' }}>
            <p></p>
        </Card.Title>
        <Card.Subtitle style={{ textAlign: 'center', background: '#bccac3', borderRadius: '25px' }}>
            <h4 style={{ fontWeight: 'bold', color: '#434846' }}>{props.name}</h4>
        </Card.Subtitle>
        <Card.Body style={{ background: '#86a1ac', borderRadius: '0px 0px 25px 25px', overflowY: "auto", maxHeight : "100vh" }}>
            {cards}
        </Card.Body>
    </Card>
}

// <ProspectCard props=
//     {{ name: 'Fabiana', lastName: 'Solares', profilePicture: 'https://scontent.fcbb2-1.fna.fbcdn.net/v/t31.18172-8/22047714_10213965855850367_5749756436944650838_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0KlXh57vnJgAX92Je5h&_nc_ht=scontent.fcbb2-1.fna&oh=00_AfDkjTRsZxzC2HfcsQg3FONBQOBGKrUxbmYUDi-ZT_2Dew&oe=637F905E' }}
// ></ProspectCard>
// export default DashboardColumn;
