import React from "react";
import dogsdata from "../dogsdata";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const DetailDogs = ({ match }) => {
  const { id } = match.params;
  const secilen = dogsdata.find((secilen) => secilen.id === id);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={`/tur/${secilen.breedSlug}`}>
            <b>{secilen.breed}</b>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <b>{secilen.name}</b>
        </BreadcrumbItem>
      </Breadcrumb>
      <table>
        <tbody>
          <tr>
            <td
              style={{
                height: "200px",
                width: "400px",
                border: "3px solid #73AD21",
              }}
            >
              <img src={secilen.image} alt="dog"></img>
            </td>
            <td>
              <Card style={{ height: "400px", fontWeight: "bold", }}>
                <CardBody>
                  <CardTitle>
                    Dog Name: {secilen.name}
                    <br />
                  </CardTitle>
                  <CardSubtitle>
                    Dog ID: {id} <br />
                  </CardSubtitle>
                  <CardText>
                    Dog Age: {secilen.age}
                    <br />
                    Dog Breed: {secilen.breed}
                    <br />
                    Description {secilen.description}
                    <br />
                    Published: {secilen.published_at}
                    <br />
                  </CardText>
                </CardBody>
              </Card>
            </td>
          </tr>
        </tbody>
      </table>
      <hr/>
            <Link to={`/`}><h6>Return Homepage</h6></Link>
    </div>
  );
};

export default DetailDogs;
