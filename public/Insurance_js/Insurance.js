

const chatContainer = document.getElementById('chat-container')
const elBtn = document.getElementById('send-btn'); // Remove the '#' before 'send-btn'
const elInput = document.querySelector('#chat-user-input'); // Add a dot before 'chat-user-input' to select by class









//側邊欄收放

$(document).ready(function(){

    $("#collapse").on("click",function(){


        $("#sidebar").toggleClass("active");
        $(".material-symbols-outlined").toggleClass("fa-align-right");
        
    })  


})

//按鈕
        
   
    
    elBtn.addEventListener('click', sendMessage);
    
    elInput.addEventListener('keyup', (e) => { 
        if (e.key.toString().toUpperCase() == 'ENTER' && !e.shiftKey) {
          
            sendMessage();
            e.preventDefault(); // 防止插入新行
            var container = document.documentElement || document.body;
            container.scrollTop = container.scrollHeight;
        }
    });
    
        //Time

        function getCurrentTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        }

        function appendMessage(_sender , message , isUser){
            const messageContainer = document.createElement('div');
            messageContainer.classList.add(isUser ? 'message-container-2' : 'message-container');

            const messageIcon = document.createElement('div');
            messageIcon.classList.add('message-icon');
            messageIcon.classList.add(isUser ? 'chat' : 'bot-message-icon');
            messageContainer.appendChild(messageIcon);

            chatContainer.appendChild(messageContainer);
            scrollToBottom();

            if(isUser == true){
                const messageTime = document.createElement('div');
                messageTime.classList.add('message-time');
                messageTime.innerText = getCurrentTime();
                messageContainer.appendChild(messageTime);
            }

            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            messageContent.classList.add(isUser ? 'user-message-content' : 'bot-message-content');
            messageContent.innerHTML = message.replace(/\n/g,'<br>')//換行符號
            messageContainer.appendChild(messageContent);


            const messageIcon_user =document.createElement('div');
            messageIcon_user.classList.add('message-icon');
            messageIcon_user.classList.add(isUser ? 'user-message-icon' : 'chat');
            messageContainer.appendChild(messageIcon_user);

            if(isUser == false){
                const messageTime = document.createElement('div');
                messageTime.classList.add('message-time');
                messageTime.innerText = getCurrentTime();
                messageContainer.appendChild(messageTime);
                var container = document.documentElement || document.body;
                container.scrollTop = container.scrollHeight;
            }

            chatContainer.appendChild(messageContainer);
            scrollToBottom();
        }



    function sendMessage() {
        console.log('傳送訊息...')
        const userMessage = elInput.value;
        if (userMessage.trim() === '') {
            return;
        }
        appendMessage('You', userMessage, true);
        elInput.value = '';

        // 模擬回覆
        setTimeout(() => {
            const responseMessage = getResponse(userMessage);
            appendMessage('Bot', responseMessage, false);
            scrollToBottom();
        }, 1000);
    }
    

    function getResponse(userMessage) {
        return `${userMessage}`;
    }

    //滾動
    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }







































































navigator.geolocation.getCurrentPosition(function(_position) {
    // 使用位置資訊
  });
  
