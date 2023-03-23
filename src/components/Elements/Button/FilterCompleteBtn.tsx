import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useSearchStore } from '../../../stores/index'

export const FilterCompleteBtn = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleShowCompleted = useSearchStore((state) => state.toggleShowCompleted)

    useEffect(() => {
        toggleShowCompleted(isChecked)
    }, [isChecked])

    return (
        <FormGroup>
            <FormControlLabel control={<Switch checked={isChecked} />} onChange={() => setIsChecked(!isChecked)} label="Show Completed Tasks" />
        </FormGroup>
    )
}