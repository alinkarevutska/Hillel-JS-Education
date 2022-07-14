import ToDo from "./js/ToDo.js";
import InProgress from "./js/InProgress.js";
import NeedTesting from "./js/NeedTesting.js";
import Testing from "./js/Testing.js";
import Reopened from "./js/Reopened.js";
import Done from "./js/Done.js";

export const API = `https://62cbf861a080052930a25c70.mockapi.io/tasksboard/`, 
    createTaskForm = document.querySelector('#createTask'),
    participantsSelect = document.querySelector('#taskParticipants'),
    taskTitleInput = document.querySelector('#taskTitle'),
    tasksTable = document.querySelector('#tasksTable');

const TASK_STATUS = {
    0: task => new ToDo(task),
    1: task => new InProgress(task),
    2: task => new NeedTesting(task),
    3: task => new Testing(task),
    4: task => new Reopened(task),
    5: task => new Done(task)
}

export const controller = async (path, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type" : "application/json"
        }
    }

    if (obj) {
        options.body = JSON.stringify(obj);
    }

    let request = await fetch(path, options);
    if(request.ok) return request.json()
    else throw Error (request.status);
}

// ----- render participants ----- //

const getParticipants = async () => await controller(API + `/participants`);

const renderParticipants = async () => {
    let participants = await getParticipants();

    participantsSelect.innerHTML = participants
    .map(participant => `<option value="${participant.id}" ${participant.task && `disabled`}>${participant.name}</option>`)
    .join('');
}

renderParticipants();

// ----- adding a task ----- //

createTaskForm.addEventListener(`submit`, async e => {
    try {
        e.preventDefault();
        // transformation pseudo-array of selected options into array
        let participantsSelected = [...participantsSelect.selectedOptions]
            .map(option => {
                return {name: option.innerHTML, id: option.value}
        });
    
        let newTask = {
            title: taskTitleInput.value,
            participants: participantsSelected,
            status: 0
        }
    
        let addedPost = await controller(API + `tasks`, `POST`, newTask);
        
        new ToDo(addedPost).render();

        let modifiedParticipants = await Promise.all(
            addedPost.participants.map(participant => controller(API + `participants/${participant.id}`, `PUT`, {task : true}))
        )

        modifiedParticipants.forEach(participant => {
            let option = participantsSelect.querySelector(`option[value = "${participant.id}"]`);
            option.disabled = true;
        })
        // to prevent selecting the same participants after form submit, we have to remove form focus after submit
        createTaskForm.reset();

    } catch(error) {
        console.log(error);
    }
})

// ----- render tasks from database ----- //

const renderTasks = async () => {
    try {
        let databaseTasks = await controller(API + `/tasks`);

        databaseTasks.forEach(task => {
            TASK_STATUS[task.status](task).render();
        })

    } catch (err) {
        console.log(err);
    }
}

renderTasks();