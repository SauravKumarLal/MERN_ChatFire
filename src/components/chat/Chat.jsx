import { useState } from "react"
import "./chat.css" 
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        // console.log(e);
        setText(prev => prev+e.emoji);
        setOpen(false);
    };

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://images.pexels.com/photos/21404299/pexels-photo-21404299/free-photo-of-a-tree-with-pink-blossoms-in-the-middle-of-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia ullam obcaecati quis, facere dolorem vitae aut, asperiores molestiae veniam inventore quod soluta harum ex, quos eligendi omnis culpa perferendis?
                        </p>
                        <span>1 sec. ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message.." 
                value={text}
                onChange={e => setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" 
                    alt="" 
                    onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>

                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat