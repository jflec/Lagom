const Masthead = () => {
  return (
    <div id="masthead-container">
      <div id="top-item-container">
        <div id="top-item-image-holder"></div>
        <div id="top-item-text">
          <h1>Top Item</h1>
          <h2>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h2>
          <div id="top-item-button-container">
            <button>
              Add to cart <span class="material-icons">shopping_cart</span>
            </button>
            <button>
              View <span class="material-icons">visibility</span>
            </button>
            <button>
              Save for later <span class="material-icons">alarm_on</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
