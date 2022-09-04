import React from 'react'
import { Button, Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import { Contador } from "../Contador/Contador"
import "./itemCard.scss"

export const ItemCard = (props) => {

    const {nombre, descripcion, img, precio, stock} = props;

    return (
        <>
            <Card
                className="my-2"
                style={{
                    width: '18rem'
                }}
            >
                <img className='imgCard' src={img} alt="sarten" />
                <CardBody>
                    <CardTitle className='cardTitle'>
                        {nombre}
                    </CardTitle>
                    <CardText>
                        {descripcion}
                    </CardText>
                    <Contador stock={stock} />
                <div>
                    <Button className='cardButton' active block color="success" outline size="sm">Ver Detalle</Button>
                </div>
                </CardBody>
                <CardFooter className='cardFooter'>
                    Stock: {stock}  
                    <span>{precio}</span>
                </CardFooter>
            </Card>
        </>
    )
}

