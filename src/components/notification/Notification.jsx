import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
    return (
        <div className="">
            {/* <button onClick={notify}>Notify!</button> */}
            <ToastContainer position='bottom-right'/>
        </div>
    )
}

export default Notification