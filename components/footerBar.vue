<template>
  <section class="container">
    <div class="absolute__container">
      <div class="feadback__section">
        <div class="feadback__section-content">
          <h3 class="text">
            БУДЬТЕ В КУРСЕ <br />
            НАШИХ ПОСЛЕДНИХ ПРЕДЛОЖЕНИЙ
          </h3>
          <div class="feadback__section__action">
            <div class="email-container">
              <Icon name="ic:outline-email" class="email-icon" />

              <input
                type="text"
                placeholder="Введите ваш email адрес"
                class="email-input" />
            </div>
            <button class="success-btn">Подписаться на уведомления</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__content">
      <div class="footer__content__servives">
        <div class="footer__column">
          <div class="footer__brand">
            <h3 class="footer__logo">SHOP.JPK</h3>
            <p class="footer__description">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>

          <div class="footer__socials">
            <a href="#" class="footer__social"><i class="fa fa-twitter"></i></a>
            <a href="#" class="footer__social"
              ><i class="fa fa-facebook"></i
            ></a>
            <a href="#" class="footer__social"
              ><i class="fa fa-instagram"></i
            ></a>
            <a href="#" class="footer__social"><i class="fa fa-github"></i></a>
          </div>
        </div>
        <div class="footer__column">
          <h4 class="footer__heading">COMPANY</h4>
          <ul class="footer__links">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__heading">HELP</h4>
          <ul class="footer__links">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__heading">FAQ</h4>
          <ul class="footer__links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h4 class="footer__heading">RESOURCES</h4>
          <ul class="footer__links">
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to - Blog</a></li>
            <li><a href="#">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>Shop.jpk © 2024, All Rights Reserved</p>
        <div class="footer__payments">
          <!-- <img src="visa.png" alt="Visa" />
        <img src="mastercard.png" alt="Mastercard" />
        <img src="paypal.png" alt="PayPal" />
        <img src="applepay.png" alt="Apple Pay" />
        <img src="googlepay.png" alt="Google Pay" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin: 5rem 0 0 0;
  width: 100%;
  max-height: 100vh;

  .absolute__container {
    position: absolute;
    width: 100%;

    .feadback__section {
      margin: 0 5rem;
      background-color: black;
      height: 180px;
      border-radius: 1rem;
      padding: 2rem;
      width: calc(100% - 10rem);

      .feadback__section-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text {
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 40px;
          color: $light-text-color;
        }

        .feadback__section__action {
          display: flex;
          flex-direction: column;
          width: 350px;
          gap: 2rem;

          .email-container {
            position: relative;
            display: flex;
            align-items: center;
            background-color: #f3f3f3;
            border-radius: 20px;
            padding: 5px 15px;
            width: 100%;

            .email-icon {
              position: absolute;
              width: 24px;
              height: 24px;
              left: 1rem;
              color: gray;
            }

            .email-input {
              width: 100%;
              padding: 8px 8px 8px 35px;
              border: none;
              outline: none;
              background-color: transparent;
              font-size: 14px;
              color: black;

              &::placeholder {
                color: gray;
              }
            }
          }

          .success-btn {
            border-radius: 3rem;
            height: 45px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .footer__content {
    display: flex;
    flex-direction: column;
    background-color: $background-color;
    margin: 6rem 0 0 0;
    padding: 5rem 0 0 0;

    .footer__content__servives {
      display: flex;
      justify-content: space-between;
      padding: 2rem 5rem;

      .footer__column {
        display: flex;
        flex-direction: column;

        .footer__heading {
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .footer__links {
          list-style: none;
          padding: 0;

          li {
            margin: 0.5rem 0;
            a {
              text-decoration: none;
              color: black;
              &:hover {
                color: gray;
              }
            }
          }
        }
      }
    }
  }

  .footer__brand {
    width: 248px;
    display: flex;
    flex-direction: column;

    .footer__logo {
      margin-bottom: 1rem;
    }
  }

  .footer__socials {
    display: flex;
    gap: 1rem;
    .footer__social {
      font-size: 1.2rem;
      color: #333;
      &:hover {
        color: #ff6f61;
      }
    }
  }

  .footer__bottom {
    display: flex;
    text-align: center;
    padding: 1rem;
    margin: 0 5rem;
    border-top: 1px solid #ccc;

    .footer__payments img {
      width: 50px;
      margin: 0 0.5rem;
    }
  }
}
</style>
