import QF from './QuestForm'
import { useEffect, useState } from 'react'
import Create from './CreateForm'

const Addpg = () => {



    const [QCount, Qupdate] = useState(1);
    const [Rowval, RowUpdate] = useState([]);
    const [questPaper, setQuestPaper] = useState([]);
    const [obj, objupdate] = useState({ Question: '', Option1: '', Option2: '', Option3: '', Option4: '' });

    const Funcholder = () => {
        Qupdate(
            QCount + 1
        )

        RowUpdate(
            Rowval => [...Rowval, <QF id={QCount} />]
        )
    }




    const setObj = () => {

        for (let i = 1; i < QCount; i++) {

            objupdate({
                ...obj,
                Question: document.getElementById('qst' + i).value,
                Option1: document.getElementById('opt' + i + '1').value,
                Option2: document.getElementById('opt' + i + '2').value,
                Option3: document.getElementById('opt' + i + '3').value,
                Option4: document.getElementById('opt' + i + '4').value
            });

        }

    }

    const showObj = () => {
        setQuestPaper(
            [...questPaper, obj]
        )

    }

    useEffect(() => {
        console.log(questPaper);
    }, [questPaper])

    return (
        <div className="content">

            <div className='butcont'>
                <button className="but1" onClick={Funcholder} >
                    +
                </button>
            </div>


            <div className='formtainer'>
                {Rowval}
            </div>

            <div className="butcont">
                <button className="but1" onMouseDown={setObj} onMouseUp={showObj} >
                    Create
                </button>
            </div>

            <div>
                {QCount}
            </div>

        </div>

    )
}

export default Addpg