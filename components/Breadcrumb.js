import React from "react";

const breadcrumb = {
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.125)",
  borderRadius: "0.37rem",
};

function Breadcrumb(props) {
  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav>
      <ol className="breadcrumb" style={breadcrumb}>
        {props.crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "";

          return (
            <li key={ci} className="breadcrumb-item">
              <button
                className={`btn btn-link ${disabled}`}
                onClick={() => props.selected(crumb)}
              >
                {crumb}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
