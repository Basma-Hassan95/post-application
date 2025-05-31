let content = document.getElementById("content");
let post = document.getElementById("post");
let container = document.getElementById("posts");

post.addEventListener("click", function () {
  if (content.value.trim() !== "") {
    container.innerHTML += `<div>
      <p>${content.value}</p>
      <button onclick="removePost(event)">Delete</button>
    </div>`;
    content.value = "";
  }
});

function removePost(event) {
  event.target.parentNode.remove();
}
