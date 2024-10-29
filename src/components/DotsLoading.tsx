import React from "react";

const DotsLoading: React.FC = () => {
  return (
    <div>
      <style>
        {`
          .loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: orange;
  animation: l2 1s infinite linear;
}
@keyframes l2 {to{transform: rotate(1turn)}}
        `}
      </style>
      <div className="loader"></div>
    </div>
  );
};

export default DotsLoading;
