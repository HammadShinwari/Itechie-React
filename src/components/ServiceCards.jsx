import React from 'react'

// material-icon
import { AdminPanelSettingsSharp, AppSettingsAltRounded, AssessmentRounded, AttachEmailRounded, DashboardCustomizeRounded, DesktopMacRounded, ManageAccountsRounded, PersonSearchSharp, Search } from '@mui/icons-material';

// style
import '../style/servicecards.css'

function ServiceCards() {
  return (
    <>
        <div className="cards-container">

            <div className="card">
                <ManageAccountsRounded fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <DashboardCustomizeRounded fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <DesktopMacRounded fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <AdminPanelSettingsSharp fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <PersonSearchSharp fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <AssessmentRounded fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <Search fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <AppSettingsAltRounded fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

            <div className="card">
                <AttachEmailRounded fontSize='large' htmlColor='blue' className='icon'/>
                <h1>Web Design</h1>
                <p>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
            </div>

        </div>
    </>
  )
}

export default ServiceCards