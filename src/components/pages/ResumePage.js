import React from 'react';
import Skills from '../Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Resume';

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
