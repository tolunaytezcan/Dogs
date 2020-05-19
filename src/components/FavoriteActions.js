import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite, showStatus } from "../redux/actions";

const FavoriteActions = (props) => {
  const found = props.favorites.find((fav) => fav.dogId === props.id);
  return (
    <div>
      {found ? (
        <Button
          disabled={props.loadingID === props.id}
          color="warning"
          onClick={() => {
            props.deleteFavorite(found.id, props.id);
          }}
        >
          Favorite ✓
        </Button>
      ) : (
        <Button
          disabled={props.loadingID === props.id}
          color="primary"
          onClick={() => {
            props.addFavorite(props.id);
          }}
        >
          Add to Favorites
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteReducer,
    loadingId: state.statusReducer.loadingId,
  };
};

const mapDispatchToProps = {
  addFavorite: addFavorite,
  deleteFavorite: deleteFavorite,
  showStatus: showStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);
