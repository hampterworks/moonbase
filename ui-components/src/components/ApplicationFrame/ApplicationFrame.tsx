"use client"
import dynamic from 'next/dynamic';
import styles from './ApplicationFrame.module.css';
import { Topbar } from '../index';

interface ApplicationFrameProps {
  children: React.ReactNode;
}

const PlanktonContainer = dynamic(
  () => import('../PlanktonContainer/PlanktonContainer'),
  { ssr: false }
);

const ApplicationFrame: React.FC<ApplicationFrameProps> = ({children, ...props }) => {
  return <div className={styles.main} {...props}>
    <PlanktonContainer/>
    <Topbar/>
    <h1>ATLAMOON</h1>
    {children}
  </div>
}

export default ApplicationFrame
