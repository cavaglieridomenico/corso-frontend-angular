/*DOM Elements*/
const getImages = () => document.querySelectorAll(".img-container");
const getModalContainer = () =>
  document.querySelector(".table-modal-container");
const getCloseModal = () => document.querySelector(".close-modal");
const getModal = () => document.querySelector(".table-modal");

const setShowEnlargedImages = () => {
  for (let item of getImages()) {
    item.addEventListener("click", () => {
      getModalContainer().classList.remove("hidden");
      switch (item.id) {
        case "img-1":
          getModal().style.backgroundImage =
            "url('../../assets/images/projects/repo-xcomm.png')";
          break;
        case "img-2":
          getModal().style.backgroundImage =
            "url('../../assets/images/projects/repo-useronboard1_big.png')";
          break;
        case "img-3":
          getModal().style.backgroundImage =
            "url('../../assets/images/projects/repo-hang-2_big.png')";
          break;
        default:
          getModal().style.backgroundImage =
            "url('../../assets/images/projects/repo-xcomm.png')";
      }
    });
  }
};

getCloseModal().addEventListener("click", () => {
  getModalContainer().classList.add("hidden");
});

setShowEnlargedImages();
