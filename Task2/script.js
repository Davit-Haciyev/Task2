
let Messanger = [];
/*****************************************************/ 
const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    
    const inputtext = document.querySelector('.typedMessage');
    const inputname = document.querySelector('.typedName');

    const text = inputtext.value.trim();
    const textname = inputname.value.trim();

    if(text !=='' && textname !==''){
        addMessage(textname,text);

        inputtext.value = '';
        inputtext.focus();

        inputname.value = '';
        inputname.focus();
    }
});

/*****************************************************/
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${(now.getMinutes())}`
}
/*****************************************************/

function addMessage(name,text){
    const Message = {
        name,
        text,
        id: gettime()
    }
    Messanger.push(Message);
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend', 
        `<p class="message-item" data-key="${Message.id}">
            <span class="name">${Message.name}: </span><br>
            <span class="text">${Message.text}</span>
            <span class="data">${Message.id} </span>
        </p>`

    );
}