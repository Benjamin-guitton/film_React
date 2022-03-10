import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup, Card, CardBody, CardTitle, Button, CardImg, CardSubtitle, CardText} from "reactstrap";

const Movie = ({original_title, poster_path, overview, release_date}) => {
    return (
        <div className='col-3 m-1'>
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {original_title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Synopsis
                        </CardSubtitle>
                        <CardText>
                            {overview}
                        </CardText>
                        <CardText>
                            Date de sortie : {release_date}
                        </CardText>
                        <Button>
                            Voir le film
                        </Button>

                    </CardBody>
                </Card>
            </CardGroup>
        </div>

    )
}

export default Movie;