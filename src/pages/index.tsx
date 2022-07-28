import styles from "../styles/index.module.scss";
import BeerList from "./BeerList/BeerList";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <BeerList />
    </div>
  );
};

export default Home;
