'use client'
import React from "react";
import { MdLanguage } from "react-icons/md";


const useFormTabs = () => {
  
  
  let tabs = [
    {
      title: (
        <div className="Tab_Word">
          <MdLanguage size={20} /> <h1>{("add_new_user")}</h1>
        </div>
      ),
      content: (<>Hi asd  asd as d asd asd  quidem incidunt.</> )

    },
    {
      title: (
        <div className="Tab_Word">
          <MdLanguage size={20} /> <h1>{("add_new_user")}</h1>
        </div>
      ),
      content: (<>2</> )

    },
  ];
   
  return tabs;
};

export default useFormTabs;
