// @author Naman khandelwal


const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the target data attribute for the clicked button
    const target = this.getAttribute("data-target");
    const targetSelector = `li[data-target="${target}"]`;
    const spanSelector= `span[data-target="${target}"]`;

    // Toggle the visibility of the corresponding <li> element
    const li = document.querySelector(targetSelector);
    li.classList.toggle("hide");
    
    // rotation of span icon
    const span= document.querySelector(spanSelector);
    span.style.transition= 'transform 0.3s'
    if(span.style.transform == "rotate(45deg)"){
      span.style.transform = "rotate(0deg)"
     
    }else{
      span.style.transform = "rotate(45deg)"
      
    }



    
    // Hide the text under the other buttons if it's visible
    const otherLis = document.querySelectorAll(
      `li[data-target]:not(${targetSelector})`
    );
    otherLis.forEach((otherLi) => {
      otherLi.classList.add("hide");
    });

    const otherSpans = document.querySelectorAll(
      `span[data-target]:not(${spanSelector})`
    );
    otherSpans.forEach((otherSpan) =>{
      otherSpan.style.transform = "rotate(0deg)";
    });
  });
});
