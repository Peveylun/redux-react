import './ToDoCard.css';

export default function ToDoCard() {
    return (
        <div className='todo-card'>
            <p className='text-field'>Some text</p>
            <div className='done'>
                <div className='vertical-line'></div>
                <label>Done: </label>
                <input type="checkbox"/>
            </div>
        </div>
    )
}