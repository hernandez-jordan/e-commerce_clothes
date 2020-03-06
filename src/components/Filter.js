import React from "react";

const Filter = props => {
  return (
    <div className="row">
      <div className="col-md-4">{props.count} Products found</div>
      <div className="col-md-4">
        <label>
          Order By
          <select
            className="form-control"
            value={props.sort}
            onChange={props.handleChangeSort}
          >
            <option value="select">Select</option>
            <option value="lowest">lowest to highest</option>
            <option value="highest">highest to lowest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Filter by Size
          <select
            className="form-control"
            value={props.size}
            onChange={props.handleChangeSize}
          >
            <option value="select">Select</option>
            <option value="x">x</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
            <option value="xxl">xxl</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
