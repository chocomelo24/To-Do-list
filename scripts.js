



document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <input type="checkbox" class="checkbx">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
            </input>     
                <button class="delete">
                <p>Delete</p>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
if(document.querySelector('#newtask input').value.length == 0){
    alert("Click to Enter Tasks Below")
}

else{
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            
        </div>
    `};