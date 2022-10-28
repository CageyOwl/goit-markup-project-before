(() => {
    const refs = {
        modal: document.querySelector(".modal"),
        fSet: document.querySelector(".modal__fieldset"),
        warningMessages: document.querySelectorAll(".modal__warning-message"),

        modalBtn: document.querySelector(".modal__button"),
        btnMsg: document.querySelector(".modal__button-warning")
    }


    refs.modal.addEventListener('invalid', () => {
        refs.btnMsg.classList.remove("invisible");
        setTimeout(() => {
            refs.btnMsg.classList.add("invisible");
        }, 2000);
    }, true);

    refs.modalBtn.addEventListener("click", () => { msgChanger(refs.warningMessages, "invisible", false) });
    refs.fSet.addEventListener("click", () => { msgChanger(refs.warningMessages, "invisible", true) });

    
    function msgChanger(msgList, classToToggle, classIsInSelectorReq) {
        if (classIsInSelectorReq === msgList[0].classList.contains(classToToggle)) {
            msgList.forEach( msg =>
                msg.classList.toggle(classToToggle)
            );
        }
    }
})();