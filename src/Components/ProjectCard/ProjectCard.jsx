import React, { useEffect } from 'react';
import { useState } from 'react';

const ProjectCard = () => {
    const [title, setTitle] = useState()
    useEffect(() => {
        const handleTitle = () => {

            setTitle("AIA Modernization Project")
        }
        handleTitle();
    }, [])
    return (
        <h1>
            {title}
        </h1>
    )
}
export default ProjectCard;