import Layout from '../../components/Layout';
import styles from './Coin.module.scss';

const Coin = ({ coin }) => {
    return (
      <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
            <img
              src={coin.image.large}
              alt={coin.name}
              className={styles.coin_image}
            />
            <h1 className={styles.coin_name}>{coin.name}</h1>
            <p className={styles.coin_ticker}>{coin.symbol}</p>
            <p className={styles.coin_current}>
                Current Price: £{coin.market_data.current_price.gbp.toLocaleString()}
            </p>

            <div className={styles.coin_action}>
              <button className={`${styles.slide} ${styles.slide_from_left} ${styles.coin_button}`}>To Buy</button>
              <button className={`${styles.slide} ${styles.slide_from_right} ${styles.coin_button}`}>To Sell</button>
            </div>
          



          </div>
        </div>
      </Layout>
    );
  };
  
  export default Coin;
  
  export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  
    const data = await res.json();
  
    return {
      props: {
        coin: data
      }
    };
  }