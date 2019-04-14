export const showModal = info => {
  let modal = document.getElementById("myModal");
  let modalBody = document.getElementById("modal-body");
  modal.style.display = "block";
  modalBody.innerHTML = info;

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};
