import { blue } from '@mui/material/colors'
import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import { Contador } from "../components/Contador/Contador"
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
                <img src={img} />
                <CardBody>
                    <CardTitle tag="h5">
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

