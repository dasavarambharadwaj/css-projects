const steps = document.querySelectorAll('.step')
const progressBar = document.getElementById('progress-bar')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
var currentStep = 1;
next.addEventListener('click',()=>{
    if(currentStep < steps.length) {
        currentStep = currentStep + 1
    }
    setProgress();
})
previous.addEventListener('click',()=>{
    if(currentStep > 1) {
        currentStep = currentStep - 1
    }
    setProgress();
})
function setProgress() {
    if(currentStep === 1) {
        previous.setAttribute("disabled","disabled")
        next.removeAttribute("disabled")
    } else if(currentStep === steps.length) {
        previous.removeAttribute("disabled")
        next.setAttribute("disabled","disabled")
    } else {
        previous.removeAttribute("disabled")
        next.removeAttribute("disabled")

    }
    steps.forEach((step,index)=> {
        step.classList.remove('active')
        if(index < currentStep) {
            step.classList.add('active')
        }
    })
    progressBar.style.width = (((currentStep - 1) / (steps.length - 1)) * 100) + "%"
}

