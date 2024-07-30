import {LayoutProps} from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './Layout.module.scss';
import cn from 'classnames';

export const Layout = ({children, ...props} : LayoutProps) => {
    return (
        <div className={cn(styles.containerBox, styles.containerBox__flex)}>
          <Sidebar/>
          <main className={styles.mainContent} {...props}>
            {children}
          </main>  
        </div>
    )
}