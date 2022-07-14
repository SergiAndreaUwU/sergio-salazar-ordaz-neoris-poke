import styles from "./CardList.module.css"
import Card from "./Card";

const CardList = () => {
    return <div className={styles.cardList}>
        {[1,2,3,4].map(el=><Card/>)}
    </div>;
}
 
export default CardList;