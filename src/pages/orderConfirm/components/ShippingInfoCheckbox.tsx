import CheckBox from '@/components/common/CheckBox';
import styles from './shippingInfoCheckbox.module.css';
import useFarShippingLocation from '@/hooks/useFarShippingLocation';

export default function ShippingInfoCheckbox() {
  const { isFarShipping, handleFarShippingLocation } = useFarShippingLocation();

  if (!isFarShipping.isAvailable) {
    return null;
  }

  return (
    <div className={styles.container}>
      <p className={styles.shipping_title}>배송 정보</p>
      <div className={styles.checkbox_container}>
        <CheckBox
          id="isFarShippingLocation"
          onChange={handleFarShippingLocation}
          checked={isFarShipping.isChecked}
        />
        <span className={styles.text}>제주도 및 도서 산간 지역</span>
      </div>
    </div>
  );
}