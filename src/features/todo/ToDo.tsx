import ToDoCard from "../../common/ToDoCard/ToDoCard";
import './ToDo.css';

export default function ToDo() {
    return (
        <div className='todo'>
            <ToDoCard></ToDoCard>
            <ToDoCard></ToDoCard>
            <ToDoCard></ToDoCard>
        </div>
    )
}