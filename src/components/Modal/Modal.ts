import "./Modal.css";

interface OpenModalArgs {
  title: string;
  children: HTMLElement;
}

export const closeModal = () => {
  const Modal = document.querySelector(".modal-container")
  Modal?.remove()
};

export function openModal(args: OpenModalArgs) {
  const ModalContainer = document.createElement("div");
  ModalContainer.classList.add("modal-container");

  const Modal = document.createElement("div");
  Modal.classList.add("modal");

  ModalContainer.appendChild(Modal);

  const ModalHead = document.createElement("div");
  ModalHead.classList.add("modal_head");

  Modal.appendChild(ModalHead);

  const title = document.createElement("h1");
  title.textContent = args.title;

  ModalHead.appendChild(title);

  const button = document.createElement("button");
  button.textContent = "Exit";
  ModalHead.appendChild(button);

  const ModalBody = document.createElement("div");
  ModalBody.classList.add("modal_body");

  ModalBody.appendChild(args.children);

  Modal.appendChild(ModalBody);

  document.body.appendChild(ModalContainer);

  button.addEventListener("click", function () {
    closeModal();
  });
}
