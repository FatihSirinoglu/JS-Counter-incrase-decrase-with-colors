// set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click" ,function(e){
        // to learn which button has which classes
        const styles = e.currentTarget.classList;
        //styles shows us the classes so we can pretent as we want
       if(styles.contains("decrase")){
        count--;
       }
       else if(styles.contains("incrase")){
        count++;
       }
       else{
        count = 0
       }
       if(count > 0) {
        value.style.color = "green";
       }
       if(count < 0) {
        value.style.color = "red";
       }
       if(count===0) {
        value.style.color = "#222";
       }
       value.textContent = count;
    });
});