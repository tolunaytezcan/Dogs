import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function Turler() {
    return (
        <div style={{
            width: "1000px",
            height: "500px",
            display: "inline-block",
        }}>
            <Breadcrumb>
            <BreadcrumbItem>
          <Link to={`/`}>
            <b>Homepage</b>
          </Link>
        </BreadcrumbItem>
                <BreadcrumbItem >
                    <b>All Breeds</b>
                </BreadcrumbItem >
            </Breadcrumb>

            <ListGroup >
                <ListGroupItem>
                    <Link to={`/tur/cavalier-king-charles-spaniel`}>
                        <h6>Cavalier King Charles Spaniel</h6>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/golden-retriever`}>
                        <h6>Golden Retriever</h6>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/chihuahua`}>
                        <h6>Chihuahua</h6>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/shepherd`}>
                        <h6>Shepherd</h6>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/others`}>
                        <h6>Others</h6>
                    </Link>
                </ListGroupItem>
            </ListGroup>



            <hr />
            <Link to={`/`}><h6>Return Homepage</h6></Link>
        </div>
    );
}
