import React, { useState } from 'react'
import Stream from './Stream'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import UnverifiedChallans from './UnverifiedChallans';
import ArchieveChallan from './ArchieveChallan';
function Traffic() {
    const [alignment, setAlignment] = useState("streaming");
    return (
        <div className='flex flex-col p-2 w-full h-[100vh]'>
            <div className='flex items-center'>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    aria-label="Platform"
                >
                    <ToggleButton value="streaming" onClick={() => setAlignment("streaming")}>Streaming</ToggleButton>
                    <ToggleButton value="Unverified" onClick={() => setAlignment("Unverified")}>Unverified Challans</ToggleButton>
                    <ToggleButton value="archives" onClick={() => setAlignment("archives")}>Archieves</ToggleButton>
                </ToggleButtonGroup>
            </div>
            {alignment === 'streaming' ? <Stream></Stream> :
                alignment === 'Unverified' ? <UnverifiedChallans></UnverifiedChallans> :
                    <ArchieveChallan></ArchieveChallan>
            }
        </div>

    )
}

export default Traffic