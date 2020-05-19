import React from "react";
import dogs from "../dogsdata";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem,Breadcrumb, BreadcrumbItem } from "reactstrap";


const FilteredDogs = (props) => {
    const secilenTur = props.match.params.yazilanTur;
    const filteredDogs = dogs.filter((dog) => dog.breedSlug === secilenTur);
    const turismi = dogs.find((dog) => dog.breedSlug === secilenTur);
    return (
        <div >
            <Breadcrumb>
        <BreadcrumbItem>
          <Link to={`/tur`}>
            <b>All Breeds</b>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
        <b>{turismi.breed}</b>
        </BreadcrumbItem>
      </Breadcrumb>
            
            <ListGroup >
                <ListGroupItem>
                    {filteredDogs.map((dog) => {
                        return (
                            <ListGroupItem>
                                <Link to={`/detay/${dog.id}/${dog.name}`}>
                                    <h6>{dog.name}</h6>
                                </Link>
                                </ListGroupItem>
                        );
                    })}
                </ListGroupItem>
            </ListGroup>
            <Link to={`/`}>
                <h6>Return Homepage</h6>
            </Link>
        </div>
    );
};

export default FilteredDogs;
