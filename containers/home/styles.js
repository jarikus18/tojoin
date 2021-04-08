import css from "styled-jsx/css";

export default css`
  .main {
  }
  .first-screen {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(
      180deg,
      #e5efff 9.72%,
      #fafbfe 92.03%,
      #fafbfe 145.03%
    );
  }
  .text-block {
    position: relative;
    padding-top: 320px;
    padding-left: 220px;
    max-width: 60vw;
  }
  .subtitle {
    margin-top: 10px;
    margin-bottom: 55px;
  }
  .resources {
    position: absolute;
    right: 0;
    top: 0;
    /* transform: scale(0.9); */
  }
  .bg-line {
    position: absolute;
    top: 0;
    right: 50px;
    background-image: url("images/first-screen/bg-line.svg");
    background-repeat: no-repeat;
    background-size: contain;
    height: 820px;
    width: 920px;
  }
  .ticket {
    position: absolute;
    top: 100px;
    right: 390px;
    background-image: url("images/first-screen/ticket.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 127px;
    height: 76px;
  }
  .gift {
    position: absolute;
    top: 200px;
    right: 880px;
    background-image: url("images/first-screen/gift.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 145px;
    height: 85px;
  }

  .girl {
    position: absolute;
    top: 62px;
    right: 340px;
    background-image: url("images/first-screen/girl.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 636px;
    height: 809px;
  }

  .j {
    position: absolute;
    top: 102px;
    right: 0;
    background-image: url("images/first-screen/j.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 1166px;
    height: 1158px;
  }

  .dots-first-screen {
    position: absolute;
    top: 102px;
    right: 200px;
    background-image: url("images/first-screen/dots_first_screen.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 250px;
    height: 553px;
  }

  .save {
    position: absolute;
    top: 742px;
    right: 1090px;
    background-image: url("images/first-screen/safe.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 125px;
    height: 87px;
  }

  .sale {
    position: absolute;
    top: 238px;
    right: 168px;
    background-image: url("images/first-screen/sale.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 128px;
    height: 128px;
  }
  .positive-review {
    position: absolute;
    top: 588px;
    right: 268px;
    background-image: url("images/first-screen/positive-review.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 173px;
    height: 173px;
  }
  .chart-vector {
    position: absolute;
    top: 545px;
    right: 820px;
    background: #ffffff;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    padding: 21px 23px;
    white-space: nowrap;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 150%;
  }
  // section tasks
  .tasks {
    position: relative;
  }
`;
