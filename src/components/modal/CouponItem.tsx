import CheckBox from '../common/CheckBox';
import common from '@/common.module.css';
import styles from './couponItem.module.css';
import formatKoreanCurrency from '@/utils/formatKoreanCurrency';
import formatStartToEndTime from '@/utils/formatStartToEndTime';
import formatDateToKorea from '@/utils/formatDateToKorea';
import Divider from '../common/Divider';
import { CouponDataWithoutProperties } from '@/types';
import { useCouponManager } from '@/store/custom/useCouponManager';
import useToggleIndividualCoupon from '@/hooks/useToggleIndividualCoupon';

interface Props extends CouponDataWithoutProperties {
  isAvailable: boolean;
}

export default function CouponItem({
  id,
  description,
  minimumAmount,
  availableTime,
  expirationDate,
  isAvailable,
}: Props) {
  const formattedAvailableTime =
    availableTime && formatStartToEndTime(availableTime.start, availableTime.end);
  const { isChecked, handleCouponCheckState } = useToggleIndividualCoupon(id);
  const { isMaxLengthCheckedCouponLength } = useCouponManager();
  const isCouponDisabled = !isAvailable || (isMaxLengthCheckedCouponLength && !isChecked);

  return (
    <Divider>
      <li className={`${styles.coupon_item_container} ${isCouponDisabled ? styles.disable : ''}`}>
        <div className={styles.coupon_item_header}>
          <CheckBox
            id={`coupon-item${id}`}
            onChange={handleCouponCheckState}
            checked={isChecked}
            disabled={isCouponDisabled}
          />
          <p className={`${common.title_text} ${styles.text}`}> {description}</p>
        </div>
        <div className={styles.coupon_info}>
          <span className={styles.info_text}>만료일: {formatDateToKorea(expirationDate)}</span>
          {minimumAmount ? (
            <span className={styles.info_text}>
              최소 주문 금액: {formatKoreanCurrency(minimumAmount)}원
            </span>
          ) : null}
          {formattedAvailableTime ? (
            <span className={styles.info_text}>사용 가능 시간: {formattedAvailableTime}</span>
          ) : null}
        </div>
      </li>
    </Divider>
  );
}