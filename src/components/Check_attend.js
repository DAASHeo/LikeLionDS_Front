//은빈 Check_task.js 제작

import React from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Check_attend.module.css';
import { Link } from 'react-router-dom';

const Check_task = () => {
  return (
    <div className={styles.chkbox}>
      <div className={styles.chkheader}>
        <Link to="/check_task" style={{ textDecoration: 'none' }}>
          <p className={styles.tasks}>과제 체크</p>
        </Link>
        <Link to="/check_attend" style={{ textDecoration: 'none' }}>
          <p className={styles.attends}>출석 체크</p>
        </Link>
      </div>
      <p className={styles.chktitle}> 이번주 세션 공지 </p>
      <hr className={styles.divider} />
      <img
        className={styles.speaker}
        alt="스피커 아이콘"
        src="img/speaker.png"
      />
      <p className={styles.choolchk}>
        {/* 수정필요 */}
        동덕여대와 함께하는 GIT 세션
      </p>
      <div className={styles.Zandi}></div>
      <p className={styles.DR}>DUKSUNG REPOSITORY</p>
    </div>
  );
};

export default Check_task;
