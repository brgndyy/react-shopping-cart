import styles from './couponModal.module.css';
import CloseButton from './CloseButton';
import Heading from '@/components/common/Heading';
import common from '@/common.module.css';

type Props = {
  handleModalClose: () => void;
};

export default function Content({ handleModalClose }: Props) {
  return (
    <div className={styles.content_container}>
      <div className={styles.wrapper}>
        <Heading className={common.mainText} level={2}>
          쿠폰을 선택해 주세요
        </Heading>
        <CloseButton onClick={handleModalClose} role="button" tabIndex={0} />
      </div>
    </div>
  );
}
