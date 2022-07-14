export default class Task {
    constructor(task) {
        Object.assign(this, task)
    }

    render() {
        let taskBlock = document.createElement('div');
        taskBlock.className = 'card';
        taskBlock.innerHTML = `<h3>${this.title}</h3>
        <p>Participants: <span style="font-style: italic">${this.participants.map(participant => participant.name).join(', ')}</span></p>`
        return taskBlock;
    }
}