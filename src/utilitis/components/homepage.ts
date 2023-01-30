
export const toggleCreateAccount = (event: any) => {
    document.getElementsByClassName("popup-container")[0].classList.toggle('showcase');
    document.getElementsByClassName("left-container")[0].classList.toggle('blured');
    document.getElementsByClassName("right-container")[0].classList.toggle('blured');
    document.getElementsByClassName("video-container")[0].classList.toggle('blured');
}

export const handleSignupMessage = () => {
    const popup_container = document.getElementsByClassName("creation-status-container ")[0];
    popup_container.className = "active-creation-status-container";
}

export const closeSignupMessage = () => {
    const active_creation_status_container = document.getElementsByClassName("active-creation-status-container")[0];
    if (active_creation_status_container) {
        active_creation_status_container.className = "creation-status-container";
    }
}


export const parseErrosSignup = (data: Object): string => {
    console.log(data)
    let errors = '';
    Object.entries(data).forEach(
        ([key, value]) => {
            errors += `${value}\n`
        }
      );
      console.log(errors)
      return errors;
}

export const delay = async () => {

    setTimeout(()=>{    
    },3000)
}


