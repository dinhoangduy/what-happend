import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'
import { FooterIcon1, FooterIcon2, FooterIcon3 } from '../assets/images/svg'

const aboutLinks = [
  {
    display: "회사 소개",
    path: '/coming-soon'
  },
  {
    display: "인재 채용",
    path: '/coming-soon'
  },
  {
    display: "상시 할인 혜택",
    path: '/coming-soon'
  },
]

const ordersLinks = [
  {
    display: "내 주문",
    path: '/coming-soon'
  },
  {
    display: "주문 배송",
    path: '/coming-soon'
  },
  {
    display: "취소 / 교환 / 반품 내역",
    path: '/coming-soon'
  },
  {
    display: "상품 리뷰 내역",
    path: '/coming-soon'
  },
  {
    display: "증빙 서류 발급",
    path: '/coming-soon'
  },
]

const accountLinks = [
  {
    display: "회원 정보 수정",
    path: '/coming-soon'
  },
  {
    display: "회원 등급",
    path: '/coming-soon'
  },
  {
    display: "마일리지 현황",
    path: '/coming-soon'
  },
  {
    display: "쿠폰",
    path: '/coming-soon'
  }
]

const helpLinks = [
  {
    display: "1 : 1 상담 내역",
    path: '/coming-soon'
  },
  {
    display: "상품 Q & A 내역",
    path: '/coming-soon'
  },
  {
    display: "공지 사항",
    path: '/coming-soon'
  },
  {
    display: "자주하는 질문",
    path: '/coming-soon'
  },
  {
    display: "고객의 소리",
    path: '/coming-soon'
  },
]


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">

      <div className="footer__top">
        <div className="footer__top__left">
          <p className="footer__top__left__title">
            what happend
          </p>
          <div className="footer__top__left__content">
            <p className="footer__top__left__content__item">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </p>
            <p className="footer__top__left__content__item">
              [공지] 29CM 강남 스토어 영업 종료
            </p>
            <p className="footer__top__left__content__item">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </p>
            <p className="footer__top__left__content__item">
              [공지] iOS 10 이하 버전 지원 중단 안내
            </p>
            <p className="footer__top__left__content__item">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </p>
          </div>
        </div>
        <div className="footer__top__right">
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={100}
          >


          <div className="footer__top__right__item">
            <p className="footer__top__right__title">
              about us
            </p>
            <div className="footer__top__right__content">

              {
                aboutLinks.map((item, index) => (
                  <p className="footer__top__right__content__item" key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }

            </div>
          </div>
          <div className="footer__top__right__item">
            <p className="footer__top__right__title">
              my order
            </p>
            <div className="footer__top__right__content">

              {
                ordersLinks.map((item, index) => (
                  <p className="footer__top__right__content__item" key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }

            </div>
          </div>
          <div className="footer__top__right__item">
            <p className="footer__top__right__title">
              my account
            </p>
            <div className="footer__top__right__content">

              {
                accountLinks.map((item, index) => (
                  <p className="footer__top__right__content__item" key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }

            </div>
          </div>
          <div className="footer__top__right__item">
            <p className="footer__top__right__title">
              help
            </p>
            <div className="footer__top__right__content">

              {
                helpLinks.map((item, index) => (
                  <p className="footer__top__right__content__item" key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }

            </div>
          </div>
          </Grid>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__bottom__copyright">
          © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
        </p>
        <div className="footer__bottom__social">
          <div className="footer__bottom__social__item">
            <FooterIcon1 />
          </div>
          <div className="footer__bottom__social__item">
            <FooterIcon2 />
          </div>
          <div className="footer__bottom__social__item">
            <FooterIcon3 />
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Footer