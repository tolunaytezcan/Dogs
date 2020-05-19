import React from "react";
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";

class Homepage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.loadingFavorites) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={`/tur`}>
              <b>All Breeds</b>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        {dogs.map((dog) => {
          return <Dog key={dog.id} id={dog.id} {...dog} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteReducer,
    loadingFavorites: state.statusReducer.loadingFavorites,
  };
};

const mapDispatchToProps = {
  fetchData: fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
