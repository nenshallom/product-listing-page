// nextjs optimized Images component
import Image from "next/image";
import styles from "./StoreHeader.module.css";

export default function StoreHeader() {
  return (
    <div className={styles.storeHeader}>

      <div className={styles.bannerContainer}>
        <Image 
            src="/products/header-image.png" 
            alt="Store Banner" 
            width={1500} 
            height={300} 
            className={styles.bannerImage} />
      </div>

      <div className={styles.storeInfo}>    
        <div className={styles.storeInfoContainer}>
            <div className={styles.storeLogo}>
            <Image 
                src="/products/store-Big-Logo.png" 
                alt="Store Logo" 
                width={357} 
                height={357} 
            />
            </div>

            <div className={styles.storeDetails}>
            <h1>Coffee Store</h1>
            <p>Odessa, ON</p>
            <p>
                <strong>Location <br />(Pick Up):</strong> 3 McAlpine St, Toronto, ON, CA, M5R 3T5
                <span className={styles.getDirection}> <a href="#">Get Direction</a></span>
            </p>
            </div>
        </div>

        <div className={styles.storeOwner}>
          <div className={styles.storeOwnerImage}>
            <Image 
                  src="/products/store-owner.png" 
                  alt="Store Owner" 
                  width={155}
                  height={155} 
              />
          </div>
          <p>Owned by Lola and Coco</p>
        </div>
      </div>

    </div>
  );
}
