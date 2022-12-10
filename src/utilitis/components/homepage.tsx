export const loginRequest = async () => {
};

export const handlePopupSignup = () => {
    const popup_container = document.getElementsByClassName("popup-container")[0];
    const left_container = document.getElementsByClassName("left-container")[0];
    const right_container = document.getElementsByClassName("right-container")[0];
    const bg_vid = document.getElementsByClassName("video-container")[0];
    popup_container.className = "active-popup-container";
    left_container.classList.add("blured");
    right_container.classList.add("blured")
    bg_vid.classList.add("blured")
};

export const handleExitSignup = () => {
    const popup_container = document.getElementsByClassName("active-popup-container")[0];
    const left_container = document.getElementsByClassName("left-container blured")[0];
    const right_container = document.getElementsByClassName("right-container blured")[0];
    const bg_vid = document.getElementsByClassName("video-container blured")[0];
    popup_container.className = "popup-container";
    left_container.classList.remove("blured");
    right_container.classList.remove("blured")
    bg_vid.classList.remove("blured")
}

