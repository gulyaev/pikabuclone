import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component, message) => {
  class RedirectComponent extends React.Component {
    render() {
      //   if (!this.props.isAuth) {
      //     alert(message);
      //     return <Navigate to={"/login"} />;
      //   }
      return <Component {...this.props} />;
    }
  }

  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedRedirectComponent;
};
