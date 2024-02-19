const listaDeAnimados = document.querySelectorAll(".animation");

const appearOnScroll = new IntersectionObserver(function(
    entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("fadeIn");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }
);

listaDeAnimados.forEach(animado => {
    appearOnScroll.observe(animado);
});

/* FORM */

const form = document.querySelector(".formulario");
const nome = document.querySelector(".formulario-nome-input");
const email = document.querySelector(".formulario-email-input");
const mensagem = document.querySelector(".formulario-mensagem-input");
const button = document.querySelector(".formulario-button-input");


console.log(nome)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
    if (checkInputs() === "yes") {
        setSucessButton(button, "Mensagem enviada com sucesso.")
    }
});

function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;    

    if (nomeValue === '') {
        setErrorFor(nome, "É obrigatório colocar seu nome.")
    } else {
        setSucessFor(nome);
    }

    if (emailValue === '') {
        setErrorFor(email, "É obrigatório colocar seu email.")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.")
    } else {
        setSucessFor(email);
    }

    return "yes";
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error"
}

function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function setSucessButton(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control sent"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}