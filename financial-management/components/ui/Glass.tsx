import React from 'react'

interface Glass {
    element: React.ReactNode;
}

const Glass = ({element}: Glass) => {
    return (
        <>
        <div className="grid gap-6 bg-white/5 backdrop-blur-[144px] p-6 max-md:px-4 rounded-3xl border border-white/10 relative z-10">
            {element}
        </div>
        <div className="bg-blue-800 h-40 w-40 absolute bottom-6 right-6 max-md:right-4 rounded-full"></div>
        </>
    )
}

export default Glass