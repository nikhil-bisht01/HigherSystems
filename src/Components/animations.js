function myFunction() {
  var imglarge = document.querySelector(".child img")
  var container= document.querySelector("#box")
imglarge.addEventListener("mouseenter", function () {
  container.style.opacity = 1;
  container.style.height = "350px"
  container.style.transition = "all 1s ease-in-out";
})
imglarge.addEventListener("mouseout", function () {
  container.style.opacity = 0
  container.style.height = "0px"
})
}
export default myFunction 


