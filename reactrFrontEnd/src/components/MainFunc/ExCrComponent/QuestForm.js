import React from 'react'
import './QuestForm.css'
import { IoMdClose } from 'react-icons/io'

const QuestForm = ({ id }, { Cond }) => {
    return (
        <div className='Qcont' id={id}>

            <IoMdClose className='close' />
            <form>
                <label>Question</label> <br />
                <input type='text' className='question' id={'qst' + id} /> <br />
                <label>Options</label><br />

                <div className='optcont'>
                    <input type="radio" id={'rdb' + id + '1'} name="fav_language" value="HTML" />
                    <input type='text' className='optiontxt' id={'opt' + id + '1'} /> <br />
                </div>
                <div className='optcont'>
                    <input type="radio" id={'rdb' + id + '2'} name="fav_language" value="HTML" />
                    <input type='text' className='optiontxt' id={'opt' + id + '2'} /> <br />
                </div>
                <div className='optcont'>
                    <input type="radio" id={'rdb' + id + '3'} name="fav_language" value="HTML" />
                    <input type='text' className='optiontxt' id={'opt' + id + '3'} /> <br />
                </div>
                <div className='optcont'>
                    <input type="radio" id={'rdb' + id + '4'} name="fav_language" value="HTML" />
                    <input type='text' className='optiontxt' id={'opt' + id + '4'} /> <br />
                </div>
            </form>
        </div>
    )
}

export default QuestForm