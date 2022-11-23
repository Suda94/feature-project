window.addEventListener('load', () => {// create event listener when loading. 
    const addForm = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    addForm.addEventListener('submit', (e) => {
        e.preventDefault();// prevent the page from going on default when pressing submit page from going on default when the page is refreshed. 

        const task = input.value;

        // if (!task) {//setting condition on task variable 
        //     alert('please fill out the task');//create an alert window 
        //     return;
        // }


        // create a div with allocated class name in the html.
        const task_el = document.createElement('div');
        task_el.classList.add('task');//

        // create a div allocated class name in the html.
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;//
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');// create div that has class name called the following class.

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';//create a delete button with class following class name and following text inside the html. 

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';//create a delete button with class following class name and following text inside the html. 


        task_actions_el.appendChild(task_edit_el);//
        task_actions_el.appendChild(task_delete_el);//

        task_el.appendChild(task_actions_el);//

        list_el.appendChild(task_el);//

        input.value = '';// the input value is input 


        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });


        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);//removed the task and listen for the event listener to execute the following event listener. 
        });

    });
}); 