import React from 'react'
import Headline3 from '../assets/Headline3'
import Button from '../assets/Button';

export type TCardAccentProps = {
  id: number;
  title: string;
  text: string;
  dataType: string;
  titleColor?: string;
}

const CardAccent = ({title, text, dataType, titleColor}: TCardAccentProps) => {
  return (
    <div className='card text-center'>
      <Headline3 titleColor={titleColor}>{title}</Headline3>
      <p className='text'>{text}</p>
      <Button dataType={dataType} />
    </div>
  )
}

export default CardAccent