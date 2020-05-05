import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "./../actions/actions";

class AddSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      id: "",
    };
  }
  newSmurf = (e) => {
    e.preventDefault();
    const { name, age, height, id } = this.state;

    const payload = {
      name,
      age,
      height,
      id,
    };
    this.props.addSmurf(payload);

    this.setState({
      name: "",
      age: "",
      height: "",
      id: "",
    });
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, age, height, id } = this.state;
    return (
      <form className="addSmurf" onSubmit={this.newSmurf}>
        <h2>Add a Smurf</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          required
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          required
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={height}
          required
          onChange={this.changeHandler}
        />

        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addSmurf,
};

export default connect(null, mapDispatchToProps)(AddSmurf);
