"use client";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const MisuraSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="EU 38.5" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">EU 38.5</SelectItem>
        <SelectItem value="dark">EU 37</SelectItem>
        <SelectItem value="system">EU 37.5</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MisuraSelect;
