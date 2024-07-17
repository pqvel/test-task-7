type PopupParams = {
  backdropSelector: string;
  popupSelector: string;
  openBtnSelector: string;
};

export const popup = ({
  backdropSelector,
  popupSelector,
  openBtnSelector,
}: PopupParams) => {
  const backdrop = document.querySelector(backdropSelector);
  const popup = document.querySelector(popupSelector);
  const openBtn = document.querySelector(openBtnSelector);
  const closeBtn = popup?.querySelector(".popup__close");

  const closePopup = () => {
    backdrop!.classList.remove("open");
    popup!.classList.remove("open");
  };

  const openPopup = () => {
    backdrop!.classList.add("open");
    popup!.classList.add("open");
  };

  backdrop!.addEventListener("click", closePopup);
  closeBtn!.addEventListener("click", closePopup);
  openBtn!.addEventListener("click", openPopup);
};
