import { useState, useEffect } from 'react';
import Typewriter from 'react-ts-typewriter';

interface Props {
  texts: string[]; // Accept an array of texts
}

const TypewriterBuilder = ({ texts }: Props) => {


  return <Typewriter cursor text={texts} random={30} speed={60} loop={true} delay={2500} />;
};

export default TypewriterBuilder;
