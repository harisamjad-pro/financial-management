import React from 'react'

interface Block {
    element: React.ReactNode;
}

const Block = ({ element }: Block) => {
    return (
        <div className="relative z-10 grid gap-6 p-6 max-md:px-4 border border-neutral-800 w-fit">
            {element}
        </div>
    )
}

export default Block