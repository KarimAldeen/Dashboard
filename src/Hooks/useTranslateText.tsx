"use client"
import { useTranslation } from "react-i18next";

const TranslateText = ({text}:{text:string}) => {
  const [t]= useTranslation();
  return <>
  {t(text)}
  </>;
};

export default TranslateText;
