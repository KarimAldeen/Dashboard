import React from 'react'
import './Add_Button.scss'
const Add_Button = ({setFormTable}:any) => {
    return (
        <div className='Add_Button' onClick={ ()=> {setFormTable((pre:any)=>({...pre,["OpenAdd"]:true}))} }>
            <button>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                    </svg>{" "}
                    Create
                </span>
            </button>

        </div>
    )
}

export default Add_Button