import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from "../actions/index";

class CharacterListView extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      return <p>Loading</p>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchChars
    /* action creators go here */
  }
)(CharacterListView);
