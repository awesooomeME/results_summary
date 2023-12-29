import Image from 'next/image'
import React from 'react'

type SubjectProps = {
    subject: string,
    score: number
}

const Subject = ({subject, score}: SubjectProps) => {
    const bgVariants = {
        reaction: 'bg-reaction_primary/10',
        memory: 'bg-memory_primary/10',
        verbal: 'bg-verbal_primary/10',
        visual: 'bg-visual_primary/10'
    }

    const textVariants = {
        reaction: 'text-reaction_primary',
        memory: 'text-memory_primary',
        verbal: 'text-verbal_primary',
        visual: 'text-visual_primary'
    }

    return (
        <div className={`${bgVariants[subject as keyof typeof bgVariants]} flex justify-between px-4 py-5 rounded-xl`}>
            <div className='flex items-center gap-5'>
                <Image src={`icon-${subject}.svg`} width={30} height={30} alt={`${subject} subject icon`}/>
                <h3 className={`${textVariants[subject as keyof typeof bgVariants]} font-heavy capitalize`}>
                    { subject }
                </h3>
            </div>
            <div className='flex items-center font-heavy'>
                <p>
                    { score }
                </p>
                <p className='text-black/40'>
                    &nbsp;&nbsp;/ 100
                </p>
            </div>
        </div>
  )
}

export default Subject