import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

export function ButtonOutlineComp({title, className}: {title: string, className: string}) {
  return (
    <Button variant={'outline'} className={cn(`h-10 rounded-full px-6 font-medium ${className}`)}>{title}</Button>
  )
}
export function ButtonDefaultComp({title, className}: {title: string, className: string}) {
  return (
    <Button className={cn(`h-10 rounded-full px-6 font-medium text-black  ${className}`)}>{title}</Button>
  )
}

