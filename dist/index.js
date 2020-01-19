import React from 'react';
function ViewSelector(props) {
    return (React.createElement("div", { className: "adminPanel" },
        React.createElement("nav", { className: "navbar" }),
        React.createElement("main", { className: "selectedView" })));
}
export default ViewSelector;
