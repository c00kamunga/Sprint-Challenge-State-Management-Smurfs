import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "./../actions/actions";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="SmurfList-Container">
        <ul className="smurfList">
          {this.props.smurfList.map((smurf, key) => {
            return (
              <li className='smurf' key={key}>
                <h1 className="smurfname">name:{smurf.name}</h1>
                <h2 className="smurfinfo">age:{smurf.age}</h2>
                <h2 className="smurfinfo">height:{smurf.height}</h2>
                <h2 className="smurfinfo">id:{smurf.id}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfList: state.smurfList
});

const mapDispatchToProps = {
  getSmurfs
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);
