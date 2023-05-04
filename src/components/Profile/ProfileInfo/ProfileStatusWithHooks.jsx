import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    /* let stateWithSetState = useState(false);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1]; */

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    let activateEditMode = () => {
        setEditMode(true);
      }
    
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
      }

    let onStatusChange = (e) => {    
        setStatus(e.currentTarget.value);
      }

  
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>

    )

}

export default ProfileStatusWithHooks;