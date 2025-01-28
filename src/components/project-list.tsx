'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { projects, websites } from '@/lib/projects'

import Project from './project'

export default function ContentToggle() {
  const [showProjects, setShowProjects] = useState(true)
  const [title, setTitle] = useState('Projects')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between child animations
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const handleToggle = () => {
    setShowProjects(prev => !prev)
    setTimeout(() => {
      setTitle(showProjects ? 'Websites' : 'Projects')
    }, 200)
  }

  return (
    <section>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='font-serif text-2xl font-bold'>{title}</h2>

        <label className='relative inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            value=''
            className='peer sr-only'
            onChange={handleToggle}
          />
          <div className="peer flex h-8 items-center gap-4 rounded-full bg-foreground/5 px-3 text-xs text-white duration-700 after:absolute after:left-1 after:h-6 after:w-16 after:rounded-full after:bg-foreground/10 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none">
            <span>Projects</span>
            <span>Websites</span>
          </div>
        </label>
      </div>

      <div>
        <AnimatePresence mode='wait'>
          {showProjects ? (
            <motion.div
              key='projects'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              {projects.map(project => (
                <motion.div
                  key={project.href}
                  variants={itemVariants}
                  className='mb-4'
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    href={project.href}
                    icon={project.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key='websites'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              {websites.map(website => (
                <motion.div
                  key={website.href}
                  variants={itemVariants}
                  className='mb-4'
                >
                  <Project
                    title={website.title}
                    description={website.description}
                    href={website.href}
                    icon={website.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
