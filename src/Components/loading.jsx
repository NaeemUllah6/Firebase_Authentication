const Spinner = ({ color = "blue-600", className = "" }) => {
  return (
    <div className="fixed left-[240px] top-20 inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50 backdrop-blur-sm z-50">
      <div role="status" className={`flex justify-center items-center ${className}`}>
      <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#ecb200">
  <circle cx="15" cy="15" r="15">
    <animate attributeName="r" from="15" to="15"
             begin="0s" dur="0.8s"
             values="15;9;15" calcMode="linear"
             repeatCount="indefinite" />
  </circle>
  <circle cx="60" cy="15" r="9">
    <animate attributeName="r" from="9" to="9"
             begin="0s" dur="0.8s"
             values="9;15;9" calcMode="linear"
             repeatCount="indefinite" />
  </circle>
  <circle cx="105" cy="15" r="15">
    <animate attributeName="r" from="15" to="15"
             begin="0s" dur="0.8s"
             values="15;9;15" calcMode="linear"
             repeatCount="indefinite" />
  </circle>
</svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
