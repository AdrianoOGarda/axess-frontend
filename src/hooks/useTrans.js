import {useState, createContext} from 'react'
import es from '../i18n/es';
import en from '../i18n/es';

export const TransCtx = createContext(null);

const useTrans = () => {
  const [t, setLang] = useState(es);
  
  const toggleLang = () => setLang(t.lang === 'es' ? en : es);
  
  return {
    t,
    toggleLang
  }
};

export default useTrans
