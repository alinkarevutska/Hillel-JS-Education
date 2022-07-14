import Task from "./Task.js";
import Reopened from "./Reopened.js";
import Done from "./Done.js";
import {controller, API, participantsSelect, createTaskForm} from "../script.js";

export default class Testing extends Task {
    constructor(task) {
        super(task);
    }

    render(){
        let taskBlock = super.render();

        let reopenBtn = document.createElement('button');
        reopenBtn.innerHTML = `Reopen`;

        reopenBtn.addEventListener('click', async e => {
            try {
                let modifiedTask = await controller(API + `/tasks/${this.id}`, `PUT`, {status: 4});
                taskBlock.remove();

                new Reopened(modifiedTask).render()
            } catch(err) {
                console.log(err)
            }
        })

        let doneBtn = document.createElement('button');
        doneBtn.innerHTML = `Done`;

        doneBtn.addEventListener('click', async e => {
            try {
                let modifiedTask = await controller(API + `/tasks/${this.id}`, `PUT`, {status: 5});
                taskBlock.remove();

                let modifiedParticipants = await Promise.all(
                    modifiedTask.participants.map(participant => controller(API + `participants/${participant.id}`, `PUT`, {task : false}))
                )
        
                modifiedParticipants.forEach(participant => {
                    let option = participantsSelect.querySelector(`option[value = "${participant.id}"]`);
                    option.disabled = false;
                })
                createTaskForm.reset();

                new Done(modifiedTask).render()
            } catch(err) {
                console.log(err)
            }
        })
        taskBlock.append(reopenBtn, doneBtn);
        tasksTable.querySelector('#Testing').append(taskBlock);
    }
}