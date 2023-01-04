/**
 * @author ezekiel kouassi
 */

(function buildHtmlElements() {

    /**
     * @description création du html
     */

    let form = document.createElement("form");
    let input = document.createElement("input");
    let btnSubmit = document.createElement("input");
    btnSubmit.setAttribute('type', 'submit')
    btnSubmit.setAttribute('value', 'valider le mail');
    input.setAttribute('type', 'email');
    form.appendChild(input);
    form.appendChild(btnSubmit);
    document.body.appendChild(form);

    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("your mail is not good");
    paragraph.appendChild(textNode);
    paragraph.style.display = "none";
    document.body.appendChild(paragraph);

})();

function validateEmail() {

    let emailContainer = document.querySelector("[type=email]");
    console.log(emailContainer.textContent);

}

let btnSubmit = document.querySelector("[type=submit]");
btnSubmit.addEventListener('click', validateEmail);




