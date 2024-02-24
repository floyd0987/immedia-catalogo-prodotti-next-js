import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const LanguageSwitcher = () => {
  return (
    <Select>
      <SelectTrigger className="w-[65px] border-0 text-xs" >
        <SelectValue placeholder="ITA" />
      </SelectTrigger>
      <SelectContent  >
        <SelectItem value="light" className='text-xs'>ITA</SelectItem>
        <SelectItem value="dark" className='text-xs'>ENG</SelectItem>
       
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher