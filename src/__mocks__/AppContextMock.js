const titles = {
  homePage: [
    "Home Page",
    "Panel One Selected",
    "Panel Two Selected",
    "Panel Three Selected"
  ],
  controlPanel: [
    "Control Panel",
    "Panel One Control!",
    "Panel Two Control!",
    "Panel Three Control!"
  ],
  panelOne: [
    "Panel One",
    "Panel One Displaying itself",
    "Panel Two On Panel One!",
    "Panel Three On Panel One!"
  ],
  panelTwo: [
    "Panel Two",
    "Panel One On Panel Two",
    "Panel Two Displaying itself",
    "Panel Three On Panel Two"
  ],
  panelThree: [
    "Panel Three",
    "Panel One On Panel Three",
    "Panel Two On Panel Three",
    "Panel Three Displaying itself"
  ]
};

const context = {
  state: {
    homePageTitle: titles.homePage[0],
    controlPaneltitle: titles.controlPanel[0],
    panelOneTitle: titles.panelOne[0],
    panelTwoTitle: titles.panelTwo[0],
    panelThreeTitle: titles.panelThree[0]
  },
  updateTitles: jest.fn()
};

export default context;
