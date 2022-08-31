import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import { Contador } from "../components/Contador/Contador"

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
                </CardBody>
                <CardFooter>
                    Stock {stock} - 
                    {precio}
                </CardFooter>
            </Card>
        </>
    )
}

