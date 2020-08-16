import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increase, decrease } from "./Components/Action";

function App ({increase,decrease,count}) {
  
    return (
      <div className="App">
        <h1>Counter</h1>
     <button className="plus" onClick={()=>increase()} >+</button>
<span>{count}</span>
     <button className="moin" onClick={()=>decrease()}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
