/* eslint-disable react/prop-types */
import {FiPlus, FiX} from 'react-icons/fi';

import { Container } from './styles';


export function NoteItem ({ isnew = false, value, onClick, ...rest}) {
  return (
    <Container $isnew = {isnew.toString()}>
      <input 
      type="text"
      value= {value}
      readOnly={!isnew}
      {...rest}
      />

      <button 
      type="button"
      onClick={onClick}
      className= {isnew ? 'button-add' : 'button-delete'}
      >
        {isnew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  ) 
}